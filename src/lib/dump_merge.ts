import assert from "assert";
import * as fs from "fs/promises";
import { unparsedGameData } from "./game_data_unparsed";

type TypeCategory = "Struct" | "String" | "Enum" | "Fixed" | "Flags" | "Float" | "FourCC" | "IntSigned" | "IntUnsigned" | "CatalogLink" | "Unknown";

const typeMapping:Record<string, string> = {
	"bool8": "bool",
	"bool32": "bool",
	// "CFlags": "bool", handled elsewhere
	"constCTechRequirementsGraph*": "CRequirementLink",
};

const acceptableConversions = new Set<string>([
	"CFixed=real32",
	"real32=CFixed",
	"uint32=uint8",
	"CString=CIdentifier",
	"CString=CDescPath",
	
	"CFixed=SAccumulatedFixed",
	"CGameRate=SAccumulatedGameRate",
	"CGameTime=SAccumulatedGameTime",
	"int32=SAccumulatedInt32",
	"uint32=SAccumulatedUInt32",
	
	"CBehaviorLink=CBehaviorLinkArray",
	
	"TCatalogFieldValue=CIdentifier", // Some values used to be smarter
	"SAbilCmdButton=SAbilReviveCmdButton", // Upgraded since
	"SCampaignData=CCampaignLink", // Upgraded since
]);

// Some fields aren't obvious they're flags...
const specialEnumTypes:Record<string,string> = {
	"CActorTransferFlags": "EActorTransferFlag",
	"CActorHostedPropTransferFlags": "EActorHostedProp",
	"CBehaviorCategoryFlags": "EBehaviorCategory",
	"CNotifyAreaFlags": "ENotifyAreaFlag",
	"CResponseFlags": "EResponseFlag",
	"CDamageFlags": "EDamageFlag",
	"CCmdFlags": "ECmdFlags",
	"CAbilCmdFlags": "EAbilCmdFlags",
	"CMarkerFlags": "EMarkerMatch",
};

const specificFieldFlagIndexEnum:Record<string,string> = {
	"CEffectCreateHealer_Flags": "EEffectHealerFlag",
	"CEffectCreatePersistent_Flags": "ECreatePersistent",
	"CEffectLaunchMissile_Flags": "EEffectMissile",
	"CEffectRedirectMissile_Flags": "EEffectRedirectMissile",
	"CTile_Flags": "ETerrainTileFlag",
	"CValidatorUnitDetected_Flags": "EDetectType",
	"CValidatorUnitCompareAttackPriority_Flags": "EAttackPriority",
	"SSoundLocaleFlags_Flags": "ESoundFlag",
	"SSerpentAggregate_Flags": "ESerpentFlag",
	"STerrainSquibVisual_Flags": "EActorTerrainSquibVisualFlag",
	"SDifficultyLevel_Flags": "EDifficultyFlag",
	"SAnimFile_Flags": "EAnimLoadFlag",
};

