import assert from "assert";

// It seems we can find most types by adding a token and looking through the available types
// Mapping to their default value
const DataFieldTypes = {
	"CString": "",
	"CStringLink": "",
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
	
	"Array": <unknown[]>[],
	"Struct": {},
};

type DataFieldTypes = typeof DataFieldTypes;

type CatalogDataField = ({
	[Type in keyof DataFieldTypes]:{
		name:string;
		category?:string;
		
		type:Type;
		default?:DataFieldTypes[Type];
		subtype?:Type extends "Array"|"Struct" ? CatalogDataField : never;
	}
}[keyof DataFieldTypes]);

interface CatalogSubtype {
	parent:string|null;
	abstract?:boolean;
	fields:CatalogDataField[];
}

function simpleField<T extends keyof DataFieldTypes>(name:string, type:T, def?:DataFieldTypes[T]):CatalogDataField {
	let tmp:CatalogDataField = { name, type };
	if(typeof def != "undefined") tmp.default = def;
	return tmp;
}

// Anything that is shared for absolutely everything in the editor
const editorFields = (catalogName:CatalogName) => [
	simpleField("EditorCategories", "CString"),
	simpleField("EditorDescription", "CStringLink", `${catalogName}/EditorDescription/##id##`),
	simpleField("EditorPrefix", "CStringLink", `${catalogName}/EditorPrefix/##id##`),
	simpleField("EditorSuffix", "CStringLink", `${catalogName}/EditorSuffix/##id##`),
	
	simpleField("Name", "CStringLink", `${catalogName}/Name/##id##`),
	
	// This is stored as a xml comment just before the entry in the xml.
	// But also means we'll need special handling to do it properly.
	// This is done when we load the xml, it inserts the value as a tag when parsing,
	// and transforms it into a comment when encoding
	simpleField("EditorComment", "CString"),
];

const UnspecifiedSubtype = ():CatalogSubtype => ({
	parent: null,
	fields: [],
});

const Subtype = (v:Partial<CatalogSubtype>):CatalogSubtype => {
	// Just here so we can fill in default values later
	assert(v.parent !== undefined);
	assert(v.fields !== undefined);
	
	return v as CatalogSubtype;
};

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

