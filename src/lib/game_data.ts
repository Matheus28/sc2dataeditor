import assert from "assert";
import { catalogContents, unparsedGameData } from "./game_data_unparsed";
import { mapObject } from "./utils";

export type DataFieldDefaults = typeof DataFieldDefaults;
export type DataFieldSimpleTypes = keyof DataFieldDefaults;

export type SimpleFieldValueByType = {
	[Type in DataFieldSimpleTypes]: {
		// Values dependent on type
		type: Type;
		restrictions?: DataFieldDefaults[Type] extends number ? (typeof numberRestrictions)|undefined : undefined;
	}
};

export type SimpleFieldValue = SimpleFieldValueByType[DataFieldSimpleTypes];

type NonEmptyArray<T> = [T, ...T[]];

export type EnumType = {
	type:"CEnum";
	// Default value is implied to be the first one
	values:NonEmptyArray<string>;
};

export type FieldValue = SimpleFieldValue  | EnumType;

export type FieldType = {
	value?:FieldValue;
} & (
	{}
	|
	{
		struct:FieldTypeStruct;
		structTypename:string;
	}
	|
	{
		// This differs from struct because they're stored a lot like arrays
		// like <Name index="..." value="..."/>
		namedArray:FieldTypeNamedArray;
	}
	|
	{
		array:FieldType;
	}
);

export type FieldTypeWithSimpleValue<T extends DataFieldSimpleTypes> = {value:SimpleFieldValueByType[T]};

export type FieldTypeStruct = Record<string, FieldType>;
export type FieldTypeNamedArray = {
	keys:EnumType;
	value:FieldType;
};

function simpleType<T extends SimpleFieldValue["type"]>(type: T): FieldType {
	return { value: {type} as SimpleFieldValue }; // `as` needed to help compiler...
}

function array(subtype:FieldType){
	return { array: subtype };
}

function struct(name:string, fields:Record<string, FieldType>){
	return { struct: fields, structTypename: name };
}

function namedArray(e:{value:EnumType}, value:FieldType): FieldType {
	return {
		namedArray: { keys: e.value, value },
	};
}

// First value is implied to be the default
function simpleEnum(values:NonEmptyArray<string>): {value:EnumType} {
	return { value: { type: "CEnum", values } }
}

// Use this to combine multiple types
// Usually used for amounts that are affected by accumulators
// (they are a combination of simpleType + array[simpleType])
function combine(...args:FieldType[]):FieldType {
	assert((():boolean => {
		let keysSeen = new Set<string>();
		for(let arg of args){
			for(let i in arg){
				if(keysSeen.has(i)) return false;
				keysSeen.add(i);
			}
		}
		
		return true;
	})(), "Bad combine, there's some intersection in keys");
	
	return Object.assign({}, ...args);
}

// Anything that is shared for absolutely everything in the editor
function editorFields(): Record<string, FieldType> {
	return {
		"EditorCategories": simpleType("CString"),

		"Name": simpleType("CStringLink"),

		// This is stored as a xml comment just before the entry in the xml.
		// But also means we'll need special handling to do it properly.
		"EditorComment": simpleType("CEditorComment"),
		
		// These are edited like normal fields but actually get loaded/saved to ObjectStrings.txt
		"EditorDescription": simpleType("CObjectStringLink"),
		"EditorPrefix": simpleType("CObjectStringLink"),
		"EditorSuffix": simpleType("CObjectStringLink"),
	};
}

// i18n key (for example, name = CEffectCreep):
// EDSTR_ENTRYTYPE_${name}
export interface CatalogSubtype {
	parent: string | null;
	abstract?: true;
	
	// i18n key: complicated
	// for simple types: EDSTR_FIELDNAME_CEffectCreep_WhichLocation
	// 
	// for stuff inside structs, we have to know the structure name:
	//     EDSTR_FIELDNAME_SButtonCardLayout_Row (for CButton > DefaultButtonLayout > Row)
	// 
	// There doesn't seem to be a way to find that out.
	// The furthest we can get to is the "base" of the structure:
	//     EDSTR_FIELDNAME_CButton_DefaultButtonLayout
	//
	fields: Record<string, FieldType>;
}