// When adding new structs, we need to specify these
const specificParents:Record<string, string|null> = {
	"CAbilAttackModifier": "CAbil",
	"CAccumulator": null,
	"CAccumulatorAbilLevel": "CAccumulatorLevel",
	"CAccumulatorArithmetic": "CAccumulator",
	"CAccumulatorAttributePoints": "CAccumulator",
	"CAccumulatorBehavior": "CAccumulator",
	"CAccumulatorCargo": "CAccumulator",
	"CAccumulatorConstant": "CAccumulator",
	"CAccumulatorDistance": "CAccumulator",
	"CAccumulatorEffectAmount": "CAccumulator",
	"CAccumulatorLevel": "CAccumulator",
	"CAccumulatorPlayerScoreValue": "CAccumulator",
	"CAccumulatorSwitch": "CAccumulator",
	"CAccumulatorTrackedUnitCount": "CAccumulator",
	"CAccumulatorUnitCustomValue": "CAccumulator",
	"CAccumulatorUnitLevel": "CAccumulatorLevel",
	"CAccumulatorUserData": "CAccumulator",
	"CAccumulatorVeterancyLevel": "CAccumulatorLevel",
	"CAccumulatorVitals": "CAccumulator",
	// "CActorActionOverride": ,
	// "CActorBatch": ,
	// "CActorBlob": ,
	// "CActorCutscene": ,
	// "CActorEventMacroRunnable": ,
	// "CActorListPerPlayer": ,
	// "CActorMinimap": ,
	// "CActorModelMaterial": ,
	// "CActorOverrides": ,
	// "CActorSiteOpCursor": ,
	// "CActorSiteOpDeltaSum": ,
	// "CActorSiteOpGameCameraFollow": ,
	// "CActorSiteOpOrbiter": ,
	// "CActorSiteOpOrientAttachPointTo": ,
	// "CActorSiteOpPersistentOffset": ,
	// "CActorSiteOpPitchLimiter": ,
	// "CActorSiteOpTether": ,
	// "CActorSiteOpTilter": ,
	// "CActorSiteOpYawLimiter": ,
	// "CActorSiteOrbiter": ,
	// "CActorUnitRing": ,
	// "CArtifact": ,
	// "CArtifactSlot": ,
	// "CAttachMethodBestMatch": ,
	// "CBehaviorAttackModifier": ,
	// "CBehaviorUnitTracker": ,
	// "CBoost": ,
	// "CBundle": ,
	// "CCampaign": ,
	// "CColorStyle": ,
	// "CCommander": ,
	// "CConfig": ,
	// "CConsoleSkin": ,
	"CDataCollection": null,
	"CDataCollectionUnit": "CDataCollection",
	"CDataCollectionUpgrade": "CDataCollection",
	"CDataCollectionAbil": "CDataCollection",
	"CDataCollectionPattern": null,
	// "CDSPCustomCompressor": ,
	// "CDSPLimiter": ,
	// "CDecalPack": ,
	// "CEffectAddTrackedUnit": ,
	// "CEffectAddTrackedUnits": ,
	// "CEffectApplyKinetic": ,
	// "CEffectClearTrackedUnits": ,
	// "CEffectEnumInventory": ,
	// "CEffectEnumTrackedUnits": ,
	// "CEffectLastTarget": ,
	// "CEffectLoadContainer": ,
	// "CEffectMorph": ,
	// "CEffectRandomPointInCircle": ,
	// "CEffectRemoveKinetic": ,
	// "CEffectRemoveTrackedUnit": ,
	// "CEffectUserData": ,
	// "CEmoticon": ,
	// "CEmoticonPack": ,
	// "CItemAbilPowerUp": ,
	// "CKinetic": ,
	// "CKineticDistance": ,
	// "CKineticFollow": ,
	// "CKineticRotate": ,
	// "CKineticSequence": ,
	// "CKineticSet": ,
	// "CKineticTranslate": ,
	// "CLensFlareSet": ,
	// "CMount": ,
	// "CPing": ,
	// "CPlayerResponse": ,
	// "CPlayerResponseUnit": ,
	// "CPlayerResponseUnitBirth": ,
	// "CPlayerResponseUnitDamage": ,
	// "CPlayerResponseUnitDeath": ,
	// "CPortraitPack": ,
	// "CPremiumMap": ,
	// "CRaceBannerPack": ,
	// "CRewardConsoleSkin": ,
	// "CRewardEmoticon": ,
	// "CRewardPortraitInGame": ,
	// "CRewardRaceBanner": ,
	// "CRewardSpray": ,
	// "CRewardSprayUseDecal": ,
	// "CRewardStim": ,
	// "CRewardTrophy": ,
	// "CRewardVoicePack": ,
	// "CScoreValueConstant": ,
	// "CShape": ,
	// "CShapeArc": ,
	// "CShapeQuad": ,
	// "CSkin": ,
	// "CSkinPack": ,
	// "CSoundExclusivity": ,
	// "CSoundMixSnapshot": ,
	// "CSpray": ,
	// "CSprayPack": ,
	// "CStimPack": ,
	// "CTalent": ,
	// "CTalentProfile": ,
	// "CTargetSortValidator": ,
	// "CTextureSheet": ,
	// "CTrophy": ,
	"CUnitHero": "CUnit",
	// "CValidatorCompareTrackedUnitsCount": ,
	// "CValidatorEffect": ,
	// "CValidatorEffectCompare": ,
	// "CValidatorEffectCompareDodged": ,
	// "CValidatorEffectCompareEvaded": ,
	// "CValidatorEffectTreeUserData": ,
	// "CValidatorGameCommanderActive": ,
	// "CValidatorGameCompareTimeEvent": ,
	// "CValidatorIsUnitTracked": ,
	// "CValidatorLocationInPlayableMapArea": ,
	// "CValidatorLocationShrub": ,
	// "CValidatorPlayerFood": ,
	// "CValidatorPlayerTalent": ,
	// "CValidatorUnitAlliance": ,
	// "CValidatorUnitArmor": ,
	// "CValidatorUnitBehaviorStackAlias": ,
	// "CValidatorUnitCompareAbilSkillPoint": ,
	// "CValidatorUnitCompareAbilStage": ,
	// "CValidatorUnitCompareDamageDealtTime": ,
	// "CValidatorUnitCompareHeight": ,
	// "CValidatorUnitCompareKillCount": ,
	// "CValidatorUnitInWeaponRange": ,
	// "CValidatorUnitKinetic": ,
	// "CValidatorUnitState": ,
	// "CValidatorUnitTestWeaponType": ,
	// "CVoiceOver": ,
	// "CVoicePack": ,
	// "CWarChest": ,
	// "CWarChestSeason": ,
};