export const CatalogTypesInstance = {
	"Abil":{
		"CAbil": UnspecifiedSubtype(),
		"CAbilArmMagazine": UnspecifiedSubtype(),
		"CAbilAttack": UnspecifiedSubtype(),
		"CAbilAttackModifier": UnspecifiedSubtype(),
		"CAbilAugment": UnspecifiedSubtype(),
		"CAbilBattery": UnspecifiedSubtype(),
		"CAbilBeacon": UnspecifiedSubtype(),
		"CAbilBehavior": UnspecifiedSubtype(),
		"CAbilBuild": UnspecifiedSubtype(),
		"CAbilBuildable": UnspecifiedSubtype(),
		"CAbilEffect": UnspecifiedSubtype(),
		"CAbilEffectInstant": UnspecifiedSubtype(),
		"CAbilEffectTarget": UnspecifiedSubtype(),
		"CAbilHarvest": UnspecifiedSubtype(),
		"CAbilInteract": UnspecifiedSubtype(),
		"CAbilInventory": UnspecifiedSubtype(),
		"CAbilLearn": UnspecifiedSubtype(),
		"CAbilMerge": UnspecifiedSubtype(),
		"CAbilMergeable": UnspecifiedSubtype(),
		"CAbilMorph": UnspecifiedSubtype(),
		"CAbilMorphPlacement": UnspecifiedSubtype(),
		"CAbilMove": UnspecifiedSubtype(),
		"CAbilPawn": UnspecifiedSubtype(),
		"CAbilProgress": UnspecifiedSubtype(),
		"CAbilQueue": UnspecifiedSubtype(),
		"CAbilQueueable": UnspecifiedSubtype(),
		"CAbilRally": UnspecifiedSubtype(),
		"CAbilRedirect": UnspecifiedSubtype(),
		"CAbilRedirectInstant": UnspecifiedSubtype(),
		"CAbilRedirectTarget": UnspecifiedSubtype(),
		"CAbilResearch": UnspecifiedSubtype(),
		"CAbilRevive": UnspecifiedSubtype(),
		"CAbilSpecialize": UnspecifiedSubtype(),
		"CAbilStop": UnspecifiedSubtype(),
		"CAbilTrain": UnspecifiedSubtype(),
		"CAbilTransport": UnspecifiedSubtype(),
		"CAbilWarpTrain": UnspecifiedSubtype(),
		"CAbilWarpable": UnspecifiedSubtype(),
	},
	
	"Accumulator":{
		"CAccumulator": UnspecifiedSubtype(),
		"CAccumulatorAbilLevel": UnspecifiedSubtype(),
		"CAccumulatorArithmetic": UnspecifiedSubtype(),
		"CAccumulatorAttributePoints": UnspecifiedSubtype(),
		"CAccumulatorBehavior": UnspecifiedSubtype(),
		"CAccumulatorCargo": UnspecifiedSubtype(),
		"CAccumulatorConstant": UnspecifiedSubtype(),
		"CAccumulatorDistance": UnspecifiedSubtype(),
		"CAccumulatorEffectAmount": UnspecifiedSubtype(),
		"CAccumulatorSwitch": UnspecifiedSubtype(),
		"CAccumulatorTrackedUnitCount": UnspecifiedSubtype(),
		"CAccumulatorUnitCustomValue": UnspecifiedSubtype(),
		"CAccumulatorUserData": UnspecifiedSubtype(),
		"CAccumulatorVeterancyLevel": UnspecifiedSubtype(),
		"CAccumulatorVitals": UnspecifiedSubtype(),
	},
	
	"Behavior":{
		"CBehavior": UnspecifiedSubtype(),
		"CBehaviorAttackModifier": UnspecifiedSubtype(),
		"CBehaviorAttribute": UnspecifiedSubtype(),
		"CBehaviorBuff": UnspecifiedSubtype(),
		"CBehaviorClickResponse": UnspecifiedSubtype(),
		"CBehaviorConjoined": UnspecifiedSubtype(),
		"CBehaviorCreepSource": UnspecifiedSubtype(),
		"CBehaviorJump": UnspecifiedSubtype(),
		"CBehaviorPowerSource": UnspecifiedSubtype(),
		"CBehaviorPowerUser": UnspecifiedSubtype(),
		"CBehaviorResource": UnspecifiedSubtype(),
		"CBehaviorReveal": UnspecifiedSubtype(),
		"CBehaviorSpawn": UnspecifiedSubtype(),
		"CBehaviorUnitTracker": UnspecifiedSubtype(),
		"CBehaviorVeterancy": UnspecifiedSubtype(),
		"CBehaviorWander": UnspecifiedSubtype(),
	},
	
	"DataCollection":{
		"CDataCollection": UnspecifiedSubtype(),
		"CDataCollectionAbil": UnspecifiedSubtype(),
		"CDataCollectionUnit": UnspecifiedSubtype(),
		"CDataCollectionUpgrade": UnspecifiedSubtype(),
	},
	
	"DataCollectionPattern":{
		"CDataCollectionPattern": UnspecifiedSubtype(),
	},
	
	"Effect":{
		"CEffect": UnspecifiedSubtype(),
		"CEffectAddTrackedUnit": UnspecifiedSubtype(),
		"CEffectAddTrackedUnits": UnspecifiedSubtype(),
		"CEffectApplyBehavior": UnspecifiedSubtype(),
		"CEffectApplyForce": UnspecifiedSubtype(),
		"CEffectApplyKinetic": UnspecifiedSubtype(),
		"CEffectCancelOrder": UnspecifiedSubtype(),
		"CEffectClearTrackedUnits": UnspecifiedSubtype(),
		"CEffectCreateHealer": UnspecifiedSubtype(),
		"CEffectCreatePersistent": UnspecifiedSubtype(),
		"CEffectCreateUnit": UnspecifiedSubtype(),
		"CEffectCreep": UnspecifiedSubtype(),
		"CEffectDamage": UnspecifiedSubtype(),
		"CEffectDestroyPersistent": UnspecifiedSubtype(),
		"CEffectEnumArea": UnspecifiedSubtype(),
		"CEffectEnumInventory": UnspecifiedSubtype(),
		"CEffectEnumMagazine": UnspecifiedSubtype(),
		"CEffectEnumTrackedUnits": UnspecifiedSubtype(),
		"CEffectEnumTransport": UnspecifiedSubtype(),
		"CEffectIssueOrder": UnspecifiedSubtype(),
		"CEffectLastTarget": UnspecifiedSubtype(),
		"CEffectLaunchMissile": UnspecifiedSubtype(),
		"CEffectLoadContainer": UnspecifiedSubtype(),
		"CEffectModifyPlayer": UnspecifiedSubtype(),
		"CEffectModifyUnit": UnspecifiedSubtype(),
		"CEffectMorph": UnspecifiedSubtype(),
		"CEffectRandomPointInCircle": UnspecifiedSubtype(),
		"CEffectRedirectMissile": UnspecifiedSubtype(),
		"CEffectReleaseMagazine": UnspecifiedSubtype(),
		"CEffectRemoveBehavior": UnspecifiedSubtype(),
		"CEffectRemoveKinetic": UnspecifiedSubtype(),
		"CEffectRemoveTrackedUnit": UnspecifiedSubtype(),
		"CEffectReturnMagazine": UnspecifiedSubtype(),
		"CEffectSet": UnspecifiedSubtype(),
		"CEffectSwitch": UnspecifiedSubtype(),
		"CEffectTeleport": UnspecifiedSubtype(),
		"CEffectTransferBehavior": UnspecifiedSubtype(),
		"CEffectUseCalldown": UnspecifiedSubtype(),
		"CEffectUseMagazine": UnspecifiedSubtype(),
		"CEffectUserData": UnspecifiedSubtype(),
	},
	
	"Footprint":{
		"CFootprint": UnspecifiedSubtype(),
	},
	
	"Item":{
		"CItem": UnspecifiedSubtype(),
		"CItemAbil": UnspecifiedSubtype(),
		"CItemAbilPowerUp": UnspecifiedSubtype(),
		"CItemEffect": UnspecifiedSubtype(),
		"CItemEffectInstant": UnspecifiedSubtype(),
		"CItemEffectTarget": UnspecifiedSubtype(),
	},
	
	"Loot":{
		"CLoot": UnspecifiedSubtype(),
		"CLootEffect": UnspecifiedSubtype(),
		"CLootItem": UnspecifiedSubtype(),
		"CLootSet": UnspecifiedSubtype(),
		"CLootSpawn": UnspecifiedSubtype(),
		"CLootUnit": UnspecifiedSubtype(),
	},
	
	"Mover":{
		"CMover": UnspecifiedSubtype(),
		"CMoverAvoid": UnspecifiedSubtype(),
		"CMoverFlock": UnspecifiedSubtype(),
		"CMoverMissile": UnspecifiedSubtype(),
	},
	
	"PlayerResponse":{
		"CPlayerResponse": UnspecifiedSubtype(),
		"CPlayerResponseUnit": UnspecifiedSubtype(),
		"CPlayerResponseUnitBirth": UnspecifiedSubtype(),
		"CPlayerResponseUnitDamage": UnspecifiedSubtype(),
		"CPlayerResponseUnitDeath": UnspecifiedSubtype(),
	},
	
	"Requirement":{
		"CRequirement": UnspecifiedSubtype(),
	},
	
	"Turret":{
		"CTurret": UnspecifiedSubtype(),
	},
	
	"Unit":{
		"CUnit": UnspecifiedSubtype(),
		"CUnitHero": UnspecifiedSubtype(),
	},
	
	"Upgrade":{
		"CUpgrade": UnspecifiedSubtype(),
	},
	
	"Validator":{
		"CValidator": UnspecifiedSubtype(),
		"CValidatorCombine": UnspecifiedSubtype(),
		"CValidatorCompareTrackedUnitsCount": UnspecifiedSubtype(),
		"CValidatorCondition": UnspecifiedSubtype(),
		"CValidatorEffect": UnspecifiedSubtype(),
		"CValidatorEffectCompareDodged": UnspecifiedSubtype(),
		"CValidatorEffectCompareEvaded": UnspecifiedSubtype(),
		"CValidatorEffectTreeUserData": UnspecifiedSubtype(),
		"CValidatorFunction": UnspecifiedSubtype(),
		"CValidatorGameCommanderActive": UnspecifiedSubtype(),
		"CValidatorGameCompareTerrain": UnspecifiedSubtype(),
		"CValidatorGameCompareTimeEvent": UnspecifiedSubtype(),
		"CValidatorGameCompareTimeOfDay": UnspecifiedSubtype(),
		"CValidatorIsUnitTracked": UnspecifiedSubtype(),
		"CValidatorLocation": UnspecifiedSubtype(),
		"CValidatorLocationArc": UnspecifiedSubtype(),
		"CValidatorLocationCompareCliffLevel": UnspecifiedSubtype(),
		"CValidatorLocationComparePower": UnspecifiedSubtype(),
		"CValidatorLocationCompareRange": UnspecifiedSubtype(),
		"CValidatorLocationCreep": UnspecifiedSubtype(),
		"CValidatorLocationCrossChasm": UnspecifiedSubtype(),
		"CValidatorLocationCrossCliff": UnspecifiedSubtype(),
		"CValidatorLocationEnumArea": UnspecifiedSubtype(),
		"CValidatorLocationInPlayableMapArea": UnspecifiedSubtype(),
		"CValidatorLocationPathable": UnspecifiedSubtype(),
		"CValidatorLocationPlacement": UnspecifiedSubtype(),
		"CValidatorLocationShrub": UnspecifiedSubtype(),
		"CValidatorLocationType": UnspecifiedSubtype(),
		"CValidatorLocationVision": UnspecifiedSubtype(),
		"CValidatorPlayer": UnspecifiedSubtype(),
		"CValidatorPlayerAlliance": UnspecifiedSubtype(),
		"CValidatorPlayerCompareDifficulty": UnspecifiedSubtype(),
		"CValidatorPlayerCompareFoodAvailable": UnspecifiedSubtype(),
		"CValidatorPlayerCompareFoodUsed": UnspecifiedSubtype(),
		"CValidatorPlayerCompareFoodMade": UnspecifiedSubtype(),
		"CValidatorPlayerCompareRace": UnspecifiedSubtype(),
		"CValidatorPlayerCompareResource": UnspecifiedSubtype(),
		"CValidatorPlayerCompareResult": UnspecifiedSubtype(),
		"CValidatorPlayerCompareType": UnspecifiedSubtype(),
		"CValidatorPlayerFood": UnspecifiedSubtype(),
		"CValidatorPlayerRequirement": UnspecifiedSubtype(),
		"CValidatorUnit": UnspecifiedSubtype(),
		"CValidatorUnitAI": UnspecifiedSubtype(),
		"CValidatorUnitAbil": UnspecifiedSubtype(),
		"CValidatorUnitAlliance": UnspecifiedSubtype(),
		"CValidatorUnitArmor": UnspecifiedSubtype(),
		"CValidatorUnitBehaviorStackAlias": UnspecifiedSubtype(),
		"CValidatorUnitBehaviorState": UnspecifiedSubtype(),
		"CValidatorUnitCombatAI": UnspecifiedSubtype(),
		"CValidatorUnitCompareAIAreaEvalRatio": UnspecifiedSubtype(),
		"CValidatorUnitCompareAbilLevel": UnspecifiedSubtype(),
		"CValidatorUnitCompareAbilSkillPoint": UnspecifiedSubtype(),
		"CValidatorUnitCompareAbilStage": UnspecifiedSubtype(),
		"CValidatorUnitCompareAttackPriority": UnspecifiedSubtype(),
		"CValidatorUnitCompareBehaviorCount": UnspecifiedSubtype(),
		"CValidatorUnitCompareCargo": UnspecifiedSubtype(),
		"CValidatorUnitCompareChargeUsed": UnspecifiedSubtype(),
		"CValidatorUnitCompareCooldown": UnspecifiedSubtype(),
		"CValidatorUnitCompareDamageDealtTime": UnspecifiedSubtype(),
		"CValidatorUnitCompareDamageTakenTime": UnspecifiedSubtype(),
		"CValidatorUnitCompareDeath": UnspecifiedSubtype(),
		"CValidatorUnitCompareDetectRange": UnspecifiedSubtype(),
		"CValidatorUnitCompareField": UnspecifiedSubtype(),
		"CValidatorUnitCompareHeight": UnspecifiedSubtype(),
		"CValidatorUnitCompareKillCount": UnspecifiedSubtype(),
		"CValidatorUnitCompareMarkerCount": UnspecifiedSubtype(),
		"CValidatorUnitCompareMoverPhase": UnspecifiedSubtype(),
		"CValidatorUnitCompareOrderCount": UnspecifiedSubtype(),
		"CValidatorUnitCompareOrderTargetRange": UnspecifiedSubtype(),
		"CValidatorUnitComparePowerSourceLevel": UnspecifiedSubtype(),
		"CValidatorUnitComparePowerUserLevel": UnspecifiedSubtype(),
		"CValidatorUnitCompareRallyPointCount": UnspecifiedSubtype(),
		"CValidatorUnitCompareResourceContents": UnspecifiedSubtype(),
		"CValidatorUnitCompareResourceHarvesters": UnspecifiedSubtype(),
		"CValidatorUnitCompareSpeed": UnspecifiedSubtype(),
		"CValidatorUnitCompareVeterancyLevel": UnspecifiedSubtype(),
		"CValidatorUnitCompareVital": UnspecifiedSubtype(),
		"CValidatorUnitCompareVitality": UnspecifiedSubtype(),
		"CValidatorUnitDetected": UnspecifiedSubtype(),
		"CValidatorUnitFilters": UnspecifiedSubtype(),
		"CValidatorUnitFlying": UnspecifiedSubtype(),
		"CValidatorUnitInWeaponRange": UnspecifiedSubtype(),
		"CValidatorUnitInventory": UnspecifiedSubtype(),
		"CValidatorUnitInventoryContainsItem": UnspecifiedSubtype(),
		"CValidatorUnitInventoryIsFull": UnspecifiedSubtype(),
		"CValidatorUnitKinetic": UnspecifiedSubtype(),
		"CValidatorUnitLastDamagePlayer": UnspecifiedSubtype(),
		"CValidatorUnitMissileNullified": UnspecifiedSubtype(),
		"CValidatorUnitMover": UnspecifiedSubtype(),
		"CValidatorUnitOrder": UnspecifiedSubtype(),
		"CValidatorUnitOrderQueue": UnspecifiedSubtype(),
		"CValidatorUnitOrderTargetPathable": UnspecifiedSubtype(),
		"CValidatorUnitOrderTargetType": UnspecifiedSubtype(),
		"CValidatorUnitPathable": UnspecifiedSubtype(),
		"CValidatorUnitPathing": UnspecifiedSubtype(),
		"CValidatorUnitScanning": UnspecifiedSubtype(),
		"CValidatorUnitState": UnspecifiedSubtype(),
		"CValidatorUnitTestWeaponType": UnspecifiedSubtype(),
		"CValidatorUnitType": UnspecifiedSubtype(),
		"CValidatorUnitWeaponAnimating": UnspecifiedSubtype(),
		"CValidatorUnitWeaponFiring": UnspecifiedSubtype(),
		"CValidatorUnitWeaponPlane": UnspecifiedSubtype(),
	},
	
	"Weapon":{
		"CWeapon": UnspecifiedSubtype(),
		"CWeaponLegacy": UnspecifiedSubtype(),
		"CWeaponStrafe": UnspecifiedSubtype(),
	},
	
	"ArmyCategory":{
		"CArmyCategory": UnspecifiedSubtype(),
	},
	
	"ArmyUnit":{
		"CArmyUnit": UnspecifiedSubtype(),
	},
	
	"ArmyUpgrade":{
		"CArmyUpgrade": UnspecifiedSubtype(),
	},
	
	"BankCondition":{
		"CBankConditionCombine": UnspecifiedSubtype(),
		"CBankConditionCompare": UnspecifiedSubtype(),
		"CBankConditionCompareValueCount": UnspecifiedSubtype(),
		"CBankConditionCompareValueInteger": UnspecifiedSubtype(),
		"CBankConditionCompareValueString": UnspecifiedSubtype(),
		"CBankConditionCompareValueSum": UnspecifiedSubtype(),
		"CBankConditionCurrentMap": UnspecifiedSubtype(),
	},
	
	"Campaign":{
		"CCampaign": UnspecifiedSubtype(),
	},
	
	"Character":{
		"CCharacter": UnspecifiedSubtype(),
	},
	
	"Commander":{
		"CCommander": UnspecifiedSubtype(),
	},
	
	"Conversation":{
		"CConversation": UnspecifiedSubtype(),
	},
	
	"ConversationState":{
		"CConversationState": UnspecifiedSubtype(),
	},
	
	"Location":{
		"CLocation": UnspecifiedSubtype(),
	},
	
	"Map":{
		"CMap": UnspecifiedSubtype(),
	},
	
	"Objective":{
		"CObjective": UnspecifiedSubtype(),
	},
	
	"Preload":{
		"CPreload": UnspecifiedSubtype(),
		"CPreloadActor": UnspecifiedSubtype(),
		"CPreloadAsset": UnspecifiedSubtype(),
		"CPreloadConversation": UnspecifiedSubtype(),
		"CPreloadModel": UnspecifiedSubtype(),
		"CPreloadScene": UnspecifiedSubtype(),
		"CPreloadSound": UnspecifiedSubtype(),
		"CPreloadUnit": UnspecifiedSubtype(),
	},
	
	"Actor":{
		"CActor": UnspecifiedSubtype(),
		"CActorAction": UnspecifiedSubtype(),
		"CActorActionOverride": UnspecifiedSubtype(),
		"CActorArc": UnspecifiedSubtype(),
		"CActorBase": UnspecifiedSubtype(),
		"CActorBatch": UnspecifiedSubtype(),
		"CActorBeamSimple": UnspecifiedSubtype(),
		"CActorBeamStandard": UnspecifiedSubtype(),
		"CActorBearings": UnspecifiedSubtype(),
		"CActorBlob": UnspecifiedSubtype(),
		"CActorCamera": UnspecifiedSubtype(),
		"CActorCameraModel": UnspecifiedSubtype(),
		"CActorCreep": UnspecifiedSubtype(),
		"CActorCutscene": UnspecifiedSubtype(),
		"CActorDoodad": UnspecifiedSubtype(),
		"CActorDoodadPreserver": UnspecifiedSubtype(),
		"CActorEditorCamera": UnspecifiedSubtype(),
		"CActorEditorPoint": UnspecifiedSubtype(),
		"CActorEventMacro": UnspecifiedSubtype(),
		"CActorEventMacroRunnable": UnspecifiedSubtype(),
		"CActorFoliageFXSpawner": UnspecifiedSubtype(),
		"CActorForce": UnspecifiedSubtype(),
		"CActorForceBox": UnspecifiedSubtype(),
		"CActorForceConeRoundedEnd": UnspecifiedSubtype(),
		"CActorForceCylinder": UnspecifiedSubtype(),
		"CActorForceSphere": UnspecifiedSubtype(),
		"CActorGlobalConfig": UnspecifiedSubtype(),
		"CActorLightModel": UnspecifiedSubtype(),
		"CActorLightOmni": UnspecifiedSubtype(),
		"CActorLightOmniModel": UnspecifiedSubtype(),
		"CActorLightSpot": UnspecifiedSubtype(),
		"CActorLightSpotModel": UnspecifiedSubtype(),
		"CActorList": UnspecifiedSubtype(),
		"CActorLookAt": UnspecifiedSubtype(),
		"CActorMinimap": UnspecifiedSubtype(),
		"CActorMissile": UnspecifiedSubtype(),
		"CActorModel": UnspecifiedSubtype(),
		"CActorModelMaterial": UnspecifiedSubtype(),
		"CActorPortrait": UnspecifiedSubtype(),
		"CActorPower": UnspecifiedSubtype(),
		"CActorProgress": UnspecifiedSubtype(),
		"CActorPropertyCurveSet": UnspecifiedSubtype(),
		"CActorQuad": UnspecifiedSubtype(),
		"CActorQueryResponse": UnspecifiedSubtype(),
		"CActorRange": UnspecifiedSubtype(),
		"CActorRegion": UnspecifiedSubtype(),
		"CActorRegionArc": UnspecifiedSubtype(),
		"CActorRegionCircle": UnspecifiedSubtype(),
		"CActorRegionGame": UnspecifiedSubtype(),
		"CActorRegionQuad": UnspecifiedSubtype(),
		"CActorRegionWater": UnspecifiedSubtype(),
		"CActorScene": UnspecifiedSubtype(),
		"CActorSelection": UnspecifiedSubtype(),
		"CActorSetQueried": UnspecifiedSubtype(),
		"CActorShadow": UnspecifiedSubtype(),
		"CActorShield": UnspecifiedSubtype(),
		"CActorShieldImpact": UnspecifiedSubtype(),
		"CActorSimple": UnspecifiedSubtype(),
		"CActorSite": UnspecifiedSubtype(),
		"CActorSiteBillboard": UnspecifiedSubtype(),
		"CActorSiteMover": UnspecifiedSubtype(),
		"CActorSiteOp2DRotation": UnspecifiedSubtype(),
		"CActorSiteOpAction": UnspecifiedSubtype(),
		"CActorSiteOpAttach": UnspecifiedSubtype(),
		"CActorSiteOpAttachVolume": UnspecifiedSubtype(),
		"CActorSiteOpBanker": UnspecifiedSubtype(),
		"CActorSiteOpBankerUnit": UnspecifiedSubtype(),
		"CActorSiteOpBasic": UnspecifiedSubtype(),
		"CActorSiteOpCursor": UnspecifiedSubtype(),
		"CActorSiteOpDeathMotion": UnspecifiedSubtype(),
		"CActorSiteOpEffect": UnspecifiedSubtype(),
		"CActorSiteOpForward": UnspecifiedSubtype(),
		"CActorSiteOpGameCameraFollow": UnspecifiedSubtype(),
		"CActorSiteOpHeight": UnspecifiedSubtype(),
		"CActorSiteOpHigherOfTerrainAndWater": UnspecifiedSubtype(),
		"CActorSiteOpHostBearings": UnspecifiedSubtype(),
		"CActorSiteOpHostedOffset": UnspecifiedSubtype(),
		"CActorSiteOpIncoming": UnspecifiedSubtype(),
		"CActorSiteOpLocalOffset": UnspecifiedSubtype(),
		"CActorSiteOpOrbiter": UnspecifiedSubtype(),
		"CActorSiteOpPatch": UnspecifiedSubtype(),
		"CActorSiteOpPhysicsImpact": UnspecifiedSubtype(),
		"CActorSiteOpRandomPointInCircle": UnspecifiedSubtype(),
		"CActorSiteOpRandomPointInCrossbar": UnspecifiedSubtype(),
		"CActorSiteOpRandomPointInSphere": UnspecifiedSubtype(),
		"CActorSiteOpRotationExplicit": UnspecifiedSubtype(),
		"CActorSiteOpRotationRandom": UnspecifiedSubtype(),
		"CActorSiteOpRotationSmooth": UnspecifiedSubtype(),
		"CActorSiteOpRotationVariancer": UnspecifiedSubtype(),
		"CActorSiteOpRotator": UnspecifiedSubtype(),
		"CActorSiteOpSelectionOffset": UnspecifiedSubtype(),
		"CActorSiteOpSerpentHead": UnspecifiedSubtype(),
		"CActorSiteOpSerpentSegment": UnspecifiedSubtype(),
		"CActorSiteOpShadow": UnspecifiedSubtype(),
		"CActorSiteOpTether": UnspecifiedSubtype(),
		"CActorSiteOpTilter": UnspecifiedSubtype(),
		"CActorSiteOpTipability": UnspecifiedSubtype(),
		"CActorSiteOpUp": UnspecifiedSubtype(),
		"CActorSiteOpZ": UnspecifiedSubtype(),
		"CActorSiteOrbiter": UnspecifiedSubtype(),
		"CActorSiteRocker": UnspecifiedSubtype(),
		"CActorSnapshot": UnspecifiedSubtype(),
		"CActorSound": UnspecifiedSubtype(),
		"CActorSplat": UnspecifiedSubtype(),
		"CActorSquib": UnspecifiedSubtype(),
		"CActorStateMonitor": UnspecifiedSubtype(),
		"CActorTerrain": UnspecifiedSubtype(),
		"CActorTerrainDeformer": UnspecifiedSubtype(),
		"CActorText": UnspecifiedSubtype(),
		"CActorTurret": UnspecifiedSubtype(),
		"CActorUnit": UnspecifiedSubtype(),
	},
	
	"AttachMethod":{
		"CAttachMethod": UnspecifiedSubtype(),
		"CAttachMethodArcTest": UnspecifiedSubtype(),
		"CAttachMethodAttachType": UnspecifiedSubtype(),
		"CAttachMethodBestMatch": UnspecifiedSubtype(),
		"CAttachMethodFilter": UnspecifiedSubtype(),
		"CAttachMethodIncoming": UnspecifiedSubtype(),
		"CAttachMethodNodeOccupancy": UnspecifiedSubtype(),
		"CAttachMethodNodeOccupancy2": UnspecifiedSubtype(),
		"CAttachMethodNumericField": UnspecifiedSubtype(),
		"CAttachMethodPattern": UnspecifiedSubtype(),
		"CAttachMethodPortAllocator": UnspecifiedSubtype(),
		"CAttachMethodProximity": UnspecifiedSubtype(),
		"CAttachMethodRandom": UnspecifiedSubtype(),
		"CAttachMethodReduction": UnspecifiedSubtype(),
		"CAttachMethodVolumesRequery": UnspecifiedSubtype(),
		"CAttachMethodVolumesTargets": UnspecifiedSubtype(),
		"CAttachMethodVolumesWeightedPick": UnspecifiedSubtype(),
	},
	
	"Beam":{
		"CBeamAsyncLinear": UnspecifiedSubtype(),
	},
	
	"Button":{
		"CButton": UnspecifiedSubtype(),
	},
	
	"DSP":{
		"CDSPChorus": UnspecifiedSubtype(),
		"CDSPCompressor": UnspecifiedSubtype(),
		"CDSPCustomCompressor": UnspecifiedSubtype(),
		"CDSPDistortion": UnspecifiedSubtype(),
		"CDSPEcho": UnspecifiedSubtype(),
		"CDSPFlange": UnspecifiedSubtype(),
		"CDSPHighPass": UnspecifiedSubtype(),
		"CDSPLimiter": UnspecifiedSubtype(),
		"CDSPLowPass": UnspecifiedSubtype(),
		"CDSPLowPassSimple": UnspecifiedSubtype(),
		"CDSPNormalize": UnspecifiedSubtype(),
		"CDSPParamEQ": UnspecifiedSubtype(),
		"CDSPPitchShift": UnspecifiedSubtype(),
		"CDSPReverb": UnspecifiedSubtype(),
	},
	
	"LensFlareSet":{
		"CLensFlareSet": UnspecifiedSubtype(),
	},
	
	"Light":{
		"CLight": UnspecifiedSubtype(),
	},
	
	"Model":{
		"CModel": UnspecifiedSubtype(),
		"CModelFoliage": UnspecifiedSubtype(),
	},
	
	"Reverb":{
		"CReverb": UnspecifiedSubtype(),
	},
	
	"Shape":{
		"CShape": UnspecifiedSubtype(),
		"CShapeArc": UnspecifiedSubtype(),
		"CShapeQuad": UnspecifiedSubtype(),
	},
	
	"Sound":{
		"CSound": UnspecifiedSubtype(),
	},
	
	"SoundExclusivity":{
		"CSoundExclusivity": UnspecifiedSubtype(),
	},
	
	"SoundMixSnapshot":{
		"CSoundMixSnapshot": UnspecifiedSubtype(),
	},
	
	"Soundtrack":{
		"CSoundtrack": UnspecifiedSubtype(),
	},
	
	"Texture":{
		"CTexture": UnspecifiedSubtype(),
	},
	
	"Cliff":{
		"CCliff": UnspecifiedSubtype(),
	},
	
	"CliffMesh":{
		"CCliffMesh": UnspecifiedSubtype(),
	},
	
	"FoW":{
		"CFoW": UnspecifiedSubtype(),
	},
	
	"PhysicsMaterial":{
		"CPhysicsMaterial": UnspecifiedSubtype(),
	},
	
	"Terrain":{
		"CTerrain": UnspecifiedSubtype(),
	},
	
	"TerrainObject":{
		"CTerrainObject": UnspecifiedSubtype(),
		"CCliffDoodad": UnspecifiedSubtype(), // I know, it's weird... but it's here
	},
	
	"TerrainTex":{
		"CTerrainTex": UnspecifiedSubtype(),
	},
	
	"Tile":{
		"CTile": UnspecifiedSubtype(),
	},
	
	"Water":{
		"CWater": UnspecifiedSubtype(),
	},
	
	"Artifact":{
		"CArtifact": UnspecifiedSubtype(),
	},
	
	"ArtifactSlot":{
		"CArtifactSlot": UnspecifiedSubtype(),
	},
	
	"Config":{
		"CConfig": UnspecifiedSubtype(),
	},
	
	"Hero":{
		"CHero": UnspecifiedSubtype(),
	},
	
	"HeroAbil":{
		"CHeroAbil": UnspecifiedSubtype(),
	},
	
	"HeroStat":{
		"CHeroStat": UnspecifiedSubtype(),
	},
	
	"Mount":{
		"CMount": UnspecifiedSubtype(),
	},
	
	"Skin":{
		"CSkin": UnspecifiedSubtype(),
	},
	
	"Talent":{
		"CTalent": UnspecifiedSubtype(),
	},
	
	"TalentProfile":{
		"CTalentProfile": UnspecifiedSubtype(),
	},
	
	"VoiceOver":{
		"CVoiceOver": UnspecifiedSubtype(),
	},
	
	"Alert":{
		"CAlert": UnspecifiedSubtype(),
	},
	
	"RaceBannerPack":{
		"CRaceBannerPack": UnspecifiedSubtype(),
	},
	
	"Camera":{
		"CCamera": UnspecifiedSubtype(),
	},
	
	"ConsoleSkin":{
		"CConsoleSkin": UnspecifiedSubtype(),
	},
	
	"Cursor":{
		"CCursor": UnspecifiedSubtype(),
	},
	
	"GameUI":{
		"CGameUI": UnspecifiedSubtype(),
	},
	
	"Bundle":{
		"CBundle": UnspecifiedSubtype(),
	},
	
	"Ping":{
		"CPing": UnspecifiedSubtype(),
	},
	
	"ColorStyle":{
		"CColorStyle": UnspecifiedSubtype(),
	},
	
	"Achievement":{
		"CAchievement": UnspecifiedSubtype(),
	},
	
	"AchievementTerm":{
		"CAchievementTerm": UnspecifiedSubtype(),
		"CAchievementTermAbilInteract": UnspecifiedSubtype(),
		"CAchievementTermAbilLoad": UnspecifiedSubtype(),
		"CAchievementTermAbilUse": UnspecifiedSubtype(),
		"CAchievementTermAchievement": UnspecifiedSubtype(),
		"CAchievementTermBehaviorCount": UnspecifiedSubtype(),
		"CAchievementTermBehaviorElapsed": UnspecifiedSubtype(),
		"CAchievementTermBehaviorState": UnspecifiedSubtype(),
		"CAchievementTermCombine": UnspecifiedSubtype(),
		"CAchievementTermEffectAbsorbed": UnspecifiedSubtype(),
		"CAchievementTermEffectDamaged": UnspecifiedSubtype(),
		"CAchievementTermEffectDodged": UnspecifiedSubtype(),
		"CAchievementTermEffectHealed": UnspecifiedSubtype(),
		"CAchievementTermEffectKilled": UnspecifiedSubtype(),
		"CAchievementTermEffectUse": UnspecifiedSubtype(),
		"CAchievementTermGeneric": UnspecifiedSubtype(),
		"CAchievementTermReplay": UnspecifiedSubtype(),
		"CAchievementTermScoreValue": UnspecifiedSubtype(),
		"CAchievementTermTime": UnspecifiedSubtype(),
		"CAchievementTermUnitBirth": UnspecifiedSubtype(),
		"CAchievementTermUnitDeath": UnspecifiedSubtype(),
		"CAchievementTermUnitKills": UnspecifiedSubtype(),
		"CAchievementTermUnitRegen": UnspecifiedSubtype(),
		"CAchievementTermUnitSupplyLoss": UnspecifiedSubtype(),
	},
	
	"Boost":{
		"CBoost": UnspecifiedSubtype(),
	},
	
	"DecalPack":{
		"CDecalPack": UnspecifiedSubtype(),
	},
	
	"Emoticon":{
		"CEmoticon": UnspecifiedSubtype(),
	},
	
	"EmoticonPack":{
		"CEmoticonPack": UnspecifiedSubtype(),
	},
	
	"Error":{
	},
	
	"Game":{
		"CGame": UnspecifiedSubtype(),
	},
	
	"Herd":{
		"CHerd": UnspecifiedSubtype(),
	},
	
	"HerdNode":{
		"CHerdNode": UnspecifiedSubtype(),
	},
	
	"ItemClass":{
		"CItemClass": UnspecifiedSubtype(),
	},
	
	"ItemContainer":{
		"CItemContainer": UnspecifiedSubtype(),
	},
	
	"Kinetic":{
		"CKinetic": UnspecifiedSubtype(),
		"CKineticDistance": UnspecifiedSubtype(),
		"CKineticFollow": UnspecifiedSubtype(),
		"CKineticRotate": UnspecifiedSubtype(),
		"CKineticSequence": UnspecifiedSubtype(),
		"CKineticSet": UnspecifiedSubtype(),
		"CKineticTranslate": UnspecifiedSubtype(),
	},
	
	"PortraitPack":{
		"CPortraitPack": UnspecifiedSubtype(),
	},
	
	"PremiumMap":{
		"CPremiumMap": UnspecifiedSubtype(),
	},
	
	"Race":{
		"CRace": UnspecifiedSubtype(),
	},
	
	"RequirementNode":{
		"CRequirementNode": UnspecifiedSubtype(),
		"CRequirementAllowAbil": UnspecifiedSubtype(),
		"CRequirementAllowBehavior": UnspecifiedSubtype(),
		"CRequirementAllowUnit": UnspecifiedSubtype(),
		"CRequirementAllowUpgrade": UnspecifiedSubtype(),
		"CRequirementAnd": UnspecifiedSubtype(),
		"CRequirementConst": UnspecifiedSubtype(),
		"CRequirementCountAbil": UnspecifiedSubtype(),
		"CRequirementCountBehavior": UnspecifiedSubtype(),
		"CRequirementCountUnit": UnspecifiedSubtype(),
		"CRequirementCountUpgrade": UnspecifiedSubtype(),
		"CRequirementDiv": UnspecifiedSubtype(),
		"CRequirementEq": UnspecifiedSubtype(),
		"CRequirementGT": UnspecifiedSubtype(),
		"CRequirementGTE": UnspecifiedSubtype(),
		"CRequirementLT": UnspecifiedSubtype(),
		"CRequirementLTE": UnspecifiedSubtype(),
		"CRequirementMod": UnspecifiedSubtype(),
		"CRequirementMul": UnspecifiedSubtype(),
		"CRequirementNE": UnspecifiedSubtype(),
		"CRequirementNot": UnspecifiedSubtype(),
		"CRequirementOdd": UnspecifiedSubtype(),
		"CRequirementOr": UnspecifiedSubtype(),
		"CRequirementSum": UnspecifiedSubtype(),
		"CRequirementXor": UnspecifiedSubtype(),
	},
	
	"Reward":{
		"CReward": UnspecifiedSubtype(),
		"CRewardConsoleSkin": UnspecifiedSubtype(),
		"CRewardDecal": UnspecifiedSubtype(),
		"CRewardEmoticon": UnspecifiedSubtype(),
		"CRewardIcon": UnspecifiedSubtype(),
		"CRewardModel": UnspecifiedSubtype(),
		"CRewardPoints": UnspecifiedSubtype(),
		"CRewardPortrait": UnspecifiedSubtype(),
		"CRewardPortraitInGame": UnspecifiedSubtype(),
		"CRewardRaceBanner": UnspecifiedSubtype(),
		"CRewardSpray": UnspecifiedSubtype(),
		"CRewardSprayUseDecal": UnspecifiedSubtype(),
		"CRewardTrophy": UnspecifiedSubtype(),
		"CRewardVoicePack": UnspecifiedSubtype(),
	},
	
	"ScoreResult":{
		"CScoreResult": UnspecifiedSubtype(),
		"CScoreResultBuildOrder": UnspecifiedSubtype(),
		"CScoreResultExperience": UnspecifiedSubtype(),
		"CScoreResultGraph": UnspecifiedSubtype(),
		"CScoreResultPerformance": UnspecifiedSubtype(),
		"CScoreResultRoot": UnspecifiedSubtype(),
		"CScoreResultScore": UnspecifiedSubtype(),
	},
	
	"ScoreValue":{
		"CScoreValue": UnspecifiedSubtype(),
		"CScoreValueCombine": UnspecifiedSubtype(),
		"CScoreValueConstant": UnspecifiedSubtype(),
		"CScoreValueCustom": UnspecifiedSubtype(),
		"CScoreValueStandard": UnspecifiedSubtype(),
	},
	
	"SkinPack":{
		"CSkinPack": UnspecifiedSubtype(),
	},
	
	"Spray":{
		"CSpray": UnspecifiedSubtype(),
	},
	
	"SprayPack":{
		"CSprayPack": UnspecifiedSubtype(),
	},
	
	"TacCooldown":{
		"CTacCooldown": UnspecifiedSubtype(),
	},
	
	"Tactical":{
		"CTactical": UnspecifiedSubtype(),
		"CTacticalOrder": UnspecifiedSubtype(),
		"CTacticalSet": UnspecifiedSubtype(),
	},
	
	"TargetFind":{
		"CTargetFind": UnspecifiedSubtype(),
		"CTargetFindBestPoint": UnspecifiedSubtype(),
		"CTargetFindEffect": UnspecifiedSubtype(),
		"CTargetFindEnumArea": UnspecifiedSubtype(),
		"CTargetFindLastAttacker": UnspecifiedSubtype(),
		"CTargetFindOffset": UnspecifiedSubtype(),
		"CTargetFindOrder": UnspecifiedSubtype(),
		"CTargetFindRallyPoint": UnspecifiedSubtype(),
		"CTargetFindSet": UnspecifiedSubtype(),
		"CTargetFindWorkerRallyPoint": UnspecifiedSubtype(),
	},
	
	"TargetSort":{
		"CTargetSort": UnspecifiedSubtype(),
		"CTargetSortAlliance": UnspecifiedSubtype(),
		"CTargetSortAngle": UnspecifiedSubtype(),
		"CTargetSortBehaviorCount": UnspecifiedSubtype(),
		"CTargetSortBehaviorDuration": UnspecifiedSubtype(),
		"CTargetSortChargeCount": UnspecifiedSubtype(),
		"CTargetSortChargeRegen": UnspecifiedSubtype(),
		"CTargetSortCooldown": UnspecifiedSubtype(),
		"CTargetSortDistance": UnspecifiedSubtype(),
		"CTargetSortField": UnspecifiedSubtype(),
		"CTargetSortInterruptible": UnspecifiedSubtype(),
		"CTargetSortMarker": UnspecifiedSubtype(),
		"CTargetSortPowerSourceLevel": UnspecifiedSubtype(),
		"CTargetSortPowerUserLevel": UnspecifiedSubtype(),
		"CTargetSortPriority": UnspecifiedSubtype(),
		"CTargetSortRandom": UnspecifiedSubtype(),
		"CTargetSortValidator": UnspecifiedSubtype(),
		"CTargetSortVital": UnspecifiedSubtype(),
		"CTargetSortVitalFraction": UnspecifiedSubtype(),
	},
	
	"TextureSheet":{
		"CTextureSheet": UnspecifiedSubtype(),
	},
	
	"Trophy":{
		"CTrophy": UnspecifiedSubtype(),
	},
	
	"User":{
		"CUser": UnspecifiedSubtype(),
	},
	
	"VoicePack":{
		"CVoicePack": UnspecifiedSubtype(),
	},
	
	"WarChest":{
		"CWarChest": UnspecifiedSubtype(),
	},
	
	"WarChestSeason":{
		"CWarChestSeason": UnspecifiedSubtype(),
	},
	
	"StimPack":{
		"CStimPack": UnspecifiedSubtype(),
	},	
};

export type CatalogTypes = typeof CatalogTypesInstance;
export type CatalogName = keyof CatalogTypes;