const unspecifiedSubtype = (): CatalogSubtype => ({
	parent: null,
	fields: {},
	abstract: true,
});

function subtype(v: CatalogSubtype): CatalogSubtype {
	if(v.parent == null){
		v.fields = {...editorFields(), ...v.fields};
	}
	
	return v;
}

// This avoids some recursive definitions
export const CatalogNameArray = [
	"Abil",
	"Accumulator",
	"Behavior",
	"DataCollection",
	"DataCollectionPattern",
	"Effect",
	"Footprint",
	"Item",
	"Loot",
	"Mover",
	"PlayerResponse",
	"Requirement",
	"Turret",
	"Unit",
	"Upgrade",
	"Validator",
	"Weapon",
	"ArmyCategory",
	"ArmyUnit",
	"ArmyUpgrade",
	"BankCondition",
	"Campaign",
	"Character",
	"Commander",
	"Conversation",
	"ConversationState",
	"Location",
	"Map",
	"Objective",
	"Preload",
	"Actor",
	"AttachMethod",
	"Beam",
	"Button",
	"DSP",
	"LensFlareSet",
	"Light",
	"Model",
	"Reverb",
	"Shape",
	"Sound",
	"SoundExclusivity",
	"SoundMixSnapshot",
	"Soundtrack",
	"Texture",
	"Cliff",
	"CliffMesh",
	"FoW",
	"PhysicsMaterial",
	"Terrain",
	"TerrainObject",
	"TerrainTex",
	"Tile",
	"Water",
	"Artifact",
	"ArtifactSlot",
	"Config",
	"Hero",
	"HeroAbil",
	"HeroStat",
	"Mount",
	"Skin",
	"Talent",
	"TalentProfile",
	"VoiceOver",
	"Alert",
	"RaceBannerPack",
	"Camera",
	"ConsoleSkin",
	"Cursor",
	"GameUI",
	"Bundle",
	"Ping",
	"ColorStyle",
	"Achievement",
	"AchievementTerm",
	"Boost",
	"DecalPack",
	"Emoticon",
	"EmoticonPack",
	"Error",
	"Game",
	"Herd",
	"HerdNode",
	"ItemClass",
	"ItemContainer",
	"Kinetic",
	"PortraitPack",
	"PremiumMap",
	"Race",
	"RequirementNode",
	"Reward",
	"ScoreResult",
	"ScoreValue",
	"SkinPack",
	"Spray",
	"SprayPack",
	"TacCooldown",
	"Tactical",
	"TargetFind",
	"TargetSort",
	"TextureSheet",
	"Trophy",
	"User",
	"VoicePack",
	"WarChest",
	"WarChestSeason",
	"StimPack"
] as const;

export type CatalogName = (typeof CatalogNameArray)[number];

export type CatalogLinks = {
	[Key in CatalogName as `C${Key}Link`]:Key;
}