// When adding new structs, we need to specify here if it's abstract
const specificAbstract:Record<string, true> = {
	"CAccumulatorAbilLevel": true,
};

(async function(){
	let dump:Record<string, Record<string, {
		array:boolean;
		type:string;
		category:TypeCategory;
	}>> = JSON.parse(await fs.readFile(`${__dirname}/../../data/dump.json`, "utf8"));
	
	
	// We need to iterate this in a specific order
	let dumpKeys = Object.keys(dump);
	dumpKeys.sort((a, b) => {
		let an = a in unparsedGameData.classes ? getNumParents(a) : 1000;
		let bn = b in unparsedGameData.classes ? getNumParents(b) : 1000;
		if(an != bn) return an - bn;
		return 0;
	});
	
	for(let structName of dumpKeys){
		let newStruct = dump[structName];
		
		if(structName in unparsedGameData.classes){
			let existingStruct = unparsedGameData.classes[structName];
			let existingFields = existingStruct.fields;
			
			let hasPrintedStructName = false;
			function printStructName(){
				if(hasPrintedStructName) return;
				hasPrintedStructName = true;
				
				console.warn("Existing struct " + structName);
			}
			
			for(let fieldName in existingFields){
				if(!(fieldName in newStruct)){
					printStructName();
					console.warn("  Field no longer exists: " + fieldName);
					delete existingFields[fieldName];
					continue;
				}
				
				if(isFieldFromParent(existingStruct, fieldName)){
					printStructName();
					console.warn("  Field comes from parent: " + fieldName + ", deleting here");
					delete existingFields[fieldName];
					continue;
				}
			}
			
			
			for(let fieldName in newStruct){
				if(isFieldFromParent(existingStruct, fieldName)) continue;
				
				let newField = newStruct[fieldName];
				let newType = normalizeDumpType(structName, fieldName, newField);
				
				if(fieldName in existingFields){
					let oldType = normalizeExistingType(existingFields[fieldName]);
					if(oldType.type !== newType.type){
						if(!acceptableConversions.has(`${oldType.type}=${newType.type}`)){
							printStructName();
							console.warn(`  Type mismatch for ${fieldName} in ${structName}: ${oldType.type} vs ${newType.type}`);
							continue;
						}
					}
					
					if(oldType.array && !newType.array){ // We allow upgrading to arrays, but not downgrading
						printStructName();
						console.warn(`  Type array mismatch for ${fieldName} in ${structName}: ${oldType.type}${oldType.array?"[]":""} vs ${newType.type}${newType.array?"[]":""}`);
						continue;
					}
					
					if(newType.indexEnum && oldType.indexEnum !== newType.indexEnum){
						printStructName();
						console.warn(`  Type array index mismatch for ${fieldName} in ${structName}: ${oldType.type}[${oldType.indexEnum||"Unknown"}] vs ${newType.type}[${newType.indexEnum||"Unknown"}]`);
					}
					
					existingFields[fieldName] = simplifyWrittenType(newType, oldType);
				}else{
					//printStructName();
					//console.warn("  New field " + fieldName);
					existingFields[fieldName] = simplifyWrittenType(newType);
				}
			}
			
		}else{
			if(structName[0] == 'C' && !(structName in specificParents)){
				console.warn("Can't merge new struct " + structName + ", need to know what its parent is");
				continue;
			}
			//console.warn("New struct " + structName);
			unparsedGameData.classes[structName] = {
				parent: specificParents[structName],
				fields: {},
			};
			
			if(structName in specificAbstract) unparsedGameData.classes[structName].abstract = true;
			
			let writeTo = unparsedGameData.classes[structName].fields;
			
			for(let fieldName in newStruct){
				let newField = newStruct[fieldName];
				let newType = normalizeDumpType(structName, fieldName, newField);
				writeTo[fieldName] = simplifyWrittenType(newType);
			}
		}
	}
	
	await fs.writeFile(`${__dirname}/../../data/fields.json`, JSON.stringify(unparsedGameData.classes, null, '\t'), "utf8");
})();

