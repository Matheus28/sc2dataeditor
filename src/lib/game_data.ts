import assert from "assert";

export type DataFieldDefaults = typeof DataFieldDefaults;
export type DataFieldSimpleTypes = keyof DataFieldDefaults;

export type SimpleFieldValueByType = {
	[Type in DataFieldSimpleTypes]: {
		// Values dependent on type
		type: Type;
		restrictions?: Type extends keyof DataFieldRestrictions ? DataFieldRestrictions[Type]|undefined : undefined;
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

function simpleType<T extends SimpleFieldValue["type"]>(type: T, restrictions?:T extends keyof DataFieldRestrictions ? DataFieldRestrictions[T]:undefined): FieldType {
	return { value: {type, restrictions} as SimpleFieldValue }; // `as` needed to help compiler...
}

function array(subtype:FieldType){
	return { array: subtype };
}

function struct(fields:Record<string, FieldType>){
	return { struct: fields, structTypename: "FIXME" };
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
	abstract?: boolean;
	
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

// It seems we can find most types by adding a token and looking through the available types
// Mapping to their default value
export const DataFieldDefaults = {
	"CString": "",
	"CStringLink": "",
	"CEditorComment": "",
	"CObjectStringLink": "",
	"CHotkeyLink": "",
	"TMarkerLink": "Effect/##id##",
	"TMarkerCount": 1,
	"TCooldownLink": "Abil/##id##",
	"bool": false,
	"int8": 0,
	"int16": 0,
	"int32": 0,
	"int64": 0,
	"uint8": 0,
	"uint16": 0,
	"uint32": 0,
	"uint64": 0,
	"CFixed": 0.0,
	"real32": 0.0,
	"CImagePath": "",
	...(():Record<keyof CatalogLinks, string> => {
		let v = {} as Record<keyof CatalogLinks, string>;
		for(let i of CatalogNameArray) v[`C${i}Link`] = "";
		return v;
	})()
};

export function isSimpleType(v:string):v is DataFieldSimpleTypes {
	return v in DataFieldDefaults
}

const numberRestrictions:{
	min?:number;
	max?:number;
} = {};

const DataFieldRestrictions = {
	"int8": numberRestrictions,
	"int16": numberRestrictions,
	"int32": numberRestrictions,
	"int64": numberRestrictions,
	"uint8": numberRestrictions,
	"uint16": numberRestrictions,
	"uint32": numberRestrictions,
	"uint64": numberRestrictions,
	"CFixed": numberRestrictions,
	"real32": numberRestrictions,
};

type DataFieldRestrictions = typeof DataFieldRestrictions;

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

const enums = {
	e_effectHistory: simpleEnum(["Unknown", "Damage", "Healing", "Modifier"]),
	
	e_effectLocation: simpleEnum([
		"TargetPoint",
		"CasterOuterPoint",
		"CasterOuterUnit",
		"CasterOuterUnitOrPoint",
		"CasterPoint",
		"CasterUnit",
		"CasterUnitOrPoint",
		"OriginPoint",
		"OriginUnit",
		"OriginUnitOrPoint",
		"OuterPoint",
		"OuterUnit",
		"OuterUnitOrPoint",
		"SourcePoint",
		"SourceUnit",
		"SourceUnitOrPoint",
		"TargetOuterPoint",
		"TargetOuterUnit",
		"TargetOuterUnitOrPoint",
		"TargetUnit",
		"TargetUnitOrPoint",
	]),
	
	e_effectPlayer: simpleEnum(["Unknown", "Caster", "CasterOuter", "Creator", "Hostile", "Neutral", "Outer", "Origin", "Source", "Target", "TargetOuter"]),
	e_effectUnit: simpleEnum(["Unknown", "Caster", "CasterOuter", "Outer", "Source", "Target", "TargetOuter", "Origin"]),
	e_markerMatch: simpleEnum(["Id", "Link", "CasterPlayer", "CasterUnit"]),
	e_notifyAreaFlag: simpleEnum(["HelpFriend", "HurtFriend", "HurtEnemy", "OnlyWorkers", "MinorDanger", "MajorDanger"]),
	e_effectCreepFlag: simpleEnum(["RemoveCreep", "Permanent", "Immediate", "Ideal"]),
};

const structs = {
	SEffectWhichLocation: struct({
		"Effect": simpleType("CEffectLink"),
		"History": enums.e_effectHistory,
		"Value": enums.e_effectLocation,
	}),
	
	SEffectWhichUnit: struct({
		"Effect": simpleType("CEffectLink"),
		"History": enums.e_effectHistory,
		"Value": enums.e_effectUnit,
	}),
	
	SMarker: struct({
		"Count": simpleType("TMarkerCount"),
		"Duration": simpleType("CFixed"),
		"Link": simpleType("TMarkerLink"),
		"MatchFlags": namedArray(enums.e_markerMatch, simpleType("bool")),
		"MismatchFlags": namedArray(enums.e_markerMatch, simpleType("bool")),
	}),
	
	SAccumulatedFixed: combine(
		simpleType("CFixed"),
		struct({
			"AccumulatorArray": array(simpleType("CAccumulatorLink")),
		}),
	),
	
	SAccumulatedInt32: combine(
		simpleType("int32"),
		struct({
			"AccumulatorArray": array(simpleType("CAccumulatorLink")),
		}),
	),
	
	SAccumulatedUInt32: combine(
		simpleType("uint32"),
		struct({
			"AccumulatorArray": array(simpleType("CAccumulatorLink")),
		}),
	),
	
	SEffectWhichPlayer: struct({
		"Effect": simpleType("CEffectLink"),
		"Value": enums.e_effectPlayer,
	}),
};

// Fill in their name
for(let i in structs){
	let vv = structs[i as keyof typeof structs];
	assert('struct' in vv)
	vv.structTypename = i;
}

export const structNames = new Set(Object.keys(structs));

export const CatalogTypesInstance:Record<CatalogName, Record<string, CatalogSubtype>> = {
	"Abil": {
		"CAbil": subtype({
			parent: null,
			abstract: true,
			fields: {
				//FIXME
			},
		}),
		"CAbilArmMagazine": unspecifiedSubtype(),
		"CAbilAttack": unspecifiedSubtype(),
		"CAbilAttackModifier": unspecifiedSubtype(),
		"CAbilAugment": unspecifiedSubtype(),
		"CAbilBattery": unspecifiedSubtype(),
		"CAbilBeacon": unspecifiedSubtype(),
		"CAbilBehavior": unspecifiedSubtype(),
		"CAbilBuild": unspecifiedSubtype(),
		"CAbilBuildable": unspecifiedSubtype(),
		"CAbilEffect": subtype({
			parent: "CAbil",
			abstract: true,
			fields: {
				//FIXME
				"Marker": structs.SMarker,
			},
		}),
		"CAbilEffectInstant": subtype({
			parent: "CAbilEffect",
			fields: {
				//FIXME
			},
		}),
		"CAbilEffectTarget": subtype({
			parent: "CAbilEffect",
			fields: {
				//FIXME
			},
		}),
		"CAbilHarvest": unspecifiedSubtype(),
		"CAbilInteract": unspecifiedSubtype(),
		"CAbilInventory": unspecifiedSubtype(),
		"CAbilLearn": unspecifiedSubtype(),
		"CAbilMerge": unspecifiedSubtype(),
		"CAbilMergeable": unspecifiedSubtype(),
		"CAbilMorph": unspecifiedSubtype(),
		"CAbilMorphPlacement": unspecifiedSubtype(),
		"CAbilMove": unspecifiedSubtype(),
		"CAbilPawn": unspecifiedSubtype(),
		"CAbilProgress": unspecifiedSubtype(),
		"CAbilQueue": subtype({
			parent: "CAbil",
			fields: {
				//FIXME
			},
		}),
		"CAbilQueueable": unspecifiedSubtype(),
		"CAbilRally": unspecifiedSubtype(),
		"CAbilRedirect": unspecifiedSubtype(),
		"CAbilRedirectInstant": unspecifiedSubtype(),
		"CAbilRedirectTarget": unspecifiedSubtype(),
		"CAbilResearch": unspecifiedSubtype(),
		"CAbilRevive": unspecifiedSubtype(),
		"CAbilSpecialize": unspecifiedSubtype(),
		"CAbilStop": unspecifiedSubtype(),
		"CAbilTrain": unspecifiedSubtype(),
		"CAbilTransport": unspecifiedSubtype(),
		"CAbilWarpTrain": unspecifiedSubtype(),
		"CAbilWarpable": unspecifiedSubtype(),
	},

	"Accumulator": {
		"CAccumulator": unspecifiedSubtype(),
		"CAccumulatorAbilLevel": unspecifiedSubtype(),
		"CAccumulatorArithmetic": unspecifiedSubtype(),
		"CAccumulatorAttributePoints": unspecifiedSubtype(),
		"CAccumulatorBehavior": unspecifiedSubtype(),
		"CAccumulatorCargo": unspecifiedSubtype(),
		"CAccumulatorConstant": unspecifiedSubtype(),
		"CAccumulatorDistance": unspecifiedSubtype(),
		"CAccumulatorEffectAmount": unspecifiedSubtype(),
		"CAccumulatorSwitch": unspecifiedSubtype(),
		"CAccumulatorTrackedUnitCount": unspecifiedSubtype(),
		"CAccumulatorUnitCustomValue": unspecifiedSubtype(),
		"CAccumulatorUserData": unspecifiedSubtype(),
		"CAccumulatorVeterancyLevel": unspecifiedSubtype(),
		"CAccumulatorVitals": unspecifiedSubtype(),
	},

	"Behavior": {
		"CBehavior": unspecifiedSubtype(),
		"CBehaviorAttackModifier": unspecifiedSubtype(),
		"CBehaviorAttribute": unspecifiedSubtype(),
		"CBehaviorBuff": unspecifiedSubtype(),
		"CBehaviorClickResponse": unspecifiedSubtype(),
		"CBehaviorConjoined": unspecifiedSubtype(),
		"CBehaviorCreepSource": unspecifiedSubtype(),
		"CBehaviorJump": unspecifiedSubtype(),
		"CBehaviorPowerSource": unspecifiedSubtype(),
		"CBehaviorPowerUser": unspecifiedSubtype(),
		"CBehaviorResource": unspecifiedSubtype(),
		"CBehaviorReveal": unspecifiedSubtype(),
		"CBehaviorSpawn": unspecifiedSubtype(),
		"CBehaviorUnitTracker": unspecifiedSubtype(),
		"CBehaviorVeterancy": unspecifiedSubtype(),
		"CBehaviorWander": unspecifiedSubtype(),
	},

	"DataCollection": {
		"CDataCollection": unspecifiedSubtype(),
		"CDataCollectionAbil": unspecifiedSubtype(),
		"CDataCollectionUnit": unspecifiedSubtype(),
		"CDataCollectionUpgrade": unspecifiedSubtype(),
	},

	"DataCollectionPattern": {
		"CDataCollectionPattern": unspecifiedSubtype(),
	},

	"Effect": {
		"CEffect": subtype({
			parent: null,
			abstract: true,
			fields: {
				"AINotifyFlags": namedArray(enums.e_notifyAreaFlag, simpleType("bool")),
				"Alert": simpleType("CAlertLink"),
				"CanBeBlocked": simpleType("bool"),
				"CasterHistory": enums.e_effectHistory,
				"Chance": simpleType("CFixed", {min:0, max:1}),
				"DamageModifierSource": structs.SEffectWhichUnit,
				"Marker": structs.SMarker,
				"OwningPlayer": structs.SEffectWhichPlayer,
				"PreloadValidatorArray": array(simpleType("CValidatorLink")),
				"TechAliasArray": array(simpleType("CString")),
				"ValidatorArray": array(simpleType("CValidatorLink")),
			},
		}),
		
		"CEffectAddTrackedUnit": unspecifiedSubtype(),
		"CEffectAddTrackedUnits": unspecifiedSubtype(),
		"CEffectApplyBehavior": unspecifiedSubtype(),
		"CEffectApplyForce": unspecifiedSubtype(),
		"CEffectApplyKinetic": unspecifiedSubtype(),
		"CEffectCancelOrder": unspecifiedSubtype(),
		"CEffectClearTrackedUnits": unspecifiedSubtype(),
		"CEffectCreateHealer": unspecifiedSubtype(),
		"CEffectCreatePersistent": unspecifiedSubtype(),
		"CEffectCreateUnit": unspecifiedSubtype(),
		
		"CEffectCreep": subtype({
			parent: "CEffect",
			fields: {
				"CreepFlags": namedArray(enums.e_effectCreepFlag, simpleType("bool")),
				"Radius": structs.SAccumulatedFixed,
				"WhichLocation": structs.SEffectWhichLocation,
			},
		}),
		
		"CEffectDamage": unspecifiedSubtype(),
		"CEffectDestroyPersistent": unspecifiedSubtype(),
		"CEffectEnumArea": unspecifiedSubtype(),
		"CEffectEnumInventory": unspecifiedSubtype(),
		"CEffectEnumMagazine": unspecifiedSubtype(),
		"CEffectEnumTrackedUnits": unspecifiedSubtype(),
		"CEffectEnumTransport": unspecifiedSubtype(),
		"CEffectIssueOrder": unspecifiedSubtype(),
		"CEffectLastTarget": unspecifiedSubtype(),
		"CEffectLaunchMissile": unspecifiedSubtype(),
		"CEffectLoadContainer": unspecifiedSubtype(),
		"CEffectModifyPlayer": unspecifiedSubtype(),
		"CEffectModifyUnit": unspecifiedSubtype(),
		"CEffectMorph": unspecifiedSubtype(),
		"CEffectRandomPointInCircle": unspecifiedSubtype(),
		"CEffectRedirectMissile": unspecifiedSubtype(),
		"CEffectReleaseMagazine": unspecifiedSubtype(),
		"CEffectRemoveBehavior": unspecifiedSubtype(),
		"CEffectRemoveKinetic": unspecifiedSubtype(),
		"CEffectRemoveTrackedUnit": unspecifiedSubtype(),
		"CEffectReturnMagazine": unspecifiedSubtype(),
		"CEffectSet": unspecifiedSubtype(),
		"CEffectSwitch": unspecifiedSubtype(),
		"CEffectTeleport": unspecifiedSubtype(),
		"CEffectTransferBehavior": unspecifiedSubtype(),
		"CEffectUseCalldown": unspecifiedSubtype(),
		"CEffectUseMagazine": unspecifiedSubtype(),
		"CEffectUserData": unspecifiedSubtype(),
	},

	"Footprint": {
		"CFootprint": unspecifiedSubtype(),
	},

	"Item": {
		"CItem": unspecifiedSubtype(),
		"CItemAbil": unspecifiedSubtype(),
		"CItemAbilPowerUp": unspecifiedSubtype(),
		"CItemEffect": unspecifiedSubtype(),
		"CItemEffectInstant": unspecifiedSubtype(),
		"CItemEffectTarget": unspecifiedSubtype(),
	},

	"Loot": {
		"CLoot": unspecifiedSubtype(),
		"CLootEffect": unspecifiedSubtype(),
		"CLootItem": unspecifiedSubtype(),
		"CLootSet": unspecifiedSubtype(),
		"CLootSpawn": unspecifiedSubtype(),
		"CLootUnit": unspecifiedSubtype(),
	},

	"Mover": {
		"CMover": unspecifiedSubtype(),
		"CMoverAvoid": unspecifiedSubtype(),
		"CMoverFlock": unspecifiedSubtype(),
		"CMoverMissile": unspecifiedSubtype(),
	},

	"PlayerResponse": {
		"CPlayerResponse": unspecifiedSubtype(),
		"CPlayerResponseUnit": unspecifiedSubtype(),
		"CPlayerResponseUnitBirth": unspecifiedSubtype(),
		"CPlayerResponseUnitDamage": unspecifiedSubtype(),
		"CPlayerResponseUnitDeath": unspecifiedSubtype(),
	},

	"Requirement": {
		"CRequirement": unspecifiedSubtype(),
	},

	"Turret": {
		"CTurret": unspecifiedSubtype(),
	},

	"Unit": {
		"CUnit": unspecifiedSubtype(),
		"CUnitHero": unspecifiedSubtype(),
	},

	"Upgrade": {
		"CUpgrade": unspecifiedSubtype(),
	},

	"Validator": {
		"CValidator": unspecifiedSubtype(),
		"CValidatorCombine": unspecifiedSubtype(),
		"CValidatorCompareTrackedUnitsCount": unspecifiedSubtype(),
		"CValidatorCondition": unspecifiedSubtype(),
		"CValidatorEffect": unspecifiedSubtype(),
		"CValidatorEffectCompareDodged": unspecifiedSubtype(),
		"CValidatorEffectCompareEvaded": unspecifiedSubtype(),
		"CValidatorEffectTreeUserData": unspecifiedSubtype(),
		"CValidatorFunction": unspecifiedSubtype(),
		"CValidatorGameCommanderActive": unspecifiedSubtype(),
		"CValidatorGameCompareTerrain": unspecifiedSubtype(),
		"CValidatorGameCompareTimeEvent": unspecifiedSubtype(),
		"CValidatorGameCompareTimeOfDay": unspecifiedSubtype(),
		"CValidatorIsUnitTracked": unspecifiedSubtype(),
		"CValidatorLocation": unspecifiedSubtype(),
		"CValidatorLocationArc": unspecifiedSubtype(),
		"CValidatorLocationCompareCliffLevel": unspecifiedSubtype(),
		"CValidatorLocationComparePower": unspecifiedSubtype(),
		"CValidatorLocationCompareRange": unspecifiedSubtype(),
		"CValidatorLocationCreep": unspecifiedSubtype(),
		"CValidatorLocationCrossChasm": unspecifiedSubtype(),
		"CValidatorLocationCrossCliff": unspecifiedSubtype(),
		"CValidatorLocationEnumArea": unspecifiedSubtype(),
		"CValidatorLocationInPlayableMapArea": unspecifiedSubtype(),
		"CValidatorLocationPathable": unspecifiedSubtype(),
		"CValidatorLocationPlacement": unspecifiedSubtype(),
		"CValidatorLocationShrub": unspecifiedSubtype(),
		"CValidatorLocationType": unspecifiedSubtype(),
		"CValidatorLocationVision": unspecifiedSubtype(),
		"CValidatorPlayer": unspecifiedSubtype(),
		"CValidatorPlayerAlliance": unspecifiedSubtype(),
		"CValidatorPlayerCompareDifficulty": unspecifiedSubtype(),
		"CValidatorPlayerCompareFoodAvailable": unspecifiedSubtype(),
		"CValidatorPlayerCompareFoodUsed": unspecifiedSubtype(),
		"CValidatorPlayerCompareFoodMade": unspecifiedSubtype(),
		"CValidatorPlayerCompareRace": unspecifiedSubtype(),
		"CValidatorPlayerCompareResource": unspecifiedSubtype(),
		"CValidatorPlayerCompareResult": unspecifiedSubtype(),
		"CValidatorPlayerCompareType": unspecifiedSubtype(),
		"CValidatorPlayerFood": unspecifiedSubtype(),
		"CValidatorPlayerRequirement": unspecifiedSubtype(),
		"CValidatorUnit": unspecifiedSubtype(),
		"CValidatorUnitAI": unspecifiedSubtype(),
		"CValidatorUnitAbil": unspecifiedSubtype(),
		"CValidatorUnitAlliance": unspecifiedSubtype(),
		"CValidatorUnitArmor": unspecifiedSubtype(),
		"CValidatorUnitBehaviorStackAlias": unspecifiedSubtype(),
		"CValidatorUnitBehaviorState": unspecifiedSubtype(),
		"CValidatorUnitCombatAI": unspecifiedSubtype(),
		"CValidatorUnitCompareAIAreaEvalRatio": unspecifiedSubtype(),
		"CValidatorUnitCompareAbilLevel": unspecifiedSubtype(),
		"CValidatorUnitCompareAbilSkillPoint": unspecifiedSubtype(),
		"CValidatorUnitCompareAbilStage": unspecifiedSubtype(),
		"CValidatorUnitCompareAttackPriority": unspecifiedSubtype(),
		"CValidatorUnitCompareBehaviorCount": unspecifiedSubtype(),
		"CValidatorUnitCompareCargo": unspecifiedSubtype(),
		"CValidatorUnitCompareChargeUsed": unspecifiedSubtype(),
		"CValidatorUnitCompareCooldown": unspecifiedSubtype(),
		"CValidatorUnitCompareDamageDealtTime": unspecifiedSubtype(),
		"CValidatorUnitCompareDamageTakenTime": unspecifiedSubtype(),
		"CValidatorUnitCompareDeath": unspecifiedSubtype(),
		"CValidatorUnitCompareDetectRange": unspecifiedSubtype(),
		"CValidatorUnitCompareField": unspecifiedSubtype(),
		"CValidatorUnitCompareHeight": unspecifiedSubtype(),
		"CValidatorUnitCompareKillCount": unspecifiedSubtype(),
		"CValidatorUnitCompareMarkerCount": unspecifiedSubtype(),
		"CValidatorUnitCompareMoverPhase": unspecifiedSubtype(),
		"CValidatorUnitCompareOrderCount": unspecifiedSubtype(),
		"CValidatorUnitCompareOrderTargetRange": unspecifiedSubtype(),
		"CValidatorUnitComparePowerSourceLevel": unspecifiedSubtype(),
		"CValidatorUnitComparePowerUserLevel": unspecifiedSubtype(),
		"CValidatorUnitCompareRallyPointCount": unspecifiedSubtype(),
		"CValidatorUnitCompareResourceContents": unspecifiedSubtype(),
		"CValidatorUnitCompareResourceHarvesters": unspecifiedSubtype(),
		"CValidatorUnitCompareSpeed": unspecifiedSubtype(),
		"CValidatorUnitCompareVeterancyLevel": unspecifiedSubtype(),
		"CValidatorUnitCompareVital": unspecifiedSubtype(),
		"CValidatorUnitCompareVitality": unspecifiedSubtype(),
		"CValidatorUnitDetected": unspecifiedSubtype(),
		"CValidatorUnitFilters": unspecifiedSubtype(),
		"CValidatorUnitFlying": unspecifiedSubtype(),
		"CValidatorUnitInWeaponRange": unspecifiedSubtype(),
		"CValidatorUnitInventory": unspecifiedSubtype(),
		"CValidatorUnitInventoryContainsItem": unspecifiedSubtype(),
		"CValidatorUnitInventoryIsFull": unspecifiedSubtype(),
		"CValidatorUnitKinetic": unspecifiedSubtype(),
		"CValidatorUnitLastDamagePlayer": unspecifiedSubtype(),
		"CValidatorUnitMissileNullified": unspecifiedSubtype(),
		"CValidatorUnitMover": unspecifiedSubtype(),
		"CValidatorUnitOrder": unspecifiedSubtype(),
		"CValidatorUnitOrderQueue": unspecifiedSubtype(),
		"CValidatorUnitOrderTargetPathable": unspecifiedSubtype(),
		"CValidatorUnitOrderTargetType": unspecifiedSubtype(),
		"CValidatorUnitPathable": unspecifiedSubtype(),
		"CValidatorUnitPathing": unspecifiedSubtype(),
		"CValidatorUnitScanning": unspecifiedSubtype(),
		"CValidatorUnitState": unspecifiedSubtype(),
		"CValidatorUnitTestWeaponType": unspecifiedSubtype(),
		"CValidatorUnitType": unspecifiedSubtype(),
		"CValidatorUnitWeaponAnimating": unspecifiedSubtype(),
		"CValidatorUnitWeaponFiring": unspecifiedSubtype(),
		"CValidatorUnitWeaponPlane": unspecifiedSubtype(),
	},

	"Weapon": {
		"CWeapon": unspecifiedSubtype(),
		"CWeaponLegacy": unspecifiedSubtype(),
		"CWeaponStrafe": unspecifiedSubtype(),
	},

	"ArmyCategory": {
		"CArmyCategory": unspecifiedSubtype(),
	},

	"ArmyUnit": {
		"CArmyUnit": unspecifiedSubtype(),
	},

	"ArmyUpgrade": {
		"CArmyUpgrade": unspecifiedSubtype(),
	},

	"BankCondition": {
		"CBankConditionCombine": unspecifiedSubtype(),
		"CBankConditionCompare": unspecifiedSubtype(),
		"CBankConditionCompareValueCount": unspecifiedSubtype(),
		"CBankConditionCompareValueInteger": unspecifiedSubtype(),
		"CBankConditionCompareValueString": unspecifiedSubtype(),
		"CBankConditionCompareValueSum": unspecifiedSubtype(),
		"CBankConditionCurrentMap": unspecifiedSubtype(),
	},

	"Campaign": {
		"CCampaign": unspecifiedSubtype(),
	},

	"Character": {
		"CCharacter": unspecifiedSubtype(),
	},

	"Commander": {
		"CCommander": unspecifiedSubtype(),
	},

	"Conversation": {
		"CConversation": unspecifiedSubtype(),
	},

	"ConversationState": {
		"CConversationState": unspecifiedSubtype(),
	},

	"Location": {
		"CLocation": unspecifiedSubtype(),
	},

	"Map": {
		"CMap": unspecifiedSubtype(),
	},

	"Objective": {
		"CObjective": unspecifiedSubtype(),
	},

	"Preload": {
		"CPreload": unspecifiedSubtype(),
		"CPreloadActor": unspecifiedSubtype(),
		"CPreloadAsset": unspecifiedSubtype(),
		"CPreloadConversation": unspecifiedSubtype(),
		"CPreloadModel": unspecifiedSubtype(),
		"CPreloadScene": unspecifiedSubtype(),
		"CPreloadSound": unspecifiedSubtype(),
		"CPreloadUnit": unspecifiedSubtype(),
	},

	"Actor": {
		"CActor": unspecifiedSubtype(),
		"CActorAction": unspecifiedSubtype(),
		"CActorActionOverride": unspecifiedSubtype(),
		"CActorArc": unspecifiedSubtype(),
		"CActorBase": unspecifiedSubtype(),
		"CActorBatch": unspecifiedSubtype(),
		"CActorBeamSimple": unspecifiedSubtype(),
		"CActorBeamStandard": unspecifiedSubtype(),
		"CActorBearings": unspecifiedSubtype(),
		"CActorBlob": unspecifiedSubtype(),
		"CActorCamera": unspecifiedSubtype(),
		"CActorCameraModel": unspecifiedSubtype(),
		"CActorCreep": unspecifiedSubtype(),
		"CActorCutscene": unspecifiedSubtype(),
		"CActorDoodad": unspecifiedSubtype(),
		"CActorDoodadPreserver": unspecifiedSubtype(),
		"CActorEditorCamera": unspecifiedSubtype(),
		"CActorEditorPoint": unspecifiedSubtype(),
		"CActorEventMacro": unspecifiedSubtype(),
		"CActorEventMacroRunnable": unspecifiedSubtype(),
		"CActorFoliageFXSpawner": unspecifiedSubtype(),
		"CActorForce": unspecifiedSubtype(),
		"CActorForceBox": unspecifiedSubtype(),
		"CActorForceConeRoundedEnd": unspecifiedSubtype(),
		"CActorForceCylinder": unspecifiedSubtype(),
		"CActorForceSphere": unspecifiedSubtype(),
		"CActorGlobalConfig": unspecifiedSubtype(),
		"CActorLightModel": unspecifiedSubtype(),
		"CActorLightOmni": unspecifiedSubtype(),
		"CActorLightOmniModel": unspecifiedSubtype(),
		"CActorLightSpot": unspecifiedSubtype(),
		"CActorLightSpotModel": unspecifiedSubtype(),
		"CActorList": unspecifiedSubtype(),
		"CActorLookAt": unspecifiedSubtype(),
		"CActorMinimap": unspecifiedSubtype(),
		"CActorMissile": unspecifiedSubtype(),
		"CActorModel": unspecifiedSubtype(),
		"CActorModelMaterial": unspecifiedSubtype(),
		"CActorPortrait": unspecifiedSubtype(),
		"CActorPower": unspecifiedSubtype(),
		"CActorProgress": unspecifiedSubtype(),
		"CActorPropertyCurveSet": unspecifiedSubtype(),
		"CActorQuad": unspecifiedSubtype(),
		"CActorQueryResponse": unspecifiedSubtype(),
		"CActorRange": unspecifiedSubtype(),
		"CActorRegion": unspecifiedSubtype(),
		"CActorRegionArc": unspecifiedSubtype(),
		"CActorRegionCircle": unspecifiedSubtype(),
		"CActorRegionGame": unspecifiedSubtype(),
		"CActorRegionQuad": unspecifiedSubtype(),
		"CActorRegionWater": unspecifiedSubtype(),
		"CActorScene": unspecifiedSubtype(),
		"CActorSelection": unspecifiedSubtype(),
		"CActorSetQueried": unspecifiedSubtype(),
		"CActorShadow": unspecifiedSubtype(),
		"CActorShield": unspecifiedSubtype(),
		"CActorShieldImpact": unspecifiedSubtype(),
		"CActorSimple": unspecifiedSubtype(),
		"CActorSite": unspecifiedSubtype(),
		"CActorSiteBillboard": unspecifiedSubtype(),
		"CActorSiteMover": unspecifiedSubtype(),
		"CActorSiteOp2DRotation": unspecifiedSubtype(),
		"CActorSiteOpAction": unspecifiedSubtype(),
		"CActorSiteOpAttach": unspecifiedSubtype(),
		"CActorSiteOpAttachVolume": unspecifiedSubtype(),
		"CActorSiteOpBanker": unspecifiedSubtype(),
		"CActorSiteOpBankerUnit": unspecifiedSubtype(),
		"CActorSiteOpBasic": unspecifiedSubtype(),
		"CActorSiteOpCursor": unspecifiedSubtype(),
		"CActorSiteOpDeathMotion": unspecifiedSubtype(),
		"CActorSiteOpEffect": unspecifiedSubtype(),
		"CActorSiteOpForward": unspecifiedSubtype(),
		"CActorSiteOpGameCameraFollow": unspecifiedSubtype(),
		"CActorSiteOpHeight": unspecifiedSubtype(),
		"CActorSiteOpHigherOfTerrainAndWater": unspecifiedSubtype(),
		"CActorSiteOpHostBearings": unspecifiedSubtype(),
		"CActorSiteOpHostedOffset": unspecifiedSubtype(),
		"CActorSiteOpIncoming": unspecifiedSubtype(),
		"CActorSiteOpLocalOffset": unspecifiedSubtype(),
		"CActorSiteOpOrbiter": unspecifiedSubtype(),
		"CActorSiteOpPatch": unspecifiedSubtype(),
		"CActorSiteOpPhysicsImpact": unspecifiedSubtype(),
		"CActorSiteOpRandomPointInCircle": unspecifiedSubtype(),
		"CActorSiteOpRandomPointInCrossbar": unspecifiedSubtype(),
		"CActorSiteOpRandomPointInSphere": unspecifiedSubtype(),
		"CActorSiteOpRotationExplicit": unspecifiedSubtype(),
		"CActorSiteOpRotationRandom": unspecifiedSubtype(),
		"CActorSiteOpRotationSmooth": unspecifiedSubtype(),
		"CActorSiteOpRotationVariancer": unspecifiedSubtype(),
		"CActorSiteOpRotator": unspecifiedSubtype(),
		"CActorSiteOpSelectionOffset": unspecifiedSubtype(),
		"CActorSiteOpSerpentHead": unspecifiedSubtype(),
		"CActorSiteOpSerpentSegment": unspecifiedSubtype(),
		"CActorSiteOpShadow": unspecifiedSubtype(),
		"CActorSiteOpTether": unspecifiedSubtype(),
		"CActorSiteOpTilter": unspecifiedSubtype(),
		"CActorSiteOpTipability": unspecifiedSubtype(),
		"CActorSiteOpUp": unspecifiedSubtype(),
		"CActorSiteOpZ": unspecifiedSubtype(),
		"CActorSiteOrbiter": unspecifiedSubtype(),
		"CActorSiteRocker": unspecifiedSubtype(),
		"CActorSnapshot": unspecifiedSubtype(),
		"CActorSound": unspecifiedSubtype(),
		"CActorSplat": unspecifiedSubtype(),
		"CActorSquib": unspecifiedSubtype(),
		"CActorStateMonitor": unspecifiedSubtype(),
		"CActorTerrain": unspecifiedSubtype(),
		"CActorTerrainDeformer": unspecifiedSubtype(),
		"CActorText": unspecifiedSubtype(),
		"CActorTurret": unspecifiedSubtype(),
		"CActorUnit": unspecifiedSubtype(),
	},

	"AttachMethod": {
		"CAttachMethod": unspecifiedSubtype(),
		"CAttachMethodArcTest": unspecifiedSubtype(),
		"CAttachMethodAttachType": unspecifiedSubtype(),
		"CAttachMethodBestMatch": unspecifiedSubtype(),
		"CAttachMethodFilter": unspecifiedSubtype(),
		"CAttachMethodIncoming": unspecifiedSubtype(),
		"CAttachMethodNodeOccupancy": unspecifiedSubtype(),
		"CAttachMethodNodeOccupancy2": unspecifiedSubtype(),
		"CAttachMethodNumericField": unspecifiedSubtype(),
		"CAttachMethodPattern": unspecifiedSubtype(),
		"CAttachMethodPortAllocator": unspecifiedSubtype(),
		"CAttachMethodProximity": unspecifiedSubtype(),
		"CAttachMethodRandom": unspecifiedSubtype(),
		"CAttachMethodReduction": unspecifiedSubtype(),
		"CAttachMethodVolumesRequery": unspecifiedSubtype(),
		"CAttachMethodVolumesTargets": unspecifiedSubtype(),
		"CAttachMethodVolumesWeightedPick": unspecifiedSubtype(),
	},

	"Beam": {
		"CBeamAsyncLinear": unspecifiedSubtype(),
	},

	"Button": {
		"CButton": unspecifiedSubtype(),
	},

	"DSP": {
		"CDSPChorus": unspecifiedSubtype(),
		"CDSPCompressor": unspecifiedSubtype(),
		"CDSPCustomCompressor": unspecifiedSubtype(),
		"CDSPDistortion": unspecifiedSubtype(),
		"CDSPEcho": unspecifiedSubtype(),
		"CDSPFlange": unspecifiedSubtype(),
		"CDSPHighPass": unspecifiedSubtype(),
		"CDSPLimiter": unspecifiedSubtype(),
		"CDSPLowPass": unspecifiedSubtype(),
		"CDSPLowPassSimple": unspecifiedSubtype(),
		"CDSPNormalize": unspecifiedSubtype(),
		"CDSPParamEQ": unspecifiedSubtype(),
		"CDSPPitchShift": unspecifiedSubtype(),
		"CDSPReverb": unspecifiedSubtype(),
	},

	"LensFlareSet": {
		"CLensFlareSet": unspecifiedSubtype(),
	},

	"Light": {
		"CLight": unspecifiedSubtype(),
	},

	"Model": {
		"CModel": unspecifiedSubtype(),
		"CModelFoliage": unspecifiedSubtype(),
	},

	"Reverb": {
		"CReverb": unspecifiedSubtype(),
	},

	"Shape": {
		"CShape": unspecifiedSubtype(),
		"CShapeArc": unspecifiedSubtype(),
		"CShapeQuad": unspecifiedSubtype(),
	},

	"Sound": {
		"CSound": unspecifiedSubtype(),
	},

	"SoundExclusivity": {
		"CSoundExclusivity": unspecifiedSubtype(),
	},

	"SoundMixSnapshot": {
		"CSoundMixSnapshot": unspecifiedSubtype(),
	},

	"Soundtrack": {
		"CSoundtrack": unspecifiedSubtype(),
	},

	"Texture": {
		"CTexture": unspecifiedSubtype(),
	},

	"Cliff": {
		"CCliff": unspecifiedSubtype(),
	},

	"CliffMesh": {
		"CCliffMesh": unspecifiedSubtype(),
	},

	"FoW": {
		"CFoW": unspecifiedSubtype(),
	},

	"PhysicsMaterial": {
		"CPhysicsMaterial": unspecifiedSubtype(),
	},

	"Terrain": {
		"CTerrain": unspecifiedSubtype(),
	},

	"TerrainObject": {
		"CTerrainObject": unspecifiedSubtype(),
		"CCliffDoodad": unspecifiedSubtype(), // I know, it's weird... but it's here
	},

	"TerrainTex": {
		"CTerrainTex": unspecifiedSubtype(),
	},

	"Tile": {
		"CTile": unspecifiedSubtype(),
	},

	"Water": {
		"CWater": unspecifiedSubtype(),
	},

	"Artifact": {
		"CArtifact": unspecifiedSubtype(),
	},

	"ArtifactSlot": {
		"CArtifactSlot": unspecifiedSubtype(),
	},

	"Config": {
		"CConfig": unspecifiedSubtype(),
	},

	"Hero": {
		"CHero": unspecifiedSubtype(),
	},

	"HeroAbil": {
		"CHeroAbil": unspecifiedSubtype(),
	},

	"HeroStat": {
		"CHeroStat": unspecifiedSubtype(),
	},

	"Mount": {
		"CMount": unspecifiedSubtype(),
	},

	"Skin": {
		"CSkin": unspecifiedSubtype(),
	},

	"Talent": {
		"CTalent": unspecifiedSubtype(),
	},

	"TalentProfile": {
		"CTalentProfile": unspecifiedSubtype(),
	},

	"VoiceOver": {
		"CVoiceOver": unspecifiedSubtype(),
	},

	"Alert": {
		"CAlert": unspecifiedSubtype(),
	},

	"RaceBannerPack": {
		"CRaceBannerPack": unspecifiedSubtype(),
	},

	"Camera": {
		"CCamera": unspecifiedSubtype(),
	},

	"ConsoleSkin": {
		"CConsoleSkin": unspecifiedSubtype(),
	},

	"Cursor": {
		"CCursor": unspecifiedSubtype(),
	},

	"GameUI": {
		"CGameUI": unspecifiedSubtype(),
	},

	"Bundle": {
		"CBundle": unspecifiedSubtype(),
	},

	"Ping": {
		"CPing": unspecifiedSubtype(),
	},

	"ColorStyle": {
		"CColorStyle": unspecifiedSubtype(),
	},

	"Achievement": {
		"CAchievement": unspecifiedSubtype(),
	},

	"AchievementTerm": {
		"CAchievementTerm": unspecifiedSubtype(),
		"CAchievementTermAbilInteract": unspecifiedSubtype(),
		"CAchievementTermAbilLoad": unspecifiedSubtype(),
		"CAchievementTermAbilUse": unspecifiedSubtype(),
		"CAchievementTermAchievement": unspecifiedSubtype(),
		"CAchievementTermBehaviorCount": unspecifiedSubtype(),
		"CAchievementTermBehaviorElapsed": unspecifiedSubtype(),
		"CAchievementTermBehaviorState": unspecifiedSubtype(),
		"CAchievementTermCombine": unspecifiedSubtype(),
		"CAchievementTermEffectAbsorbed": unspecifiedSubtype(),
		"CAchievementTermEffectDamaged": unspecifiedSubtype(),
		"CAchievementTermEffectDodged": unspecifiedSubtype(),
		"CAchievementTermEffectHealed": unspecifiedSubtype(),
		"CAchievementTermEffectKilled": unspecifiedSubtype(),
		"CAchievementTermEffectUse": unspecifiedSubtype(),
		"CAchievementTermGeneric": unspecifiedSubtype(),
		"CAchievementTermReplay": unspecifiedSubtype(),
		"CAchievementTermScoreValue": unspecifiedSubtype(),
		"CAchievementTermTime": unspecifiedSubtype(),
		"CAchievementTermUnitBirth": unspecifiedSubtype(),
		"CAchievementTermUnitDeath": unspecifiedSubtype(),
		"CAchievementTermUnitKills": unspecifiedSubtype(),
		"CAchievementTermUnitRegen": unspecifiedSubtype(),
		"CAchievementTermUnitSupplyLoss": unspecifiedSubtype(),
	},

	"Boost": {
		"CBoost": unspecifiedSubtype(),
	},

	"DecalPack": {
		"CDecalPack": unspecifiedSubtype(),
	},

	"Emoticon": {
		"CEmoticon": unspecifiedSubtype(),
	},

	"EmoticonPack": {
		"CEmoticonPack": unspecifiedSubtype(),
	},

	"Error": {
	},

	"Game": {
		"CGame": unspecifiedSubtype(),
	},

	"Herd": {
		"CHerd": unspecifiedSubtype(),
	},

	"HerdNode": {
		"CHerdNode": unspecifiedSubtype(),
	},

	"ItemClass": {
		"CItemClass": unspecifiedSubtype(),
	},

	"ItemContainer": {
		"CItemContainer": unspecifiedSubtype(),
	},

	"Kinetic": {
		"CKinetic": unspecifiedSubtype(),
		"CKineticDistance": unspecifiedSubtype(),
		"CKineticFollow": unspecifiedSubtype(),
		"CKineticRotate": unspecifiedSubtype(),
		"CKineticSequence": unspecifiedSubtype(),
		"CKineticSet": unspecifiedSubtype(),
		"CKineticTranslate": unspecifiedSubtype(),
	},

	"PortraitPack": {
		"CPortraitPack": unspecifiedSubtype(),
	},

	"PremiumMap": {
		"CPremiumMap": unspecifiedSubtype(),
	},

	"Race": {
		"CRace": unspecifiedSubtype(),
	},

	"RequirementNode": {
		"CRequirementNode": unspecifiedSubtype(),
		"CRequirementAllowAbil": unspecifiedSubtype(),
		"CRequirementAllowBehavior": unspecifiedSubtype(),
		"CRequirementAllowUnit": unspecifiedSubtype(),
		"CRequirementAllowUpgrade": unspecifiedSubtype(),
		"CRequirementAnd": unspecifiedSubtype(),
		"CRequirementConst": unspecifiedSubtype(),
		"CRequirementCountAbil": unspecifiedSubtype(),
		"CRequirementCountBehavior": unspecifiedSubtype(),
		"CRequirementCountUnit": unspecifiedSubtype(),
		"CRequirementCountUpgrade": unspecifiedSubtype(),
		"CRequirementDiv": unspecifiedSubtype(),
		"CRequirementEq": unspecifiedSubtype(),
		"CRequirementGT": unspecifiedSubtype(),
		"CRequirementGTE": unspecifiedSubtype(),
		"CRequirementLT": unspecifiedSubtype(),
		"CRequirementLTE": unspecifiedSubtype(),
		"CRequirementMod": unspecifiedSubtype(),
		"CRequirementMul": unspecifiedSubtype(),
		"CRequirementNE": unspecifiedSubtype(),
		"CRequirementNot": unspecifiedSubtype(),
		"CRequirementOdd": unspecifiedSubtype(),
		"CRequirementOr": unspecifiedSubtype(),
		"CRequirementSum": unspecifiedSubtype(),
		"CRequirementXor": unspecifiedSubtype(),
	},

	"Reward": {
		"CReward": unspecifiedSubtype(),
		"CRewardConsoleSkin": unspecifiedSubtype(),
		"CRewardDecal": unspecifiedSubtype(),
		"CRewardEmoticon": unspecifiedSubtype(),
		"CRewardIcon": unspecifiedSubtype(),
		"CRewardModel": unspecifiedSubtype(),
		"CRewardPoints": unspecifiedSubtype(),
		"CRewardPortrait": unspecifiedSubtype(),
		"CRewardPortraitInGame": unspecifiedSubtype(),
		"CRewardRaceBanner": unspecifiedSubtype(),
		"CRewardSpray": unspecifiedSubtype(),
		"CRewardSprayUseDecal": unspecifiedSubtype(),
		"CRewardTrophy": unspecifiedSubtype(),
		"CRewardVoicePack": unspecifiedSubtype(),
	},

	"ScoreResult": {
		"CScoreResult": unspecifiedSubtype(),
		"CScoreResultBuildOrder": unspecifiedSubtype(),
		"CScoreResultExperience": unspecifiedSubtype(),
		"CScoreResultGraph": unspecifiedSubtype(),
		"CScoreResultPerformance": unspecifiedSubtype(),
		"CScoreResultRoot": unspecifiedSubtype(),
		"CScoreResultScore": unspecifiedSubtype(),
	},

	"ScoreValue": {
		"CScoreValue": unspecifiedSubtype(),
		"CScoreValueCombine": unspecifiedSubtype(),
		"CScoreValueConstant": unspecifiedSubtype(),
		"CScoreValueCustom": unspecifiedSubtype(),
		"CScoreValueStandard": unspecifiedSubtype(),
	},

	"SkinPack": {
		"CSkinPack": unspecifiedSubtype(),
	},

	"Spray": {
		"CSpray": unspecifiedSubtype(),
	},

	"SprayPack": {
		"CSprayPack": unspecifiedSubtype(),
	},

	"TacCooldown": {
		"CTacCooldown": unspecifiedSubtype(),
	},

	"Tactical": {
		"CTactical": unspecifiedSubtype(),
		"CTacticalOrder": unspecifiedSubtype(),
		"CTacticalSet": unspecifiedSubtype(),
	},

	"TargetFind": {
		"CTargetFind": unspecifiedSubtype(),
		"CTargetFindBestPoint": unspecifiedSubtype(),
		"CTargetFindEffect": unspecifiedSubtype(),
		"CTargetFindEnumArea": unspecifiedSubtype(),
		"CTargetFindLastAttacker": unspecifiedSubtype(),
		"CTargetFindOffset": unspecifiedSubtype(),
		"CTargetFindOrder": unspecifiedSubtype(),
		"CTargetFindRallyPoint": unspecifiedSubtype(),
		"CTargetFindSet": unspecifiedSubtype(),
		"CTargetFindWorkerRallyPoint": unspecifiedSubtype(),
	},

	"TargetSort": {
		"CTargetSort": unspecifiedSubtype(),
		"CTargetSortAlliance": unspecifiedSubtype(),
		"CTargetSortAngle": unspecifiedSubtype(),
		"CTargetSortBehaviorCount": unspecifiedSubtype(),
		"CTargetSortBehaviorDuration": unspecifiedSubtype(),
		"CTargetSortChargeCount": unspecifiedSubtype(),
		"CTargetSortChargeRegen": unspecifiedSubtype(),
		"CTargetSortCooldown": unspecifiedSubtype(),
		"CTargetSortDistance": unspecifiedSubtype(),
		"CTargetSortField": unspecifiedSubtype(),
		"CTargetSortInterruptible": unspecifiedSubtype(),
		"CTargetSortMarker": unspecifiedSubtype(),
		"CTargetSortPowerSourceLevel": unspecifiedSubtype(),
		"CTargetSortPowerUserLevel": unspecifiedSubtype(),
		"CTargetSortPriority": unspecifiedSubtype(),
		"CTargetSortRandom": unspecifiedSubtype(),
		"CTargetSortValidator": unspecifiedSubtype(),
		"CTargetSortVital": unspecifiedSubtype(),
		"CTargetSortVitalFraction": unspecifiedSubtype(),
	},

	"TextureSheet": {
		"CTextureSheet": unspecifiedSubtype(),
	},

	"Trophy": {
		"CTrophy": unspecifiedSubtype(),
	},

	"User": {
		"CUser": unspecifiedSubtype(),
	},

	"VoicePack": {
		"CVoicePack": unspecifiedSubtype(),
	},

	"WarChest": {
		"CWarChest": unspecifiedSubtype(),
	},

	"WarChestSeason": {
		"CWarChestSeason": unspecifiedSubtype(),
	},

	"StimPack": {
		"CStimPack": unspecifiedSubtype(),
	},
};

export type CatalogTypes = typeof CatalogTypesInstance;

{
	// Make sure these two match
	let _a: CatalogName = "" as keyof CatalogTypes;
	let _b: keyof CatalogTypes = "" as CatalogName;
}