// Some types have an implicit default value... dumb but whatever
export const DataFieldDefaults = {
	// Special types
	"CEditorComment": "",
	"CObjectStringLink": "",
	
	"bool": false,
	
	// ints
	"TAttachPropIndex": 0,
	"TDifficultyLevel": 0,
	"TMarkerCount": 1,
	"TSoundBalance": 0,
	"TSoundWeight": 0,
	"flag8": 0,
	"int16": 0,
	"int32": 0,
	"int8": 0,
	
	// uints
	"NNet::Game::TAIBuild": 0,
	"NNet::Game::TDifficulty": 0,
	"NNet::Game::THandicap": 0,
	"TAbilCmdIndex": 0,
	"TAttackTargetPriority": 0,
	"TCargoCapacity": 0,
	"TCliffLevel": 0,
	"TPowerLevel": 0,
	"uint16": 0,
	"uint32": 0,
	"uint64": 0,
	"uint8": 0,
	
	// Floats
	"CFacing": 0.0,
	"CFangle": 0.0,
	"CFangleArc": 0.0,
	"CFixed": 0.0,
	"CGameAcceleration": 0.0,
	"CGameRate": 0.0,
	"CGameSpeed": 0.0,
	"CGameTime": 0.0,
	"CMissileAcceleration": 0.0,
	"CMissileSpeed": 0.0,
	"TUnitRadius": 0.0,
	"THostedPropPriority": 0.0,
	"real32": 0.0,
	
	
	// Strings
	"CAbilSetId": "",
	"CActorCreateKey": "",
	"CActorKey": "",
	"CActorLabelKey": "",
	"CAnimNameKey": "",
	"CAnimsPath": "",
	"CAssetPath": "",
	"CCurveComponentNameKey": "",
	"CCurveNameKey": "",
	"CDataSoupKey": "",
	"CFacialPath": "",
	"CFontStylePath": "",
	"CHotkeyLink": "",
	"CIdentifier": "",
	"CImagePath": "",
	"CLayoutPath": "",
	"CModelPath": "",
	"CMoviePath": "",
	"CRefKey": "",
	"CSoundPath": "",
	"CString": "",
	"CString32": "",
	"CString4": "",
	"CString40": "",
	"CString50": "",
	"CString8": "",
	"CString80": "",
	"CStringLink": "",
	"CStyleName": "",
	"CSubNameKey": "",
	"CSyncModelDataPath": "",
	"CTexturePath": "",
	"TCatalogFieldPath": "",
	"TCatalogFieldValue": "",
	"TChargeLink": "",
	"TConversationItemId": "",
	"TConversationStateIndexId": "",
	"TConversationStateInfoId": "",
	"TConversationStateOpId": "",
	"TConversationStateVariation": "",
	"TCooldownLink": "Abil/##id##",
	"TEditorCategories": "",
	"TGalaxyFunction": "",
	"TMarkerLink": "Effect/##id##",
	"TPowerLink": "",
	"TTechAlias": "",
	"TTriggerLibId": "",
	"TUpgradeEffectValue": "",
	"TUserFieldId": "",
	"TUserInstanceId": "",
	
	// FourCC, up to 4 char string
	"CFourCC": "",
	"CCardId": "",
	"TLocaleId": "",
	
	// Complex
	"C2Vector": "", //TODO: verify
	"C2fVector": "", //TODO: verify
	"C2iVector": "", //TODO: verify
	"C3Vector": "", //TODO: verify
	"C3fVector": "", //TODO: verify
	"C4Vector": "", //TODO: verify
	"CAbilCommand": "", //TODO: verify
	"CActorAgeRealPair": "", //TODO: verify
	"CActorAngle": "", //TODO: verify
	"CActorClassFilters": "", //TODO: verify
	"CActorDeathMembers": "", //TODO: verify
	"CActorMsgPayloadPtr": "", //TODO: verify
	"CActorMsgSpec": "", //TODO: verify
	"CActorSiteOps": "", //TODO: verify
	"CActorTableKeys1x3": "", //TODO: verify
	"CActorTableKeys4x0": "", //TODO: verify
	"CActorTerms": "", //TODO: verify
	"CActorTimePitchPair": "", //TODO: verify
	"CActorTimeRealPair": "", //TODO: verify
	"CActorTimeVolumePair": "", //TODO: verify
	"CAnimProps": "", //TODO: verify
	"CAssetLink": "", //TODO: verify
	"CAttachMethods": "", //TODO: verify
	"CBearings": "", //TODO: verify
	"CCatalogReference": "", //TODO: verify
	"CCmdResult": "", //TODO: verify
	"CColor": "0,0,0,0", //TODO: verify
	"CColorHDR": "", //TODO: verify
	"CColorRGB": "", //TODO: verify
	"CEffectLinks": "", //TODO: verify
	"CEffectOffset": "", //TODO: verify
	"CFangleAccelMissile": "", //TODO: verify
	"CFangleRate": "", //TODO: verify
	"CFangleRateMissile": "", //TODO: verify
	"CGamePoint": "", //TODO: verify
	"CGamePoint3D": "", //TODO: verify
	"CPhaseOutro": "", //TODO: verify
	"CPhysicsMaterialLinks": "", //TODO: verify
	"CPhysicsMaterials": "", //TODO: verify
	"CPitch": "", //TODO: verify
	"CPitchRange": "", //TODO: verify
	"CQuad": "", //TODO: verify
	"CRange": "", //TODO: verify
	"CRect": "", //TODO: verify
	"CRotation": "", //TODO: verify
	"CScaleVector": "", //TODO: verify
	"CTargetFilters": "", //TODO: verify
	"CTextureExpression": "", //TODO: verify
	"CTextureProps": "", //TODO: verify
	"CTextureSlot": "", //TODO: verify
	"CThrowBand": "", //TODO: verify
	"CTileGridRow": "", //TODO: verify
	"CTimeOfDay": "", //TODO: verify
	"CUserReference": "", // This is a reference to a CUser instance, format `id;instance`
	"CVariatorActorAngle": "", //TODO: verify
	"CVariatorActorFangle": "", //TODO: verify
	"CVariatorActorReal32": "", //TODO: verify
	"CVariatorGameFixed": "", //TODO: verify
	"CVolume": "", //TODO: verify
	"CVolumeRange": "", //TODO: verify
	"CYawPitchRoll": "", //TODO: verify
	"CfRange": "", //TODO: verify
	"CiQuad": "", //TODO: verify
	"CiRange": "", //TODO: verify
	"TCargoSize": "", //TODO: verify
	"TCmdResult": "", //TODO: verify
	"TFootprintBorders": "", //TODO: verify
	"TFootprintMask": "", //TODO: verify
	"TFootprintOffsets": "", //TODO: verify
	
	...(():Record<keyof CatalogLinks, string> => {
		let v = {} as Record<keyof CatalogLinks, string>;
		for(let i of CatalogNameArray) v[`C${i}Link`] = "";
		return v;
	})()
};