function getNumParents(structName:string):number {
	assert(structName in unparsedGameData.classes, `${structName} doesn't exist`);
	let parent = unparsedGameData.classes[structName].parent;
	if(parent == null) return 0;
	assert(parent in unparsedGameData.classes, `${structName} parent ${parent} doesn't exist`);
	return 1 + getNumParents(parent);
}

function isFieldFromParent(existingStruct:(typeof unparsedGameData)["classes"][string], fieldName:string):boolean {
	if(existingStruct.parent == null) return false;
	
	let parentStruct = unparsedGameData.classes[existingStruct.parent];
	assert(parentStruct);
	
	if(fieldName in parentStruct.fields) return true;
	return isFieldFromParent(parentStruct, fieldName);
}

type ExistingFieldType = (typeof unparsedGameData)["classes"][string]["fields"][string];
function normalizeExistingType(obj:ExistingFieldType):Exclude<ExistingFieldType, string> {
	if(typeof obj == "string") return { type: obj };
	return obj;
}

function simplifyWrittenType(newType:{
	array?:true;
	type:string;
	indexEnum?:string;
}, oldType?:ExistingFieldType):ExistingFieldType {
	if(!newType.array && !newType.indexEnum){
		if(typeof oldType == "string" || oldType == undefined || (oldType.minValue === undefined && oldType.maxValue === undefined)){
			return newType.type;
		}
	}
	
	let ret:Exclude<ExistingFieldType, string> = {
		...newType,
	};
	
	if(typeof oldType == "object"){
		if(oldType && !newType.indexEnum && oldType.indexEnum){
			ret.indexEnum = oldType.indexEnum;
		}
		
		if(newType.array === oldType.array){
			if(oldType.minValue !== undefined) ret.minValue = oldType.minValue;
			if(oldType.maxValue !== undefined) ret.maxValue = oldType.maxValue;
		}
	}
	
	if(Object.keys(ret).length == 1){
		return ret.type;
	}
	
	return ret;
}

function normalizeDumpType(structName:string, fieldName:string, obj:{
	array:boolean;
	type:string;
	category:TypeCategory;
}):{
	array?:true;
	type:string;
	indexEnum?:string;
}{
	if(obj.type.startsWith("CFlagArray")){
		assert(obj.array);
		let m = obj.type.match(/^CFlagArray<e_([a-zA-Z0-9_]+)Count>$/);
		assert(m != null, `Bad flag array: ${obj.type}`);
		let enumName = "E" + m[1][0].toUpperCase() + m[1].slice(1);
		
		return {
			type: "bool",
			array: true,
			indexEnum: enumName,
		};
	}
	
	if(structName == "CGame" && fieldName == "PathingConfig"){
		return {type:"bool"};
	}
	
	if(obj.type == "CFlags"){
		assert(obj.array);
		if(fieldName == "AbilityCategories"){
			return {
				type: "bool",
				array: true,
				indexEnum: "EAbilityCategory",
			};
		}else if(fieldName == "Flags"){
			let fullFieldName = `${structName}_${fieldName}`;
			if(fullFieldName in specificFieldFlagIndexEnum){
				return {
					type: "bool",
					array: true,
					indexEnum: specificFieldFlagIndexEnum[fullFieldName],
				};
			}else{
				// Guess
				return {
					type: "bool",
					array: true,
					indexEnum: "E" + structName.slice(1) + "Flag",
				};
			}
		}else{
			//assert(false, `Bad CFlags in struct ${structName}`);
			// Best we can do...
			return {
				type: "bool",
				array: true,
			};
		}
	}
	
	let type = obj.type in typeMapping ? typeMapping[obj.type] : obj.type;
	
	if(obj.array){
		if(obj.type in specialEnumTypes){
			return {
				type: "bool",
				array: true,
				indexEnum: specialEnumTypes[obj.type],
			};
		}
		
		if(obj.category == "Flags"){
			assert(type == "bool", `Field ${fieldName} of type ${obj.type} in ${structName} should be bool if it's flags...`);
		}
		
		return {
			type: type,
			array: true,
		};
	}
	
	assert(obj.category != "Flags"); // Should already be handled...
	
	return {type};
}
