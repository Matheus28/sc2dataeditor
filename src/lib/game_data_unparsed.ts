import { readFileSync } from "fs";
import type { CatalogName } from "./game_data";

export const catalogContents:Record<CatalogName, string[]> = {
	"Abil": [
		"CAbil",
		"CAbilArmMagazine",
		"CAbilAttack",
		"CAbilAttackModifier",
		"CAbilAugment",
		"CAbilBattery",
		"CAbilBeacon",
		"CAbilBehavior",
		"CAbilBuild",
		"CAbilBuildable",
		"CAbilEffect",
		"CAbilEffectInstant",
		"CAbilEffectTarget",
		"CAbilHarvest",
		"CAbilInteract",
		"CAbilInventory",
		"CAbilLearn",
		"CAbilMerge",
		"CAbilMergeable",
		"CAbilMorph",
		"CAbilMorphPlacement",
		"CAbilMove",
		"CAbilPawn",
		"CAbilProgress",
		"CAbilQueue",
		"CAbilQueueable",
		"CAbilRally",
		"CAbilRedirect",
		"CAbilRedirectInstant",
		"CAbilRedirectTarget",
		"CAbilResearch",
		"CAbilRevive",
		"CAbilSpecialize",
		"CAbilStop",
		"CAbilTrain",
		"CAbilTransport",
		"CAbilWarpTrain",
		"CAbilWarpable",
	],

	"Accumulator": [
		"CAccumulator",
		"CAccumulatorAbilLevel",
		"CAccumulatorArithmetic",
		"CAccumulatorAttributePoints",
		"CAccumulatorBehavior",
		"CAccumulatorCargo",
		"CAccumulatorConstant",
		"CAccumulatorDistance",
		"CAccumulatorEffectAmount",
		"CAccumulatorSwitch",
		"CAccumulatorTrackedUnitCount",
		"CAccumulatorUnitCustomValue",
		"CAccumulatorUserData",
		"CAccumulatorVeterancyLevel",
		"CAccumulatorVitals",
	],

	"Behavior": [
		"CBehavior",
		"CBehaviorAttackModifier",
		"CBehaviorAttribute",
		"CBehaviorBuff",
		"CBehaviorClickResponse",
		"CBehaviorConjoined",
		"CBehaviorCreepSource",
		"CBehaviorJump",
		"CBehaviorPowerSource",
		"CBehaviorPowerUser",
		"CBehaviorResource",
		"CBehaviorReveal",
		"CBehaviorSpawn",
		"CBehaviorUnitTracker",
		"CBehaviorVeterancy",
		"CBehaviorWander",
	],

	"DataCollection": [
		"CDataCollection",
		"CDataCollectionAbil",
		"CDataCollectionUnit",
		"CDataCollectionUpgrade",
	],

	"DataCollectionPattern": [
		"CDataCollectionPattern",
	],

	"Effect": [
		"CEffect",
		"CEffectAddTrackedUnit",
		"CEffectAddTrackedUnits",
		"CEffectApplyBehavior",
		"CEffectApplyForce",
		"CEffectApplyKinetic",
		"CEffectCancelOrder",
		"CEffectClearTrackedUnits",
		"CEffectCreateHealer",
		"CEffectCreatePersistent",
		"CEffectCreateUnit",
		"CEffectCreep",
		"CEffectDamage",
		"CEffectDestroyPersistent",
		"CEffectEnumArea",
		"CEffectEnumInventory",
		"CEffectEnumMagazine",
		"CEffectEnumTrackedUnits",
		"CEffectEnumTransport",
		"CEffectIssueOrder",
		"CEffectLastTarget",
		"CEffectLaunchMissile",
		"CEffectLoadContainer",
		"CEffectModifyPlayer",
		"CEffectModifyUnit",
		"CEffectMorph",
		"CEffectRandomPointInCircle",
		"CEffectRedirectMissile",
		"CEffectReleaseMagazine",
		"CEffectRemoveBehavior",
		"CEffectRemoveKinetic",
		"CEffectRemoveTrackedUnit",
		"CEffectReturnMagazine",
		"CEffectSet",
		"CEffectSwitch",
		"CEffectTeleport",
		"CEffectTransferBehavior",
		"CEffectUseCalldown",
		"CEffectUseMagazine",
		"CEffectUserData",
	],

	"Footprint": [
		"CFootprint",
	],

	"Item": [
		"CItem",
		"CItemAbil",
		"CItemAbilPowerUp",
		"CItemEffect",
		"CItemEffectInstant",
		"CItemEffectTarget",
	],

	"Loot": [
		"CLoot",
		"CLootEffect",
		"CLootItem",
		"CLootSet",
		"CLootSpawn",
		"CLootUnit",
	],

	"Mover": [
		"CMover",
		"CMoverAvoid",
		"CMoverFlock",
		"CMoverMissile",
	],

	"PlayerResponse": [
		"CPlayerResponse",
		"CPlayerResponseUnit",
		"CPlayerResponseUnitBirth",
		"CPlayerResponseUnitDamage",
		"CPlayerResponseUnitDeath",
	],

	"Requirement": [
		"CRequirement",
	],

	"Turret": [
		"CTurret",
	],

	"Unit": [
		"CUnit",
		"CUnitHero",
	],

	"Upgrade": [
		"CUpgrade",
	],

	"Validator": [
		"CValidator",
		"CValidatorCombine",
		"CValidatorCompareTrackedUnitsCount",
		"CValidatorCondition",
		"CValidatorEffect",
		"CValidatorEffectCompareDodged",
		"CValidatorEffectCompareEvaded",
		"CValidatorEffectTreeUserData",
		"CValidatorFunction",
		"CValidatorGameCommanderActive",
		"CValidatorGameCompareTerrain",
		"CValidatorGameCompareTimeEvent",
		"CValidatorGameCompareTimeOfDay",
		"CValidatorIsUnitTracked",
		"CValidatorLocation",
		"CValidatorLocationArc",
		"CValidatorLocationCompareCliffLevel",
		"CValidatorLocationComparePower",
		"CValidatorLocationCompareRange",
		"CValidatorLocationCreep",
		"CValidatorLocationCrossChasm",
		"CValidatorLocationCrossCliff",
		"CValidatorLocationEnumArea",
		"CValidatorLocationInPlayableMapArea",
		"CValidatorLocationPathable",
		"CValidatorLocationPlacement",
		"CValidatorLocationShrub",
		"CValidatorLocationType",
		"CValidatorLocationVision",
		"CValidatorPlayer",
		"CValidatorPlayerAlliance",
		"CValidatorPlayerCompareDifficulty",
		"CValidatorPlayerCompareFoodAvailable",
		"CValidatorPlayerCompareFoodUsed",
		"CValidatorPlayerCompareFoodMade",
		"CValidatorPlayerCompareRace",
		"CValidatorPlayerCompareResource",
		"CValidatorPlayerCompareResult",
		"CValidatorPlayerCompareType",
		"CValidatorPlayerFood",
		"CValidatorPlayerRequirement",
		"CValidatorUnit",
		"CValidatorUnitAI",
		"CValidatorUnitAbil",
		"CValidatorUnitAlliance",
		"CValidatorUnitArmor",
		"CValidatorUnitBehaviorStackAlias",
		"CValidatorUnitBehaviorState",
		"CValidatorUnitCombatAI",
		"CValidatorUnitCompareAIAreaEvalRatio",
		"CValidatorUnitCompareAbilLevel",
		"CValidatorUnitCompareAbilSkillPoint",
		"CValidatorUnitCompareAbilStage",
		"CValidatorUnitCompareAttackPriority",
		"CValidatorUnitCompareBehaviorCount",
		"CValidatorUnitCompareCargo",
		"CValidatorUnitCompareChargeUsed",
		"CValidatorUnitCompareCooldown",
		"CValidatorUnitCompareDamageDealtTime",
		"CValidatorUnitCompareDamageTakenTime",
		"CValidatorUnitCompareDeath",
		"CValidatorUnitCompareDetectRange",
		"CValidatorUnitCompareField",
		"CValidatorUnitCompareHeight",
		"CValidatorUnitCompareKillCount",
		"CValidatorUnitCompareMarkerCount",
		"CValidatorUnitCompareMoverPhase",
		"CValidatorUnitCompareOrderCount",
		"CValidatorUnitCompareOrderTargetRange",
		"CValidatorUnitComparePowerSourceLevel",
		"CValidatorUnitComparePowerUserLevel",
		"CValidatorUnitCompareRallyPointCount",
		"CValidatorUnitCompareResourceContents",
		"CValidatorUnitCompareResourceHarvesters",
		"CValidatorUnitCompareSpeed",
		"CValidatorUnitCompareVeterancyLevel",
		"CValidatorUnitCompareVital",
		"CValidatorUnitCompareVitality",
		"CValidatorUnitDetected",
		"CValidatorUnitFilters",
		"CValidatorUnitFlying",
		"CValidatorUnitInWeaponRange",
		"CValidatorUnitInventory",
		"CValidatorUnitInventoryContainsItem",
		"CValidatorUnitInventoryIsFull",
		"CValidatorUnitKinetic",
		"CValidatorUnitLastDamagePlayer",
		"CValidatorUnitMissileNullified",
		"CValidatorUnitMover",
		"CValidatorUnitOrder",
		"CValidatorUnitOrderQueue",
		"CValidatorUnitOrderTargetPathable",
		"CValidatorUnitOrderTargetType",
		"CValidatorUnitPathable",
		"CValidatorUnitPathing",
		"CValidatorUnitScanning",
		"CValidatorUnitState",
		"CValidatorUnitTestWeaponType",
		"CValidatorUnitType",
		"CValidatorUnitWeaponAnimating",
		"CValidatorUnitWeaponFiring",
		"CValidatorUnitWeaponPlane",
	],

	"Weapon": [
		"CWeapon",
		"CWeaponLegacy",
		"CWeaponStrafe",
	],

	"ArmyCategory": [
		"CArmyCategory",
	],

	"ArmyUnit": [
		"CArmyUnit",
	],

	"ArmyUpgrade": [
		"CArmyUpgrade",
	],

	"BankCondition": [
		"CBankConditionCombine",
		"CBankConditionCompare",
		"CBankConditionCompareValueCount",
		"CBankConditionCompareValueInteger",
		"CBankConditionCompareValueString",
		"CBankConditionCompareValueSum",
		"CBankConditionCurrentMap",
	],

	"Campaign": [
		"CCampaign",
	],

	"Character": [
		"CCharacter",
	],

	"Commander": [
		"CCommander",
	],

	"Conversation": [
		"CConversation",
	],

	"ConversationState": [
		"CConversationState",
	],

	"Location": [
		"CLocation",
	],

	"Map": [
		"CMap",
	],

	"Objective": [
		"CObjective",
	],

	"Preload": [
		"CPreload",
		"CPreloadActor",
		"CPreloadAsset",
		"CPreloadConversation",
		"CPreloadModel",
		"CPreloadScene",
		"CPreloadSound",
		"CPreloadUnit",
	],

	"Actor": [
		"CActor",
		"CActorAction",
		"CActorActionOverride",
		"CActorArc",
		"CActorBase",
		"CActorBatch",
		"CActorBeamSimple",
		"CActorBeamStandard",
		"CActorBearings",
		"CActorBlob",
		"CActorCamera",
		"CActorCameraModel",
		"CActorCreep",
		"CActorCutscene",
		"CActorDoodad",
		"CActorDoodadPreserver",
		"CActorEditorCamera",
		"CActorEditorPoint",
		"CActorEventMacro",
		"CActorEventMacroRunnable",
		"CActorFoliageFXSpawner",
		"CActorForce",
		"CActorForceBox",
		"CActorForceConeRoundedEnd",
		"CActorForceCylinder",
		"CActorForceSphere",
		"CActorGlobalConfig",
		"CActorLightModel",
		"CActorLightOmni",
		"CActorLightOmniModel",
		"CActorLightSpot",
		"CActorLightSpotModel",
		"CActorList",
		"CActorLookAt",
		"CActorMinimap",
		"CActorMissile",
		"CActorModel",
		"CActorModelMaterial",
		"CActorPortrait",
		"CActorPower",
		"CActorProgress",
		"CActorPropertyCurveSet",
		"CActorQuad",
		"CActorQueryResponse",
		"CActorRange",
		"CActorRegion",
		"CActorRegionArc",
		"CActorRegionCircle",
		"CActorRegionGame",
		"CActorRegionQuad",
		"CActorRegionWater",
		"CActorScene",
		"CActorSelection",
		"CActorSetQueried",
		"CActorShadow",
		"CActorShield",
		"CActorShieldImpact",
		"CActorSimple",
		"CActorSite",
		"CActorSiteBillboard",
		"CActorSiteMover",
		"CActorSiteOp2DRotation",
		"CActorSiteOpAction",
		"CActorSiteOpAttach",
		"CActorSiteOpAttachVolume",
		"CActorSiteOpBanker",
		"CActorSiteOpBankerUnit",
		"CActorSiteOpBasic",
		"CActorSiteOpCursor",
		"CActorSiteOpDeathMotion",
		"CActorSiteOpEffect",
		"CActorSiteOpForward",
		"CActorSiteOpGameCameraFollow",
		"CActorSiteOpHeight",
		"CActorSiteOpHigherOfTerrainAndWater",
		"CActorSiteOpHostBearings",
		"CActorSiteOpHostedOffset",
		"CActorSiteOpIncoming",
		"CActorSiteOpLocalOffset",
		"CActorSiteOpOrbiter",
		"CActorSiteOpPatch",
		"CActorSiteOpPhysicsImpact",
		"CActorSiteOpRandomPointInCircle",
		"CActorSiteOpRandomPointInCrossbar",
		"CActorSiteOpRandomPointInSphere",
		"CActorSiteOpRotationExplicit",
		"CActorSiteOpRotationRandom",
		"CActorSiteOpRotationSmooth",
		"CActorSiteOpRotationVariancer",
		"CActorSiteOpRotator",
		"CActorSiteOpSelectionOffset",
		"CActorSiteOpSerpentHead",
		"CActorSiteOpSerpentSegment",
		"CActorSiteOpShadow",
		"CActorSiteOpTether",
		"CActorSiteOpTilter",
		"CActorSiteOpTipability",
		"CActorSiteOpUp",
		"CActorSiteOpZ",
		"CActorSiteOrbiter",
		"CActorSiteRocker",
		"CActorSnapshot",
		"CActorSound",
		"CActorSplat",
		"CActorSquib",
		"CActorStateMonitor",
		"CActorTerrain",
		"CActorTerrainDeformer",
		"CActorText",
		"CActorTurret",
		"CActorUnit",
	],

	"AttachMethod": [
		"CAttachMethod",
		"CAttachMethodArcTest",
		"CAttachMethodAttachType",
		"CAttachMethodBestMatch",
		"CAttachMethodFilter",
		"CAttachMethodIncoming",
		"CAttachMethodNodeOccupancy",
		"CAttachMethodNodeOccupancy2",
		"CAttachMethodNumericField",
		"CAttachMethodPattern",
		"CAttachMethodPortAllocator",
		"CAttachMethodProximity",
		"CAttachMethodRandom",
		"CAttachMethodReduction",
		"CAttachMethodVolumesRequery",
		"CAttachMethodVolumesTargets",
		"CAttachMethodVolumesWeightedPick",
	],

	"Beam": [
		"CBeamAsyncLinear",
	],

	"Button": [
		"CButton",
	],

	"DSP": [
		"CDSPChorus",
		"CDSPCompressor",
		"CDSPCustomCompressor",
		"CDSPDistortion",
		"CDSPEcho",
		"CDSPFlange",
		"CDSPHighPass",
		"CDSPLimiter",
		"CDSPLowPass",
		"CDSPLowPassSimple",
		"CDSPNormalize",
		"CDSPParamEQ",
		"CDSPPitchShift",
		"CDSPReverb",
	],

	"LensFlareSet": [
		"CLensFlareSet",
	],

	"Light": [
		"CLight",
	],

	"Model": [
		"CModel",
		"CModelFoliage",
	],

	"Reverb": [
		"CReverb",
	],

	"Shape": [
		"CShape",
		"CShapeArc",
		"CShapeQuad",
	],

	"Sound": [
		"CSound",
	],

	"SoundExclusivity": [
		"CSoundExclusivity",
	],

	"SoundMixSnapshot": [
		"CSoundMixSnapshot",
	],

	"Soundtrack": [
		"CSoundtrack",
	],

	"Texture": [
		"CTexture",
	],

	"Cliff": [
		"CCliff",
	],

	"CliffMesh": [
		"CCliffMesh",
	],

	"FoW": [
		"CFoW",
	],

	"PhysicsMaterial": [
		"CPhysicsMaterial",
	],

	"Terrain": [
		"CTerrain",
	],

	"TerrainObject": [
		"CTerrainObject",
		"CCliffDoodad", // I know, it's weird... but it's here
	],

	"TerrainTex": [
		"CTerrainTex",
	],

	"Tile": [
		"CTile",
	],

	"Water": [
		"CWater",
	],

	"Artifact": [
		"CArtifact",
	],

	"ArtifactSlot": [
		"CArtifactSlot",
	],

	"Config": [
		"CConfig",
	],

	"Hero": [
		"CHero",
	],

	"HeroAbil": [
		"CHeroAbil",
	],

	"HeroStat": [
		"CHeroStat",
	],

	"Mount": [
		"CMount",
	],

	"Skin": [
		"CSkin",
	],

	"Talent": [
		"CTalent",
	],

	"TalentProfile": [
		"CTalentProfile",
	],

	"VoiceOver": [
		"CVoiceOver",
	],

	"Alert": [
		"CAlert",
	],

	"RaceBannerPack": [
		"CRaceBannerPack",
	],

	"Camera": [
		"CCamera",
	],

	"ConsoleSkin": [
		"CConsoleSkin",
	],

	"Cursor": [
		"CCursor",
	],

	"GameUI": [
		"CGameUI",
	],

	"Bundle": [
		"CBundle",
	],

	"Ping": [
		"CPing",
	],

	"ColorStyle": [
		"CColorStyle",
	],

	"Achievement": [
		"CAchievement",
	],

	"AchievementTerm": [
		"CAchievementTerm",
		"CAchievementTermAbilInteract",
		"CAchievementTermAbilLoad",
		"CAchievementTermAbilUse",
		"CAchievementTermAchievement",
		"CAchievementTermBehaviorCount",
		"CAchievementTermBehaviorElapsed",
		"CAchievementTermBehaviorState",
		"CAchievementTermCombine",
		"CAchievementTermEffectAbsorbed",
		"CAchievementTermEffectDamaged",
		"CAchievementTermEffectDodged",
		"CAchievementTermEffectHealed",
		"CAchievementTermEffectKilled",
		"CAchievementTermEffectUse",
		"CAchievementTermGeneric",
		"CAchievementTermReplay",
		"CAchievementTermScoreValue",
		"CAchievementTermTime",
		"CAchievementTermUnitBirth",
		"CAchievementTermUnitDeath",
		"CAchievementTermUnitKills",
		"CAchievementTermUnitRegen",
		"CAchievementTermUnitSupplyLoss",
	],

	"Boost": [
		"CBoost",
	],

	"DecalPack": [
		"CDecalPack",
	],

	"Emoticon": [
		"CEmoticon",
	],

	"EmoticonPack": [
		"CEmoticonPack",
	],

	"Error": [
	],

	"Game": [
		"CGame",
	],

	"Herd": [
		"CHerd",
	],

	"HerdNode": [
		"CHerdNode",
	],

	"ItemClass": [
		"CItemClass",
	],

	"ItemContainer": [
		"CItemContainer",
	],

	"Kinetic": [
		"CKinetic",
		"CKineticDistance",
		"CKineticFollow",
		"CKineticRotate",
		"CKineticSequence",
		"CKineticSet",
		"CKineticTranslate",
	],

	"PortraitPack": [
		"CPortraitPack",
	],

	"PremiumMap": [
		"CPremiumMap",
	],

	"Race": [
		"CRace",
	],

	"RequirementNode": [
		"CRequirementNode",
		"CRequirementAllowAbil",
		"CRequirementAllowBehavior",
		"CRequirementAllowUnit",
		"CRequirementAllowUpgrade",
		"CRequirementAnd",
		"CRequirementConst",
		"CRequirementCountAbil",
		"CRequirementCountBehavior",
		"CRequirementCountUnit",
		"CRequirementCountUpgrade",
		"CRequirementDiv",
		"CRequirementEq",
		"CRequirementGT",
		"CRequirementGTE",
		"CRequirementLT",
		"CRequirementLTE",
		"CRequirementMod",
		"CRequirementMul",
		"CRequirementNE",
		"CRequirementNot",
		"CRequirementOdd",
		"CRequirementOr",
		"CRequirementSum",
		"CRequirementXor",
	],

	"Reward": [
		"CReward",
		"CRewardConsoleSkin",
		"CRewardDecal",
		"CRewardEmoticon",
		"CRewardIcon",
		"CRewardModel",
		"CRewardPoints",
		"CRewardPortrait",
		"CRewardPortraitInGame",
		"CRewardRaceBanner",
		"CRewardSpray",
		"CRewardSprayUseDecal",
		"CRewardTrophy",
		"CRewardVoicePack",
	],

	"ScoreResult": [
		"CScoreResult",
		"CScoreResultBuildOrder",
		"CScoreResultExperience",
		"CScoreResultGraph",
		"CScoreResultPerformance",
		"CScoreResultRoot",
		"CScoreResultScore",
	],

	"ScoreValue": [
		"CScoreValue",
		"CScoreValueCombine",
		"CScoreValueConstant",
		"CScoreValueCustom",
		"CScoreValueStandard",
	],

	"SkinPack": [
		"CSkinPack",
	],

	"Spray": [
		"CSpray",
	],

	"SprayPack": [
		"CSprayPack",
	],

	"TacCooldown": [
		"CTacCooldown",
	],

	"Tactical": [
		"CTactical",
		"CTacticalOrder",
		"CTacticalSet",
	],

	"TargetFind": [
		"CTargetFind",
		"CTargetFindBestPoint",
		"CTargetFindEffect",
		"CTargetFindEnumArea",
		"CTargetFindLastAttacker",
		"CTargetFindOffset",
		"CTargetFindOrder",
		"CTargetFindRallyPoint",
		"CTargetFindSet",
		"CTargetFindWorkerRallyPoint",
	],

	"TargetSort": [
		"CTargetSort",
		"CTargetSortAlliance",
		"CTargetSortAngle",
		"CTargetSortBehaviorCount",
		"CTargetSortBehaviorDuration",
		"CTargetSortChargeCount",
		"CTargetSortChargeRegen",
		"CTargetSortCooldown",
		"CTargetSortDistance",
		"CTargetSortField",
		"CTargetSortInterruptible",
		"CTargetSortMarker",
		"CTargetSortPowerSourceLevel",
		"CTargetSortPowerUserLevel",
		"CTargetSortPriority",
		"CTargetSortRandom",
		"CTargetSortValidator",
		"CTargetSortVital",
		"CTargetSortVitalFraction",
	],

	"TextureSheet": [
		"CTextureSheet",
	],

	"Trophy": [
		"CTrophy",
	],

	"User": [
		"CUser",
	],

	"VoicePack": [
		"CVoicePack",
	],

	"WarChest": [
		"CWarChest",
	],

	"WarChestSeason": [
		"CWarChestSeason",
	],

	"StimPack": [
		"CStimPack",
	],
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const unparsedGameData:{
	classes: Record<string, { // CSomething or SSomething
		parent:string|null,
		abstract?:true;
		fields:Record<string,string|{
			array?:true;
			type:string;
			indexEnum?:string;
			minValue?:number;
			maxValue?:number;
		}>;
	}>;
} = { classes: JSON.parse(readFileSync(`${__dirname}/../../data/fields.json`, "utf8")) };