export const SimpleRealTypesArray = ["CFacing", "CFangle", "CFangleArc", "CFixed", "CGameAcceleration", "CGameRate", "CGameSpeed", "CGameTime", "CMissileAcceleration", "CMissileSpeed", "TUnitRadius", "THostedPropPriority", "real32"] as const;
export type SimpleRealTypes = (typeof SimpleRealTypesArray)[number];

export type SimpleIntegerTypes = {
	[K in keyof DataFieldDefaults]:K extends SimpleRealTypes ? never : (DataFieldDefaults[K] extends number ? K : never);
}[keyof DataFieldDefaults];

export type SimpleStringTypes = {
	[K in keyof DataFieldDefaults]:DataFieldDefaults[K] extends string ? K : never;
}[keyof DataFieldDefaults];

export function isSimpleType(v:string):v is DataFieldSimpleTypes {
	return v in DataFieldDefaults
}

const numberRestrictions:{
	min?:number;
	max?:number;
} = {};

/*
	Note for later, abstract types:

	CAbil
	CAbilEffect
	CAbilQueueable
	CAbilRedirect
	CAccumulator
	CAchievementTerm
	CActor
	CActorBase
	CActorBearings
	CActorForce
	CActorLightModel
	CActorRegion
	CAttachMethod
	CBankConditionCompare
	CBehavior
	CEffect
	CItemEffect
	CKinetic
	CLoot
	CLootSpawn
	CMover
	CPlayerResponse
	CPlayerResponseUnit
	CPreload
	CRequirementNode
	CReward
	CScoreResult
	CScoreValue
	CShape
	CTactical
	CTargetFind
	CTargetSort
	CTerrainObject
	CValidator
	CValidatorEffect
	CValidatorLocation
	CValidatorPlayer
	CValidatorUnit
	CValidatorUnitInventory
	CWeapon
*/

export const structNames = new Set<string>();
export const CatalogTypesInstance:Record<CatalogName, Record<string, CatalogSubtype>> = (() => {
	let parsed = {} as Record<CatalogName, Record<string, CatalogSubtype>>;
	
	let parsedRawEnums:Record<string, ReturnType<typeof simpleEnum>> = {};
	let parsedStructs:Record<string, FieldType> = {};
	
	function getRawEnum(name:string):ReturnType<typeof simpleEnum> {
		if(name in parsedRawEnums) return parsedRawEnums[name];
		
		assert(name in unparsedGameData.enums);
		
		return parsedRawEnums[name] = simpleEnum(unparsedGameData.enums[name].values);
	}
	
	function getEnumFixedDefault(name:string):ReturnType<typeof simpleEnum> {
		let values = getRawEnum(name).value.values.concat() as NonEmptyArray<string>;
		
		// Workaround so the second element is the default one
		if(values.length >= 2){
			let tmp = values[0];
			values[0] = values[1];
			values[1] = tmp;
		}
		
		return simpleEnum(values);
	}
	
	function getEnumNoUnknown(name:string):ReturnType<typeof simpleEnum> {
		let values = getRawEnum(name).value.values.slice(1) as NonEmptyArray<string>;
		
		return simpleEnum(values);
	}
	
	let simpleTypes:Record<string, ReturnType<typeof simpleType>> = {};
	function getType(name:string):FieldType {
		if(isSimpleType(name)){
			if(name in simpleTypes) return simpleTypes[name];
			return simpleTypes[name] = simpleType(name);
		}
		
		if(name in unparsedGameData.enums) return getEnumFixedDefault(name);
		
		return getStructType(name);
	}
	
	function getStructType(name:string):FieldType {
		if(name in parsedStructs) return parsedStructs[name];
		
		structNames.add(name);
		assert(name[0] == 'S');
		assert(name in unparsedGameData.classes, `Type ${name} is referred to but not defined`);
		
		let unparsedClass = unparsedGameData.classes[name];
		return parsedStructs[name] = struct(name, parseFields(unparsedClass.fields));
	}
	
	function parseFields(fields:(typeof unparsedGameData)["classes"][string]["fields"]){
		return mapObject(fields, (_fieldName, unparsedField):FieldType => {
			if(typeof unparsedField == "string") return getType(unparsedField);
			
			if(unparsedField.indexEnum){
				assert(unparsedField.array);
				return namedArray(getEnumNoUnknown(unparsedField.indexEnum), getType(unparsedField.type));
			}else if(unparsedField.array){
				return array(getType(unparsedField.type));
			}else{
				return getType(unparsedField.type);
			}
		});
	}
	
	function addAccumulator(name:string, type:string){
		assert(!(name in parsedStructs));
		parsedStructs[name] = combine(
			getType(type),
			struct(name, {
				"AccumulatorArray": array(simpleType("CAccumulatorLink")),
			}),
		);
	}
	
	addAccumulator("SAccumulatedFixed", "CFixed");
	addAccumulator("SAccumulatedInt32", "int32");
	addAccumulator("SAccumulatedUint32", "uint32");
	addAccumulator("SAccumulatedGameTime", "CGameTime");
	addAccumulator("SAccumulatedGameSpeed", "CGameSpeed");
	addAccumulator("SAccumulatedGameRate", "CGameRate");
	
	for(let catalogName of CatalogNameArray){
		let catalog:Record<string, CatalogSubtype> = {};
		
		let subs = catalogContents[catalogName];
		let hasRoot = false;
		for(let sub of subs){
			let unparsedClass = unparsedGameData.classes[sub];
			if(!unparsedClass){
				console.warn(`No game data for ${sub} in ${catalogName} catalog`);
				catalog[sub] = unspecifiedSubtype();
				continue;
			}
			
			if(unparsedClass.parent == null){
				if(hasRoot){
					console.warn(`More than two roots in ${catalogName} catalog`);
				}else{
					hasRoot = true;
				}
			}
			
			let v:CatalogSubtype = {
				parent: unparsedClass.parent,
				fields: parseFields(unparsedClass.fields),
			};
			
			if(unparsedClass.abstract) v.abstract = true;
			
			catalog[sub] = subtype(v);
		}
		
		parsed[catalogName] = catalog;
	}
	
	return parsed;
})();

//export const structNames = new Set(Object.keys(structs));


export type CatalogTypes = typeof CatalogTypesInstance;

{
	// Make sure these two match
	let _a: CatalogName = "" as keyof CatalogTypes;
	let _b: keyof CatalogTypes = "" as CatalogName;
}
