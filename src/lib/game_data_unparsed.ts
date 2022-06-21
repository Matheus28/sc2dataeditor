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
	
	enums:Record<string, { // ESomethingSomething
		prefix:string; // e_somethingSomething
		values: [string, ...string[]]; // second element is default... I know... but first is -1
	}>;
} = {
	"classes": {
		"STechCost": { //TODO: verify
			"parent": null,
			"fields": {
				"Resource": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				}
			}
		},
		
		"CGame": { //TODO: verify
			"parent": null,
			"fields": {
				"AttackRevealBehavior": "CBehaviorLink",
				"AcquireMovementLimit": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AcquireLeashRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AcquireLeashResetRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"CallForHelpPeriod": "CGameTime",
				"CallForHelpRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"CreepBlendTime": {
					"type": "CGameTime",
					"minValue": 0,
					"maxValue": 500
				},
				
				"CreepDecaySound": "CSoundLink",
				"CreepDecayTime": {
					"type": "CGameTime",
					"minValue": 0,
					"maxValue": 500
				},
				
				"CreepGrowSound": "CSoundLink",
				"DensityDecayTime": {
					"type": "CGameTime",
					"minValue": 0,
					"maxValue": 500
				},
				
				"DensityPersistent": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"DamageMinimum": "CFixed",
				"AttackRevealTime": "CGameTime",
				"PenaltyRevealTime": "CGameTime",
				"StalemateTestTime": "CGameTime",
				"StalemateWarningTime": "CGameTime",
				"DifficultyLevels": {
					"type": "SDifficultyLevel",
					"array": true
				},
				
				"DifficultyDefault": {
					"type": "TDifficultyLevel",
					"minValue": 0,
					"maxValue": 31
				},
				
				"AIBuilds": {
					"type": "SAIBuild",
					"array": true
				},
				
				"AIBuildDefault": {
					"type": "NNet::Game::TAIBuild",
					"minValue": 0
				},
				
				"HandicapValues": {
					"type": "SHandicap",
					"array": true
				},
				
				"AirFormationDiameter": "CFixed",
				"MixedFormationDiameter": "CFixed",
				"MapSizes": {
					"type": "SMapSize",
					"array": true
				},
				
				"UnpathableMargin": "CiQuad",
				"CameraMargin": "CiQuad",
				"CameraMarginAspectAdjust": {
					"type": "SAspectMargin",
					"array": true
				},
				
				"TeamColors": {
					"type": "STeamColor",
					"array": true
				},
				
				"SplashDamageEffect": "CEffectLink",
				"UnitSightRangeDead": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 32
				},
				
				"UnitSightRangeUnderConstruction": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 32
				},
				
				"AI": {
					"type": "SAIDescription",
					"array": true
				},
				
				"TriggerLibs": {
					"type": "STriggerLib",
					"array": true
				},
				
				"FilterResults": {
					"type": "STargetFilterResult",
					"array": true
				},
				
				"BeaconInfoArray": {
					"type": "SBeaconInfo",
					"array": true,
					"indexEnum": "EBeacon"
				},
				
				"TauntAbil": "CAbilLink",
				"UncontestedCombatPeriod": "CGameTime",
				"AIResourceRequest": {
					"type": "uint32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"VeterancySearchRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"VeterancySearchFilters": "CTargetFilters",
				"ResourceConvertArray": {
					"type": "SResourceConvert",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"DamageHistoryIntervalMax": "CFixed",
				"MeleePointsThreshold": "SMeleePointThreshold",
				"MeleePointsGameDurationMin": "CGameTime",
				"FoodCappedMax": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"SAbilQueueableInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Button": "SAbilCmdButton",
				"Time": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Alert": "CAlertLink"
			}
		},
		
		"CAbil": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"TechPlayer": "EAbilTechPlayer",
				"Alignment": "EAbilAlignment",
				"OrderArray": {
					"type": "SAbilOrderDisplay",
					"array": true
				},
				
				"AbilSetId": "CAbilSetId",
				"EditorCategories": "TEditorCategories",
				"InfoTooltipPriority": "uint32",
				"TargetMessage": "CStringLink",
				"TechAliasArray": {
					"type": "TTechAlias",
					"array": true
				},
				
				"SharedFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilSharedFlag"
				}
			}
		},
		
		"CAbilProgress": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"Activity": "CStringLink",
				"Cancelable": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"VitalStartFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				}
			}
		},
		
		"CAbilEffect": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"Activity": "CStringLink",
				"Effect": {
					"type": "CEffectLink",
					"array": true
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectFlag"
				},
				
				"Cost": {
					"type": "SCost",
					"array": true
				},
				
				"CancelCost": {
					"type": "SCost",
					"array": true
				},
				
				"RefundArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"RefundFraction": "SCostFactor",
				"Placeholder": "CUnitLink",
				"TargetFilters": {
					"type": "CTargetFilters",
					"array": true
				},
				
				"TargetSorts": "STargetSorts",
				"Range": {
					"type": "CFixed",
					"array": true,
					"minValue": 0,
					"maxValue": 500
				},
				
				"RangeSlop": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100
				},
				
				"Arc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"ArcSlop": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"TrackingArc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"SmartPriority": "uint32",
				"SmartValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AutoCastAcquireLevel": "EAcquireLevel",
				"AutoCastFilters": "CTargetFilters",
				"AutoCastRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AutoCastValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"PrepTime": {
					"type": "CGameTime",
					"array": true,
					"minValue": 0
				},
				
				"CastIntroTime": {
					"type": "CGameTime",
					"array": true,
					"minValue": 0
				},
				
				"CastOutroTime": {
					"type": "CGameTime",
					"array": true,
					"minValue": 0
				},
				
				"FinishTime": {
					"type": "CGameTime",
					"array": true,
					"minValue": 0
				},
				
				"Marker": "SMarker",
				"UseMarkerArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"ShowProgressArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"CancelableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"PauseableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"PreemptableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"UninterruptibleArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"ValidatedArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"InheritAttackPriorityArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"ErrorAlert": "CAlertLink",
				"AlertArray": {
					"type": "CAlertLink",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"CursorEffect": {
					"type": "CEffectLink",
					"array": true
				},
				
				"CalldownEffect": "CEffectLink",
				"AINotifyEffect": "CEffectLink",
				"ProducedUnitArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"ProgressButtonArray": {
					"type": "CButtonLink",
					"array": true,
					"indexEnum": "EAbilEffectStage"
				},
				
				"DefaultError": "CCmdResult",
				"LevelButtonImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LevelButtonName": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonTooltip": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonTooltipImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"EffectRange": {
					"type": "CfRange",
					"array": true,
					"minValue": 0,
					"maxValue": 500
				},
				
				"LearnButtonImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LearnButtonName": {
					"type": "CStringLink",
					"array": true
				},
				
				"LearnButtonTooltip": {
					"type": "CStringLink",
					"array": true
				},
				
				"LearnButtonTooltipImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"IgnoreFilters": "CTargetFilters"
			}
		},
		
		"CAbilQueueable": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"RefundFraction": "SCostFactor",
				"ErrorAlert": "CAlertLink",
				"Activity": "CStringLink"
			}
		},
		
		"CAbilRedirect": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"Abil": "CAbilLink",
				"Index": "TAbilCmdIndex",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilRedirectFlag"
				}
			}
		},
		
		"CAbilArmMagazine": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"Launch": "EAbilArmMagazineLaunch",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilArmMagazineFlag"
				},
				
				"Leash": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"InfoArray": {
					"type": "SAbilArmMagazineInfo",
					"array": true,
					"indexEnum": "EAbilArmMagazineCmd"
				},
				
				"Alert": "CAlertLink",
				"EffectArray": {
					"type": "CEffectLink",
					"array": true,
					"indexEnum": "EAbilArmMagazineEffect"
				},
				
				"ReturnLifeFraction": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				},
				
				"CalldownEffect": "CEffectLink",
				"ExternalAngle": {
					"type": "CFangle",
					"array": true
				},
				
				"MaxCount": "uint32"
			}
		},
		
		"CAbilAttack": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilAttackCmd"
				},
				
				"AcquireFilters": "CTargetFilters",
				"SmartFilters": "CTargetFilters",
				"SmartPriority": "uint32",
				"SupportedFilters": "CTargetFilters",
				"MinAttackSpeedMultiplier": {
					"type": "CFixed",
					"minValue": 0.125,
					"maxValue": 1
				},
				
				"MaxAttackSpeedMultiplier": {
					"type": "CFixed",
					"minValue": 1,
					"maxValue": 128
				}
			}
		},
		
		"CAbilAugment": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilAugmentCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilAugmentFlag"
				},
				
				"AbilCmd": "CAbilCommand",
				"TargetType": "EEffectLocationType",
				"Cost": "SCost",
				"Effect": "CEffectLink",
				"AutoCastFilters": "CTargetFilters",
				"AutoCastValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"SmartPriority": "uint32",
				"SmartValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAbilBattery": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilBatteryCmd"
				},
				
				"TargetFilters": "CTargetFilters",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"EnumFilters": "CTargetFilters",
				"EnumRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Effect": "CEffectLink",
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilBeacon": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilBeaconCmd"
				},
				
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilBehavior": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilBehaviorCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilBehaviorFlag"
				},
				
				"Cost": {
					"type": "SCost",
					"array": true
				},
				
				"BehaviorArray": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AutoCastValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"LevelButtonOnImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LevelButtonOnName": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonOnTooltip": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonOnTooltipImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LevelButtonOffImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LevelButtonOffName": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonOffTooltip": {
					"type": "CStringLink",
					"array": true
				},
				
				"LevelButtonOffTooltipImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LearnButtonImage": {
					"type": "CImagePath",
					"array": true
				},
				
				"LearnButtonName": {
					"type": "CStringLink",
					"array": true
				},
				
				"LearnButtonTooltip": {
					"type": "CStringLink",
					"array": true
				},
				
				"LearnButtonTooltipImage": {
					"type": "CImagePath",
					"array": true
				}
			}
		},
		
		"CAbilBuild": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"HaltCmdButton": "SAbilCmdButton",
				"BuildMorphAbil": "CAbilLink",
				"UnlinkMorphAbil": "CAbilLink",
				"FlagArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilBuildFlag"
				},
				
				"Alert": "CAlertLink",
				"ErrorAlert": "CAlertLink",
				"InfoArray": {
					"type": "SAbilBuildInfo",
					"array": true,
					"indexEnum": "EAbilBuildCmd"
				},
				
				"Type": "EAbilBuildType",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RefundFraction": "SCostFactor",
				"FidgetDelayMin": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"FidgetDelayMax": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"ConstructionMover": "CMoverLink",
				"EffectArray": {
					"type": "CEffectLink",
					"array": true,
					"indexEnum": "EAbilBuildEffect"
				},
				
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilBuildable": { //TODO: verify
			"parent": "CAbilProgress",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilBuildableCmd"
				},
				
				"MaxBuilders": {
					"type": "uint32",
					"minValue": 1
				},
				
				"PowerBuildBonusRate": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"PowerBuildCostFactor": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CAbilEffectInstant": { //TODO: verify
			"parent": "CAbilEffect",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilEffectInstantCmd"
				}
			}
		},
		
		"CAbilEffectTarget": { //TODO: verify
			"parent": "CAbilEffect",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilEffectTargetCmd"
				},
				
				"PlaceUnit": "CUnitLink",
				"AcquireAttackers": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"FollowRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"FinishCommand": "CAbilCommand"
			}
		},
		
		"CAbilHarvest": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilHarvestCmd"
				},
				
				"FlagArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilHarvestFlag"
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AcquireRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"ReservedMarker": "SMarker",
				"ResourceAcquire": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceAllowed": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceDestroy": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceAmountBonus": {
					"type": "uint32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceAmountMultiplier": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType",
					"minValue": 0
				},
				
				"ResourceAmountRequest": {
					"type": "uint32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceTimeBonus": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EResourceType",
					"minValue": 0
				},
				
				"ResourceTimeMultiplier": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType",
					"minValue": 0
				},
				
				"CancelableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilHarvestStage"
				},
				
				"UninterruptibleArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilHarvestStage"
				},
				
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilInteract": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilInteractCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilInteractFlag"
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"TargetFilters": "CTargetFilters",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"SmartPriority": "uint32",
				"SmartValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AutoCastFilters": "CTargetFilters",
				"AutoCastRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AutoCastValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAbilInventory": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilInventoryCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilInventoryFlag"
				},
				
				"TargetFilters": "CTargetFilters",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"MaxDropRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"InfoArray": {
					"type": "SAbilInventoryInfo",
					"array": true
				},
				
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilLearn": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"InfoArray": {
					"type": "SAbilLearnInfo",
					"array": true,
					"indexEnum": "EAbilLearnCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilLearnFlag"
				},
				
				"Points": "uint32",
				"PointsPerLevel": "uint32"
			}
		},
		
		"CAbilMerge": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilMergeCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilMergeFlag"
				},
				
				"Alert": "CAlertLink",
				"Effect": "CEffectLink",
				"Info": "SAbilMergeInfo",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CAbilMergeable": { //TODO: verify
			"parent": "CAbilProgress",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilMergeableCmd"
				}
			}
		},
		
		"CAbilMorph": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilMorphCmd"
				},
				
				"ActorKey": "CDataSoupKey",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilMorphFlag"
				},
				
				"RefundFraction": "SCostFactor",
				"Cost": "SCost",
				"CancelUnit": "CUnitLink",
				"InfoArray": {
					"type": "SAbilMorphInfo",
					"array": true
				},
				
				"StartGlobalAlert": "CAlertLink",
				"FinishGlobalAlert": "CAlertLink",
				"Alert": "CAlertLink",
				"ErrorAlert": "CAlertLink",
				"AutoCastAcquireLevel": "EAcquireLevel",
				"AutoCastFilters": "CTargetFilters",
				"AutoCastValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AutoCastRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"AutoCastCountMin": "uint32",
				"AutoCastCountMax": "uint32",
				"Activity": "CStringLink",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AbilClassEnableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCAbil"
				},
				
				"AbilClassDisableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCAbil"
				},
				
				"AbilLinkEnableArray": {
					"type": "CAbilLink",
					"array": true
				},
				
				"AbilLinkDisableArray": {
					"type": "CAbilLink",
					"array": true
				},
				
				"ProgressButton": "CButtonLink"
			}
		},
		
		"CAbilMorphPlacement": { //TODO: verify
			"parent": "CAbilMorph",
			"fields": {}
		},
		
		"CAbilMove": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilMoveCmd"
				},
				
				"FleeRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"FleeTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"FollowRangeSlop": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"FollowAcquireRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"MinPatrolDistance": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"FollowFilters": "CTargetFilters",
				"MoveFilters": "CTargetFilters",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilMoveFlag"
				},
				
				"MoveSmartPriority": "uint32",
				"BoardBunkerSmartPriority": "uint32",
				"BoardTransportSmartPriority": "uint32",
				"PowerupSmartPriority": "uint32",
				"RechargeSmartPriority": "uint32"
			}
		},
		
		"CAbilPawn": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"InfoArray": {
					"type": "SAbilPawnInfo",
					"array": true,
					"indexEnum": "EAbilPawnCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilPawnFlag"
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CAbilQueue": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilQueueCmd"
				},
				
				"QueueCount": "uint32",
				"QueueSize": "uint32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilQueueFlag"
				}
			}
		},
		
		"CAbilRally": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilRallyCmd"
				},
				
				"InfoArray": {
					"type": "SAbilRallyInfo",
					"array": true
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilRallyFlag"
				},
				
				"SmartPriority": "uint32"
			}
		},
		
		"CAbilRedirectInstant": { //TODO: verify
			"parent": "CAbilRedirect",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilRedirectInstantCmd"
				}
			}
		},
		
		"CAbilRedirectTarget": { //TODO: verify
			"parent": "CAbilRedirect",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilRedirectTargetCmd"
				}
			}
		},
		
		"CAbilResearch": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"InfoArray": {
					"type": "SAbilResearchInfo",
					"array": true,
					"indexEnum": "EAbilResearchCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilResearchFlag"
				}
			}
		},
		
		"CAbilRevive": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilReviveCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilReviveFlag"
				},
				
				"BaseInfo": "SAbilReviveInfo",
				"LevelInfo": "SAbilReviveInfo",
				"BaseUnitCostFactor": "SCostFactor",
				"LevelUnitCostFactor": "SCostFactor",
				"ActorKey": "CDataSoupKey",
				"Effect": "CEffectLink",
				"Offset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"VitalArray": {
					"type": "EAbilReviveVital",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Alert": "CAlertLink",
				"NameOverride": "CStringLink",
				"ReplaceFilters": "CTargetFilters",
				"ReplaceDeathType": "EDeathType",
				"SelfReviveCmd": "EAbilReviveCmd",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"TargetType": "EEffectLocationType"
			}
		},
		
		"CAbilSpecialize": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"InfoArray": {
					"type": "SAbilSpecializeInfo",
					"array": true,
					"indexEnum": "EAbilSpecializeCmd"
				},
				
				"MaxCount": "uint32",
				"Alert": "CAlertLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilSpecializeFlag"
				}
			}
		},
		
		"CAbilStop": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilStopCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilStopFlag"
				}
			}
		},
		
		"CAbilTrain": { //TODO: verify
			"parent": "CAbilQueueable",
			"fields": {
				"ActorKey": "CDataSoupKey",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilTrainFlag"
				},
				
				"MorphUnit": "CUnitLink",
				"Offset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"InfoArray": {
					"type": "SAbilTrainInfo",
					"array": true,
					"indexEnum": "EAbilTrainCmd"
				},
				
				"Alert": "CAlertLink",
				"ProxyOffset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"ProxyUnit": "CUnitLink"
			}
		},
		
		"CAbilTransport": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilTransportCmd"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilTransportFlag"
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"MaxUnloadRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"MaxCargoCount": "uint32",
				"MaxCargoSize": "TCargoSize",
				"TotalCargoSpace": "TCargoCapacity",
				"LoadCargoBehavior": "CBehaviorLink",
				"LoadCargoEffect": "CEffectLink",
				"LoadTransportEffect": "CEffectLink",
				"LoadTransportBehavior": "CBehaviorLink",
				"UnloadCargoBehavior": "CBehaviorLink",
				"UnloadCargoEffect": "CEffectLink",
				"UnloadTransportEffect": "CEffectLink",
				"UnloadTransportBehavior": "CBehaviorLink",
				"InitialLoadDelay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"InitialUnloadDelay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"LoadPeriod": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"UnloadPeriod": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"TargetFilters": "CTargetFilters",
				"SearchRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"LoadValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"UnloadValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"TargetSorts": "STargetSorts",
				"CalldownEffect": "CEffectLink",
				"DeathUnloadEffect": "CEffectLink",
				"ErrorAlert": "CAlertLink",
				"LoadSmartPriority": "uint32"
			}
		},
		
		"CAbilWarpable": { //TODO: verify
			"parent": "CAbilProgress",
			"fields": {
				"CmdButtonArray": {
					"type": "SAbilCmdButton",
					"array": true,
					"indexEnum": "EAbilWarpableCmd"
				},
				
				"PowerUserBehavior": "CBehaviorLink"
			}
		},
		
		"CAbilWarpTrain": { //TODO: verify
			"parent": "CAbil",
			"fields": {
				"InfoArray": {
					"type": "SAbilWarpTrainInfo",
					"array": true,
					"indexEnum": "EAbilWarpTrainCmd"
				},
				
				"Alert": "CAlertLink",
				"RefundFraction": "SCostFactor",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilWarpTrainFlag"
				}
			}
		},
		
		"CAchievement": { //TODO: verify
			"parent": null,
			"fields": {
				"Category": "CStringLink",
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Icon": "CRewardLink",
				"Points": "uint32",
				"RewardTable": {
					"type": "CRewardLink",
					"array": true
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAchievementFlag"
				},
				
				"Race": "CRaceLink",
				"Filters": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAchievementFilter"
				},
				
				"MinTermCount": "uint32",
				"TermTable": {
					"type": "CAchievementTermLink",
					"array": true
				},
				
				"SharesTerms": "CAchievementLink",
				"Supersedes": "CAchievementLink",
				"Tags": {
					"type": "SAchievementTag",
					"array": true
				}
			}
		},
		
		"CAchievementTerm": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Evaluate": "EAchievementTermEvaluate",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAchievementTermFlag"
				},
				
				"Compare": "EValueCompare",
				"Previous": "EAchievementTermPrevious",
				"Quantity": "uint64",
				"Repeat": "uint64"
			}
		},
		
		"CAchievementTermAbil": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"AbilCmd": "CAbilCommand",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAchievementTermAbilInteract": { //TODO: verify
			"parent": "CAchievementTermAbil",
			"fields": {}
		},
		
		"CAchievementTermAbilLoad": { //TODO: verify
			"parent": "CAchievementTermAbil",
			"fields": {}
		},
		
		"CAchievementTermAbilUse": { //TODO: verify
			"parent": "CAchievementTermAbil",
			"fields": {}
		},
		
		"CAchievementTermAchievement": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"Child": "CAchievementLink"
			}
		},
		
		"CAchievementTermBehavior": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CAchievementTermBehaviorAbsorbed": { //TODO: verify
			"parent": "CAchievementTermBehavior",
			"fields": {}
		},
		
		"CAchievementTermBehaviorCount": { //TODO: verify
			"parent": "CAchievementTermBehavior",
			"fields": {}
		},
		
		"CAchievementTermBehaviorElapsed": { //TODO: verify
			"parent": "CAchievementTermBehavior",
			"fields": {
				"ElapsedTime": "CGameTime",
				"ElapsedCompare": "EValueCompare"
			}
		},
		
		"CAchievementTermBehaviorState": { //TODO: verify
			"parent": "CAchievementTermBehavior",
			"fields": {
				"State": "bool",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAchievementTermCombine": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"Type": "EAchievementTermCombine",
				"ChildTable": {
					"type": "CAchievementTermLink",
					"array": true
				}
			}
		},
		
		"CAchievementTermEffect": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"Effect": "CEffectLink",
				"WhichPlayer": "SEffectWhichPlayer",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAchievementTermEffectAbsorbed": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermEffectDamaged": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermEffectDodged": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermEffectHealed": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermEffectKilled": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermEffectUse": { //TODO: verify
			"parent": "CAchievementTermEffect",
			"fields": {}
		},
		
		"CAchievementTermGeneric": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {}
		},
		
		"CAchievementTermReplay": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {}
		},
		
		"CAchievementTermScoreValue": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"ScoreValue": "CScoreValueLink"
			}
		},
		
		"CAchievementTermTime": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {}
		},
		
		"CAchievementTermUnit": { //TODO: verify
			"parent": "CAchievementTerm",
			"fields": {
				"Unit": "CUnitLink",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CAchievementTermUnitBirth": { //TODO: verify
			"parent": "CAchievementTermUnit",
			"fields": {}
		},
		
		"CAchievementTermUnitDeath": { //TODO: verify
			"parent": "CAchievementTermUnit",
			"fields": {}
		},
		
		"CAchievementTermUnitKills": { //TODO: verify
			"parent": "CAchievementTermUnit",
			"fields": {}
		},
		
		"CAchievementTermUnitRegen": { //TODO: verify
			"parent": "CAchievementTermUnit",
			"fields": {
				"Vital": "EUnitVital"
			}
		},
		
		"CAchievementTermUnitSupplyLoss": { //TODO: verify
			"parent": "CAchievementTermUnit",
			"fields": {
				"Period": "CGameTime"
			}
		},
		
		"SModelEventData": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"Actor": "CActorCreateKey"
			}
		},
		
		"CActor": { //TODO: verify
			"parent": null,
			"fields": {
				"CopySource": "CActorKey",
				"Terms": "CActorTerms",
				"Aliases": {
					"type": "CActorKey",
					"array": true
				},
				
				"Macros": {
					"type": "CActorKey",
					"array": true
				},
				
				"Sharing": "EActorRequestCreateSharing",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorFlag"
				},
				
				"Filter": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorFilter"
				},
				
				"InheritType": "EActorHostedPropInheritType",
				"Inherits": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorHostedProp"
				},
				
				"AcceptedTransfers": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorTransferFlag"
				},
				
				"AcceptedHostedPropTransfers": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorHostedProp"
				},
				
				"FogVisibility": "EFogVisibility",
				"EditorCategories": "TEditorCategories",
				"Supporter": "SActorRequest"
			}
		},
		
		"CActorBase": { //TODO: verify
			"parent": "CActor",
			"fields": {
				"Remove": {
					"type": "SActorEvent",
					"array": true
				},
				
				"On": {
					"type": "SActorEvent",
					"array": true
				}
			}
		},
		
		"CActorBearings": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"AddToProximitySystem": "bool",
				"HostForProps": "SActorRequest",
				"Host": "SActorRequest",
				"HostSiteOps": "SActorSiteOpsData",
				"ScopeBearingsTracking": "EActorScopeBearingsTrackingType"
			}
		},
		
		"CActorCamera": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Camera": "CCameraLink",
				"HostEye": "SActorRequest",
				"HostEyeSiteOps": "SActorSiteOpsData"
			}
		},
		
		"CActorModel": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Model": "CModelLink",
				"Scale": {
					"type": "CScaleVector",
					"minValue": 0.0005
				},
				
				"AutoScaleFactor": "real32",
				"AutoScaleFromSelectionFactor": "real32",
				"AnimBlendTime": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"HostedAttaches": {
					"type": "SActorHostedAttach",
					"array": true
				},
				
				"LocalOffsetFor2ndVisibilityTest": "C3Vector",
				"ModelFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorModelFlag"
				},
				
				"EventDataFootprint": {
					"type": "SEventDataFootprint",
					"array": true
				},
				
				"EventDataFootprintActor": "CActorCreateKey",
				"EventDataSound": {
					"type": "SEventDataSound",
					"array": true
				},
				
				"EventDataSoundActor": "CActorCreateKey",
				"ProximityPosition": "EActorProximity",
				"CreepHeightClass": "CActorLabelKey",
				"CreepRateGrow": "CActorLabelKey",
				"CreepRateShrink": "CActorLabelKey",
				"PhysicsImpactDefault": "SActorPhysicsImpactData",
				"PhysicsImpacts": {
					"type": "SActorPhysicsImpactData",
					"array": true
				}
			}
		},
		
		"CActorQuad": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"LaunchActor": "CActorCreateKey",
				"LaunchHeight": {
					"type": "real32",
					"minValue": 0
				},
				
				"CenterActor": "CActorCreateKey",
				"CenterHeight": {
					"type": "real32",
					"minValue": 0
				},
				
				"ImpactActor": "CActorCreateKey",
				"ImpactHeight": {
					"type": "real32",
					"minValue": 0
				},
				
				"Quad": "CQuad",
				"Height": {
					"type": "real32",
					"minValue": 0
				},
				
				"Width": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorForce": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Receiver": "SActorRequest",
				"Field": "EActorForceField",
				"Duration": "CVariatorActorReal32",
				"Magnitude": "CVariatorActorReal32",
				"ForceFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorForceFlag"
				}
			}
		},
		
		"CActorForceLineSegment": { //TODO: verify
			"parent": "CActorForce",
			"fields": {
				"HostEnd": "SActorRequest",
				"HostEndSiteOps": "SActorSiteOpsData"
			}
		},
		
		"CActorBeam": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"HostLaunch": "SActorRequest",
				"HostLaunchSiteOps": "SActorSiteOpsData",
				"HostImpact": "SActorRequest",
				"HostImpactSiteOps": "SActorSiteOpsData"
			}
		},
		
		"CActorRange": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Abil": "SActorRangeAbil",
				"Behavior": "CBehaviorLink",
				"Sight": "CUnitLink",
				"Weapon": "CWeaponLink",
				"Range": "real32",
				"Arc": "real32",
				"Icon": "CImagePath",
				"IconArcLength": "real32",
				"RangeFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorRangeFlag"
				},
				
				"CliffLevelFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECliffLevelCompare"
				}
			}
		},
		
		"CActorRegion": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"QueryAbilCmd": "CAbilCommand",
				"QueryEffect": "CEffectLink",
				"QueryFilters": "CTargetFilters",
				"QueryRange": {
					"type": "real32",
					"minValue": 0
				},
				
				"NotifyRadiusKey": "CRefKey",
				"NotifyArcKey": "CRefKey",
				"NotifyClosestScaleKey": "CRefKey",
				"RegionFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorRegionFlag"
				}
			}
		},
		
		"CActorSite": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {}
		},
		
		"CActorSiteOp": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"HoldPosition": "bool",
				"HoldRotation": "bool"
			}
		},
		
		"CActorSiteOpBase": { //TODO: verify
			"parent": "CActorSiteOp",
			"fields": {}
		},
		
		"CActorSound": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Sound": "CSoundLink",
				"SoundFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorSoundFlag"
				}
			}
		},
		
		"CActorSplat": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Color": "CColor",
				"FadeIn": "real32",
				"FadeOut": "real32",
				"HoldTime": "real32",
				"Layer": "ESplatLayer",
				"Model": "CModelLink",
				"Scale": {
					"type": "CScaleVector",
					"minValue": 0.0005
				},
				
				"AutoScaleFactor": "real32",
				"AutoScaleFromSelectionFactor": "real32",
				"Height": "EActorSplatHeight"
			}
		},
		
		"CActorAction": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"LaunchGuideAlias": "CActorKey",
				"LaunchSiteOps": "SActorSiteOpsData",
				"LaunchSite": "CActorCreateKey",
				"LaunchSiteFallback": "CActorCreateKey",
				"LaunchAttachQuery": "SAttachQuery",
				"LaunchRequest": "SActorRequest",
				"LaunchAssets": "SActorAVPair",
				"LaunchModel": "CActorCreateKey",
				"LaunchSound": "CActorCreateKey",
				"LaunchTerrainSquibModel": "CActorCreateKey",
				"LaunchTerrainSquibSound": "CActorCreateKey",
				"LaunchTerrainSquibMap": {
					"type": "SActorActionTerrainSquib",
					"array": true
				},
				
				"ContainerSiteOps": "SActorSiteOpsData",
				"ContainerSite": "CActorCreateKey",
				"ContainerAttachQuery": "SAttachQuery",
				"ContainerAssets": "SActorAVPair",
				"ContainerModel": "CActorCreateKey",
				"ContainerSound": "CActorCreateKey",
				"ContainerTerrainSquibModel": "CActorCreateKey",
				"ContainerTerrainSquibSound": "CActorCreateKey",
				"ContainerTerrainSquibMap": {
					"type": "SActorActionTerrainSquib",
					"array": true
				},
				
				"Beam": "CActorKey",
				"BeamScope": "EActorEffectScope",
				"Missile": "CActorKey",
				"ImpactGuideAlias": "CActorKey",
				"ImpactSiteOps": "SActorSiteOpsData",
				"ImpactSiteOpsReaction": "SActorSiteOpsData",
				"ImpactSite": "CActorCreateKey",
				"ImpactSiteFallback": "CActorCreateKey",
				"ImpactAttachQuery": "SAttachQuery",
				"ImpactReattachQuery": "SAttachQuery",
				"ImpactPointSiteOps": "SActorSiteOpsData",
				"ImpactPointSite": "CActorCreateKey",
				"ImpactMap": {
					"type": "SActorAVCluster",
					"array": true,
					"indexEnum": "ESquibType"
				},
				
				"ImpactModel": "CActorCreateKey",
				"ImpactModelReaction": "CActorCreateKey",
				"ImpactSound": "CActorCreateKey",
				"ImpactPhysics": {
					"type": "SActorPhysicsData",
					"array": true
				},
				
				"ImpactTerrainSquibModel": "CActorCreateKey",
				"ImpactTerrainSquibSound": "CActorCreateKey",
				"ImpactTerrainSquibMap": {
					"type": "SActorActionTerrainSquib",
					"array": true
				},
				
				"DamageSiteOps": "SActorSiteOpsData",
				"DamageSiteOpsReaction": "SActorSiteOpsData",
				"DamageSite": "CActorCreateKey",
				"DamageAttachQuery": "SAttachQuery",
				"DamageReattachQuery": "SAttachQuery",
				"DamageMap": {
					"type": "SActorAVCluster",
					"array": true,
					"indexEnum": "ESquibType"
				},
				
				"DamageModel": "CActorCreateKey",
				"DamageModelReaction": "CActorCreateKey",
				"DamageSound": "CActorCreateKey",
				"DamagePhysics": {
					"type": "SActorPhysicsData",
					"array": true
				},
				
				"DamageTerrainSquibModel": "CActorCreateKey",
				"DamageTerrainSquibSound": "CActorCreateKey",
				"DamageTerrainSquibMap": {
					"type": "SActorActionTerrainSquib",
					"array": true
				},
				
				"AcquisitionYawHalfArc": "CActorAngle",
				"AcquisitionPitchHalfArc": "CActorAngle",
				"AccuracyHalfArc": "CActorAngle",
				"WeaponFireTrackingTimeWindow": "real32",
				"ShieldFlashType": "EActorShieldFlashType",
				"ShieldRippleScaleFactor": "real32",
				"ActionFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorActionFlag"
				},
				
				"AttackAnimSource": "CRefKey",
				"AttackAnimName": "CAnimNameKey",
				"ForceCommencementFrom": "CEffectLink",
				"CombatRevealDurationType": "EActorCombatRevealDurationType",
				"Lifetime": "real32"
			}
		},
		
		"CActorArc": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Angle": "real32",
				"Radius": "real32",
				"AngleAnimProps": "CAnimProps"
			}
		},
		
		"CActorBeamSimple": { //TODO: verify
			"parent": "CActorBeam",
			"fields": {}
		},
		
		"CActorBeamStandard": { //TODO: verify
			"parent": "CActorBeam",
			"fields": {
				"Beam": "CBeamLink"
			}
		},
		
		"CActorCameraModel": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Camera": "CRefKey"
			}
		},
		
		"CActorCreep": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"FoliageSpawnTarget": "CActorCreateKey",
				"SubjectResponses": {
					"type": "SActorQuerySubjectResponse",
					"array": true
				}
			}
		},
		
		"CActorDoodad": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"DoodadFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorDoodadFlag"
				},
				
				"EditorFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEditorFlag"
				},
				
				"EditorModel": "CModelLink",
				"EditorAnim": "CAnimProps",
				"EditorIcon": "CImagePath",
				"TexSets": {
					"type": "CTerrainLink",
					"array": true
				},
				
				"Facing": {
					"type": "CFacing",
					"minValue": 0,
					"maxValue": 359.999
				},
				
				"EditorFacingAlignment": {
					"type": "CFangle",
					"minValue": 0,
					"maxValue": 180
				},
				
				"Footprint": "CFootprintLink",
				"Radius": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"RandomScaleRange": "CRange",
				"OccludeHeight": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"BoostedCliffLevel": {
					"type": "TCliffLevel",
					"minValue": 0,
					"maxValue": 3
				},
				
				"BoostedHeight": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EHeightMap",
					"minValue": 0
				},
				
				"MinimapIcon": "CImagePath",
				"MinimapRenderPriority": "CActorKey",
				"MinimapSize": "C2Vector",
				"MinimapShape": "EMinimapShape",
				"MinimapColor": "CColor",
				"MinimapImage": "CImagePath",
				"VisibleOpacity": "real32",
				"VisibleOpacityBlendDuration": "real32",
				"NoFlyZoneSoftRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"NoFlyZoneHardRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 7.75
				}
			}
		},
		
		"CActorDoodadPreserver": { //TODO: verify
			"parent": "CActorModel",
			"fields": {}
		},
		
		"CActorFoliageFXSpawner": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Radius": "real32",
				"SpawnTarget": "CActorCreateKey"
			}
		},
		
		"CActorEditorCamera": { //TODO: verify
			"parent": "CActorModel",
			"fields": {}
		},
		
		"CActorEditorPoint": { //TODO: verify
			"parent": "CActorModel",
			"fields": {}
		},
		
		"CActorEventMacro": { //TODO: verify
			"parent": "CActorBase",
			"fields": {}
		},
		
		"CActorForceBox": { //TODO: verify
			"parent": "CActorForce",
			"fields": {
				"Height": "CVariatorActorReal32",
				"Length": "CVariatorActorReal32",
				"Width": "CVariatorActorReal32",
				"Origin": "EActorForceOrigin"
			}
		},
		
		"CActorForceConeRoundedEnd": { //TODO: verify
			"parent": "CActorForceLineSegment",
			"fields": {
				"Angle": "CVariatorActorAngle",
				"Length": "CVariatorActorReal32"
			}
		},
		
		"CActorForceCylinder": { //TODO: verify
			"parent": "CActorForceLineSegment",
			"fields": {
				"Radius": "CVariatorActorReal32",
				"Length": "CVariatorActorReal32"
			}
		},
		
		"CActorForceSphere": { //TODO: verify
			"parent": "CActorForce",
			"fields": {
				"Radius": "CVariatorActorReal32",
				"IsHemisphere": "bool",
				"Direction": "EActorForceDirection"
			}
		},
		
		"CActorGlobalConfig": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"ActorUnitFallback": "CActorCreateKey",
				"AttachHarnessActor": "CActorCreateKey",
				"AttachHarnessSOpAttach": "CActorLink",
				"AttachHarnessSOpLocalOffset": "CActorLink",
				"AttachHarnessSOpRotationExplicit": "CActorLink",
				"BodySquibs": {
					"type": "SActorDeathBodySquib",
					"array": true
				},
				
				"CloakModel": "CModelLink",
				"CloakModelLow": "CModelLink",
				"CloakTransitionArray": {
					"type": "SActorCloakTransition",
					"array": true,
					"indexEnum": "EActorCloakEffect"
				},
				
				"CommandUIActor": "CActorCreateKey",
				"CreepEngulfmentModel": "CModelLink",
				"CreepHeightClasses": {
					"type": "SActorCreepHeightClass",
					"array": true
				},
				
				"CreepRates": {
					"type": "SActorCreepRate",
					"array": true
				},
				
				"DeathCustomPriorityList": {
					"type": "CActorKey",
					"array": true
				},
				
				"DeathCustoms": {
					"type": "SActorDeathDataCustom",
					"array": true
				},
				
				"MainActor": "CActorKey",
				"MaxSpeedForSound": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"MinimapRenderPriorityList": {
					"type": "CActorKey",
					"array": true
				},
				
				"MissileBoundsOptSpeedThreshold": "real32",
				"PopulationLimitModel": "uint32",
				"RevealTint": "CColorHDR",
				"SceneActor": "CActorKey"
			}
		},
		
		"CActorLight": { //TODO: verify
			"parent": "CActorModel",
			"fields": {}
		},
		
		"CActorLightOmni": { //TODO: verify
			"parent": "CActorLight",
			"fields": {}
		},
		
		"CActorLightSpot": { //TODO: verify
			"parent": "CActorLight",
			"fields": {}
		},
		
		"CActorLightModel": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Light": "CRefKey"
			}
		},
		
		"CActorLightOmniModel": { //TODO: verify
			"parent": "CActorLightModel",
			"fields": {}
		},
		
		"CActorLightSpotModel": { //TODO: verify
			"parent": "CActorLightModel",
			"fields": {}
		},
		
		"CActorLookAt": { //TODO: verify
			"parent": "CActorBase",
			"fields": {}
		},
		
		"CActorList": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"IsAutoDestroy": "bool"
			}
		},
		
		"CActorPortrait": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"FaceFXTarget": "CRefKey",
				"AnimTargets": "CRefKey"
			}
		},
		
		"CActorPower": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"PowerSource": "CBehaviorLink",
				"VisualArray": {
					"type": "CActorCreateKey",
					"array": true
				}
			}
		},
		
		"CActorProgress": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"StageArray": {
					"type": "SActorProgressStage",
					"array": true
				}
			}
		},
		
		"CActorPropertyCurveSet": { //TODO: verify
			"parent": "CActorBase",
			"fields": {}
		},
		
		"CActorQueryResponse": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"Subject": "SActorQuerySubject",
				"OnResponse": {
					"type": "SActorQueryResponse",
					"array": true
				}
			}
		},
		
		"CActorRegionArc": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {
				"Angle": {
					"type": "real32",
					"minValue": 0
				},
				
				"Radius": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorRegionCircle": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {
				"Radius": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorRegionCombine": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {
				"ChildArray": {
					"type": "CActorCreateKey",
					"array": true
				}
			}
		},
		
		"CActorRegionGame": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {}
		},
		
		"CActorRegionPolygon": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {
				"PointArray": {
					"type": "C2Vector",
					"array": true
				}
			}
		},
		
		"CActorRegionQuad": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {
				"Quad": "CQuad",
				"Height": {
					"type": "real32",
					"minValue": 0
				},
				
				"Width": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorRegionWater": { //TODO: verify
			"parent": "CActorRegion",
			"fields": {}
		},
		
		"CActorScene": { //TODO: verify
			"parent": "CActorBase",
			"fields": {}
		},
		
		"CActorSelection": { //TODO: verify
			"parent": "CActorSplat",
			"fields": {
				"Alpha": "C3Vector",
				"FallOff": "real32",
				"InnerBoundaryFallOffRatio": "real32",
				"InnerBoundaryRatio": "real32",
				"InnerOffsetRatio": "real32",
				"InnerWidth": "real32",
				"OuterWidth": "real32",
				"HalfHeight": "real32",
				"Attenuation": "real32",
				"HostRadiusPercent": "real32",
				"RotationSpeed": "real32",
				"SegmentCount": "uint32",
				"SegmentPercentSolid": "real32",
				"SelectionFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorSelectionFlag"
				}
			}
		},
		
		"CActorSetQueried": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"Host": "SActorRequest",
				"AttachQuery": "SAttachQuery",
				"SpawnTarget": "CActorCreateKey"
			}
		},
		
		"CActorShadow": { //TODO: verify
			"parent": "CActorSplat",
			"fields": {
				"Alpha": "C3Vector",
				"FallOff": "real32",
				"HalfHeight": "real32",
				"Attenuation": "real32",
				"HostRadiusPercent": "real32"
			}
		},
		
		"CActorShield": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Ripple": "CActorCreateKey",
				"ScaleDamageMin": "real32",
				"ScaleDamageMax": "real32",
				"RadiusMin": "real32",
				"RadiusMax": "real32"
			}
		},
		
		"CActorShieldImpact": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"VisualDirectionalFacer": "CActorCreateKey",
				"VisualDirectionalHeader": "CActorCreateKey",
				"VisualDirectionless": "CActorCreateKey",
				"RadiusMedium": "real32",
				"RadiusLarge": "real32",
				"MaxCountSmall": "uint32",
				"MaxCountMedium": "uint32",
				"MaxCountLarge": "uint32"
			}
		},
		
		"CActorSimple": { //TODO: verify
			"parent": "CActorBase",
			"fields": {}
		},
		
		"CActorSiteBillboard": { //TODO: verify
			"parent": "CActorSite",
			"fields": {
				"BillboardType": "EActorSiteBillboardType",
				"TowardsCameraDistance": {
					"type": "real32",
					"minValue": 0
				},
				
				"HoldRotation": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"UpdateDriveBearings": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CActorSiteMover": { //TODO: verify
			"parent": "CActorSite",
			"fields": {
				"Acceleration": "real32",
				"Deceleration": {
					"type": "real32",
					"minValue": 0
				},
				
				"Speed": {
					"type": "real32",
					"minValue": 0
				},
				
				"SpeedMax": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorSiteRocker": { //TODO: verify
			"parent": "CActorSite",
			"fields": {
				"Elevation": "CVariatorActorReal32",
				"ElevationPeriod": "CVariatorActorReal32",
				"Pitch": "CVariatorActorFangle",
				"PitchPeriod": "CVariatorActorReal32",
				"Roll": "CVariatorActorFangle",
				"RollPeriod": "CVariatorActorReal32"
			}
		},
		
		"CActorSiteOp2DRotation": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {}
		},
		
		"CActorSiteOpAction": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Location": "EActorSiteOpActionLocation"
			}
		},
		
		"CActorSiteOpAttach": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"AttachQuery": "SAttachQuery",
				"ReattachQuery": "SAttachQuery",
				"ForceSoftAttach": "bool",
				"Source": "EActorSiteOpAttachSource"
			}
		},
		
		"CActorSiteOpAttachVolume": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostIncoming": "SActorRequest",
				"HostIncomingSiteOps": "SActorSiteOpsData",
				"UpwardVisibilityEnhancement": "bool",
				"UpwardVisibilityEnhancementVarianceUp": {
					"type": "CActorAngle",
					"minValue": 0
				},
				
				"UpwardVisibilityEnhancementVarianceDown": {
					"type": "CActorAngle",
					"minValue": 0
				}
			}
		},
		
		"CActorSiteOpBanker": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"RollAngleMax": "CActorAngle",
				"RollInRate": "CActorAngle",
				"RollOutRate": "CActorAngle",
				"RollOutRemainderFractionForLevelOff": "real32"
			}
		},
		
		"CActorSiteOpBankerUnit": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"RollMax": "CVariatorActorAngle",
				"RollInActivationAngle": {
					"type": "CActorAngle",
					"minValue": 0,
					"maxValue": 180
				},
				
				"RollInArc": "CVariatorActorAngle",
				"RollOutDuration": "CVariatorActorReal32"
			}
		},
		
		"CActorSiteOpBasic": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"BasicType": "EActorSiteOpBasicType",
				"WorldPosition": "C3Vector"
			}
		},
		
		"CActorSiteOpDeathMotion": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostInitial": "SActorRequest",
				"HostInitialSiteOps": "SActorSiteOpsData",
				"Deceleration": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"CActorSiteOpEffect": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Location": "EActorEffectLocation",
				"ZOnly": "bool"
			}
		},
		
		"CActorSiteOpForward": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Forward": "C3Vector",
				"HostForward": "SActorRequest",
				"HostForwardSiteOps": "SActorSiteOpsData",
				"Invert": "bool"
			}
		},
		
		"CActorSiteOpHeight": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HeightSourceType": "EActorHeightSourceType",
				"HostHeight": "SActorRequest"
			}
		},
		
		"CActorSiteOpHigherOfTerrainAndWater": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HeightSourceType": "EActorHeightSourceType",
				"TerrainAndWaterFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorSiteOpTerrainAndWaterFlag"
				}
			}
		},
		
		"CActorSiteOpHostBearings": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostBearings": "SActorRequest",
				"HostBearingsSiteOps": "SActorSiteOpsData"
			}
		},
		
		"CActorSiteOpHostedOffset": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostOffset": "SActorRequest",
				"HostOffsetSiteOps": "SActorSiteOpsData"
			}
		},
		
		"CActorSiteOpIncoming": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostImpact": "SActorRequest",
				"HostIncoming": "SActorRequest",
				"Type": "EActorIncomingType",
				"PullBack": "real32",
				"FreezePositionAtImpact": "bool"
			}
		},
		
		"CActorSiteOpLocalOffset": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"LocalOffset": "C3Vector",
				"OverridingLength": "CVariatorActorReal32"
			}
		},
		
		"CActorSiteOpPatch": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"PatchAngle": "CActorAngle",
				"PatchRadius": "real32",
				"Distribution": "EActorRadialDistribution",
				"Mean": "real32",
				"Variance": "real32"
			}
		},
		
		"CActorSiteOpPhysicsImpact": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Type": "EActorSiteOpPhysicsImpactType"
			}
		},
		
		"CActorSiteOpRandomPointInCircle": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Radius": "real32",
				"Distribution": "EActorRadialDistribution",
				"Mean": "real32",
				"Variance": "real32",
				"RestrictToCircumference": "bool",
				"ObserveRotation": "bool"
			}
		},
		
		"CActorSiteOpRandomPointInCrossbar": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HalfWidth": "real32",
				"Distribution": "EActorCrossbarDistribution",
				"Variance": "real32"
			}
		},
		
		"CActorSiteOpRandomPointInSphere": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Radius": "real32",
				"Distribution": "EActorRadialDistribution",
				"Mean": "real32",
				"Variance": "real32",
				"RestrictToSurface": "bool"
			}
		},
		
		"CActorSiteOpRotationExplicit": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Forward": "C3Vector",
				"Up": "C3Vector",
				"IsLocal": "bool"
			}
		},
		
		"CActorSiteOpRotationRandom": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"YawHalfAngle": {
					"type": "CActorAngle",
					"minValue": 0,
					"maxValue": 180
				},
				
				"PitchHalfAngle": {
					"type": "CActorAngle",
					"minValue": 0,
					"maxValue": 90
				}
			}
		},
		
		"CActorSiteOpRotationVariancer": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"ForwardAngle": "CActorAngle",
				"UpAngle": "CActorAngle",
				"IsUpDominantWhenOrthogonalized": "bool"
			}
		},
		
		"CActorSiteOpRotator": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"LocalAxis": "C3Vector",
				"Rate": "CActorAngle",
				"Type": "EActorSiteOpRotatorType",
				"InitialAngle": "CActorAngle"
			}
		},
		
		"CActorSiteOpRotationSmooth": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Acceleration": "CFangleRate",
				"Deceleration": "CFangleRate",
				"MaxSpeed": "CFangleRate"
			}
		},
		
		"CActorSiteOpSelectionOffset": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {}
		},
		
		"CActorSiteOpSerpentHead": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Aggregate": "SSerpentAggregate",
				"Segment": "SSerpentSegment"
			}
		},
		
		"CActorSiteOpSerpentSegment": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Head": "CRefKey",
				"Segment": "SSerpentSegment"
			}
		},
		
		"CActorSiteOpShadow": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HeightSourceType": "EActorHeightSourceType",
				"HeightOffset": "real32",
				"HeightOffsetOnCliff": "real32",
				"CliffTests": {
					"type": "C2Vector",
					"array": true
				},
				
				"HeightTests": {
					"type": "C2Vector",
					"array": true
				},
				
				"HeightTestType": "EActorHeightTestType"
			}
		},
		
		"CActorSiteOpTipability": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"TipabilityFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorSiteOpTipabilityFlag"
				}
			}
		},
		
		"CActorSiteOpUp": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"Up": "C3Vector",
				"HostUp": "SActorRequest",
				"HostUpSiteOps": "SActorSiteOpsData",
				"Invert": "bool"
			}
		},
		
		"CActorSiteOpZ": { //TODO: verify
			"parent": "CActorSiteOpBase",
			"fields": {
				"HostZ": "SActorRequest"
			}
		},
		
		"CActorSnapshot": { //TODO: verify
			"parent": "CActorModel",
			"fields": {}
		},
		
		"CActorStateMonitor": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"StateArray": {
					"type": "SActorStateInfo",
					"array": true
				},
				
				"StateThinkInterval": "CGameTime"
			}
		},
		
		"CActorSquib": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Map": {
					"type": "SActorAVPair",
					"array": true,
					"indexEnum": "ESquibType"
				},
				
				"HarnessModel": "CActorCreateKey",
				"HarnessSound": "CActorCreateKey"
			}
		},
		
		"CActorTerrain": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"PhysicsImpactDefault": "SActorPhysicsImpactData",
				"PhysicsImpacts": {
					"type": "SActorPhysicsImpactData",
					"array": true
				}
			}
		},
		
		"CActorTerrainDeformer": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"Footprint": "CFootprintLink",
				"InfluenceRange": "real32",
				"BlendTime": "real32",
				"HeightDelta": "real32",
				"TerrainDeformerFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorTerrainDeformerFlag"
				},
				
				"FoliageFXDeathSpawnTarget": "CActorCreateKey"
			}
		},
		
		"CActorText": { //TODO: verify
			"parent": "CActorBearings",
			"fields": {
				"TextScale": "real32",
				"MaxSize": "C2Vector",
				"FixedSize": "uint32",
				"AlignH": "EActorTextAlignment",
				"AlignV": "EActorTextAlignment",
				"HeightOffset": "real32",
				"Color": "CColor",
				"Options": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorTextOption"
				},
				
				"Text": "CStringLink"
			}
		},
		
		"CActorTurret": { //TODO: verify
			"parent": "CActorBase",
			"fields": {
				"PitchQuery": "SAttachQuery",
				"YawQuery": "SAttachQuery",
				"TurretBody": "SActorRequest"
			}
		},
		
		"CActorUnit": { //TODO: verify
			"parent": "CActorModel",
			"fields": {
				"Baselines": {
					"type": "SActorBaseline",
					"array": true,
					"indexEnum": "EActorBaselineType"
				},
				
				"BuildModel": "CModelLink",
				"DeathArray": {
					"type": "SActorDeathData",
					"array": true,
					"indexEnum": "EDeathType"
				},
				
				"DeathCustoms": {
					"type": "SActorDeathDataCustom",
					"array": true
				},
				
				"DeathCustomData": {
					"type": "SActorDeathDataCustomGroup",
					"array": true
				},
				
				"DeathActorModel": "CActorCreateKey",
				"DeathActorModelLow": "CActorCreateKey",
				"DeathActorSound": "CActorCreateKey",
				"DeathActorVoice": "CActorCreateKey",
				"EditorModel": "CModelLink",
				"EditorAnim": "CAnimProps",
				"OverkillByDamagePastRemainingHealth": "SDamagePastRemainingHealth",
				"OverkillByDamageOverInterval": "SDamageOverInterval",
				"PhysicsMatchKeysOrdered": "CActorTableKeys1x3",
				"PlacementModel": "CModelLink",
				"PlacementSound": "CSoundLink",
				"PlacementActorModel": "CActorCreateKey",
				"PlaceholderActorModel": "CActorCreateKey",
				"PortraitActor": "CActorCreateKey",
				"PortraitModel": "CModelLink",
				"PortraitCamera": "CCameraLink",
				"RandomScaleRange": "CRange",
				"StandAnimTurnTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"StandAnimTurnTimeScaleMin": {
					"type": "real32",
					"minValue": 0
				},
				
				"TerrainSquibs": {
					"type": "STerrainSquib",
					"array": true
				},
				
				"VarianceWindowStandIntro": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"VarianceWindowStand": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"VarianceWindowWalkIntro": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"VarianceWindowWalk": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"VarianceWindowWalkOutro": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"WalkAnimMoveSpeed": {
					"type": "CGameRate",
					"minValue": 0
				},
				
				"WalkAnimTimeScalingAsFlyer": "bool",
				"AbilSoundArray": {
					"type": "SUnitAbilSound",
					"array": true
				},
				
				"AddonIndicator": "CStringLink",
				"BarDistance": "uint32",
				"BarHeight": {
					"type": "int32",
					"minValue": 1,
					"maxValue": 200
				},
				
				"BarOffset": {
					"type": "int32",
					"minValue": -800,
					"maxValue": 800
				},
				
				"BarWidth": {
					"type": "int32",
					"minValue": 1,
					"maxValue": 800
				},
				
				"CantSelectUncontrollableTooltip": "CStringLink",
				"CooldownDisplay": {
					"type": "CAbilCommand",
					"array": true
				},
				
				"CustomUnitStatusFrame": "CString",
				"ErrorArray": {
					"type": "SErrorOverride",
					"array": true
				},
				
				"GlossaryAnim": "CString",
				"GroupIcon": "SLayerIcon",
				"GroupIconVariations": {
					"type": "SLayerIconVariation",
					"array": true
				},
				
				"GroupSoundArray": {
					"type": "CSoundLink",
					"array": true,
					"indexEnum": "EUnitSound"
				},
				
				"GroupSoundThreshold": "uint32",
				"HeroIcon": "CImagePath",
				"HeroIconVariations": {
					"type": "SIconVariation",
					"array": true
				},
				
				"HighlightTooltip": "CStringLink",
				"HighlightSubTooltip": "CStringLink",
				"InfoText": "CStringLink",
				"LifeArmorIcon": "CImagePath",
				"MinimapIcon": "CImagePath",
				"MinimapIconIsTeamColored": "bool",
				"MinimapIconScale": "real32",
				"MinimapIconBackground": "CImagePath",
				"MinimapIconBackgroundIsTeamColored": "bool",
				"MinimapIconBackgroundScale": "real32",
				"MinimapRenderPriority": "CActorKey",
				"MinimapTooltip": "CStringLink",
				"MovementHerdNode": "CHerdNodeLink",
				"MinimapFlashWhenAttacked": "bool",
				"MinimapUseSelfColor": "bool",
				"MinimapUseSelectionColor": "bool",
				"NameOffset": {
					"type": "int32",
					"minValue": -800,
					"maxValue": 800
				},
				
				"SelectAbilCmd": "CAbilCommand",
				"ShieldArmorIcon": "CImagePath",
				"SnapshotActor": "CActorCreateKey",
				"SoundArray": {
					"type": "CSoundLink",
					"array": true,
					"indexEnum": "EUnitSound"
				},
				
				"StatusBarFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitStatus"
				},
				
				"StatusBarGroups": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitStatusGroup"
				},
				
				"StatusBarOn": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitStatus"
				},
				
				"StatusColors": {
					"type": "SStatusColor",
					"array": true,
					"indexEnum": "EUnitStatus"
				},
				
				"StatusHarvesterData": "SStatusHarvesterData",
				"StatusTextInfo": "STextTagParameters",
				"UnitBorderNormalColor": "CColorRGB",
				"UnitBorderSubgroupColor": "CColorRGB",
				"UnitFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorUnitFlag"
				},
				
				"UnitIcon": "CImagePath",
				"UnitIconVariations": {
					"type": "SIconVariation",
					"array": true
				},
				
				"UnitKillRank": {
					"type": "SUnitKillRank",
					"array": true
				},
				
				"UnitModelFrameActor": "CActorCreateKey",
				"VitalColors": {
					"type": "SVitalColor",
					"array": true,
					"indexEnum": "EVitalColor"
				},
				
				"VitalNames": {
					"type": "CStringLink",
					"array": true,
					"indexEnum": "EVitalColor"
				},
				
				"Wireframe": "SLayerIcon",
				"WireframeVariations": {
					"type": "SLayerIconVariation",
					"array": true
				},
				
				"WireframeShield": "SLayerIconShield",
				"WireframeShieldColor": "CColor",
				"WireframeShieldVariations": {
					"type": "SLayerIconShieldVariation",
					"array": true
				}
			}
		},
		
		"CActorMissile": { //TODO: verify
			"parent": "CActorUnit",
			"fields": {
				"HostReturn": "SActorRequest",
				"HostReturnSiteOps": "SActorSiteOpsData",
				"IsTentacle": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"PreHost": "CActorKey"
			}
		},
		
		"SActorMsgAnim": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CAnimNameKey"
			}
		},
		
		"SActorMsgAnimProps": { //TODO: verify
			"parent": null,
			"fields": {
				"Props": "CAnimProps"
			}
		},
		
		"SActorMsgAttachMethods": { //TODO: verify
			"parent": null,
			"fields": {
				"AttachMethods": "CAttachMethods"
			}
		},
		
		"SActorMsgName": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorKey"
			}
		},
		
		"SActorMsgRefName": { //TODO: verify
			"parent": null,
			"fields": {
				"RefName": "CRefKey"
			}
		},
		
		"SActorMsgSetFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgStatus": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgTexture": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot"
			}
		},
		
		"SActorMsgTextureProps": { //TODO: verify
			"parent": null,
			"fields": {
				"Props": "CTextureProps"
			}
		},
		
		"SActorMsgActionDamagePhysics": { //TODO: verify
			"parent": null,
			"fields": {
				"OverridePhysicsMatchKeysOrdered": "CActorTableKeys1x3"
			}
		},
		
		"SActorMsgActionImpactPhysics": { //TODO: verify
			"parent": null,
			"fields": {
				"OverridePhysicsMatchKeysOrdered": "CActorTableKeys1x3"
			}
		},
		
		"SActorMsgAliasAdd": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgAliasRemove": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgAnimBlendTimeApply": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendTime": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				}
			}
		},
		
		"SActorMsgAnimBracketClear": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				}
			}
		},
		
		"SActorMsgAnimBracketResume": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType"
			}
		},
		
		"SActorMsgAnimBracketStart": { //TODO: verify
			"parent": null,
			"fields": {
				"Opening": "CAnimProps",
				"Content": "CAnimProps",
				"Closing": "CAnimProps",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimBracketStartFlag"
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType"
			}
		},
		
		"SActorMsgAnimBracketStop": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType"
			}
		},
		
		"SActorMsgAnimClear": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOut": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				}
			}
		},
		
		"SActorMsgAnimClearAllBut": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOut": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				}
			}
		},
		
		"SActorMsgAnimClearTimeScaleGlobal": { //TODO: verify
			"parent": null,
			"fields": {
				"Label": "CAnimNameKey"
			}
		},
		
		"SActorMsgAnimCopy": { //TODO: verify
			"parent": null,
			"fields": {
				"Source": "CRefKey"
			}
		},
		
		"SActorMsgAnimGlobalLoopsClear": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				}
			}
		},
		
		"SActorMsgAnimGlobalLoopsStop": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				}
			}
		},
		
		"SActorMsgAnimGroupApply": { //TODO: verify
			"parent": null,
			"fields": {
				"AtApply": "CAnimProps",
				"AtRemove": "CAnimProps",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimGroupApplyFlag"
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType"
			}
		},
		
		"SActorMsgAnimGroupRemove": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimTransitionFlag"
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType"
			}
		},
		
		"SActorMsgAnimPlaySequence": { //TODO: verify
			"parent": null,
			"fields": {
				"SequenceName": "CString40",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimFlags"
				},
				
				"BlendIn": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"BlendOut": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"BlendInStartOffset": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"PriorityOverride": "uint32"
			}
		},
		
		"SActorMsgAnimPlay": { //TODO: verify
			"parent": null,
			"fields": {
				"Props": "CAnimProps",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimFlags"
				},
				
				"BlendIn": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"BlendOut": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"TimeVariant": "real32",
				"TimeType": "EAnimTimeVariantType",
				"BlendInStartOffset": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"PriorityOverride": "uint32"
			}
		},
		
		"SActorMsgAnimSetCompletion": { //TODO: verify
			"parent": null,
			"fields": {
				"Percent": "real32"
			}
		},
		
		"SActorMsgAnimSetDuration": { //TODO: verify
			"parent": null,
			"fields": {
				"Duration": "real32"
			}
		},
		
		"SActorMsgAnimSetLockedAll": { //TODO: verify
			"parent": null,
			"fields": {
				"Locked": "bool"
			}
		},
		
		"SActorMsgAnimSetPaused": { //TODO: verify
			"parent": null,
			"fields": {
				"Paused": "bool"
			}
		},
		
		"SActorMsgAnimSetPausedAll": { //TODO: verify
			"parent": null,
			"fields": {
				"Paused": "bool"
			}
		},
		
		"SActorMsgAnimSetTime": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": "real32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimSetTimeFlag"
				}
			}
		},
		
		"SActorMsgAnimSetTimeScale": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": {
					"type": "real32",
					"minValue": 0.001
				}
			}
		},
		
		"SActorMsgAnimSetTimeScaleAbsolute": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": {
					"type": "real32",
					"minValue": 0.001
				}
			}
		},
		
		"SActorMsgAnimSetTimeScaleGlobal": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": {
					"type": "real32",
					"minValue": 0.001
				},
				
				"Label": "CAnimNameKey"
			}
		},
		
		"SActorMsgAnimSetUserWeight": { //TODO: verify
			"parent": null,
			"fields": {
				"Weight": {
					"type": "real32",
					"minValue": 0.001,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgArcSetAngle": { //TODO: verify
			"parent": null,
			"fields": {
				"Angle": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				}
			}
		},
		
		"SActorMsgAttach": { //TODO: verify
			"parent": null,
			"fields": {
				"Actor": "CRefKey",
				"AttachMethods": "CAttachMethods",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachModel": { //TODO: verify
			"parent": null,
			"fields": {
				"Actor": "CActorCreateKey",
				"Model": "CModelLink",
				"AttachMethods": "CAttachMethods",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachModelOffset": { //TODO: verify
			"parent": null,
			"fields": {
				"Actor": "CActorCreateKey",
				"Model": "CModelLink",
				"AttachMethods": "CAttachMethods",
				"LocalOffset": "C3Vector",
				"LocalRotation": "CRotation",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachOffset": { //TODO: verify
			"parent": null,
			"fields": {
				"Actor": "CRefKey",
				"AttachMethods": "CAttachMethods",
				"LocalOffset": "C3Vector",
				"LocalRotation": "CRotation",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachSetBearings": { //TODO: verify
			"parent": null,
			"fields": {
				"Bearings": "CBearings"
			}
		},
		
		"SActorMsgAttachSetBearingsFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorKey",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachSetPosition": { //TODO: verify
			"parent": null,
			"fields": {
				"Position": "C3Vector"
			}
		},
		
		"SActorMsgAttachSetPositionFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorKey",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgAttachSetRotation": { //TODO: verify
			"parent": null,
			"fields": {
				"Rotation": "CRotation"
			}
		},
		
		"SActorMsgAttachSetRotationFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorKey",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgCameraSetActive": { //TODO: verify
			"parent": null,
			"fields": {
				"Active": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgCameraSetClipToBounds": { //TODO: verify
			"parent": null,
			"fields": {
				"Clip": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgCameraSetEyePosition": { //TODO: verify
			"parent": null,
			"fields": {
				"Position": "CGamePoint3D"
			}
		},
		
		"SActorMsgCameraSetLink": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CCameraLink",
				"Duration": "real32",
				"InitialVelocity": "real32",
				"DecelerateFraction": "real32",
				"Synchronous": "bool"
			}
		},
		
		"SActorMsgCameraSetParam": { //TODO: verify
			"parent": null,
			"fields": {
				"Param": "ECameraParam",
				"Value": "real32",
				"Duration": "real32",
				"InitialVelocity": "real32",
				"DecelerateFraction": "real32",
				"Synchronous": "bool"
			}
		},
		
		"SActorMsgClearOpacity": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOutDuration": "real32",
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgClearScale": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOutDuration": "real32",
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgClearTeamColor": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOutDuration": "real32",
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgClearTintColor": { //TODO: verify
			"parent": null,
			"fields": {
				"BlendOutDuration": "real32",
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgCreate": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorKey",
				"Content": {
					"type": "CRefKey",
					"array": true
				}
			}
		},
		
		"SActorMsgCombatRevealComplete": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgCreateCopy": { //TODO: verify
			"parent": null,
			"fields": {
				"CreateKey": "CActorKey",
				"SourceKey": "CActorKey"
			}
		},
		
		"SActorMsgCreepEngulfmentStart": { //TODO: verify
			"parent": null,
			"fields": {
				"StartOffset": {
					"type": "real32",
					"minValue": -1000
				},
				
				"SolidHeight": {
					"type": "real32",
					"minValue": -1
				},
				
				"FadeHeight": {
					"type": "real32",
					"minValue": -1
				}
			}
		},
		
		"SActorMsgCreepEngulfmentStartTransition": { //TODO: verify
			"parent": null,
			"fields": {
				"Rate": {
					"type": "real32",
					"minValue": -1
				}
			}
		},
		
		"SActorMsgCreepEngulfmentStopTransition": { //TODO: verify
			"parent": null,
			"fields": {
				"Rate": {
					"type": "real32",
					"minValue": -1
				}
			}
		},
		
		"SActorMsgDeathCustomize": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgDeathCustomsEnablePhysics": { //TODO: verify
			"parent": null,
			"fields": {
				"On": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgDeathSequencePrepare": { //TODO: verify
			"parent": null,
			"fields": {
				"DeathType": "EDeathType",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorDeathSequenceFlag"
				}
			}
		},
		
		"SActorMsgDestroy": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "EActorDestroyType"
			}
		},
		
		"SActorMsgDoodadPreserve": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgForceSetAngle": { //TODO: verify
			"parent": null,
			"fields": {
				"Angle": "CVariatorActorAngle",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgForceSetHeight": { //TODO: verify
			"parent": null,
			"fields": {
				"Height": "CVariatorActorReal32",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgForceSetLength": { //TODO: verify
			"parent": null,
			"fields": {
				"Length": "CVariatorActorReal32",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgForceSetMagnitude": { //TODO: verify
			"parent": null,
			"fields": {
				"Magnitude": "CVariatorActorReal32",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgForceSetRadius": { //TODO: verify
			"parent": null,
			"fields": {
				"Radius": "CVariatorActorReal32",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgForceSetWidth": { //TODO: verify
			"parent": null,
			"fields": {
				"Width": "CVariatorActorReal32",
				"BlendIn": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgHaloSetColor": { //TODO: verify
			"parent": null,
			"fields": {
				"HaloColor": "CColorRGB"
			}
		},
		
		"SActorMsgHaloSetColorFromAllianceType": { //TODO: verify
			"parent": null,
			"fields": {
				"AllianceType": "EActorFilter"
			}
		},
		
		"SActorMsgHostedPropDump": { //TODO: verify
			"parent": null,
			"fields": {
				"IncludeChildren": "bool",
				"Type": "EActorHostedProp"
			}
		},
		
		"SActorMsgHostedPropDumpAll": { //TODO: verify
			"parent": null,
			"fields": {
				"IncludeChildren": "bool"
			}
		},
		
		"SActorMsgHostSetOffset": { //TODO: verify
			"parent": null,
			"fields": {
				"HostName": "CActorKey",
				"HostSubject": "CRefKey",
				"LocalOffset": "C3Vector",
				"LocalRotation": "CRotation",
				"SiteOps": "CActorSiteOps"
			}
		},
		
		"SActorMsgHostSiteOpsSet": { //TODO: verify
			"parent": null,
			"fields": {
				"HostName": "CActorKey",
				"Ops": "CActorSiteOps",
				"HoldPosition": "bool",
				"HoldRotation": "bool"
			}
		},
		
		"SActorMsgLightSetAmbientOcclusion": { //TODO: verify
			"parent": null,
			"fields": {
				"AmbientOcclusion": "bool"
			}
		},
		
		"SActorMsgLightSetAttenuationStart": { //TODO: verify
			"parent": null,
			"fields": {
				"AttenuationStart": "real32"
			}
		},
		
		"SActorMsgLightSetColorMultiplier": { //TODO: verify
			"parent": null,
			"fields": {
				"ColorMultiplier": "real32"
			}
		},
		
		"SActorMsgLightSetFalloff": { //TODO: verify
			"parent": null,
			"fields": {
				"Falloff": "real32"
			}
		},
		
		"SActorMsgLightSetHotspot": { //TODO: verify
			"parent": null,
			"fields": {
				"Hotspot": "real32"
			}
		},
		
		"SActorMsgLightSetLightOpaque": { //TODO: verify
			"parent": null,
			"fields": {
				"LightOpaque": "bool"
			}
		},
		
		"SActorMsgLightSetLightTransparent": { //TODO: verify
			"parent": null,
			"fields": {
				"LightTransparent": "bool"
			}
		},
		
		"SActorMsgLightSetRange": { //TODO: verify
			"parent": null,
			"fields": {
				"Range": "real32"
			}
		},
		
		"SActorMsgLightSetShadowCasting": { //TODO: verify
			"parent": null,
			"fields": {
				"ShadowCasting": "bool"
			}
		},
		
		"SActorMsgLightSetSpecular": { //TODO: verify
			"parent": null,
			"fields": {
				"Specular": "bool"
			}
		},
		
		"SActorMsgLightSetSpecularColor": { //TODO: verify
			"parent": null,
			"fields": {
				"SpecularColor": "CColorRGB"
			}
		},
		
		"SActorMsgListAdd": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgListPopulateDone": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgListRemove": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgMessageThinkActivate": { //TODO: verify
			"parent": null,
			"fields": {
				"On": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgMessageUpdateActivate": { //TODO: verify
			"parent": null,
			"fields": {
				"On": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgMinimapIcon": { //TODO: verify
			"parent": null,
			"fields": {
				"Image": "CImagePath"
			}
		},
		
		"SActorMsgMinimapIconBackground": { //TODO: verify
			"parent": null,
			"fields": {
				"Image": "CImagePath"
			}
		},
		
		"SActorMsgMinimapIconBackgroundScale": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": "real32"
			}
		},
		
		"SActorMsgMinimapIconScale": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": "real32"
			}
		},
		
		"SActorMsgMinimapTooltip": { //TODO: verify
			"parent": null,
			"fields": {
				"Text": "CString"
			}
		},
		
		"SActorMsgMissileTentacleReturn": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgModelAllowHitTest": { //TODO: verify
			"parent": null,
			"fields": {
				"Allow": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgModelEventSuppress": { //TODO: verify
			"parent": null,
			"fields": {
				"Event": "EEventID",
				"Suppress": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgModelLinkCustomize": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"Variation": "uint8"
			}
		},
		
		"SActorMsgModelSwap": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"Variation": "uint8"
			}
		},
		
		"SActorMsgMovementTrackingStart": { //TODO: verify
			"parent": null,
			"fields": {
				"Interval": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorMsgMoverSetAcceleration": { //TODO: verify
			"parent": null,
			"fields": {
				"Acceleration": "real32"
			}
		},
		
		"SActorMsgMoverSetDeceleration": { //TODO: verify
			"parent": null,
			"fields": {
				"Deceleration": "real32"
			}
		},
		
		"SActorMsgMoverSetDestination2D": { //TODO: verify
			"parent": null,
			"fields": {
				"Destination2D": "C2Vector"
			}
		},
		
		"SActorMsgMoverSetDestinationFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgMoverSetDestinationH": { //TODO: verify
			"parent": null,
			"fields": {
				"Height": "real32"
			}
		},
		
		"SActorMsgMoverSetDestinationZ": { //TODO: verify
			"parent": null,
			"fields": {
				"Z": "real32"
			}
		},
		
		"SActorMsgMoverSetSpeed": { //TODO: verify
			"parent": null,
			"fields": {
				"Speed": "real32"
			}
		},
		
		"SActorMsgMoverSetSpeedMax": { //TODO: verify
			"parent": null,
			"fields": {
				"SpeedMax": "real32"
			}
		},
		
		"SActorMsgPlayUnitSound": { //TODO: verify
			"parent": null,
			"fields": {
				"Sound": "EUnitSound"
			}
		},
		
		"SActorMsgPhysicsImpactCustomize": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgPhysicsImpactsEnable": { //TODO: verify
			"parent": null,
			"fields": {
				"Enabled": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgPhysicsMatchKeysOrderedSet": { //TODO: verify
			"parent": null,
			"fields": {
				"MatchKeys": "CActorTableKeys1x3"
			}
		},
		
		"SActorMsgPortraitAnimSetTimeFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"Source": "EAnimSetTimeFromSource",
				"TriggerEventsOnScrub": "bool"
			}
		},
		
		"SActorMsgPortraitCustomize": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"Actor": "CActorCreateKey",
				"Camera": "CCameraLink"
			}
		},
		
		"SActorMsgPreTargetingUpdate": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgPrint": { //TODO: verify
			"parent": null,
			"fields": {
				"String": "CString"
			}
		},
		
		"SActorMsgPropertyCurveAdd": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "EActorPropertyCurveType",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorPropertyCurveFlag"
				},
				
				"Subject": "CRefKey",
				"Name": "CCurveNameKey"
			}
		},
		
		"SActorMsgPropertyCurveAddLabel": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey",
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgPropertyCurveAddPoint": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey",
				"Component": "CCurveComponentNameKey",
				"Point": "CActorAgeRealPair",
				"TangentInType": "EActorPropertyCurveTangentType",
				"TangentOutType": "EActorPropertyCurveTangentType",
				"TangentInValue": "C2Vector",
				"TangentOutValue": "C2Vector"
			}
		},
		
		"SActorMsgPropertyCurveStart": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey"
			}
		},
		
		"SActorMsgPropertyCurveStop": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey"
			}
		},
		
		"SActorMsgPropertyCurveStopLooping": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey"
			}
		},
		
		"SActorMsgQueryPersistent": { //TODO: verify
			"parent": null,
			"fields": {
				"EnterResponse": "CActorCreateKey",
				"LeaveResponse": "CActorCreateKey",
				"IntersectType": "EActorIntersectType",
				"RefreshPeriod": "real32",
				"ClosestToRefKey": "CRefKey",
				"BecomeClosestResponse": "CActorCreateKey",
				"NoLongerClosestResponse": "CActorCreateKey"
			}
		},
		
		"SActorMsgQueryRadius": { //TODO: verify
			"parent": null,
			"fields": {
				"Radius": "real32",
				"Response": "CActorCreateKey",
				"IntersectType": "EActorIntersectType"
			}
		},
		
		"SActorMsgQueryRegion": { //TODO: verify
			"parent": null,
			"fields": {
				"Region": "CActorCreateKey",
				"Response": "CActorCreateKey",
				"IntersectType": "EActorIntersectType"
			}
		},
		
		"SActorMsgRefClear": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgRefCreate": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgRefDestroy": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgRefDump": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgRefNotify": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorMsgRefSet": { //TODO: verify
			"parent": null,
			"fields": {
				"RefSource": "CRefKey"
			}
		},
		
		"SActorMsgRefSetFromActor": { //TODO: verify
			"parent": null,
			"fields": {
				"RefPrimary": "CRefKey",
				"RefSecondary": "CRefKey"
			}
		},
		
		"SActorMsgRefSetFromMsg": { //TODO: verify
			"parent": null,
			"fields": {
				"RefMsg": "CRefKey"
			}
		},
		
		"SActorMsgRefSetFromRequest": { //TODO: verify
			"parent": null,
			"fields": {
				"Subject": "CRefKey",
				"Scope": "EActorRequestScope",
				"Actor": "EActorRequestActor",
				"Effect": "CEffectLink"
			}
		},
		
		"SActorMsgRefSetRefreshName": { //TODO: verify
			"parent": null,
			"fields": {
				"RefreshName": "CActorKey"
			}
		},
		
		"SActorMsgRefTableDump": { //TODO: verify
			"parent": null,
			"fields": {
				"Space": "EActorRefSpace"
			}
		},
		
		"SActorMsgSceneDeathCustomSetSyncPassChance": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"SyncPassChance": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 100
				}
			}
		},
		
		"SActorMsgSceneHaloSetColor": { //TODO: verify
			"parent": null,
			"fields": {
				"HaloColor": "CColorRGB"
			}
		},
		
		"SActorMsgSceneHaloSetEmission": { //TODO: verify
			"parent": null,
			"fields": {
				"Emission": "real32"
			}
		},
		
		"SActorMsgSceneHaloSetWidth": { //TODO: verify
			"parent": null,
			"fields": {
				"Width": "real32"
			}
		},
		
		"SActorMsgSceneParticlesDestroy": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgScenePhysicsImpactSpy": { //TODO: verify
			"parent": null,
			"fields": {
				"SpyType": "EActorPhysicsImpactSpyType"
			}
		},
		
		"SActorMsgScenePowerShowAll": { //TODO: verify
			"parent": null,
			"fields": {
				"Show": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgSceneRibbonsDestroy": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgSceneStrobeSetCycleLength": { //TODO: verify
			"parent": null,
			"fields": {
				"CycleLength": "real32"
			}
		},
		
		"SActorMsgSceneStrobeSetFalloff": { //TODO: verify
			"parent": null,
			"fields": {
				"Falloff": "real32"
			}
		},
		
		"SActorMsgSceneStrobeSetHeight": { //TODO: verify
			"parent": null,
			"fields": {
				"Height": "real32"
			}
		},
		
		"SActorMsgSetBearings": { //TODO: verify
			"parent": null,
			"fields": {
				"Bearings": "CBearings"
			}
		},
		
		"SActorMsgSetBearingsFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgSetBearingsH": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector",
				"h": "real32",
				"Rotation": "CRotation"
			}
		},
		
		"SActorMsgSetCastShadows": { //TODO: verify
			"parent": null,
			"fields": {
				"CastShadows": "bool"
			}
		},
		
		"SActorMsgSetFacing": { //TODO: verify
			"parent": null,
			"fields": {
				"Facing": "real32"
			}
		},
		
		"SActorMsgSetHeight": { //TODO: verify
			"parent": null,
			"fields": {
				"Height": "real32"
			}
		},
		
		"SActorMsgSetLocalTintColor": { //TODO: verify
			"parent": null,
			"fields": {
				"Color": "CColorHDR",
				"BlendDuration": "real32"
			}
		},
		
		"SActorMsgSetMinimapVisibility": { //TODO: verify
			"parent": null,
			"fields": {
				"Show": "bool"
			}
		},
		
		"SActorMsgSetOpacity": { //TODO: verify
			"parent": null,
			"fields": {
				"Opacity": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgSetPhysicsState": { //TODO: verify
			"parent": null,
			"fields": {
				"State": "EPhysicsState",
				"Delay": "CRange"
			}
		},
		
		"SActorMsgSetPosition": { //TODO: verify
			"parent": null,
			"fields": {
				"Position": "C3Vector"
			}
		},
		
		"SActorMsgSetPosition2D": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector"
			}
		},
		
		"SActorMsgSetPosition2DH": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector"
			}
		},
		
		"SActorMsgSetPositionFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgSetPositionH": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector",
				"h": "real32"
			}
		},
		
		"SActorMsgSetRenderToTextureEnabled": { //TODO: verify
			"parent": null,
			"fields": {
				"Enabled": "bool"
			}
		},
		
		"SActorMsgSetRotation": { //TODO: verify
			"parent": null,
			"fields": {
				"Rotation": "CRotation"
			}
		},
		
		"SActorMsgSetRotationFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgSetScale": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": {
					"type": "CScaleVector",
					"minValue": 0.0005
				},
				
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"Label": "CActorLabelKey"
			}
		},
		
		"SActorMsgSetScaleAbsolute": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": {
					"type": "CScaleVector",
					"minValue": 0.0005
				}
			}
		},
		
		"SActorMsgSetShowStatusBar": { //TODO: verify
			"parent": null,
			"fields": {
				"ShowStatusBar": "bool",
				"Status": "EUnitStatus"
			}
		},
		
		"SActorMsgSetSoundSuffix": { //TODO: verify
			"parent": null,
			"fields": {
				"Suffix": "CString8"
			}
		},
		
		"SActorMsgSetStatusBarOn": { //TODO: verify
			"parent": null,
			"fields": {
				"On": "bool",
				"Status": "EUnitStatus"
			}
		},
		
		"SActorMsgSetTeamColor": { //TODO: verify
			"parent": null,
			"fields": {
				"Diffuse": "CColorHDR",
				"Emissive": "CColorHDR",
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"BlendType": "EActorBlendType",
				"Label": "CActorLabelKey",
				"Priority": {
					"type": "THostedPropPriority",
					"minValue": 100,
					"maxValue": 200
				}
			}
		},
		
		"SActorMsgSetTeamColorBlendPair": { //TODO: verify
			"parent": null,
			"fields": {
				"DiffuseStart": "CColorHDR",
				"EmissiveStart": "CColorHDR",
				"DiffuseStop": "CColorHDR",
				"EmissiveStop": "CColorHDR",
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"BlendType": "EActorBlendType",
				"Label": "CActorLabelKey",
				"Priority": {
					"type": "THostedPropPriority",
					"minValue": 100,
					"maxValue": 300
				}
			}
		},
		
		"SActorMsgSetText": { //TODO: verify
			"parent": null,
			"fields": {
				"Text": "CString"
			}
		},
		
		"SActorMsgSetTextLocalized": { //TODO: verify
			"parent": null,
			"fields": {
				"Key": "CStringLink"
			}
		},
		
		"SActorMsgSetTextColor": { //TODO: verify
			"parent": null,
			"fields": {
				"Color": "CColor"
			}
		},
		
		"SActorMsgSetTextSize": { //TODO: verify
			"parent": null,
			"fields": {
				"FixedSize": "uint32"
			}
		},
		
		"SActorMsgSetTintColor": { //TODO: verify
			"parent": null,
			"fields": {
				"Color": "CColorHDR",
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"BlendType": "EActorBlendType",
				"Label": "CActorLabelKey",
				"Priority": {
					"type": "THostedPropPriority",
					"minValue": 100,
					"maxValue": 200
				}
			}
		},
		
		"SActorMsgSetTintColorBlendPair": { //TODO: verify
			"parent": null,
			"fields": {
				"ColorStart": "CColorHDR",
				"ColorStop": "CColorHDR",
				"BlendInDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"BlendType": "EActorBlendType",
				"Label": "CActorLabelKey",
				"Priority": {
					"type": "THostedPropPriority",
					"minValue": 100,
					"maxValue": 200
				}
			}
		},
		
		"SActorMsgSetTransferOverrideAnim": { //TODO: verify
			"parent": null,
			"fields": {
				"AnimProps": "CAnimProps"
			}
		},
		
		"SActorMsgSetVisibility": { //TODO: verify
			"parent": null,
			"fields": {
				"Visible": "bool"
			}
		},
		
		"SActorMsgSetWalkAnimMoveSpeed": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "CGameRate"
			}
		},
		
		"SActorMsgSetZ": { //TODO: verify
			"parent": null,
			"fields": {
				"Z": "real32"
			}
		},
		
		"SActorMsgSignal": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey",
				"Bearings": "CBearings"
			}
		},
		
		"SActorMsgSoundAddDSP": { //TODO: verify
			"parent": null,
			"fields": {
				"DSP": "CDSPLink"
			}
		},
		
		"SActorMsgSoundLinkCustomize": { //TODO: verify
			"parent": null,
			"fields": {
				"Sound": "CSoundLink"
			}
		},
		
		"SActorMsgSoundSetMuted": { //TODO: verify
			"parent": null,
			"fields": {
				"State": "bool",
				"Fade": "bool"
			}
		},
		
		"SActorMsgSoundSetOffset": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "uint32"
			}
		},
		
		"SActorMsgSoundSetPaused": { //TODO: verify
			"parent": null,
			"fields": {
				"State": "bool",
				"Fade": "bool"
			}
		},
		
		"SActorMsgSoundSetPitch": { //TODO: verify
			"parent": null,
			"fields": {
				"Blend": "ESoundBlend",
				"ValueArray": {
					"type": "CActorTimePitchPair",
					"array": true
				}
			}
		},
		
		"SActorMsgSoundSetReverbBalanceDirect": { //TODO: verify
			"parent": null,
			"fields": {
				"ValueArray": {
					"type": "CActorTimeRealPair",
					"array": true
				}
			}
		},
		
		"SActorMsgSoundSetReverbBalanceRoom": { //TODO: verify
			"parent": null,
			"fields": {
				"ValueArray": {
					"type": "CActorTimeRealPair",
					"array": true
				}
			}
		},
		
		"SActorMsgSoundSetVolume": { //TODO: verify
			"parent": null,
			"fields": {
				"Blend": "ESoundBlend",
				"ValueArray": {
					"type": "CActorTimeVolumePair",
					"array": true
				}
			}
		},
		
		"SActorMsgStatusDecrement": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgStatusIncrement": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgStatusSet": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "uint16"
			}
		},
		
		"SActorMsgTextureGroupApply": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTextureGroupApplyGlobal": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTextureGroupRemove": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTextureGroupRemoveGlobal": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTextureSelectById": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CTextureLink"
			}
		},
		
		"SActorMsgTextureSelectByMatch": { //TODO: verify
			"parent": null,
			"fields": {
				"Source": "CTextureSlot"
			}
		},
		
		"SActorMsgTextureSelectBySlot": { //TODO: verify
			"parent": null,
			"fields": {
				"Expression": "CTextureExpression"
			}
		},
		
		"SActorMsgTextureSelectByUpdateLink": { //TODO: verify
			"parent": null,
			"fields": {
				"Op": "ETextureSelectByUpdateLinkOp",
				"Param1Substring": "CIdentifier",
				"Param2Substring": "CIdentifier"
			}
		},
		
		"SActorMsgTextureVideoEnableTimeOverride": { //TODO: verify
			"parent": null,
			"fields": {
				"Enabled": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SActorMsgTextureVideoPlay": { //TODO: verify
			"parent": null,
			"fields": {
				"FPS": "uint32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ETextureVideoPlayFlag"
				},
				
				"SoundType": "ETextureVideoSoundType",
				"AttachMethods": "CAttachMethods"
			}
		},
		
		"SActorMsgTextureVideoSetFrame": { //TODO: verify
			"parent": null,
			"fields": {
				"Frame": "uint32"
			}
		},
		
		"SActorMsgTextureVideoSetPaused": { //TODO: verify
			"parent": null,
			"fields": {
				"Paused": "bool"
			}
		},
		
		"SActorMsgTextureVideoSetTime": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorMsgTextureVideoSetTimeAll": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorMsgTextureVideoStop": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTextureVideoStopAll": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorMsgTimerSet": { //TODO: verify
			"parent": null,
			"fields": {
				"Duration": "CVariatorActorReal32",
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorMsgTimerKill": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorMsgTransition": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "EActorTransitionType",
				"Duration": "CVariatorActorReal32"
			}
		},
		
		"SActorMsgUIStatusFlagSet": { //TODO: verify
			"parent": null,
			"fields": {
				"FlagType": "EUIStatusFlagType",
				"Value": "bool"
			}
		},
		
		"SActorMsgTerrainPhysicsMaterialOverride": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector",
				"OverridingPhysicsMaterial": "CPhysicsMaterialLink"
			}
		},
		
		"SActorMsgTerrainPhysicsMaterialRestore": { //TODO: verify
			"parent": null,
			"fields": {
				"Position2D": "C2Vector"
			}
		},
		
		"SActorMsgTerrainSquibActivateGroup": { //TODO: verify
			"parent": null,
			"fields": {
				"GroupName": "CActorLabelKey"
			}
		},
		
		"SActorTermKeys": { //TODO: verify
			"parent": null,
			"fields": {
				"Keys": "CActorTableKeys4x0"
			}
		},
		
		"SActorTermValidateBase": { //TODO: verify
			"parent": null,
			"fields": {
				"ValidatorLink": "CValidatorLink"
			}
		},
		
		"SActorTermAbilCmd": { //TODO: verify
			"parent": null,
			"fields": {
				"AbilCmd": "CAbilCommand"
			}
		},
		
		"SActorTermAbilKey": { //TODO: verify
			"parent": null,
			"fields": {
				"Key": "CDataSoupKey"
			}
		},
		
		"SActorTermAbilKeyAny": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermAbilLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"Compare": "EValueCompare",
				"Level": "uint32"
			}
		},
		
		"SActorTermAbilTrainProduced": { //TODO: verify
			"parent": null,
			"fields": {
				"Unit": "CUnitLink"
			}
		},
		
		"SActorTermAbilTransport": { //TODO: verify
			"parent": null,
			"fields": {
				"OtherName": "CActorKey"
			}
		},
		
		"SActorTermAge": { //TODO: verify
			"parent": null,
			"fields": {
				"Age": "real32"
			}
		},
		
		"SActorTermAIUIMode": { //TODO: verify
			"parent": null,
			"fields": {
				"Mode": "EAIUIMode"
			}
		},
		
		"SActorTermAnimBaselineState": { //TODO: verify
			"parent": null,
			"fields": {
				"State": "EActorBaselineState"
			}
		},
		
		"SActorTermAnimFinished": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CAnimNameKey"
			}
		},
		
		"SActorTermAnimName": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CAnimNameKey"
			}
		},
		
		"SActorTermAnimPlayable": { //TODO: verify
			"parent": null,
			"fields": {
				"AnimProps": "CAnimProps",
				"Target": "CRefKey"
			}
		},
		
		"SActorTermAnimPlaying": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CAnimNameKey",
				"AnimProps": "CAnimProps"
			}
		},
		
		"SActorTermAt": { //TODO: verify
			"parent": null,
			"fields": {
				"At": "EActorEffectScope"
			}
		},
		
		"SActorTermAttach": { //TODO: verify
			"parent": null,
			"fields": {
				"AttachMethods": "CAttachMethods"
			}
		},
		
		"SActorTermBlockedBy": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermCanApplyActionPhysics": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorTermCap": { //TODO: verify
			"parent": null,
			"fields": {
				"Cap": {
					"type": "uint32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermCompareField": { //TODO: verify
			"parent": null,
			"fields": {
				"Target": "CRefKey",
				"Field": "TCatalogFieldPath",
				"Operator": "EValueCompare",
				"Value": "TCatalogFieldValue"
			}
		},
		
		"SActorTermCreepCanEngulf": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermCreepEngulfs": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermCreepIntersects": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermDeath": { //TODO: verify
			"parent": null,
			"fields": {
				"Death": "EDeathType"
			}
		},
		
		"SActorTermEffectPeriodIndex": { //TODO: verify
			"parent": null,
			"fields": {
				"Index": "int32"
			}
		},
		
		"SActorTermEffectExecuteIndex": { //TODO: verify
			"parent": null,
			"fields": {
				"Index": "int32"
			}
		},
		
		"SActorTermEffectParent": { //TODO: verify
			"parent": null,
			"fields": {
				"ParentName": "CEffectLink"
			}
		},
		
		"SActorTermExclude": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermFlyerHelper": { //TODO: verify
			"parent": null,
			"fields": {
				"Display": "EFlyerDisplay"
			}
		},
		
		"SActorTermFromEffectTreeDescendant": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermGame": { //TODO: verify
			"parent": null,
			"fields": {
				"Game": "EActorGame"
			}
		},
		
		"SActorTermGameTime": { //TODO: verify
			"parent": null,
			"fields": {
				"Compare": "EValueCompare",
				"Time": "CFixed"
			}
		},
		
		"SActorTermHasAllianceTypeWith": { //TODO: verify
			"parent": null,
			"fields": {
				"AllianceType": "EActorFilter",
				"RefName": "CRefKey"
			}
		},
		
		"SActorTermHasStatus": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorTermHasScopeFlag": { //TODO: verify
			"parent": null,
			"fields": {
				"Flag": "EActorScopeFlags"
			}
		},
		
		"SActorTermHeight": { //TODO: verify
			"parent": null,
			"fields": {
				"Operator": "EValueCompare",
				"Height": "real32"
			}
		},
		
		"SActorTermIsDuringReplay": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermIsKnownAs": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorTermIsStatus": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CSubNameKey",
				"Level": "uint32"
			}
		},
		
		"SActorTermIsUnderwater": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermKilledBy": { //TODO: verify
			"parent": null,
			"fields": {
				"UnitLink": "CUnitLink"
			}
		},
		
		"SActorTermKilledByEffect": { //TODO: verify
			"parent": null,
			"fields": {
				"Effects": "CEffectLinks"
			}
		},
		
		"SActorTermLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"Level": "uint32",
				"Compare": "EValueCompare"
			}
		},
		
		"SActorTermMissileTentacle": { //TODO: verify
			"parent": null,
			"fields": {
				"RefName": "CRefKey"
			}
		},
		
		"SActorTermMissileTentacleIsReturning": { //TODO: verify
			"parent": null,
			"fields": {
				"RefName": "CRefKey"
			}
		},
		
		"SActorTermModelEventName": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorTermModelIsLowQuality": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermModelName": { //TODO: verify
			"parent": null,
			"fields": {
				"ModelLink": "CModelLink"
			}
		},
		
		"SActorTermModelSwapFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"ModelLink": "CModelLink"
			}
		},
		
		"SActorTermModelSwapTo": { //TODO: verify
			"parent": null,
			"fields": {
				"ModelLink": "CModelLink"
			}
		},
		
		"SActorTermModelVariation": { //TODO: verify
			"parent": null,
			"fields": {
				"Variation": "uint8"
			}
		},
		
		"SActorTermMorphFrom": { //TODO: verify
			"parent": null,
			"fields": {
				"UnitLink": "CUnitLink"
			}
		},
		
		"SActorTermMorphTo": { //TODO: verify
			"parent": null,
			"fields": {
				"UnitLink": "CUnitLink"
			}
		},
		
		"SActorTermMotionPhase": { //TODO: verify
			"parent": null,
			"fields": {
				"Index": "uint32"
			}
		},
		
		"SActorTermMovementNetOverInterval": { //TODO: verify
			"parent": null,
			"fields": {
				"Test": "EActorThresholdTest",
				"Threshold": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermMoverLink": { //TODO: verify
			"parent": null,
			"fields": {
				"MoverLink": "CMoverLink"
			}
		},
		
		"SActorTermMsg": { //TODO: verify
			"parent": null,
			"fields": {
				"Spec": "CActorMsgSpec"
			}
		},
		
		"SActorTermOption": { //TODO: verify
			"parent": null,
			"fields": {
				"Setting": "EGraphicsOption",
				"Level": "EGraphicsLevel"
			}
		},
		
		"SActorTermOrphaned": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermOverkillType": { //TODO: verify
			"parent": null,
			"fields": {
				"ActivatedOverkills": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorOverkillType"
				}
			}
		},
		
		"SActorTermPassChance": { //TODO: verify
			"parent": null,
			"fields": {
				"PassChance": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				}
			}
		},
		
		"SActorTermPhysicsImpactClassify": { //TODO: verify
			"parent": null,
			"fields": {
				"Environment": "EActorPhysicsImpactEnvironment",
				"ImpactMember": "EActorPhysicsImpactMember",
				"MaterialNames": "CPhysicsMaterials",
				"RelativeHardness": "EActorPhysicsImpactMaterialRelativeHardness",
				"Range": "EActorPhysicsImpactRangeType",
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPhysicsImpactClassifyCombo": { //TODO: verify
			"parent": null,
			"fields": {
				"Environment": "EActorPhysicsImpactEnvironment",
				"MaterialNamesSelf": "CPhysicsMaterials",
				"MaterialNamesOther": "CPhysicsMaterials",
				"Range": "EActorPhysicsImpactRangeType",
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPhysicsImpactCollisionArea": { //TODO: verify
			"parent": null,
			"fields": {
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPhysicsImpactDensity": { //TODO: verify
			"parent": null,
			"fields": {
				"ImpactMember": "EActorPhysicsImpactMember",
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPhysicsImpactEnvironment": { //TODO: verify
			"parent": null,
			"fields": {
				"Environment": "EActorPhysicsImpactEnvironment"
			}
		},
		
		"SActorTermPhysicsImpactFromFloating": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermPhysicsImpactImpulse": { //TODO: verify
			"parent": null,
			"fields": {
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPhysicsImpactMaterial": { //TODO: verify
			"parent": null,
			"fields": {
				"ImpactMember": "EActorPhysicsImpactMember",
				"Names": "CPhysicsMaterials"
			}
		},
		
		"SActorTermPhysicsImpactMaterialCombo": { //TODO: verify
			"parent": null,
			"fields": {
				"NamesSelf": "CPhysicsMaterials",
				"NamesOther": "CPhysicsMaterials"
			}
		},
		
		"SActorTermPhysicsImpactMaterialRelativeHardness": { //TODO: verify
			"parent": null,
			"fields": {
				"RelativeHardness": "EActorPhysicsImpactMaterialRelativeHardness"
			}
		},
		
		"SActorTermPhysicsImpactParticipantIsKnownAs": { //TODO: verify
			"parent": null,
			"fields": {
				"ImpactMember": "EActorPhysicsImpactMember",
				"SubName": "CSubNameKey"
			}
		},
		
		"SActorTermPhysicsImpactRelativeApproachSpeed": { //TODO: verify
			"parent": null,
			"fields": {
				"Minimum": {
					"type": "real32",
					"minValue": 0
				},
				
				"Maximum": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorTermPlayerHasReward": { //TODO: verify
			"parent": null,
			"fields": {
				"Reward": "CRewardLink"
			}
		},
		
		"SActorTermPortraitActor": { //TODO: verify
			"parent": null,
			"fields": {
				"ActorKey": "CActorKey"
			}
		},
		
		"SActorTermPortraitModel": { //TODO: verify
			"parent": null,
			"fields": {
				"ModelLink": "CModelLink"
			}
		},
		
		"SActorTermPropertyCurveName": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CCurveNameKey"
			}
		},
		
		"SActorTermRequire": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermScope": { //TODO: verify
			"parent": null,
			"fields": {
				"ScopeType": "EActorScopeType"
			}
		},
		
		"SActorTermScopeContains": { //TODO: verify
			"parent": null,
			"fields": {
				"ActorName": "CActorKey"
			}
		},
		
		"SActorTermSelected": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermSpeed": { //TODO: verify
			"parent": null,
			"fields": {
				"Speed": "real32",
				"Compare": "EValueCompare"
			}
		},
		
		"SActorTermStateChanged": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorTermStateValid": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorTermSquib": { //TODO: verify
			"parent": null,
			"fields": {
				"Squib": "ESquibType"
			}
		},
		
		"SActorTermSubName": { //TODO: verify
			"parent": null,
			"fields": {
				"SubName": "CActorKey"
			}
		},
		
		"SActorTermSupportedBy": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermTaunt": { //TODO: verify
			"parent": null,
			"fields": {
				"Taunt": "EUnitTaunt"
			}
		},
		
		"SActorTermTerrainPhysicsMaterial": { //TODO: verify
			"parent": null,
			"fields": {
				"PhysicsMaterial": "CPhysicsMaterialLinks"
			}
		},
		
		"SActorTermTerrainPhysicsMaterialAtActor": { //TODO: verify
			"parent": null,
			"fields": {
				"PhysicsMaterial": "CPhysicsMaterialLinks",
				"RefName": "CRefKey"
			}
		},
		
		"SActorTermTimerName": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey"
			}
		},
		
		"SActorTermTextureGroupsGlobal": { //TODO: verify
			"parent": null,
			"fields": {
				"Op": "ETexturePropsOp",
				"Props": "CTextureProps"
			}
		},
		
		"SActorTermTextureSlotSatisfiesExpression": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot",
				"Expression": "CTextureExpression"
			}
		},
		
		"SActorTermTextureUpdateLink": { //TODO: verify
			"parent": null,
			"fields": {
				"TextureLink": "CTextureLink"
			}
		},
		
		"SActorTermTextureUpdateSlot": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot"
			}
		},
		
		"SActorTermUnitWalking": { //TODO: verify
			"parent": null,
			"fields": {
				"RefName": "CRefKey"
			}
		},
		
		"SActorTermValidateCreationEffect": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidateEffect": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidateMorphFrom": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidateMorphTo": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidatePlayer": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidatePortraitUnit": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermValidateUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorValidateUnitFlag"
				},
				
				"CasterUnitType": "CUnitLink"
			}
		},
		
		"SActorTermValidateUnitType": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"SActorTermViewerTreatsUnitAs": { //TODO: verify
			"parent": null,
			"fields": {
				"Test": "EActorViewerTreatsAs"
			}
		},
		
		"SActorTermWeaponTargetAngle": { //TODO: verify
			"parent": null,
			"fields": {
				"Compare": "EValueCompare",
				"Value": "real32"
			}
		},
		
		"SActorTermWeaponTargetDistance": { //TODO: verify
			"parent": null,
			"fields": {
				"Compare": "EValueCompare",
				"Value": "real32"
			}
		},
		
		"SActorTermWeaponTargetElevation": { //TODO: verify
			"parent": null,
			"fields": {
				"Compare": "EValueCompare",
				"Value": "real32"
			}
		},
		
		"CAlert": { //TODO: verify
			"parent": null,
			"fields": {
				"PrimaryActions": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAlertAction"
				},
				
				"SecondaryActions": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAlertAction"
				},
				
				"Display": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAlertDisplay"
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAlertFlag"
				},
				
				"Fade": {
					"type": "real32",
					"minValue": 0
				},
				
				"Icon": "CImagePath",
				"Life": "real32",
				"OverlapDuration": {
					"type": "real32",
					"minValue": 0
				},
				
				"OverlapGlobalCount": "uint32",
				"OverlapLocalCount": "uint32",
				"OverlapLocalRadius": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"PingColor": "CColor",
				"PingModel": "CModelLink",
				"PingTime": "real32",
				"QueueTime": "real32",
				"Sound": "CSoundLink",
				"Text": "CStringLink",
				"Tooltip": "CStringLink",
				"Voice": "EUnitSound",
				"Peripheral": "EAlertPeripheral",
				"SupersededVolume": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CArmyCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Title": "CStringLink",
				"Help": "CStringLink",
				"CategoryHelp": "CStringLink",
				"UnitHelp": "CStringLink",
				"Icon": "CImagePath",
				"BankPath": "SBankPath",
				"Description": "CStringLink",
				"State": "EArmyCategoryState",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EArmyCategoryFlag"
				},
				
				"Unit": "CUnitLink",
				"UpgradeArray": {
					"type": "CUpgradeLink",
					"array": true
				},
				
				"AbilCommandArray": {
					"type": "CAbilCommand",
					"array": true
				},
				
				"ArmyUnitArray": {
					"type": "CArmyUnitLink",
					"array": true
				},
				
				"ArmyUpgradeArray": {
					"type": "CArmyUpgradeLink",
					"array": true
				},
				
				"UserReference": "CUserReference",
				"ExtraUpgradeRequirement": "int32",
				"SplitRequirement": "int32"
			}
		},
		
		"CArmyUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Title": "CStringLink",
				"Help": "CStringLink",
				"Icon": "CImagePath",
				"BankPath": "SBankPath",
				"Description": "CStringLink",
				"Confirmation": "CStringLink",
				"Movie": "CMoviePath",
				"Cost": "int32",
				"State": "EArmyUnitState",
				"Unit": "CUnitLink",
				"UpgradeArray": {
					"type": "CUpgradeLink",
					"array": true
				},
				
				"AbilCommandArray": {
					"type": "CAbilCommand",
					"array": true
				},
				
				"ArmyUpgradeArray": {
					"type": "CArmyUpgradeLink",
					"array": true
				},
				
				"UserReference": "CUserReference",
				"EnableButton": "CString"
			}
		},
		
		"CArmyUpgrade": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Icon": "CImagePath",
				"Requirements": "CStringLink",
				"Description": "CStringLink",
				"Tooltip": "CStringLink",
				"Cost": "int32",
				"Movie": "CMoviePath",
				"State": "EArmyUpgradeState",
				"UpgradeArray": {
					"type": "CUpgradeLink",
					"array": true
				},
				
				"AbilCommandArray": {
					"type": "CAbilCommand",
					"array": true
				},
				
				"UserReference": "CUserReference"
			}
		},
		
		"CAttachMethod": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CAttachMethodArcTest": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Tests": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAMArcTest"
				},
				
				"Type": "EAMArcTestType"
			}
		},
		
		"CAttachMethodFilter": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Keys": {
					"type": "SAttachKey",
					"array": true
				},
				
				"Logic": "EAMFilterLogic",
				"AttachType": "EAMFilterAttachType",
				"FilterType": "EAMFilterType"
			}
		},
		
		"CAttachMethodAttachType": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"AttachType": "EAMAttachType"
			}
		},
		
		"CAttachMethodIncoming": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {}
		},
		
		"CAttachMethodLeastDeflection": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {}
		},
		
		"CAttachMethodNodeOccupancy": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Targets": {
					"type": "CModelPath",
					"array": true
				},
				
				"Logic": "EAMOccupancyLogic"
			}
		},
		
		"CAttachMethodNodeOccupancy2": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Targets": {
					"type": "CModelLink",
					"array": true
				},
				
				"Logic": "EAMOccupancyLogic"
			}
		},
		
		"CAttachMethodNumericField": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Field": "EAMNumericField",
				"Value": "real32",
				"Operator": "EAMNumericFieldOp"
			}
		},
		
		"CAttachMethodPattern": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"Type": "EAMPatternType",
				"Keyword": "EAttachKeyword",
				"Base": "CDataSoupKey",
				"Offset": "uint32",
				"Multiplier": "uint32",
				"Driver": "CDataSoupKey"
			}
		},
		
		"CAttachMethodPortAllocator": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"PortLimit": "uint32"
			}
		},
		
		"CAttachMethodProximity": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"RequestCount": "uint32",
				"DistanceMax": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 500
				},
				
				"SortResults": "bool",
				"Location": "SEffectWhichLocation"
			}
		},
		
		"CAttachMethodRandom": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"RequestCount": "uint32",
				"Distribution": "EAMRandomDistribution",
				"ExponentialMean": "real32"
			}
		},
		
		"CAttachMethodReduction": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"ReductionType": "EAMReductionType",
				"RequestCount": "uint32",
				"RequestCountRange": {
					"type": "uint32",
					"minValue": 0
				},
				
				"RequestPercentage": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"PassChanceEach": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"PassChanceFull": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				}
			}
		},
		
		"CAttachMethodVolumesRequery": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {}
		},
		
		"CAttachMethodVolumesTargets": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {}
		},
		
		"CAttachMethodVolumesWeightedPick": { //TODO: verify
			"parent": "CAttachMethod",
			"fields": {
				"VolumeFactor": "real32",
				"ProximityFactorNear": "real32",
				"ProximityFactorFar": "real32"
			}
		},
		
		"CBankCondition": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CBankConditionCompare": { //TODO: verify
			"parent": "CBankCondition",
			"fields": {
				"Bank": "CString",
				"Section": "CString",
				"Key": "CString",
				"ValueName": "CString",
				"Compare": "EValueCompare"
			}
		},
		
		"CBankConditionCompareValueCount": { //TODO: verify
			"parent": "CBankConditionCompare",
			"fields": {
				"AddCompare": "EValueCompare",
				"AddValue": "int32",
				"Value": "uint32"
			}
		},
		
		"CBankConditionCompareValueInteger": { //TODO: verify
			"parent": "CBankConditionCompare",
			"fields": {
				"Value": "int32"
			}
		},
		
		"CBankConditionCompareValueString": { //TODO: verify
			"parent": "CBankConditionCompare",
			"fields": {
				"Value": "CString"
			}
		},
		
		"CBankConditionCompareValueSum": { //TODO: verify
			"parent": "CBankConditionCompare",
			"fields": {
				"AddCompare": "EValueCompare",
				"AddValue": "int32",
				"Value": "int32"
			}
		},
		
		"CBankConditionCombine": { //TODO: verify
			"parent": "CBankCondition",
			"fields": {
				"Type": "EBankConditionCombine",
				"CombineArray": {
					"type": "CBankConditionLink",
					"array": true
				},
				
				"Negate": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CBankConditionCurrentMap": { //TODO: verify
			"parent": "CBankCondition",
			"fields": {
				"Map": "CString"
			}
		},
		
		"CBeam": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CBeamSync": { //TODO: verify
			"parent": "CBeam",
			"fields": {}
		},
		
		"CBeamSyncSweeper": { //TODO: verify
			"parent": "CBeamSync",
			"fields": {}
		},
		
		"CBeamAsync": { //TODO: verify
			"parent": "CBeam",
			"fields": {}
		},
		
		"CBeamAsyncLinear": { //TODO: verify
			"parent": "CBeamAsync",
			"fields": {
				"Duration": "CFixed"
			}
		},
		
		"CBeamAsyncShadow": { //TODO: verify
			"parent": "CBeamAsync",
			"fields": {}
		},
		
		"SBehaviorResponse": { //TODO: verify
			"parent": null,
			"fields": {
				"Chance": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Cost": "SCost"
			}
		},
		
		"CBehavior": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Tooltip": "CStringLink",
				"InfoTooltipPriority": "uint32",
				"Alignment": "EBehaviorAlignment",
				"Cost": "SCost",
				"BehaviorFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorFlag"
				},
				
				"InfoFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorInfoFlag"
				},
				
				"InfoIcon": "CImagePath",
				"BehaviorCategories": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorCategory"
				},
				
				"EditorCategories": "TEditorCategories",
				"Requirements": "CRequirementLink",
				"TechAliasArray": {
					"type": "TTechAlias",
					"array": true
				}
			}
		},
		
		"CBehaviorAttribute": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"MinPoints": "int32",
				"MaxPoints": "int32",
				"Modification": "SModification",
				"PointGainEffect": "CEffectLink",
				"PointLossEffect": "CEffectLink"
			}
		},
		
		"CBehaviorBuff": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"DisplayDuration": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorDisplay"
				},
				
				"DisplayShield": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorDisplay"
				},
				
				"DisableValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"RemoveValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"BuffFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorBuff"
				},
				
				"MaxStackCount": {
					"type": "uint32",
					"maxValue": 65535
				},
				
				"MaxStackCountPerCaster": "uint32",
				"TimeScaleSource": "SEffectWhichTimeScale",
				"Duration": "CGameTime",
				"DurationShield": "CGameTime",
				"DurationVitalArray": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"DurationVitalMaxArray": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"DurationRandomMin": "CGameTime",
				"DurationRandomMax": "CGameTime",
				"DurationBonusMin": "CGameTime",
				"DurationBonusMax": "CGameTime",
				"Period": "CGameTime",
				"PeriodCount": "uint32",
				"InitialEffect": "CEffectLink",
				"RefreshEffect": "CEffectLink",
				"PeriodicEffect": "CEffectLink",
				"FinalEffect": "CEffectLink",
				"ExpireEffect": "CEffectLink",
				"Player": "SEffectWhichPlayer",
				"AcquirePlayer": "SEffectWhichPlayer",
				"Modification": "SModification",
				"AINotifyEffect": "CEffectLink",
				"DamageResponse": "SDamageResponse",
				"KillCredit": "SEffectWhichUnit",
				"Replace": "EBehaviorBuffReplace",
				"ReplaceLocation": "SEffectWhichLocation",
				"HerdNode": "CHerdNodeLink"
			}
		},
		
		"CBehaviorClickResponse": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Chance": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Count": "uint32",
				"CountDelay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"CountEffect": "CEffectLink",
				"Relationship": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPlayerRelationship"
				},
				
				"ResetDelay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"ResetEffect": "CEffectLink"
			}
		},
		
		"CBehaviorConjoined": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"ConjoinedFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EConjoinedFlag"
				},
				
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CBehaviorCreepSource": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Delay": "CGameTime",
				"Period": "CGameTime",
				"Build": "CFootprintLink",
				"Start": "CFootprintLink",
				"Birth": "CFootprintLink",
				"Grown": "CFootprintLink",
				"DisableValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"RemoveValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CBehaviorJump": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"TriggerHeightDeltaMin": "CFixed",
				"TriggerHeightDeltaMax": "CFixed",
				"InitiateRangeUp": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"InitiateRangeDown": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"JumpRangeMax": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"JumpEffectUp": "CEffectLink",
				"JumpEffectDown": "CEffectLink",
				"Mover": "CMoverLink",
				"MoverUp": "CMoverLink",
				"MoverDown": "CMoverLink",
				"DurationPreLaunch": "CGameTime",
				"DurationPostLand": "CGameTime",
				"DurationMoveOut": "CGameTime",
				"Placeholder": "CUnitLink",
				"LandAdjustmentUp": "CFixed",
				"LandAdjustmentDown": "CFixed",
				"LandArrivalRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"LandCheckRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"LandEffectUp": "CEffectLink",
				"LandEffectDown": "CEffectLink"
			}
		},
		
		"CBehaviorPowerSource": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"PowerLevel": {
					"type": "TPowerLevel",
					"minValue": 1,
					"maxValue": 5
				},
				
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"PowerLink": "TPowerLink",
				"CliffLevelFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECliffLevelCompare"
				}
			}
		},
		
		"CBehaviorPowerUser": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"PowerLink": "TPowerLink",
				"PlacementMinPowerLevel": "TPowerLevel",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorPowerUserFlag"
				},
				
				"PoweredWhileUnderConstruction": "bool",
				"PowerStageArray": {
					"type": "SPowerStage",
					"array": true
				}
			}
		},
		
		"CBehaviorResource": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Capacity": "uint32",
				"Contents": "uint32",
				"HarvestTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"HarvestAmount": {
					"type": "uint32",
					"minValue": 0
				},
				
				"EmptyHarvestAmount": {
					"type": "uint32",
					"minValue": 0
				},
				
				"EmptyUnit": "CUnitLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorResourceFlag"
				},
				
				"RequiredAlliance": "EAllianceId",
				"ReturnDelay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"ExhaustedAlert": "CAlertLink",
				"DepletionAlert": "CAlertLink",
				"DepletionThreshold": "uint32",
				"DepletionVariationCount": "uint32",
				"CarryResourceBehavior": "CBehaviorLink",
				"IdealHarvesterCount": "uint32",
				"EnabledSearchFilters": "CTargetFilters",
				"EnabledSearchRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CBehaviorReveal": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Duration": "CGameTime",
				"SearchFilters": "CTargetFilters"
			}
		},
		
		"CBehaviorSpawn": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"DisplayDuration": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorDisplay"
				},
				
				"InfoArray": {
					"type": "SSpawnInfo",
					"array": true
				},
				
				"Center": "CGamePoint",
				"Offset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"Slop": "CFixed",
				"Effect": "CEffectLink",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorSpawnFlag"
				},
				
				"Limit": "uint32",
				"LimitDeath": "EDeathType",
				"ConjoinedLink": "CBehaviorLink"
			}
		},
		
		"CBehaviorVeterancy": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorVeterancyFlag"
				},
				
				"ShareFilters": {
					"type": "CTargetFilters",
					"array": true,
					"indexEnum": "EBehaviorVeterancyXP"
				},
				
				"TargetFilters": {
					"type": "CTargetFilters",
					"array": true,
					"indexEnum": "EBehaviorVeterancyXP"
				},
				
				"XPFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EBehaviorVeterancyXP"
				},
				
				"SharedXPRadius": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EBehaviorVeterancyXP"
				},
				
				"SharedXPFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EBehaviorVeterancyXP"
				},
				
				"VeterancyLevelArray": {
					"type": "SVeterancyLevel",
					"array": true
				}
			}
		},
		
		"CBehaviorWander": { //TODO: verify
			"parent": "CBehavior",
			"fields": {
				"Leash": "bool",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Delay": "CGameTime"
			}
		},
		
		"CButton": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Tooltip": "CStringLink",
				"TooltipImage": "CImagePath",
				"TooltipFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EButtonTooltipFlag"
				},
				
				"Icon": "CImagePath",
				"AlertName": "CStringLink",
				"AlertTooltip": "CStringLink",
				"AlertIcon": "CImagePath",
				"Hotkey": "CHotkeyLink",
				"EditorCategories": "TEditorCategories",
				"TintRacially": "bool",
				"HotkeyAlias": "CButtonLink",
				"HotkeySet": "CIdentifier",
				"Universal": "bool",
				"SimpleDisplayText": "CStringLink",
				"HidesForSimpleText": "bool"
			}
		},
		
		"CCamera": { //TODO: verify
			"parent": null,
			"fields": {
				"ParamInitial": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraParam"
				},
				
				"ZoomTable": {
					"type": "SCameraZoom",
					"array": true
				},
				
				"ZoomDefault": "uint32",
				"ParamSmooth": {
					"type": "SCameraSmooth",
					"array": true,
					"indexEnum": "ECameraParam"
				},
				
				"TargetSmooth": "SCameraSmooth",
				"FieldOfViewMin": {
					"type": "real32",
					"minValue": 10,
					"maxValue": 120
				},
				
				"FieldOfViewMax": {
					"type": "real32",
					"minValue": 10,
					"maxValue": 120
				},
				
				"FieldOfViewIncrement": "real32",
				"DistanceMin": {
					"type": "real32",
					"minValue": 0.001,
					"maxValue": 400
				},
				
				"DistanceMax": {
					"type": "real32",
					"minValue": 0.001,
					"maxValue": 400
				},
				
				"DistanceIncrement": "real32",
				"PitchMin": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"PitchMax": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"PitchIncrement": "real32",
				"YawLeft": {
					"type": "real32",
					"minValue": -180,
					"maxValue": 180
				},
				
				"YawRight": {
					"type": "real32",
					"minValue": -180,
					"maxValue": 180
				},
				
				"YawMin": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"YawMax": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"YawIncrement": "real32",
				"MaxScrollRate": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 200
				},
				
				"MaxScrollDistance": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 256
				},
				
				"VerticalScrollRateMultiplier": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 1
				},
				
				"ScrollAccelerationPeriod": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 5
				},
				
				"ScrollDecelerationPeriod": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 5
				},
				
				"ForwardScale": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 0.2
				},
				
				"StrafeScale": {
					"type": "real32",
					"array": true,
					"indexEnum": "ECameraMode",
					"minValue": 0,
					"maxValue": 0.2
				},
				
				"RotateScale": {
					"type": "real32",
					"minValue": 0
				},
				
				"FollowScrollLimit": {
					"type": "real32",
					"minValue": 0
				},
				
				"BorderSizeX": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 20
				},
				
				"BorderSizeY": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 20
				},
				
				"SmartPanJumpDistance": {
					"type": "real32",
					"minValue": 0
				},
				
				"SmartPanSkipDistance": {
					"type": "real32",
					"minValue": 0
				},
				
				"HeightDisplacementFactor": "real32",
				"HeightDisplacementPitchMin": "real32",
				"HeightDisplacementPitchMax": "real32",
				"HeightDisplacementMax": "real32",
				"HeightMap": "ECameraHeightMap"
			}
		},
		
		"CCharacter": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Age": "uint32",
				"Gender": "ECharacterGender",
				"Race": "ECharacterRace",
				"Attitude": "CStringLink",
				"Timbre": "CStringLink",
				"Dialect": "CStringLink",
				"VoiceRef": "CStringLink",
				"Description": "CStringLink",
				"Image": "CImagePath",
				"Relevance": "ECharacterRelevance",
				"Voice": "CString",
				"Pitch": "int32",
				"Color": "CColor",
				"Variations": {
					"type": "SCharacterVariation",
					"array": true
				}
			}
		},
		
		"CCliff": { //TODO: verify
			"parent": null,
			"fields": {
				"CliffMesh": "CCliffMeshLink",
				"CliffMaterial": "CModelPath",
				"EditorIcon": "CImagePath"
			}
		},
		
		"CCliffMesh": { //TODO: verify
			"parent": null,
			"fields": {
				"ModelPath": "CModelPath",
				"CliffHeights": {
					"type": "real32",
					"array": true
				},
				
				"WeldNormals": "bool"
			}
		},
		
		"CConversation": { //TODO: verify
			"parent": null,
			"fields": {
				"EditorCategories": "TEditorCategories",
				"AnimBlendDefault": "int32",
				"AnimBlendOut": "int32",
				"ProductionLevelInfo": {
					"type": "SConversationProductionLevel",
					"array": true
				},
				
				"ProductionLevel": "EConversationProductionLevel",
				"ObjectStates": {
					"type": "CConversationStateLink",
					"array": true,
					"indexEnum": "EConversationStateObject"
				},
				
				"DefaultSpeaker1": "CCharacterLink",
				"DefaultSpeaker2": "CCharacterLink",
				"FixedConditions": {
					"type": "SConversationConditionSet",
					"array": true
				},
				
				"FixedActions": {
					"type": "SConversationActionSet",
					"array": true
				},
				
				"FacialAnims": {
					"type": "SConversationFacialAnim",
					"array": true
				},
				
				"Lines": {
					"type": "SConversationLine",
					"array": true
				},
				
				"RunActions": {
					"type": "SConversationRunActions",
					"array": true
				},
				
				"Waits": {
					"type": "SConversationWait",
					"array": true
				},
				
				"Jumps": {
					"type": "SConversationJump",
					"array": true
				},
				
				"Choices": {
					"type": "SConversationChoice",
					"array": true
				},
				
				"Groups": {
					"type": "SConversationGroup",
					"array": true
				},
				
				"Comments": {
					"type": "SConversationComment",
					"array": true
				},
				
				"RootItems": {
					"type": "TConversationItemId",
					"array": true
				}
			}
		},
		
		"CConversationState": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EConversationStateFlag"
				},
				
				"Indices": {
					"type": "SConversationStateIndex",
					"array": true
				},
				
				"ValueRange": "CiRange",
				"CustomColors": {
					"type": "CColor",
					"array": true
				},
				
				"InfoIds": {
					"type": "SConversationStateInfoIds",
					"array": true,
					"indexEnum": "EConversationStateInfo"
				}
			}
		},
		
		"CCursor": { //TODO: verify
			"parent": null,
			"fields": {
				"Texture": "CImagePath",
				"HotspotX": "uint32",
				"HotspotY": "uint32"
			}
		},
		
		"CDSP": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CDSPChorus": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Delay": {
					"type": "real32",
					"minValue": 0.01,
					"maxValue": 100
				},
				
				"Depth": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"DryMix": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Feedback": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Rate": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 20
				},
				
				"WetMix1": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"WetMix2": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"WetMix3": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CDSPCompressor": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Attack": {
					"type": "real32",
					"minValue": 10,
					"maxValue": 200
				},
				
				"GainMakeUp": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 30
				},
				
				"Release": {
					"type": "real32",
					"minValue": 20,
					"maxValue": 1000
				},
				
				"Threshold": {
					"type": "real32",
					"minValue": -60,
					"maxValue": 0
				}
			}
		},
		
		"CDSPDistortion": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Level": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CDSPEcho": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"DecayRatio": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Delay": {
					"type": "real32",
					"minValue": 10,
					"maxValue": 5000
				},
				
				"DryMix": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"MaxChannels": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 16
				},
				
				"WetMix": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CDSPFlange": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Depth": {
					"type": "real32",
					"minValue": 0.01,
					"maxValue": 1
				},
				
				"DryMix": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Rate": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 20
				},
				
				"WetMix": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CDSPHighPass": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Cutoff": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 22000
				},
				
				"Resonance": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 10
				}
			}
		},
		
		"CDSPLowPass": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Cutoff": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 22000
				},
				
				"Resonance": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 10
				}
			}
		},
		
		"CDSPLowPassSimple": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Cutoff": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 22000
				}
			}
		},
		
		"CDSPNormalize": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"FadeTime": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 20000
				},
				
				"MaxAmp": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 100000
				},
				
				"Threshhold": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CDSPOscillator": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Type": "EOscillator",
				"Rate": {
					"type": "real32",
					"minValue": 1,
					"maxValue": 22000
				}
			}
		},
		
		"CDSPParamEQ": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"Bandwidth": {
					"type": "real32",
					"minValue": 0.2,
					"maxValue": 5
				},
				
				"Center": {
					"type": "real32",
					"minValue": 20,
					"maxValue": 22000
				},
				
				"Gain": {
					"type": "real32",
					"minValue": 0.05,
					"maxValue": 3
				}
			}
		},
		
		"CDSPPitchShift": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"FFTSize": {
					"type": "uint32",
					"minValue": 8,
					"maxValue": 12
				},
				
				"MaxChannels": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 16
				},
				
				"Pitch": {
					"type": "real32",
					"minValue": 0.5,
					"maxValue": 2
				}
			}
		},
		
		"CDSPReverb": { //TODO: verify
			"parent": "CDSP",
			"fields": {
				"DecayHFRatio": {
					"type": "real32",
					"minValue": 0.1,
					"maxValue": 2
				},
				
				"DecayTime": {
					"type": "real32",
					"minValue": 0.1,
					"maxValue": 20
				},
				
				"Density": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"Diffusion": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"DryLevel": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"HFReference": {
					"type": "real32",
					"minValue": 20,
					"maxValue": 20000
				},
				
				"LFReference": {
					"type": "real32",
					"minValue": 20,
					"maxValue": 1000
				},
				
				"ReflectionsDelay": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 0.3
				},
				
				"ReflectionsLevel": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 1000
				},
				
				"ReverbDelay": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"ReverbLevel": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 2000
				},
				
				"Room": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"RoomHF": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"RoomLF": {
					"type": "real32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"RoomRolloffFactor": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 10
				}
			}
		},
		
		"SEffectArea": { //TODO: verify
			"parent": null,
			"fields": {
				"Arc": "CFangleArc",
				"MaxCount": "uint32",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RadiusBonus": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CEffect": {
			"parent": null,
			"abstract": true,
			"fields": {
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"EditorCategories": "TEditorCategories",
				"Marker": "SMarker",
				"AINotifyFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ENotifyAreaFlag"
				},
				
				"TechAliasArray": {
					"type": "TTechAlias",
					"array": true
				},
				
				"Chance": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Alert": "CAlertLink",
				"CanBeBlocked": "bool",
				"CasterHistory": "EEffectHistory",
				"DamageModifierSource": "SEffectWhichUnit",
				"OwningPlayer": "SEffectWhichPlayer",
				
				"PreloadValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CEffectResponse": { //TODO: verify
			"parent": "CEffect",
			"fields": {
				"ResponseFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResponseFlag"
				}
			}
		},
		
		"CEffectApplyBehavior": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"Behavior": "CBehaviorLink",
				"KillHallucination": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Count": "uint32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectApplyBehaviorFlag"
				},
				
				"Duration": {
					"type": "CGameTime",
					"minValue": 0
				}
			}
		},
		
		"CEffectApplyForce": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"WhichUnit": "SEffectWhichUnit",
				"Amount": "CFixed",
				"MassFraction": "CFixed",
				"TimeScaleSource": "SEffectWhichTimeScale"
			}
		},
		
		"CEffectCancelOrder": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"AbilCmd": "CAbilCommand",
				"Count": {
					"type": "uint32",
					"minValue": 1
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectCancelOrderFlag"
				}
			}
		},
		
		"CEffectCreateHealer": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"LaunchUnit": "SEffectWhichUnit",
				"ImpactUnit": "SEffectWhichUnit",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectHealerFlag"
				},
				
				"PeriodicValidator": "CValidatorLink",
				"PeriodicEffect": "CEffectLink",
				"DrainVital": "EUnitVital",
				"DrainVitalCostFactor": {
					"type": "CFixed",
					"minValue": -100,
					"maxValue": 100
				},
				
				"DrainResourceCostFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"RechargeVital": "EUnitVital",
				"RechargeVitalRate": {
					"type": "CGameRate",
					"minValue": 0,
					"maxValue": 100000
				},
				
				"TimeFactor": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100
				}
			}
		},
		
		"CEffectCreatePersistent": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"TimeScaleSource": "SEffectWhichTimeScale",
				"OffsetVectorStartLocation": "SEffectWhichLocation",
				"OffsetVectorEndLocation": "SEffectWhichLocation",
				"OffsetFacingFallback": "SEffectWhichLocation",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECreatePersistent"
				},
				
				"InitialDelay": "CGameTime",
				"InitialEffect": "CEffectLink",
				"InitialOffset": "CEffectOffset",
				"ExpireDelay": "CGameTime",
				"ExpireEffect": "CEffectLink",
				"ExpireOffset": "CEffectOffset",
				"FinalEffect": "CEffectLink",
				"FinalOffset": "CEffectOffset",
				"PeriodCount": {
					"type": "uint32",
					"maxValue": 65535
				},
				
				"PeriodicValidator": "CValidatorLink",
				"PeriodicEffectArray": {
					"type": "CEffectLink",
					"array": true
				},
				
				"PeriodicOffsetArray": {
					"type": "CEffectOffset",
					"array": true
				},
				
				"PeriodicPeriodArray": {
					"type": "CGameTime",
					"array": true
				},
				
				"RevealRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RevealFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectRevealFlag"
				},
				
				"DetectFilters": "CTargetFilters",
				"RadarFilters": "CTargetFilters",
				"HeightMap": "EHeightMap",
				"AINotifyEffect": "CEffectLink"
			}
		},
		
		"CEffectCreateUnit": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"Origin": "SEffectWhichLocation",
				"CreateFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECreateUnit"
				},
				
				"RallyUnit": "SEffectWhichUnit",
				"SpawnOwner": "SEffectWhichPlayer",
				"SpawnEffect": "CEffectLink",
				"SpawnUnit": "CUnitLink",
				"SpawnCount": {
					"type": "uint32",
					"minValue": 1
				},
				
				"SpawnRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"SpawnOffset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"SelectUnit": "SEffectWhichUnit",
				"TypeFallbackUnit": "SEffectWhichUnit"
			}
		},
		
		"CEffectCreep": {
			"parent": "CEffect",
			"fields": {
				"CreepFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectCreepFlag"
				},
				
				"Radius": "SAccumulatedFixed",
				"WhichLocation": "SEffectWhichLocation",
			}
		},
		
		"CEffectDamage": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"LaunchLocation": "SEffectWhichLocation",
				"ImpactLocation": "SEffectWhichLocation",
				"ImpactUnitValidator": "CValidatorLink",
				"AttributeBonus": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"AttributeFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"AttributeForced": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"ShieldBonus": "CFixed",
				"ShieldFactor": "CFixed",
				"ArmorReduction": "CFixed",
				"Visibility": "EDamageVisibility",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EDamageFlag"
				},
				
				"Kind": "EDamageKind",
				"KindSplash": "EDamageKind",
				"Total": "EDamageTotal",
				"Amount": "CFixed",
				"Random": "CFixed",
				"VitalBonus": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalFractionCurrent": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalFractionMax": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"LeechFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Death": "EDeathType",
				"KillHallucination": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"AreaArray": {
					"type": "SEffectDamageArea",
					"array": true
				},
				
				"ExcludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"IncludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"SearchFilters": "CTargetFilters",
				"TargetSorts": "STargetSorts",
				"MinCountError": "CCmdResult",
				"MinCount": "uint32",
				"MaxCount": "uint32",
				"RecycleCount": "uint32",
				"SearchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectSearchFlag"
				},
				
				"DisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				}
			}
		},
		
		"CEffectDestroyHealer": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"Effect": "CEffectLink",
				"Count": "uint32",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CEffectDestroyPersistent": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"Effect": "CEffectLink",
				"Count": "uint32",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CEffectEnumArea": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"LaunchLocation": "SEffectWhichLocation",
				"ImpactLocation": "SEffectWhichLocation",
				"ExcludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"IncludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"SearchFilters": "CTargetFilters",
				"TargetSorts": "STargetSorts",
				"AreaArray": {
					"type": "SEffectEnumArea",
					"array": true
				},
				
				"MinCountError": "CCmdResult",
				"MinCount": "uint32",
				"MaxCount": "uint32",
				"RecycleCount": "uint32",
				"SearchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectSearchFlag"
				}
			}
		},
		
		"CEffectEnumMagazine": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"SearchFilters": "CTargetFilters",
				"MaxCount": "uint32",
				"EffectInternal": "CEffectLink",
				"EffectExternal": "CEffectLink"
			}
		},
		
		"CEffectEnumTransport": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"SearchFilters": "CTargetFilters",
				"MaxCount": "uint32",
				"Effect": "CEffectLink",
				"CheckOuter": "bool"
			}
		},
		
		"CEffectIssueOrder": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"Abil": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"CmdFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECmdFlags"
				},
				
				"Player": "SEffectWhichPlayer",
				"Target": "SEffectWhichLocation"
			}
		},
		
		"CEffectLaunchMissile": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"LaunchLocation": "SEffectWhichLocation",
				"ImpactLocation": "SEffectWhichLocation",
				"LaunchOffset": "CEffectOffset",
				"ImpactOffset": "CEffectOffset",
				"LaunchEffect": "CEffectLink",
				"ImpactEffect": "CEffectLink",
				"FinishEffect": "CEffectLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectMissile"
				},
				
				"TransferBehavior": "CBehaviorLink",
				"TransferCount": "uint32",
				"AmmoUnit": "CUnitLink",
				"AmmoLife": "CGameTime",
				"PlaceholderUnit": "CUnitLink",
				"PlacementRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"ImpactRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RetargetFilters": "CTargetFilters",
				"RetargetRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"ReturnDelay": {
					"type": "CGameTime",
					"minValue": 0.0625
				},
				
				"ReturnMovers": {
					"type": "SEffectMover",
					"array": true
				},
				
				"Movers": {
					"type": "SEffectMover",
					"array": true
				},
				
				"MoverRollingPattern": "EMoverPatternType",
				"MoverRollingJump": "uint32",
				"MoverExecutePattern": "EMoverPatternType",
				"MoverExecuteJump": "uint32",
				"MoverExecuteRange": "uint32",
				"DeathType": "EDeathType",
				"Visibility": "EDamageVisibility"
			}
		},
		
		"CEffectModifyPlayer": { //TODO: verify
			"parent": "CEffect",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"Resources": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourcesCollected": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"Cost": "SEffectModifyPlayerCost"
			}
		},
		
		"CEffectModifyUnit": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"TransferUnit": "SEffectWhichUnit",
				"LaunchUnit": "SEffectWhichUnit",
				"ImpactUnit": "SEffectWhichUnit",
				"KillCreditUnit": "SEffectWhichUnit",
				"KillHallucination": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Cost": "SEffectModifyUnitCost",
				"VitalArray": {
					"type": "SEffectModifyVital",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Height": "CFixed",
				"HeightTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"ModifyFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectModify"
				},
				
				"XP": "CFixed",
				"ResourceRestoreBonus": "uint32",
				"ResourceRestoreFraction": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"Resources": "int32",
				"ResourcesHarvestedBonus": "uint32",
				"ResourcesHarvestedFraction": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"SalvageFactor": "SCostFactor",
				"SpawnCount": "int32",
				"CopyOrderCount": "uint32",
				"CopyRallyCount": "uint32",
				"ModifyOwnerPlayer": "SEffectWhichPlayer"
			}
		},
		
		"CEffectRedirectMissile": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"ImpactLocation": "SEffectWhichLocation",
				"ImpactFilters": "CTargetFilters",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectRedirectMissile"
				}
			}
		},
		
		"CEffectReleaseMagazine": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit"
			}
		},
		
		"CEffectRemoveBehavior": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"BehaviorCategories": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorCategory"
				},
				
				"BehaviorClass": "EClassIdCBehavior",
				"BehaviorLink": "CBehaviorLink",
				"KillHallucination": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Count": "uint32"
			}
		},
		
		"CEffectReturnMagazine": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"MagazineEffect": "CEffectLink"
			}
		},
		
		"CEffectSet": { //TODO: verify
			"parent": "CEffect",
			"fields": {
				"EffectArray": {
					"type": "CEffectLink",
					"array": true
				},
				
				"Random": "bool",
				"MinCount": "uint32",
				"MaxCount": "uint32",
				"TargetLocationType": "EEffectLocationType"
			}
		},
		
		"CEffectSwitch": { //TODO: verify
			"parent": "CEffect",
			"fields": {
				"CaseArray": {
					"type": "SEffectSwitchCase",
					"array": true
				},
				
				"CaseDefault": "CEffectLink",
				"TargetLocationType": "EEffectLocationType"
			}
		},
		
		"CEffectTeleport": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"ClearQueuedOrders": "bool",
				"MinDistance": "CFixed",
				"PlacementArc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"PlacementAround": "SEffectWhichLocation",
				"PlacementRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"SourceLocation": "SEffectWhichLocation",
				"TargetLocation": "SEffectWhichLocation",
				"TeleportFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectTeleport"
				}
			}
		},
		
		"CEffectTransferBehavior": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"LaunchUnit": "SEffectWhichUnit",
				"ImpactUnit": "SEffectWhichUnit",
				"Behavior": "CBehaviorLink",
				"Count": "uint32",
				"Copy": "bool",
				"Preserve": "bool"
			}
		},
		
		"CEffectUseCalldown": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"CalldownCount": "uint32",
				"CalldownEffect": "CEffectLink"
			}
		},
		
		"CEffectUseMagazine": { //TODO: verify
			"parent": "CEffectResponse",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"AmmoUnit": "CUnitLink",
				"AmmoEffect": "CEffectLink",
				"MagazineAbil": "CAbilLink"
			}
		},
		
		"SFootprintTileGrid": { //TODO: verify
			"parent": null,
			"fields": {
				"Resolution": "uint8",
				"Grid": {
					"type": "CTileGridRow",
					"array": true
				}
			}
		},
		
		"SFootprintPlacement": { //TODO: verify
			"parent": null,
			"fields": {
				"Area": "CiQuad",
				"Test": "SPlacementBits",
				"Have": "SPlacementBits",
				"Mask": "TFootprintMask"
			}
		},
		
		"CFootprint": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EFootprintFlag"
				},
				
				"Layers": {
					"type": "SFootprintLayer",
					"array": true,
					"indexEnum": "EFootprintLayer"
				},
				
				"Shape": "SFootprintShape",
				"EditorCategories": "TEditorCategories"
			}
		},
		
		"CFoW": { //TODO: verify
			"parent": null,
			"fields": {
				"Color": "CColor",
				"UnhideRadius": "CFixed",
				"Expand": "bool",
				"Hidden": "bool",
				"Persistent": "bool",
				"BlendSpeed": {
					"type": "int32",
					"minValue": 0,
					"maxValue": 3
				}
			}
		},
		
		"CGameUI": { //TODO: verify
			"parent": null,
			"fields": {
				"ChallengeCategory": {
					"type": "SChallengeCategory",
					"array": true
				},
				
				"ChallengeMasterAchievement": {
					"type": "CAchievementLink",
					"array": true
				},
				
				"Campaign": {
					"type": "SCampaignData",
					"array": true
				},
				
				"StartupCampaign": "uint32",
				"StartupMovieArray": {
					"type": "SMovieConfig",
					"array": true
				},
				
				"MusicArray": {
					"type": "CSoundtrackLink",
					"array": true
				},
				
				"StartupMusic": "uint32",
				"IntroMusic": "CSoundtrackLink",
				"CreditsMusic": "CSoundtrackLink",
				"LoopAmbience": "CSoundtrackLink",
				"SoundQuality": {
					"type": "SSoundQuality",
					"array": true
				},
				
				"MinimapData": "SMinimapData",
				"SelectionData": "SSelectionData",
				"SoundData": {
					"type": "SSoundData",
					"array": true,
					"indexEnum": "ESoundCategory"
				},
				
				"DSPArray": {
					"type": "CDSPLink",
					"array": true
				},
				
				"PointModels": {
					"type": "SPointModel",
					"array": true,
					"indexEnum": "EPointType"
				},
				
				"RegionNameSize": "uint32",
				"LookAtTypes": {
					"type": "SLookAtType",
					"array": true
				},
				
				"CameraShakeAmplitudes": {
					"type": "SCameraShakeAmplitude",
					"array": true
				},
				
				"CameraShakeFrequencies": {
					"type": "SCameraShakeFrequency",
					"array": true
				},
				
				"ListenerAngleRolloff": {
					"type": "SListenerRolloff",
					"array": true
				},
				
				"ListenerDistanceRolloff": {
					"type": "SListenerRolloff",
					"array": true
				},
				
				"PlanetPanelDefaultBackground": "CModelLink",
				"BehaviorIconColors": {
					"type": "CColor",
					"array": true,
					"indexEnum": "EBehaviorAlignment"
				},
				
				"BehaviorBorderColors": {
					"type": "CColor",
					"array": true,
					"indexEnum": "EBehaviorAlignment"
				},
				
				"VitalColors": {
					"type": "SVitalColor",
					"array": true,
					"indexEnum": "EVitalColor"
				},
				
				"SelectionColors": {
					"type": "CColor",
					"array": true,
					"indexEnum": "ESelectionColor"
				},
				
				"RadarAlpha": "uint8",
				"OverrideColors": {
					"type": "STeamColor",
					"array": true,
					"indexEnum": "EOverrideColor"
				},
				
				"WireframeColorArray": {
					"type": "CColor",
					"array": true
				},
				
				"MovementSpeedArray": {
					"type": "SUnitSpeedText",
					"array": true
				},
				
				"WeaponSpeedArray": {
					"type": "SWeaponSpeedText",
					"array": true
				},
				
				"InfoColorBuffed": "CColor",
				"InfoColorDebuffed": "CColor",
				"InfoColorUpgraded": "CColor",
				"RequirementsSatisfiedColor": "CColor",
				"RequirementsUnsatisfiedColor": "CColor",
				"RandomRaceIcon": "CImagePath",
				"DisplayTimeInSeconds": "bool",
				"UnitDamageFlashDuration": "uint32",
				"UnitDamageNotificationCooldown": "uint32",
				"UnitDamageNotificationDelay": "uint32",
				"CancelTargetModeButtonFace": "CButtonLink",
				"CancelPlacementModeButtonFace": "CButtonLink",
				"PlacementDisplayBonusRadius": {
					"type": "uint32",
					"maxValue": 32
				},
				
				"PlacementDisplayMinimumRadius": {
					"type": "uint32",
					"maxValue": 32
				},
				
				"PlacementErrorColor": "CColor",
				"PlacementGridDimensions": {
					"type": "C2iVector",
					"minValue": 0,
					"maxValue": 64
				},
				
				"ScreenModeTransitionDuration": "uint32",
				"CostDisplayColor": {
					"type": "CColor",
					"array": true,
					"indexEnum": "ECostDisplay"
				},
				
				"CostDisplayFade": "CGameTime",
				"CostDisplayHeight": "uint32",
				"CostDisplayHeightOffset": "CFixed",
				"CostDisplaySpeed": "CGameSpeed",
				"CostDisplayTime": "CGameTime",
				"WayPointMultiUnitFadePoint": "real32",
				"WayPointMultiUnitFadeAlpha": "real32",
				"WayPointLineWidth": "real32",
				"WayPointTileLength": "real32",
				"DefaultPathColor": {
					"type": "CColor",
					"array": true,
					"indexEnum": "EPathLocation"
				},
				
				"DefaultPathLineWidth": {
					"type": "real32",
					"array": true,
					"indexEnum": "EPathLocation"
				},
				
				"DefaultPathTileLength": {
					"type": "real32",
					"array": true,
					"indexEnum": "EPathLocation"
				},
				
				"DefaultPathTexture": {
					"type": "CImagePath",
					"array": true,
					"indexEnum": "EPathLocation"
				},
				
				"StrobeCycleLength": "uint32",
				"StrobeFalloff": "real32",
				"StrobeHeight": "real32",
				"StrobeHaloEmission": "real32",
				"StrobeHighlightColor": "CColor",
				"GlowPeakMultiplier": "C3Vector",
				"TransmissionSoundRect": "CRect",
				"TransmissionSoundDepth": "real32",
				"DefaultInfoTooltipTypes": "CString",
				"ObjectGroupData": {
					"type": "SObjectGroupData",
					"array": true
				},
				
				"LoadingScreenHelpIntro": {
					"type": "SLoadingScreenHelp",
					"array": true
				},
				
				"LoadingScreenHelp": {
					"type": "SLoadingScreenHelp",
					"array": true
				},
				
				"LoadingBars": {
					"type": "SLoadingBar",
					"array": true
				},
				
				"UnitKillRank": {
					"type": "SUnitKillRank",
					"array": true
				},
				
				"AlertPanMaxDuration": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 512
				},
				
				"AlertPanMinDuration": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 512
				},
				
				"AlertPanMaxVelocity": {
					"type": "real32",
					"minValue": 0
				},
				
				"BeaconMinimapIcon": "CImagePath",
				"BeaconMinimapRenderPriority": "CActorKey",
				"AchievementTags": {
					"type": "CFourCC",
					"array": true
				},
				
				"GameCategories": {
					"type": "SGameCategory",
					"array": true
				},
				
				"AutoVariantArcade": "SDefaultGameVariant",
				"AutoVariantMelee": "SDefaultGameVariant",
				"DefaultVariants": {
					"type": "SDefaultGameVariant",
					"array": true
				},
				
				"DefaultUIRace": "CRaceLink",
				"MinCooldownDisplayDuration": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"MinTimeDisplayDuration": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"TutorialArray": {
					"type": "STutorialConfig",
					"array": true
				},
				
				"HotkeyInfoArray": {
					"type": "SHotkeyInfo",
					"array": true,
					"indexEnum": "EHotkey"
				},
				
				"FontStyleFileArray": {
					"type": "CFontStylePath",
					"array": true
				},
				
				"CustomLayoutFileArray": {
					"type": "CLayoutPath",
					"array": true
				},
				
				"ResourceArray": {
					"type": "SResourceUI",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"TrialAllowedSinglePlayerMaps": {
					"type": "CAssetPath",
					"array": true
				},
				
				"CommandHotkeyRepeatIgnored": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"CameraEventThresholdDistance": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"CameraEventThresholdPitch": {
					"type": "CFangle",
					"minValue": 0
				},
				
				"CameraEventThresholdYaw": {
					"type": "CFangle",
					"minValue": 0
				},
				
				"CameraEventThresholdTarget": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"HelpControlCategories": {
					"type": "SHelpControlCategoryInfo",
					"array": true
				},
				
				"HelpControls": {
					"type": "SHelpControlInfo",
					"array": true
				},
				
				"HelpGameMechanics": {
					"type": "SHelpGameMechanicInfo",
					"array": true
				},
				
				"HelpTechTitle": "CStringLink",
				"HelpHiddenInGlue": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"HelpTechTreeSuffix": "CString"
			}
		},
		
		"CHerd": { //TODO: verify
			"parent": null,
			"fields": {
				"ClosestTo": "EHerdClosestTo",
				"PositionBias": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"NodeSearchRadius": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Levels": {
					"type": "SHerdLevel",
					"array": true
				},
				
				"Nodes": {
					"type": "SHerdNode",
					"array": true
				},
				
				"SpeedLimit": {
					"type": "CRange",
					"minValue": 0,
					"maxValue": 10
				}
			}
		},
		
		"CHerdNode": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CHero": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Model": "CModelLink",
				"Level": "uint32",
				"State": "EHeroState",
				"AbilCategoryArray": {
					"type": "SHeroAbilCategory",
					"array": true
				},
				
				"StatArray": {
					"type": "CHeroStatLink",
					"array": true
				},
				
				"UserReference": "CUserReference"
			}
		},
		
		"CHeroAbil": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Icon": "CImagePath",
				"Description": "CStringLink",
				"Tooltip": "CStringLink",
				"Image": "CImagePath",
				"Movie": "CMoviePath",
				"RequiredLevel": "uint32",
				"RequiredMission": "CMapLink",
				"State": "EHeroAbilState",
				"UpgradeArray": {
					"type": "CUpgradeLink",
					"array": true
				},
				
				"LevelUpgradeArray": {
					"type": "CUpgradeLink",
					"array": true
				},
				
				"AbilCommandArray": {
					"type": "CAbilCommand",
					"array": true
				},
				
				"StatModifierArray": {
					"type": "SHeroStatModifier",
					"array": true
				},
				
				"UserReference": "CUserReference"
			}
		},
		
		"CHeroStat": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Value": "int32",
				"UserReference": "CUserReference"
			}
		},
		
		"CItem": { //TODO: verify
			"parent": null,
			"fields": {
				"Face": "CButtonLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EItemFlag"
				},
				
				"Class": "CItemClassLink",
				"Container": "CItemContainerLink",
				"Level": "uint32",
				"Requirements": "CRequirementLink",
				"CarryBehaviorArray": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"CarryWeaponArray": {
					"type": "SUnitWeaponData",
					"array": true
				},
				
				"EquipBehaviorArray": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"EquipWeaponArray": {
					"type": "SUnitWeaponData",
					"array": true
				}
			}
		},
		
		"CItemAbil": { //TODO: verify
			"parent": "CItem",
			"fields": {
				"Abil": "CAbilLink"
			}
		},
		
		"CItemEffect": { //TODO: verify
			"parent": "CItem",
			"fields": {
				"Effect": "CEffectLink",
				"EffectCost": "SCost",
				"EffectFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EItemEffectFlag"
				},
				
				"RefundFraction": "SCostFactor",
				"TargetFilters": "CTargetFilters",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"CItemEffectInstant": { //TODO: verify
			"parent": "CItemEffect",
			"fields": {}
		},
		
		"CItemEffectTarget": { //TODO: verify
			"parent": "CItemEffect",
			"fields": {}
		},
		
		"CItemClass": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink"
			}
		},
		
		"SItemContainer": { //TODO: verify
			"parent": null,
			"fields": {
				"EmptyFace": "CButtonLink",
				"Classes": {
					"type": "CItemClassLink",
					"array": true
				},
				
				"Requirements": "CRequirementLink"
			}
		},
		
		"CItemContainer": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"ModelHeight": "uint32",
				"ModelWidth": "uint32",
				"Slots": {
					"type": "SItemContainerSlot",
					"array": true
				}
			}
		},
		
		"SSharedLightInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"LightInfo": "SLightInfo",
				"VariationCount": "uint32",
				"Variations": {
					"type": "SVariationConfig",
					"array": true
				}
			}
		},
		
		"CLight": { //TODO: verify
			"parent": null,
			"fields": {
				"TimePerDay": {
					"type": "CTimeOfDay",
					"maxValue": 1180000
				},
				
				"TimePerLoop": {
					"type": "CTimeOfDay",
					"maxValue": 1180000
				},
				
				"TimeStart": {
					"type": "CTimeOfDay",
					"maxValue": 1180000
				},
				
				"TimeEventArray": {
					"type": "STimeEvent",
					"array": true,
					"indexEnum": "EGameTimeEvent"
				},
				
				"ToDInfoArray": {
					"type": "SLightInfo",
					"array": true
				},
				
				"EditorCategories": "TEditorCategories",
				"AmbientEnvironmentMap": "CTexturePath",
				"LightingRegionMap": "CTexturePath"
			}
		},
		
		"CLocation": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Movie": "CMoviePath",
				"MissionTitle": "CStringLink",
				"MissionText": "CStringLink",
				"PlanetToolTip": "CStringLink",
				"PrimaryObjectiveTitle": "CStringLink",
				"PrimaryObjectiveText": "CStringLink",
				"SecondaryObjectiveTitle": "CStringLink",
				"SecondaryObjectiveText": "CStringLink",
				"RewardTitle": "CStringLink",
				"RewardText": "CStringLink",
				"BonusTitle": "CStringLink",
				"BonusText": "CStringLink",
				"ContactName": "CStringLink",
				"ContactModel": "CModelLink",
				"ContactActor": "CActorLink",
				"PlanetModel": "CModelLink",
				"BackgroundModel": "CModelLink",
				"BackgroundImage": "CImagePath",
				"MissionCategoryArray": {
					"type": "SMissionCategory",
					"array": true
				},
				
				"AmbientSound": "CSoundtrackLink",
				"UserReference": "CUserReference"
			}
		},
		
		"CLoot": { //TODO: verify
			"parent": null,
			"fields": {
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"CLootSpawn": { //TODO: verify
			"parent": "CLoot",
			"fields": {
				"SpawnLocation": "EEffectLocation",
				"SpawnOwner": "EEffectPlayer",
				"SpawnRange": "CFixed"
			}
		},
		
		"CLootEffect": { //TODO: verify
			"parent": "CLoot",
			"fields": {
				"Effect": "CEffectLink"
			}
		},
		
		"CLootItem": { //TODO: verify
			"parent": "CLootSpawn",
			"fields": {
				"ClassArray": {
					"type": "CItemClassLink",
					"array": true
				},
				
				"MaxLevel": "uint32",
				"MinLevel": "uint32"
			}
		},
		
		"CLootSet": { //TODO: verify
			"parent": "CLoot",
			"fields": {
				"MinCount": {
					"type": "uint32",
					"minValue": 1
				},
				
				"MaxCount": {
					"type": "uint32",
					"minValue": 1
				},
				
				"ChildArray": {
					"type": "SLootChoice",
					"array": true
				}
			}
		},
		
		"CLootUnit": { //TODO: verify
			"parent": "CLootSpawn",
			"fields": {
				"Unit": "CUnitLink"
			}
		},
		
		"CMap": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"File": "CString",
				"Kind": "EMapKind",
				"Description": "CStringLink",
				"MissionTitle": "CStringLink",
				"MissionText": "CStringLink",
				"MissionBackgroundImage": "CImagePath",
				"PrimaryObjectiveTitle": "CStringLink",
				"PrimaryObjectiveText": "CStringLink",
				"PrimaryObjectiveTooltip": "CStringLink",
				"SecondaryObjectiveTitle": "CStringLink",
				"SecondaryObjectiveText": "CStringLink",
				"SecondaryObjectiveTooltip": "CStringLink",
				"RewardTitle": "CStringLink",
				"RewardText": "CStringLink",
				"RewardTooltip": "CStringLink",
				"ResearchTitle": "CStringLink",
				"ResearchText": "CStringLink",
				"ResearchTooltip": "CStringLink",
				"BonusTitle": "CStringLink",
				"BonusText": "CStringLink",
				"BonusTooltip": "CStringLink",
				"TechnologyTitle": "CStringLink",
				"TechnologyNameText": "CStringLink",
				"TechnologyDescriptionText": "CStringLink",
				"TechnologyTooltip": "CStringLink",
				"TechnologyUnitLink": "CUnitLink",
				"ContactTitle": "CStringLink",
				"ContactNameText": "CStringLink",
				"ContactModelLink": "CModelLink",
				"ContactTooltip": "CStringLink",
				"ContactActor": "CActorLink",
				"LoadingImage": "CImagePath",
				"LoadingTitle": "CStringLink",
				"LoadingSubtitle": "CStringLink",
				"LoadingBody": "CStringLink",
				"LoadingHelp": "CStringLink",
				"LoadingHelpRestart": "CStringLink",
				"LoadingHelpAlternate": "CStringLink",
				"LoadingTextOffset": "C2iVector",
				"LoadingTextWidth": "uint32",
				"LoadingTextHeight": "uint32",
				"LoadingTextStyle": "CStyleName",
				"ArmyCategory": "CArmyCategoryLink",
				"Location": "CLocationLink",
				"ObjectiveArray": {
					"type": "CObjectiveLink",
					"array": true
				},
				
				"Summary": "CStringLink",
				"UserReference": "CUserReference"
			}
		},
		
		"CModel": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelPath",
				"LowQualityModel": "CModelLink",
				"RequiredAnims": {
					"type": "CAnimsPath",
					"array": true
				},
				
				"OptionalAnims": {
					"type": "CAnimsPath",
					"array": true
				},
				
				"RequiredAnimsEx": {
					"type": "SAnimFile",
					"array": true
				},
				
				"AnimBlendTime": "real32",
				"AnimSpeed": {
					"type": "real32",
					"minValue": 0.001
				},
				
				"AttachProps": {
					"type": "SAttachProps",
					"array": true
				},
				
				"EditorCategories": "TEditorCategories",
				"Events": {
					"type": "SModelDataEvent",
					"array": true
				},
				
				"FacialController": "CFacialPath",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EModelFlag"
				},
				
				"Image": "CImagePath",
				"Lighting": "CLightLink",
				"Occlusion": "EOcclusion",
				"OccludingOpacity": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"PausedParticleSystemBehavior": "EPausedParticleSystemBehavior",
				"PhysicsType": "EModelPhysicsType",
				"PhysicsMaterialMappings": {
					"type": "SPhysicsMaterialMapping",
					"array": true
				},
				
				"PhysicsMaterialOverride": "CPhysicsMaterialLink",
				"PhysicsGravityFactor": {
					"type": "real32",
					"minValue": -1000,
					"maxValue": 1000
				},
				
				"PhysicsForceFactor": {
					"type": "real32",
					"minValue": -1000,
					"maxValue": 1000
				},
				
				"PhysicsDeathMotionFactor": "CVariatorActorReal32",
				"PlanetPanelCamera": "CString",
				"Priority": "uint8",
				"Radius": {
					"type": "real32",
					"minValue": -1
				},
				
				"RadiusLoose": {
					"type": "real32",
					"minValue": -1
				},
				
				"Quality": "uint32",
				"ScaleMax": {
					"type": "C3Vector",
					"minValue": 0.0005
				},
				
				"ScaleMin": {
					"type": "C3Vector",
					"minValue": 0.0005
				},
				
				"SelectionLayer": "uint32",
				"SelectionOffset": "C3Vector",
				"SelectionRadius": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"ShadowRadius": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"SquibTypeDefault": "ESquibType",
				"TechPurchaseCamera": "CString",
				"TechPurchaseSpeed": "real32",
				"Tipability": "real32",
				"TipabilityLength": {
					"type": "real32",
					"minValue": 0
				},
				
				"TipabilityWidth": {
					"type": "real32",
					"minValue": 0
				},
				
				"TextureAppliedGroups": "CTextureProps",
				"TextureDeclares": {
					"type": "STextureDeclare",
					"array": true
				},
				
				"TextureInfos": {
					"type": "STextureInfo",
					"array": true
				},
				
				"TextureExpressionsForEditor": {
					"type": "STextureExpressionSpec",
					"array": true
				},
				
				"TextureMatchesForEditor": {
					"type": "STextureMatchSpec",
					"array": true
				},
				
				"UnitGlossaryCamera": "CString",
				"UnitGlossaryVariation": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 255
				},
				
				"UnitGlossaryTeamColorIndex": "uint32",
				"VariationCount": {
					"type": "uint32",
					"minValue": 1,
					"maxValue": 256
				},
				
				"Variations": {
					"type": "SModelVariation",
					"array": true
				}
			}
		},
		
		"CModelFoliage": { //TODO: verify
			"parent": "CModel",
			"fields": {
				"Layer": "EFoliageLayer",
				"SpringDampening": "real32",
				"SpringStrength": "real32",
				"DragCoefficient": "real32",
				"WindInfluence": "real32",
				"ForceNormalsUp": "bool",
				"RandomDeviation": "real32",
				"Flexibility": "real32"
			}
		},
		
		"CMover": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EMoverFlag"
				},
				
				"HeightMap": "EHeightMap",
				"PathMode": "EPathMode",
				"PlacementArray": {
					"type": "SPathingData",
					"array": true,
					"indexEnum": "EPlacement"
				}
			}
		},
		
		"CMoverAvoid": { //TODO: verify
			"parent": "CMover",
			"fields": {}
		},
		
		"CMoverFlock": { //TODO: verify
			"parent": "CMover",
			"fields": {}
		},
		
		"CMoverMissile": { //TODO: verify
			"parent": "CMover",
			"fields": {
				"MotionPhases": {
					"type": "SMotionPhase",
					"array": true
				},
				
				"MotionOverlays": {
					"type": "SMotionOverlay",
					"array": true
				},
				
				"RotationIgnoredByUnit": "bool",
				"RespectUnitHeightAtDestination": "bool"
			}
		},
		
		"CMoverNull": { //TODO: verify
			"parent": "CMover",
			"fields": {}
		},
		
		"CObjective": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Type": "EObjectiveType",
				"RequiredCount": "int32",
				"RewardArray": {
					"type": "int32",
					"array": true,
					"indexEnum": "EObjectiveReward"
				},
				
				"UserReference": "CUserReference"
			}
		},
		
		"CPhysicsMaterial": { //TODO: verify
			"parent": null,
			"fields": {
				"Density": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 5000
				},
				
				"Friction": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 2
				},
				
				"Restitution": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"LinearDamping": "real32",
				"AngularDamping": "real32"
			}
		},
		
		"CPreload": { //TODO: verify
			"parent": null,
			"fields": {
				"NormalConditions": {
					"type": "CBankConditionLink",
					"array": true
				},
				
				"NormalTiming": "EPreloadTiming",
				"QueuedConditions": {
					"type": "CBankConditionLink",
					"array": true
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPreloadFlag"
				}
			}
		},
		
		"CPreloadAsset": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"File": "CAssetPath"
			}
		},
		
		"CPreloadScene": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"File": "CString",
				"Filter": "CString"
			}
		},
		
		"CPreloadActor": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"Link": "CActorLink"
			}
		},
		
		"CPreloadConversation": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"Link": "CConversationLink"
			}
		},
		
		"CPreloadModel": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"Link": "CModelLink",
				"Variations": "CString",
				"ModelFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPreloadModelFlag"
				}
			}
		},
		
		"CPreloadSound": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"Link": "CSoundLink",
				"Variations": "CString"
			}
		},
		
		"CPreloadUnit": { //TODO: verify
			"parent": "CPreload",
			"fields": {
				"Link": "CUnitLink"
			}
		},
		
		"CRace": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"AttributeId": "CFourCC",
				"Icon": "CImagePath",
				"StartLocationAlert": "CAlertLink",
				"GameMusic": "CSoundtrackLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ERaceFlag"
				},
				
				"ShowResource": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"StartingUnitArray": {
					"type": "SStartingUnit",
					"array": true
				},
				
				"StartingResource": {
					"type": "uint32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"FoodCeiling": {
					"type": "uint32",
					"maxValue": 524287
				},
				
				"GlossaryTeamColorIndex": "uint32",
				"MiniMapBorderColor": "CColor",
				"VictorySound": "CSoundLink",
				"DefeatSound": "CSoundLink"
			}
		},
		
		"CRequirement": { //TODO: verify
			"parent": null,
			"fields": {
				"EditorCategories": "TEditorCategories",
				"CanBeSuppressed": {
					"type": "bool",
					"array": true,
					"indexEnum": "ERequirement"
				},
				
				"NodeArray": {
					"type": "SRequirementNode",
					"array": true,
					"indexEnum": "ERequirement"
				}
			}
		},
		
		"CRequirementNode": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ERequirementNodeFlag"
				},
				
				"Tooltip": "CStringLink"
			}
		},
		
		"CRequirementGT": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementLT": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementGTE": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementLTE": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementEq": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementNE": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementAnd": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementOr": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementXor": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementNot": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementOdd": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementDiv": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementMod": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementMul": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementSum": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"OperandArray": {
					"type": "CRequirementNodeLink",
					"array": true
				}
			}
		},
		
		"CRequirementConst": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Value": "int32"
			}
		},
		
		"CRequirementAllowAbil": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Link": "CAbilLink",
				"Index": "uint32"
			}
		},
		
		"CRequirementAllowBehavior": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Link": "CBehaviorLink"
			}
		},
		
		"CRequirementAllowUnit": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Link": "CUnitLink"
			}
		},
		
		"CRequirementAllowUpgrade": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Link": "CUpgradeLink"
			}
		},
		
		"CRequirementCountAbil": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Count": "SRequirementCount"
			}
		},
		
		"CRequirementCountBehavior": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Count": "SRequirementCount"
			}
		},
		
		"CRequirementCountEffect": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Count": "SRequirementCount"
			}
		},
		
		"CRequirementCountUnit": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Count": "SRequirementCount"
			}
		},
		
		"CRequirementCountUpgrade": { //TODO: verify
			"parent": "CRequirementNode",
			"fields": {
				"Count": "SRequirementCount"
			}
		},
		
		"CReverb": { //TODO: verify
			"parent": null,
			"fields": {
				"Room": {
					"type": "int32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"RoomHF": {
					"type": "int32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"RoomLF": {
					"type": "int32",
					"minValue": -10000,
					"maxValue": 0
				},
				
				"DecayTime": {
					"type": "real32",
					"minValue": 0.1,
					"maxValue": 20
				},
				
				"DecayHFRatio": {
					"type": "real32",
					"minValue": 0.1,
					"maxValue": 2
				},
				
				"Reflections": {
					"type": "int32",
					"minValue": -10000,
					"maxValue": 1000
				},
				
				"ReflectionsDelay": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 0.3
				},
				
				"Reverb": {
					"type": "int32",
					"minValue": -10000,
					"maxValue": 2000
				},
				
				"ReverbDelay": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 0.1
				},
				
				"HFReference": {
					"type": "real32",
					"minValue": 1000,
					"maxValue": 20000
				},
				
				"LFReference": {
					"type": "real32",
					"minValue": 20,
					"maxValue": 1000
				},
				
				"RoomRolloffFactor": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 10
				},
				
				"Diffusion": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"Density": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"SpeakerMix": {
					"type": "real32",
					"array": true,
					"indexEnum": "ESpeaker"
				}
			}
		},
		
		"CReward": { //TODO: verify
			"parent": null,
			"fields": {
				"Category": "SRewardCategory",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ERewardFlag"
				},
				
				"Name": "CStringLink",
				"IconFile": "CImagePath",
				"IconCols": "uint32",
				"IconRows": "uint32",
				"IconSlot": "uint32",
				"Race": "CRaceLink",
				"Upgrades": {
					"type": "CUpgradeLink",
					"array": true
				}
			}
		},
		
		"CRewardDecal": { //TODO: verify
			"parent": "CReward",
			"fields": {
				"Texture": "CTextureLink"
			}
		},
		
		"CRewardIcon": { //TODO: verify
			"parent": "CReward",
			"fields": {}
		},
		
		"CRewardModel": { //TODO: verify
			"parent": "CReward",
			"fields": {
				"Model": "CModelLink"
			}
		},
		
		"CRewardPortrait": { //TODO: verify
			"parent": "CReward",
			"fields": {
				"Model": "CModelLink"
			}
		},
		
		"CRewardBadge": { //TODO: verify
			"parent": "CReward",
			"fields": {
				"Texture": "CTextureLink"
			}
		},
		
		"CRewardPoints": { //TODO: verify
			"parent": "CReward",
			"fields": {
				"Points": "uint32"
			}
		},
		
		"CScoreResult": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"PublishName": "CStringLink",
				"Tooltip": "CStringLink",
				"Icon": "CImagePath",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EScoreResultFlag"
				},
				
				"SortValue": "int32"
			}
		},
		
		"CScoreResultRoot": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"HeaderTable": {
					"type": "CScoreResultLink",
					"array": true
				}
			}
		},
		
		"CScoreResultScore": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CScoreResultGraph": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CScoreResultPane": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CScoreResultBuildOrder": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {}
		},
		
		"CScoreResultCallouts": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {}
		},
		
		"CScoreResultExperience": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CScoreResultPerformance": { //TODO: verify
			"parent": "CScoreResult",
			"fields": {
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CScoreValue": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"PublishName": "CStringLink",
				"Tooltip": "CStringLink",
				"Icon": "CImagePath",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EScoreValueFlag"
				},
				
				"Sort": "EScoreSort",
				"Report": "EScoreValueReport"
			}
		},
		
		"CScoreValueCustom": { //TODO: verify
			"parent": "CScoreValue",
			"fields": {
				"Collapse": "EScoreCollapse",
				"Type": "EScoreValueType"
			}
		},
		
		"CScoreValueStandard": { //TODO: verify
			"parent": "CScoreValue",
			"fields": {
				"Value": "EScoreValue"
			}
		},
		
		"CScoreValueCombine": { //TODO: verify
			"parent": "CScoreValueCustom",
			"fields": {
				"Operation": "EScoreValueOperation",
				"ValueTable": {
					"type": "CScoreValueLink",
					"array": true
				}
			}
		},
		
		"CSound": { //TODO: verify
			"parent": null,
			"fields": {
				"EditorCategories": "TEditorCategories",
				"AssetArray": {
					"type": "SSoundAsset",
					"array": true
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ESoundFlag"
				},
				
				"Category": "ESoundCategory",
				"Chance": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 100
				},
				
				"ConeAngle": {
					"type": "CRange",
					"minValue": 0,
					"maxValue": 360
				},
				
				"ConeOrientation": "C3Vector",
				"ConeVolume": {
					"type": "CRange",
					"minValue": 0,
					"maxValue": 1
				},
				
				"DopplerLevel": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"DupeDestroyCount": "uint16",
				"DupeFadeBlend": "ESoundBlend",
				"DupeFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"DupeFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"DupeHistoryCount": "uint16",
				"DupeMaximumMethod": "ESoundDupe",
				"DupeMuteCount": "uint16",
				"DupeRepeatCount": "uint16",
				"DupeThresholdFadeTime": "uint32",
				"DupeThresholdPoints": {
					"type": "SVolumeThreshold",
					"array": true
				},
				
				"DupeWait": {
					"type": "CiRange",
					"minValue": 0
				},
				
				"FogFadeBlend": "ESoundBlend",
				"FogFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"FogFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"HerdNode": "CHerdNodeLink",
				"LocaleFlags": {
					"type": "SSoundLocaleFlags",
					"array": true
				},
				
				"LoopCount": {
					"type": "int32",
					"minValue": -1
				},
				
				"LoopDelay": {
					"type": "CiRange",
					"minValue": 0
				},
				
				"LowPassGain": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Mode": "ESoundMode",
				"MuteFadeBlend": "ESoundBlend",
				"MuteFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"MuteFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"OcclusionDirect": {
					"type": "CRange",
					"minValue": 0,
					"maxValue": 1
				},
				
				"OcclusionReverb": {
					"type": "CRange",
					"minValue": 0,
					"maxValue": 1
				},
				
				"OffsetFadeBlend": "ESoundBlend",
				"OffsetFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"OffsetFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"OffsetShiftBlend": "ESoundBlend",
				"OffsetShiftIn": {
					"type": "SPitchShift",
					"array": true
				},
				
				"OffsetShiftOut": {
					"type": "SPitchShift",
					"array": true
				},
				
				"OverlapPitchDelta": {
					"type": "real32",
					"minValue": 0
				},
				
				"OverlapTimeDelta": "uint16",
				"Pan": {
					"type": "CRange",
					"minValue": -1,
					"maxValue": 1
				},
				
				"PanLevel": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Pitch": {
					"type": "CPitchRange",
					"minValue": -48,
					"maxValue": 48
				},
				
				"ResourcePriority": "uint8",
				"ReverbBalance": "SReverbBalance",
				"ReverbRolloffBlend": "ESoundBlend",
				"ReverbRolloffPoints": {
					"type": "SReverbRolloff",
					"array": true
				},
				
				"Select": "ESoundSelect",
				"SpeakerMix": {
					"type": "real32",
					"array": true,
					"indexEnum": "ESpeaker",
					"minValue": 0,
					"maxValue": 5
				},
				
				"Spread": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"SustainFadeBlend": "ESoundBlend",
				"SustainFade": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"Timeout": "uint32",
				"VariationMinimum": "uint32",
				"Volume": {
					"type": "CVolumeRange",
					"minValue": -96,
					"maxValue": 6
				},
				
				"VolumeRolloffBlend": "ESoundBlend",
				"VolumeRolloffFadeBlend": "ESoundBlend",
				"VolumeRolloffFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"VolumeRolloffFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"VolumeRolloffPoints": {
					"type": "SVolumeRolloff",
					"array": true
				}
			}
		},
		
		"CSoundtrack": { //TODO: verify
			"parent": null,
			"fields": {
				"CueArray": {
					"type": "SSoundtrackCue",
					"array": true
				},
				
				"Delay": {
					"type": "CiRange",
					"minValue": 0
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ESoundtrackFlag"
				},
				
				"Select": "ESoundSelect",
				"Next": "CSoundtrackLink"
			}
		},
		
		"CTacCooldown": { //TODO: verify
			"parent": null,
			"fields": {
				"UnitLink": "CUnitLink",
				"TacAbilData": {
					"type": "STacAbilData",
					"array": true
				}
			}
		},
		
		"CTactical": { //TODO: verify
			"parent": null,
			"fields": {}
		},
		
		"CTacticalOrder": { //TODO: verify
			"parent": "CTactical",
			"fields": {
				"Abil": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Marker": "SMarker",
				"Retreat": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"TargetFind": "CTargetFindLink",
				"Validator": "CValidatorLink"
			}
		},
		
		"CTacticalSet": { //TODO: verify
			"parent": "CTactical",
			"fields": {
				"Array": {
					"type": "CTacticalLink",
					"array": true
				}
			}
		},
		
		"CTargetFind": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ETargetFindFlag"
				},
				
				"TargetFilters": "CTargetFilters",
				"CasterValidator": "CValidatorLink",
				"TargetValidator": "CValidatorLink"
			}
		},
		
		"CTargetFindBestPoint": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"DamageBase": {
					"type": "CFixed",
					"minValue": 1
				},
				
				"Effect": "CEffectLink",
				"MinCount": {
					"type": "uint32",
					"minValue": 1
				},
				
				"MinScore": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"BonusAttri": "EUnitAttribute"
			}
		},
		
		"CTargetFindWorkerRallyPoint": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"CommandIndex": {
					"type": "uint32",
					"minValue": 0
				}
			}
		},
		
		"CTargetFindRallyPoint": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"CommandIndex": {
					"type": "uint32",
					"minValue": 0
				}
			}
		},
		
		"CTargetFindEnumArea": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"LaunchLocation": "SEffectWhichLocation",
				"ImpactLocation": "SEffectWhichLocation",
				"ExcludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"IncludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"SearchFilters": "CTargetFilters",
				"MinCountError": "CCmdResult",
				"MinCount": "uint32",
				"MaxCount": "uint32",
				"RecycleCount": "uint32",
				"SearchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectSearchFlag"
				},
				
				"AreaArray": {
					"type": "STargetFindEnumArea",
					"array": true
				},
				
				"Abil": "CAbilLink",
				"ExtendRadius": "CFixed",
				"TargetSorts": "STargetSorts"
			}
		},
		
		"CTargetFindEffect": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"Effect": "CEffectLink",
				"ExtendRadius": "CFixed",
				"TargetSorts": "STargetSorts"
			}
		},
		
		"CTargetFindLastAttacker": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {}
		},
		
		"CTargetFindOffset": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"Angle": "CFangle",
				"Distance": "CfRange"
			}
		},
		
		"CTargetFindOrder": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"Abil": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex"
			}
		},
		
		"CTargetFindSet": { //TODO: verify
			"parent": "CTargetFind",
			"fields": {
				"Type": "ETargetFindSet",
				"Array": {
					"type": "CTargetFindLink",
					"array": true
				}
			}
		},
		
		"CTargetSort": { //TODO: verify
			"parent": null,
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"Descending": "bool"
			}
		},
		
		"CTargetSortAlliance": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Alliance": "EAllianceId",
				"WithPlayer": "SEffectWhichPlayer"
			}
		},
		
		"CTargetSortAngle": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"LaunchLocation": "SEffectWhichLocation",
				"ImpactLocation": "SEffectWhichLocation"
			}
		},
		
		"CTargetSortBehaviorCount": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Behavior": "CBehaviorLink",
				"Value": "uint32"
			}
		},
		
		"CTargetSortBehaviorDuration": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Behavior": "CBehaviorLink",
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CTargetSortChargeCount": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Ability": "CAbilLink",
				"Charge": "TChargeLink",
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CTargetSortChargeRegen": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Ability": "CAbilLink",
				"Charge": "TChargeLink",
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CTargetSortCooldown": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Ability": "CAbilLink",
				"Cooldown": "TCooldownLink",
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CTargetSortDistance": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"WhichLocation": "SEffectWhichLocation"
			}
		},
		
		"CTargetSortField": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Field": "TCatalogFieldPath",
				"Value": "TCatalogFieldValue"
			}
		},
		
		"CTargetSortInterruptible": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Value": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CTargetSortMarker": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Value": "uint32"
			}
		},
		
		"CTargetSortPowerSourceLevel": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Behavior": "CBehaviorLink",
				"Value": "uint32"
			}
		},
		
		"CTargetSortPowerUserLevel": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Behavior": "CBehaviorLink",
				"Value": "uint32"
			}
		},
		
		"CTargetSortPriority": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Value": {
					"type": "TAttackTargetPriority",
					"minValue": 0,
					"maxValue": 255
				}
			}
		},
		
		"CTargetSortRandom": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {}
		},
		
		"CTargetSortVeterancy": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Behavior": "CBehaviorLink",
				"Value": "uint32"
			}
		},
		
		"CTargetSortVital": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"Vital": "EUnitVital"
			}
		},
		
		"CTargetSortVitalFraction": { //TODO: verify
			"parent": "CTargetSort",
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Vital": "EUnitVital"
			}
		},
		
		"CTerrain": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"EditorCategories": "TEditorCategories",
				"EditorHidden": "bool",
				"Lighting": "CLightLink",
				"LoadingScreen": "CImagePath",
				"TextureProp": "CTextureProps",
				"Camera": "CCameraLink",
				"Ambience": "CSoundtrackLink",
				"DSPArray": {
					"type": "SDSPArray",
					"array": true,
					"indexEnum": "ESoundCategory"
				},
				
				"ReverbGlobal": "CReverbLink",
				"ReverbAmbient": "CReverbLink",
				"SoundDistanceFactor": "real32",
				"SoundDopplerFactor": "real32",
				"SoundRolloffFactor": "real32",
				"TilingFreq": "real32",
				"POMScale": "real32",
				"HideLowestLevel": "bool",
				"MinimapBackgroundColor": "CColor",
				"BlendTextures": {
					"type": "CTerrainTexLink",
					"array": true
				},
				
				"HardTiles": {
					"type": "CTileLink",
					"array": true
				},
				
				"CliffSets": {
					"type": "CCliffLink",
					"array": true
				},
				
				"FixedSkyboxModel": "CModelLink",
				"NonFixedSkyboxModel": "CModelLink",
				"EnvironmentMap": "CImagePath",
				"FogEnabled": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"FogColor": "CColor",
				"FogDensity": "real32",
				"FogFalloff": "real32",
				"FogStartingHeight": "real32",
				"FogNearPlane": "real32",
				"FogFarPlane": "real32",
				"FogDistanceFalloff": "real32",
				"Gravity": "real32",
				"WindAngleHorizontal": "real32",
				"WindAngleVertical": "real32",
				"WindSpeed": "real32",
				"WindTurbulencePower": "real32",
				"WindTurbulenceSpeed": "real32",
				"CreepBaseTexture": "CImagePath",
				"CreepBaseSpecularMap": "CImagePath",
				"CreepEdgeNormalMap": "CImagePath",
				"CreepHeightMap": "CImagePath",
				"CreepNoiseMap": "CImagePath",
				"CreepSettingsArray": {
					"type": "SCreepSettings",
					"array": true,
					"indexEnum": "EGraphicsLevel"
				},
				
				"FoliageSettingsArray": {
					"type": "SFoliageSimulationConfig",
					"array": true,
					"indexEnum": "EGraphicsLevel"
				},
				
				"HeightFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ETerrainHeightFlag"
				}
			}
		},
		
		"CTerrainObject": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelPath",
				"EditorFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEditorFlag"
				},
				
				"EditorModel": "CModelLink",
				"EditorIcon": "CImagePath",
				"EditorCategories": "TEditorCategories",
				"EditorCursorOffset": "CFixed",
				"TexSets": {
					"type": "CTerrainLink",
					"array": true
				},
				
				"Footprint": "CFootprintLink",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"OccludeHeight": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"BoostedCliffLevel": {
					"type": "TCliffLevel",
					"minValue": 0,
					"maxValue": 3
				}
			}
		},
		
		"CCliffDoodad": { //TODO: verify
			"parent": "CTerrainObject",
			"fields": {
				"CliffSet": "CCliffLink",
				"NumCellsDown": "uint32",
				"NumCellsAcross": "uint32",
				"HeightCodes": {
					"type": "CString",
					"array": true
				}
			}
		},
		
		"CTerrainTex": { //TODO: verify
			"parent": null,
			"fields": {
				"Texture": "CImagePath",
				"Normalmap": "CImagePath",
				"Heightmap": "CImagePath",
				"EditorIcon": "CImagePath",
				"AnimRate": "C2fVector",
				"DoodadEntry": {
					"type": "STerrainDoodad",
					"array": true
				},
				
				"PhysicsMaterial": "CPhysicsMaterialLink"
			}
		},
		
		"CTexture": { //TODO: verify
			"parent": null,
			"fields": {
				"File": "CTexturePath",
				"Prefix": "CIdentifier",
				"Slot": "CTextureSlot",
				"PropsAdd": "CTextureProps",
				"PropsRemove": "CTextureProps",
				"PropsSet": "CTextureProps",
				"MovieSoundSettings": "CSoundLink"
			}
		},
		
		"CTile": { //TODO: verify
			"parent": null,
			"fields": {
				"Material": "CImagePath",
				"EditorIcon": "CImagePath",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ETerrainTileFlag"
				},
				
				"TesselationDistance": "real32",
				"TileWidthDistance": "real32",
				"TileHeightRepetitions": "uint32",
				"CapLength": "real32",
				"DefaultSplineWidth": "real32",
				"DefaultWingWidth": "real32"
			}
		},
		
		"CTurret": { //TODO: verify
			"parent": null,
			"fields": {
				"Idle": "ETurretIdle",
				"YawStart": {
					"type": "CFangle",
					"minValue": -180,
					"maxValue": 179
				},
				
				"YawArc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"YawRate": {
					"type": "CFangleRate",
					"minValue": 0,
					"maxValue": 2857.5
				},
				
				"YawIdleRate": {
					"type": "CFangleRate",
					"minValue": -2857.5,
					"maxValue": 2857.5
				},
				
				"Fidget": "SFidget"
			}
		},
		
		"SCardButton": { //TODO: verify
			"parent": null,
			"fields": {
				"Face": "CButtonLink",
				"Type": "ECardButtonType",
				"AbilCmd": "CAbilCommand",
				"Behavior": "CBehaviorLink",
				"Requirements": "CRequirementLink",
				"SubmenuAbilState": "CAbilLink",
				"SubmenuCardId": "CCardId",
				"SubmenuFullSubCmdValidation": "bool",
				"SubmenuIsSticky": "bool",
				"ShowInGlossary": "bool"
			}
		},
		
		"CUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Subtitle": "CStringLink",
				"Description": "CStringLink",
				"InfoTooltipPriority": "uint32",
				"DeathTime": "CGameTime",
				"DeathRevealFilters": "CTargetFilters",
				"DeathRevealRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"DeathRevealDuration": "CGameTime",
				"DeathRevealType": "EDeathReveal",
				"ReviveDelay": "CGameTime",
				"ReviveType": "CUnitLink",
				"Facing": {
					"type": "CFacing",
					"minValue": 0,
					"maxValue": 359.999
				},
				
				"EditorFacingAlignment": {
					"type": "CFangle",
					"minValue": 0,
					"maxValue": 180
				},
				
				"Race": "CRaceLink",
				"Mob": "EUnitMob",
				"FlagArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitFlag"
				},
				
				"ResourceState": "EResourceState",
				"ResourceType": "EResourceType",
				"ResourceDropOff": {
					"type": "bool",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"FogVisibility": "EFogVisibility",
				"EditorFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEditorFlag"
				},
				
				"PlaneArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPlane"
				},
				
				"PushPriority": "CFixed",
				"Collide": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitCollide"
				},
				
				"DefaultAcquireLevel": "EAcquireLevel",
				"Response": "EUnitResponse",
				"Attributes": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"LifeStart": {
					"type": "CFixed",
					"minValue": 1,
					"maxValue": 100000
				},
				
				"LifeMax": {
					"type": "CFixed",
					"minValue": 1,
					"maxValue": 100000
				},
				
				"LifeArmor": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"LifeArmorDisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				},
				
				"LifeRegenDelay": "CGameTime",
				"LifeRegenRate": "CGameRate",
				"LifeRegenRateCreep": "CGameRate",
				"LifeArmorName": "CStringLink",
				"LifeArmorLevel": "uint32",
				"LifeDamageGain": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"LifeDamageLeech": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"EnergyStart": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100000
				},
				
				"EnergyMax": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100000
				},
				
				"EnergyRegenDelay": "CGameTime",
				"EnergyRegenRate": "CGameRate",
				"EnergyRegenRateCreep": "CGameRate",
				"EnergyDamageGain": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"EnergyDamageLeech": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"ShieldsStart": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100000
				},
				
				"ShieldsMax": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100000
				},
				
				"ShieldArmor": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"ShieldArmorDisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				},
				
				"ShieldRegenDelay": "CGameTime",
				"ShieldRegenRate": "CGameRate",
				"ShieldRegenRateCreep": "CGameRate",
				"ShieldArmorName": "CStringLink",
				"ShieldArmorLevel": "uint32",
				"ShieldDamageGain": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"ShieldDamageLeech": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"VitalBonusDensity": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalMultiplierDensity": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital",
					"minValue": 0.01
				},
				
				"Mover": "CMoverLink",
				"Speed": {
					"type": "CGameSpeed",
					"minValue": 0,
					"maxValue": 160
				},
				
				"SpeedDisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				},
				
				"SpeedBonusCreep": {
					"type": "CGameSpeed",
					"minValue": 0,
					"maxValue": 160
				},
				
				"SpeedMultiplierCreep": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"AttackSpeedMultiplierCreep": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"Acceleration": {
					"type": "CGameAcceleration",
					"minValue": 0,
					"maxValue": 1000
				},
				
				"Deceleration": {
					"type": "CGameAcceleration",
					"minValue": 0,
					"maxValue": 1000
				},
				
				"LateralAcceleration": {
					"type": "CGameAcceleration",
					"minValue": 0,
					"maxValue": 1000
				},
				
				"StationaryTurningRate": {
					"type": "CFangleRate",
					"minValue": 0,
					"maxValue": 2880
				},
				
				"TurningRate": {
					"type": "CFangleRate",
					"minValue": 0,
					"maxValue": 2880
				},
				
				"Sight": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 32
				},
				
				"SightBonus": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EGameTimeEvent",
					"minValue": -32,
					"maxValue": 32
				},
				
				"Height": "CFixed",
				"VisionHeight": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"OccludeHeight": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"BoostedCliffLevel": {
					"type": "TCliffLevel",
					"minValue": 0,
					"maxValue": 3
				},
				
				"BoostedHeight": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EHeightMap",
					"minValue": 0
				},
				
				"Food": {
					"type": "CFixed",
					"minValue": -10000,
					"maxValue": 10000
				},
				
				"CostCategory": "ECostCategory",
				"CostResource": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"PawnItemReduction": "CFixed",
				"RepairTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"ReviveTime": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"AttackTargetPriority": {
					"type": "TAttackTargetPriority",
					"minValue": 0,
					"maxValue": 255
				},
				
				"AIOverideTargetPriority": {
					"type": "TAttackTargetPriority",
					"minValue": 0,
					"maxValue": 255
				},
				
				"DamageDealtXP": {
					"type": "uint32",
					"minValue": 0
				},
				
				"DamageTakenXP": {
					"type": "uint32",
					"minValue": 0
				},
				
				"KillXP": {
					"type": "uint32",
					"minValue": 0
				},
				
				"KillResource": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"AbilArray": {
					"type": "SUnitAbilData",
					"array": true
				},
				
				"BehaviorArray": {
					"type": "SUnitBehaviorData",
					"array": true
				},
				
				"TurretArray": {
					"type": "CTurretLink",
					"array": true
				},
				
				"WeaponArray": {
					"type": "SUnitWeaponData",
					"array": true
				},
				
				"EffectArray": {
					"type": "CEffectLink",
					"array": true,
					"indexEnum": "EUnitEffect"
				},
				
				"CardLayouts": {
					"type": "SCardLayout",
					"array": true
				},
				
				"Radius": {
					"type": "TUnitRadius",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"DeadRadius": {
					"type": "TUnitRadius",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"SeparationRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"InnerRadius": {
					"type": "TUnitRadius",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"DeadInnerRadius": {
					"type": "TUnitRadius",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"CargoOverlapFilters": "CTargetFilters",
				"CargoSize": "TCargoSize",
				"Footprint": "CFootprintLink",
				"DeadFootprint": "CFootprintLink",
				"PlacementFootprint": "CFootprintLink",
				"AddedOnArray": {
					"type": "SAddedOnData",
					"array": true
				},
				
				"AddOnOffsetX": "CFixed",
				"AddOnOffsetY": "CFixed",
				"BuiltOn": {
					"type": "CUnitLink",
					"array": true
				},
				
				"BuildOnAs": {
					"type": "CUnitLink",
					"array": true
				},
				
				"ScoreMake": "int32",
				"ScoreMakeCostFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ScoreKill": "int32",
				"ScoreKillCostFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ScoreLost": "int32",
				"ScoreLostCostFactor": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ScoreResult": "CScoreResultLink",
				"SubgroupPriority": {
					"type": "uint32",
					"minValue": 0
				},
				
				"MinimapRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 7.75
				},
				
				"EditorCategories": "TEditorCategories",
				"TacticalAI": "CTacticalLink",
				"TacticalAIRange": "TGalaxyFunction",
				"TacticalAIThink": "TGalaxyFunction",
				"TacticalAIChannel": "TGalaxyFunction",
				"TacticalAIFilters": "CTargetFilters",
				"AIEvalFactor": "CFixed",
				"AIEvalConstant": "CFixed",
				"Item": "CItemLink",
				"Mass": "CFixed",
				"PowerupCost": "SCost",
				"PowerupEffect": "CEffectLink",
				"PowerupFilters": "CTargetFilters",
				"PowerupRange": "CFixed",
				"LeaderAlias": "CUnitLink",
				"HotkeyAlias": "CUnitLink",
				"SelectAlias": "CUnitLink",
				"SubgroupAlias": "CUnitLink",
				"TechAliasArray": {
					"type": "TTechAlias",
					"array": true
				},
				
				"EquipmentArray": {
					"type": "SUnitEquipment",
					"array": true
				},
				
				"SyncModelData": "CSyncModelDataPath",
				"AINotifyEffect": "CEffectLink",
				"GlossaryCategory": "CStringLink",
				"GlossaryPriority": "int32",
				"GlossaryStrongArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"GlossaryWeakArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"GlossaryAlias": "CUnitLink",
				"HotkeyCategory": "CStringLink",
				"KillDisplay": "EKillDisplay",
				"RankDisplay": "ERankDisplay",
				"AIEvaluateAlias": "CUnitLink",
				"TechTreeProducedUnitArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"TechTreeUnlockedUnitArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"Fidget": "SFidget",
				"LootArray": {
					"type": "CLootLink",
					"array": true
				},
				
				"TauntDuration": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EUnitTaunt",
					"minValue": 0
				},
				
				"IdleCommand": "CAbilCommand",
				"ReviveInfoBase": "SUnitReviveInfo",
				"ReviveInfoLevel": "SUnitReviveInfo",
				"OverlapIndex": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 2
				},
				
				"AlliedPushPriority": "int8",
				"AcquireMovementLimit": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 500
				},
				
				"AcquireLeashRadius": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 500
				},
				
				"AcquireLeashResetRadius": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 500
				},
				
				"OrderDisplayMinimum": {
					"type": "uint32",
					"minValue": 1
				}
			}
		},
		
		"CUpgrade": { //TODO: verify
			"parent": null,
			"fields": {
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUpgradeFlag"
				},
				
				"Name": "CStringLink",
				"InfoTooltipPriority": "uint32",
				"WebPriority": "uint32",
				"Icon": "CImagePath",
				"Alert": "CAlertLink",
				"Race": "CRaceLink",
				"ScoreAmount": "uint32",
				"ScoreCount": "EScoreValue",
				"ScoreValue": "EScoreValue",
				"ScoreResult": "CScoreResultLink",
				"EffectArray": {
					"type": "SUpgradeEffect",
					"array": true
				},
				
				"EditorCategories": "TEditorCategories",
				"TechAliasArray": {
					"type": "TTechAlias",
					"array": true
				},
				
				"AffectedUnitArray": {
					"type": "CUnitLink",
					"array": true
				},
				
				"MaxLevel": "uint8",
				"LeaderAlias": "CUpgradeLink",
				"LeaderPriority": "uint32"
			}
		},
		
		"CUser": { //TODO: verify
			"parent": null,
			"fields": {
				"Fields": {
					"type": "SUserField",
					"array": true
				},
				
				"Instances": {
					"type": "SUserInstance",
					"array": true
				}
			}
		},
		
		"CValidator": { //TODO: verify
			"parent": null,
			"fields": {
				"IgnoreWhileChanneling": "uint8",
				"ResultFailed": "CCmdResult"
			}
		},
		
		"CValidatorCombine": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"Type": "EValidateCombine",
				"CombineArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"Negate": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorCondition": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"IfArray": {
					"type": "SValidatorCondition",
					"array": true
				},
				
				"Else": "CValidatorLink"
			}
		},
		
		"CValidatorFunction": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"Line": {
					"type": "SValidatorFunction",
					"array": true
				},
				
				"ResultFallback": "CCmdResult"
			}
		},
		
		"CValidatorGameCompareTimeOfDay": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"Compare": "EValueCompare",
				"Value": "CTimeOfDay"
			}
		},
		
		"CValidatorGameCompareTerrain": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"Compare": "EValueCompare",
				"Value": "CTerrainLink"
			}
		},
		
		"CValidatorLocation": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"WhichLocation": "SEffectWhichLocation"
			}
		},
		
		"CValidatorLocationCompareCliffLevel": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"OtherLocation": "SEffectWhichLocation",
				"Compare": "EValueCompare",
				"Value": "TCliffLevel"
			}
		},
		
		"CValidatorLocationComparePower": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"PowerLink": "TPowerLink",
				"PowerSource": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"Compare": "EValueCompare",
				"Value": "TPowerLevel"
			}
		},
		
		"CValidatorLocationCompareRange": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"Compare": "EValueCompare",
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Pathing": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Value": "SEffectWhichLocation"
			}
		},
		
		"CValidatorLocationArc": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"OtherLocation": "SEffectWhichLocation",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Arc": "CFangleArc",
				"Value": "SEffectWhichLocation"
			}
		},
		
		"CValidatorLocationCreep": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"RadiusBonus": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorLocationCrossChasm": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"OtherLocation": "SEffectWhichLocation",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorLocationCrossCliff": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"OtherLocation": "SEffectWhichLocation",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"CrossRamp": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorLocationEnumArea": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"AreaArray": {
					"type": "SValidatorEnumArea",
					"array": true
				},
				
				"Compare": "EValueCompare",
				"Count": "uint32",
				"SearchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEffectSearchFlag"
				},
				
				"LaunchLocation": "SEffectWhichLocation",
				"SearchFilters": "CTargetFilters",
				"ExcludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"IncludeArray": {
					"type": "SEffectWhichUnit",
					"array": true
				},
				
				"CachedSearch": "CIdentifier",
				"CombinedVital": "EUnitVital",
				"CombinedVitalCompare": "EValueCompare",
				"CombinedVitalUnit": "SEffectWhichUnit",
				"CombinedVitalValue": "uint32"
			}
		},
		
		"CValidatorLocationPathable": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Types": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPathingType"
				}
			}
		},
		
		"CValidatorLocationPlacement": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"FromUnit": "SEffectWhichUnit",
				"OtherUnit": "SEffectWhichUnit",
				"Range": "CFixed",
				"Unit": "CUnitLink"
			}
		},
		
		"CValidatorLocationType": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"None": "CValidatorLink",
				"Point": "CValidatorLink",
				"Unit": "CValidatorLink"
			}
		},
		
		"CValidatorLocationVision": { //TODO: verify
			"parent": "CValidatorLocation",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorPlayer": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"OtherPlayer": "SEffectWhichPlayer",
				"ResultNoPlayer": "CCmdResult"
			}
		},
		
		"CValidatorPlayerAlliance": { //TODO: verify
			"parent": "CValidatorPlayer",
			"fields": {
				"Find": "bool",
				"WithPlayer": "SEffectWhichPlayer",
				"Value": "EAllianceId"
			}
		},
		
		"CValidatorPlayerRequirement": { //TODO: verify
			"parent": "CValidatorPlayer",
			"fields": {
				"Find": "bool",
				"Value": "CRequirementLink"
			}
		},
		
		"CValidatorPlayerCompare": { //TODO: verify
			"parent": "CValidatorPlayer",
			"fields": {
				"Compare": "EValueCompare"
			}
		},
		
		"CValidatorPlayerCompareDifficulty": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": {
					"type": "TDifficultyLevel",
					"maxValue": 32
				}
			}
		},
		
		"CValidatorPlayerCompareFoodAvailable": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorPlayerCompareFoodMade": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorPlayerCompareFoodUsed": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorPlayerCompareRace": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": "CRaceLink"
			}
		},
		
		"CValidatorPlayerCompareResource": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Resource": "EResourceType",
				"Value": "uint32"
			}
		},
		
		"CValidatorPlayerCompareResult": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": "EGameResult"
			}
		},
		
		"CValidatorPlayerCompareType": { //TODO: verify
			"parent": "CValidatorPlayerCompare",
			"fields": {
				"Value": "EPlayerType"
			}
		},
		
		"CValidatorUnit": { //TODO: verify
			"parent": "CValidator",
			"fields": {
				"WhichUnit": "SEffectWhichUnit",
				"OtherUnit": "SEffectWhichUnit",
				"ResultNoUnit": "CCmdResult"
			}
		},
		
		"CValidatorUnitAI": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Flag": "EUnitAIFlag"
			}
		},
		
		"CValidatorUnitCombatAI": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitAbil": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"AbilClass": "EClassIdCAbil",
				"AbilLink": "CAbilLink"
			}
		},
		
		"CValidatorUnitBehaviorState": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Enabled": "bool",
				"BehaviorState": "EBehaviorState"
			}
		},
		
		"CValidatorUnitDetected": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"WhichPlayer": "SEffectWhichPlayer",
				"Detected": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EDetectType"
				}
			}
		},
		
		"CValidatorUnitFilters": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Filters": "CTargetFilters"
			}
		},
		
		"CValidatorUnitFlying": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitInventory": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"ResultNoInventory": "CCmdResult"
			}
		},
		
		"CValidatorUnitInventoryIsFull": { //TODO: verify
			"parent": "CValidatorUnitInventory",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitInventoryContainsItem": { //TODO: verify
			"parent": "CValidatorUnitInventory",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Item": "CUnitLink"
			}
		},
		
		"CValidatorUnitLastDamagePlayer": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Relationship": "EPlayerRelationship"
			}
		},
		
		"CValidatorUnitMissileNullified": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitMover": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Value": "CMoverLink",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitOrder": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Target": "SEffectWhichLocation"
			}
		},
		
		"CValidatorUnitOrderQueue": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Queued": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Target": "SEffectWhichLocation"
			}
		},
		
		"CValidatorUnitOrderTargetPathable": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"MaxDistance": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorUnitOrderTargetType": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Type": "EEffectLocationType"
			}
		},
		
		"CValidatorUnitPathable": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"WhichLocation": "SEffectWhichLocation",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"MaxDistance": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"CValidatorUnitPathing": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitScanning": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitType": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Value": "CUnitLink",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Type": "EUnitType"
			}
		},
		
		"CValidatorUnitWeaponAnimating": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Weapon": "CWeaponLink",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitWeaponFiring": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Weapon": "CWeaponLink",
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitWeaponPlane": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Find": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Plane": "EPlane"
			}
		},
		
		"CValidatorUnitCompare": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Compare": "EValueCompare"
			}
		},
		
		"CValidatorUnitCompareAIAreaEvalRatio": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Radius": "CFixed",
				"Value": "CFixed"
			}
		},
		
		"CValidatorUnitCompareAbilLevel": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"AbilLink": "CAbilLink",
				"Value": "uint32"
			}
		},
		
		"CValidatorUnitCompareAttackPriority": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Attacker": "SEffectWhichUnit",
				"AttackerAlternateType": "CUnitLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAttackPriority"
				},
				
				"Value": "TAttackTargetPriority"
			}
		},
		
		"CValidatorUnitCompareBehaviorCount": { //TODO: verify
			"parent": "CValidatorUnit",
			"fields": {
				"Compare": "EValueCompare",
				"Value": "uint32",
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitCompareCargo": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Type": "ECargoSpace",
				"Value": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 255
				}
			}
		},
		
		"CValidatorUnitCompareChargeUsed": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"ChargeLink": "TChargeLink",
				"Location": "EChargeLocation",
				"Ability": "CAbilLink",
				"Behavior": "CBehaviorLink",
				"Value": "CFixed"
			}
		},
		
		"CValidatorUnitCompareCooldown": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"CooldownLink": "TCooldownLink",
				"Location": "ECooldownLocation",
				"Ability": "CAbilLink",
				"Behavior": "CBehaviorLink",
				"Value": "CFixed"
			}
		},
		
		"CValidatorUnitCompareDamageTakenTime": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "CGameTime"
			}
		},
		
		"CValidatorUnitCompareDeath": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "EDeathType"
			}
		},
		
		"CValidatorUnitCompareDetectRange": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "CFixed",
				"Radar": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitCompareField": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Field": "TCatalogFieldPath",
				"Value": "TCatalogFieldValue"
			}
		},
		
		"CValidatorUnitCompareMarkerCount": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32"
			}
		},
		
		"CValidatorUnitCompareMoverPhase": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32"
			}
		},
		
		"CValidatorUnitCompareOrderCount": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Value": "uint32"
			}
		},
		
		"CValidatorUnitCompareOrderTargetRange": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"AbilLink": "CAbilLink",
				"AbilCmdIndex": "TAbilCmdIndex",
				"Value": "CFixed",
				"Pathing": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"CValidatorUnitComparePowerSourceLevel": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitComparePowerUserLevel": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitCompareRallyPointCount": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"AbilLink": "CAbilLink",
				"Point": "uint32"
			}
		},
		
		"CValidatorUnitCompareResourceContents": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitCompareResourceHarvesters": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"Active": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Queued": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitCompareSpeed": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "CGameSpeed"
			}
		},
		
		"CValidatorUnitCompareVeterancyLevel": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Value": "uint32",
				"Behavior": "CBehaviorLink"
			}
		},
		
		"CValidatorUnitCompareVital": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Type": "EVitalType",
				"Value": "CFixed",
				"Vital": "EUnitVital"
			}
		},
		
		"CValidatorUnitCompareVitality": { //TODO: verify
			"parent": "CValidatorUnitCompare",
			"fields": {
				"Type": "EVitalType",
				"Value": "CFixed"
			}
		},
		
		"CWater": { //TODO: verify
			"parent": null,
			"fields": {
				"TextureKey": "CImagePath",
				"TilingFreq": "C4Vector",
				"ScrollVectors": "C4Vector",
				"FramesPerSec": "real32",
				"State": {
					"type": "SWaterStateDesc",
					"array": true
				},
				
				"CausticsFPS": "real32",
				"CausticsTilingFreq": "C2Vector",
				"ReceiveShadows": "bool",
				"IsLava": "bool",
				"Density": "real32",
				"Drag": "real32",
				"AngularDamping": "real32",
				"MaxLinearVelocity": "real32",
				"BeachShoreline": "CModelLink",
				"CliffShoreline": "CModelLink",
				"LavaModel": "CModelLink",
				"Doodads": {
					"type": "SWaterDoodad",
					"array": true
				},
				
				"Sound": "CSoundLink"
			}
		},
		
		"CWeapon": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"EditorCategories": "TEditorCategories",
				"InfoTooltipPriority": "uint32",
				"Tip": "CStringLink",
				"Options": {
					"type": "bool",
					"array": true,
					"indexEnum": "EWeaponOption"
				},
				
				"Icon": "CImagePath",
				"DisplayEffect": "CEffectLink",
				"DisplayAttackCount": "uint32",
				"Level": "uint32",
				"TargetFilters": "CTargetFilters",
				"ChaseFilters": "CTargetFilters",
				"AcquireFilters": "CTargetFilters",
				"AcquireCallForHelpFilters": "CTargetFilters",
				"AcquireProvokeFilters": "CTargetFilters",
				"AcquireScanFilters": "CTargetFilters",
				"AcquireTargetSorts": "STargetSorts",
				"AcquirePrioritization": "EWeaponPrioritization",
				"AcquireCliffLevelRange": "CfRange",
				"MinScanRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Range": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RangeSlop": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 100
				},
				
				"RangeDisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				},
				
				"MinimumRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Arc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"ArcSlop": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"Marker": "SMarker",
				"Cost": "SCost",
				"Period": "CGameTime",
				"PeriodDisplayFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EEquipmentDisplayFlag"
				},
				
				"DamagePoint": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Backswing": {
					"type": "CGameTime",
					"minValue": 0
				}
			}
		},
		
		"CWeaponLegacy": { //TODO: verify
			"parent": "CWeapon",
			"fields": {
				"LegacyOptions": {
					"type": "bool",
					"array": true,
					"indexEnum": "EWeaponLegacyOption"
				},
				
				"AllowedMovement": "EWeaponLegacyMovement",
				"PathingAmmoUnit": "CUnitLink",
				"ReloadDuration": "CGameTime",
				"RandomDelayMin": "CGameTime",
				"RandomDelayMax": "CGameTime",
				"Effect": "CEffectLink"
			}
		},
		
		"CWeaponStrafe": { //TODO: verify
			"parent": "CWeapon",
			"fields": {
				"LoiterInnerRadius": {
					"type": "CFixed",
					"minValue": 1,
					"maxValue": 500
				},
				
				"LoiterRadius": {
					"type": "CFixed",
					"minValue": 1,
					"maxValue": 500
				},
				
				"Effect": "CEffectLink"
			}
		},
		
		
		"SAIDescription": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CFourCC",
				"Name": "CStringLink",
				"File": "CIdentifier",
				"Suffix": "CString32"
			}
		},
		
		"SBankPath": { //TODO: verify
			"parent": null,
			"fields": {
				"File": "CString",
				"Section": "CString",
				"Key": "CString"
			}
		},
		
		"SCharge": { //TODO: verify
			"parent": null,
			"fields": {
				"CountMax": "CFixed",
				"CountStart": "CFixed",
				"CountUse": "CFixed",
				"HideCount": "bool",
				"Link": "TChargeLink",
				"Location": "EChargeLocation",
				"TimeStart": "CGameTime",
				"TimeUse": "CGameTime"
			}
		},
		
		"SCooldown": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "TCooldownLink",
				"Location": "ECooldownLocation",
				"TimeStart": "CGameTime",
				"TimeUse": "CGameTime"
			}
		},
		
		"SCost": { //TODO: verify
			"parent": "STechCost",
			"fields": {
				"Display": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECostDisplay"
				},
				
				"Vital": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Charge": "SCharge",
				"Cooldown": "SCooldown"
			}
		},
		
		"SCostFactor": { //TODO: verify
			"parent": null,
			"fields": {
				"Vital": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Resource": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"Charge": "CFixed",
				"Cooldown": "CFixed"
			}
		},
		
		"SMarker": { //TODO: verify
			"parent": null,
			"fields": {
				"Count": "TMarkerCount",
				"MatchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EMarkerMatch"
				},
				
				"MismatchFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EMarkerMatch"
				},
				
				"Link": "TMarkerLink"
			}
		},
		
		"SDifficultyLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"AttributeId": "CFourCC",
				"Name": "CStringLink",
				"NameCampaign": "CStringLink",
				"NameMelee": "CStringLink",
				"MenuTooltip": "CStringLink",
				"Enabled": "bool",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EDifficultyFlag"
				},
				
				"ActionsPerMinute": {
					"type": "int32",
					"minValue": 100,
					"maxValue": 2700
				},
				
				"DefaultRebuildUnit": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 14
				},
				
				"DefaultRebuildStructure": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 14
				}
			}
		},
		
		"SAIBuild": { //TODO: verify
			"parent": null,
			"fields": {
				"AttributeId": "CFourCC",
				"Name": "CStringLink",
				"MenuTooltip": "CStringLink",
				"Enabled": "bool",
				"Race": "CRaceLink",
				"MinDiff": {
					"type": "NNet::Game::TDifficulty",
					"minValue": 0,
					"maxValue": 31
				},
				
				"MaxDiff": {
					"type": "NNet::Game::TDifficulty",
					"minValue": 0,
					"maxValue": 31
				},
				
				"BuildScriptNum": "int32"
			}
		},
		
		"SHandicap": { //TODO: verify
			"parent": null,
			"fields": {
				"MenuTooltip": "CStringLink",
				"Percent": {
					"type": "NNet::Game::THandicap",
					"minValue": 20,
					"maxValue": 100
				}
			}
		},
		
		"SMapSize": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"MaxCells": "uint32"
			}
		},
		
		"SEffectWhichLocation": { //TODO: verify
			"parent": null,
			"fields": {
				"Effect": "CEffectLink",
				"History": "EEffectHistory",
				"Value": "EEffectLocation"
			}
		},
		
		"SEffectWhichPlayer": { //TODO: verify
			"parent": null,
			"fields": {
				"Effect": "CEffectLink",
				"History": "EEffectHistory",
				"Value": "EEffectPlayer"
			}
		},
		
		"SEffectWhichTimeScale": { //TODO: verify
			"parent": null,
			"fields": {
				"Effect": "CEffectLink",
				"History": "EEffectHistory",
				"Value": "EEffectTimeScale"
			}
		},
		
		"SEffectWhichUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Effect": "CEffectLink",
				"History": "EEffectHistory",
				"Value": "EEffectUnit"
			}
		},
		
		"STeamColor": { //TODO: verify
			"parent": null,
			"fields": {
				"HDRMultiplier": "real32",
				"Name": "CStringLink",
				"Value": {
					"type": "C4Vector",
					"array": true,
					"indexEnum": "ETeamColor"
				},
				
				"UserChoice": "bool",
				"MinPlayerCount": "int32",
				"AttributeId": "CFourCC"
			}
		},
		
		"STargetFilterResult": { //TODO: verify
			"parent": null,
			"fields": {
				"Filter": "CTargetFilters",
				"Result": "TCmdResult"
			}
		},
		
		"SFidget": { //TODO: verify
			"parent": null,
			"fields": {
				"ChanceArray": {
					"type": "uint8",
					"array": true,
					"indexEnum": "EFidget",
					"minValue": 0,
					"maxValue": 100
				},
				
				"DelayMax": "CGameTime",
				"DelayMin": "CGameTime",
				"DistanceMax": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"DistanceMin": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"TurnAngle": "CFangle",
				"TurningRate": {
					"type": "CFangleRate",
					"minValue": 0,
					"maxValue": 2880
				}
			}
		},
		
		"SBeaconInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Alert": "CAlertLink",
				"Unit": "CUnitLink",
				"Tooltip": "CStringLink",
				"Clear": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBeacon"
				}
			}
		},
		
		"SUnitKillRank": { //TODO: verify
			"parent": null,
			"fields": {
				"MinKills": "uint32",
				"Text": "CStringLink"
			}
		},
		
		"SAspectMargin": { //TODO: verify
			"parent": null,
			"fields": {
				"AspectWidth": "uint32",
				"AspectHeight": "uint32",
				"Margin": "CiQuad"
			}
		},
		
		"STriggerLib": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TTriggerLibId",
				"IncludePath": "CString"
			}
		},
		
		"SResourceConvert": { //TODO: verify
			"parent": null,
			"fields": {
				"RatioArray": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				}
			}
		},
		
		"SMeleePointThreshold": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "uint32",
				"Factor": {
					"type": "CFixed",
					"minValue": 0
				}
			}
		},
		
		"SVitalColor": { //TODO: verify
			"parent": null,
			"fields": {
				"ColorArray": {
					"type": "CColor",
					"array": true
				}
			}
		},
		
		"SAbilCmdButton": { //TODO: verify
			"parent": null,
			"fields": {
				"DefaultButtonFace": "CButtonLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilCmdFlags"
				},
				
				"State": "EAbilCmdState",
				"Requirements": "CRequirementLink"
			}
		},
		
		"SAbilOrderDisplay": { //TODO: verify
			"parent": null,
			"fields": {
				"Color": "CColor",
				"Model": "CModelPath",
				"Scale": "CFixed",
				"LineTexture": "CImagePath"
			}
		},
		
		"SAbilArmMagazineInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Count": {
					"type": "uint32",
					"maxValue": 10000
				},
				
				"CountStart": {
					"type": "uint32",
					"maxValue": 10000
				},
				
				"Distance": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilArmMagazineInfoFlag"
				},
				
				"Manage": "EAbilArmMagazineManage",
				"Unit": "CUnitLink"
			}
		},
		
		"SAbilBuildInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Button": "SAbilCmdButton",
				"Unit": "CUnitLink",
				"Delay": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Time": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Alert": "CAlertLink",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"AddOnParentCmdPriority": "int32"
			}
		},
		
		"SAbilInventoryInfo": { //TODO: verify
			"parent": "SItemContainer",
			"fields": {
				"Alignment": "EAbilInventoryAlignment",
				"Container": "CItemContainerLink",
				"Item": "CUnitLink"
			}
		},
		
		"SAbilLearnInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Abil": "CAbilLink"
			}
		},
		
		"SAbilMergeInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Unit": "CUnitLink",
				"Time": {
					"type": "CGameTime",
					"minValue": 0
				}
			}
		},
		
		"SAbilMorphSection": { //TODO: verify
			"parent": null,
			"fields": {
				"DurationArray": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EAbilMorphPhase",
					"minValue": 0
				},
				
				"EffectArray": {
					"type": "CEffectLink",
					"array": true,
					"indexEnum": "EAbilMorphEffect"
				}
			}
		},
		
		"SAbilMorphInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Score": "bool",
				"Unit": "CUnitLink",
				"CollideRange": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"SectionArray": {
					"type": "SAbilMorphSection",
					"array": true,
					"indexEnum": "EAbilMorphSection"
				},
				
				"RallyResetPhase": "EAbilMorphPhase",
				"RallyResetSection": "EAbilMorphSection",
				"RandomDelayMin": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"RandomDelayMax": {
					"type": "CGameTime",
					"minValue": 0
				}
			}
		},
		
		"SAbilPawnInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Button": "SAbilCmdButton",
				"ClassRequired": "CItemClassLink",
				"ClassesExcluded": {
					"type": "CItemClassLink",
					"array": true
				},
				
				"RefundFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"TargetFilters": "CTargetFilters",
				"ValidatorArray": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"SAbilRallyInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"SetOnGround": "bool",
				"SetFilters": "CTargetFilters",
				"SetValidators": {
					"type": "CValidatorLink",
					"array": true
				},
				
				"UseFilters": "CTargetFilters",
				"UseValidators": {
					"type": "CValidatorLink",
					"array": true
				}
			}
		},
		
		"SAbilResearchInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Upgrade": "CUpgradeLink"
			}
		},
		
		"SAbilReviveInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Time": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Alert": "CAlertLink"
			}
		},
		
		"SAbilSpecializeInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Effect": "CEffectLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilSpecializeInfoFlag"
				}
			}
		},
		
		"SAbilTrainInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Unit": {
					"type": "CUnitLink",
					"array": true
				},
				
				"Effect": "CEffectLink",
				"Location": "EAbilTrainLocation",
				"Rotation": "EAbilTrainRotation",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAbilTrainInfoFlag"
				}
			}
		},
		
		"SAbilWarpTrainInfo": { //TODO: verify
			"parent": "SAbilQueueableInfo",
			"fields": {
				"Unit": "CUnitLink"
			}
		},
		
		"SAchievementTag": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "CFourCC",
				"Check": "EAchievementTagCheck"
			}
		},
		
		"SActorRequest": { //TODO: verify
			"parent": null,
			"fields": {
				"Subject": "CRefKey",
				"Scope": "EActorRequestScope",
				"Actor": "EActorRequestActor",
				"Effect": "CEffectLink",
				"FailOnNoHost": "bool"
			}
		},
		
		"SActorEvent": { //TODO: verify
			"parent": null,
			"fields": {
				"Terms": "CActorTerms",
				"Target": "CRefKey",
				"Send": "CActorMsgPayloadPtr"
			}
		},
		
		"SActorSiteOpsData": { //TODO: verify
			"parent": null,
			"fields": {
				"Ops": "CActorSiteOps",
				"HoldPosition": "bool",
				"HoldRotation": "bool"
			}
		},
		
		"SActorHostedAttach": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"AttachQuery": "SAttachQuery",
				"Host": "SActorRequest",
				"HostSiteOps": "SActorSiteOpsData"
			}
		},
		
		"SActorBaseline": { //TODO: verify
			"parent": null,
			"fields": {
				"AnimProps": "CAnimProps",
				"BlendIn": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"BlendOut": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				}
			}
		},
		
		"SActorAVPair": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"Scale": {
					"type": "CScaleVector",
					"minValue": 0.0005
				},
				
				"AnimProps": "CAnimProps",
				"Sound": "CSoundLink"
			}
		},
		
		"SActorAVCluster": { //TODO: verify
			"parent": "SActorAVPair",
			"fields": {
				"ModelReaction": "CModelLink",
				"AnimPropsReaction": "CAnimProps",
				"ScaleReaction": {
					"type": "CScaleVector",
					"minValue": 0.0005
				}
			}
		},
		
		"SActorActionTerrainSquib": { //TODO: verify
			"parent": "SActorAVPair",
			"fields": {
				"TerrainPhysicsMaterial": "CPhysicsMaterialLinks",
				"DistanceMaxFromTerrainToCreate": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SEventDataFootprint": { //TODO: verify
			"parent": "SModelEventData",
			"fields": {
				"Model": "CModelLink"
			}
		},
		
		"SEventDataSound": { //TODO: verify
			"parent": "SModelEventData",
			"fields": {
				"Sound": "CSoundLink"
			}
		},
		
		"SActorDeathBodySquib": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"ActorModel": "CActorCreateKey",
				"Model": "CModelLink",
				"ModelSiteOps": "SActorSiteOpsData",
				"ModelAttachQuery": "SAttachQuery",
				"ActorSound": "CActorCreateKey",
				"Sound": "CSoundLink",
				"SoundSiteOps": "SActorSiteOpsData",
				"SoundAttachQuery": "SAttachQuery"
			}
		},
		
		"SActorDeathData": { //TODO: verify
			"parent": null,
			"fields": {
				"ActorModel": "CActorCreateKey",
				"ActorModelLow": "CActorCreateKey",
				"AnimProps": "CAnimProps",
				"ModelLink": "CModelLink",
				"SoundLink": "CSoundLink",
				"VoiceLink": "CSoundLink",
				"BodySquibs": {
					"type": "SActorDeathBodySquib",
					"array": true
				}
			}
		},
		
		"SActorDeathDataCustom": { //TODO: verify
			"parent": "SActorDeathData",
			"fields": {
				"Name": "CActorLabelKey",
				"PhysicsMatchKeysOrdered": "CActorTableKeys1x3",
				"InheritsFrom": "CActorLabelKey",
				"IsAbstract": "bool"
			}
		},
		
		"SActorDeathDataCustomGroup": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"Members": "CActorDeathMembers",
				"Supersedes": "CActorTableKeys1x3",
				"SyncPassChance": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 100
				}
			}
		},
		
		"SActorPhysicsData": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"MatchKeys": "CActorTableKeys1x3",
				"AttackModelVariation": "int32",
				"AttackAnimProps": "CAnimProps",
				"Physics": "CActorCreateKey"
			}
		},
		
		"SActorPhysicsImpactData": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"Group": "CActorLabelKey",
				"ActorModel": "CActorCreateKey",
				"ModelLink": "CModelLink",
				"ActorSound": "CActorCreateKey",
				"SoundLink": "CSoundLink",
				"AutoVolumeRange": "EActorPhysicsImpactRangeType",
				"AutoVolumeRangeMin": {
					"type": "real32",
					"minValue": 0
				},
				
				"AutoVolumeRangeMax": {
					"type": "real32",
					"minValue": 0
				},
				
				"SiteOps": "SActorSiteOpsData",
				"OccuranceThrottlingDistance": "CVariatorActorReal32",
				"OccuranceThrottlingDistanceTimeout": {
					"type": "real32",
					"minValue": 0
				},
				
				"OccuranceThrottlingPeriod": "CVariatorActorReal32"
			}
		},
		
		"SActorStateInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"Terms": "CActorTerms"
			}
		},
		
		"SActorProgressStage": { //TODO: verify
			"parent": null,
			"fields": {
				"AnimProps": "CAnimProps",
				"BlendTime": {
					"type": "real32",
					"minValue": -1,
					"maxValue": 60
				},
				
				"Sound": "CSoundLink"
			}
		},
		
		"SActorCloakState": { //TODO: verify
			"parent": null,
			"fields": {
				"Enter": "CAnimProps",
				"Loop": "CAnimProps"
			}
		},
		
		"SActorCloakTransition": { //TODO: verify
			"parent": null,
			"fields": {
				"StateArray": {
					"type": "SActorCloakState",
					"array": true,
					"indexEnum": "EActorCloakEffect"
				}
			}
		},
		
		"SActorSendBasics": { //TODO: verify
			"parent": null,
			"fields": {
				"Target": "CRefKey",
				"Send": "CActorMsgPayloadPtr"
			}
		},
		
		"SActorQuerySubject": { //TODO: verify
			"parent": null,
			"fields": {
				"Filters": "CActorClassFilters",
				"Terms": "CActorTerms"
			}
		},
		
		"SActorQueryResponse": { //TODO: verify
			"parent": "SActorSendBasics",
			"fields": {
				"Scope": "EActorResponseScope"
			}
		},
		
		"SActorQuerySubjectResponse": { //TODO: verify
			"parent": null,
			"fields": {
				"Filters": "CActorClassFilters",
				"IntersectType": "EActorIntersectType",
				"Terms": "CActorTerms",
				"OnResponse": {
					"type": "SActorSendBasics",
					"array": true
				}
			}
		},
		
		"SActorRangeAbil": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CAbilLink",
				"Index": "TAbilCmdIndex"
			}
		},
		
		"SActorCreepHeightClass": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"StartOffset": "real32",
				"SolidHeight": {
					"type": "real32",
					"minValue": 0
				},
				
				"FadeHeight": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SActorCreepRate": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CActorLabelKey",
				"Rate": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SStatusColor": { //TODO: verify
			"parent": null,
			"fields": {
				"BackgroundColor": "CColor",
				"EmptyColor": "CColor",
				"ColorArray": {
					"type": "CColor",
					"array": true
				}
			}
		},
		
		"SDamagePastRemainingHealth": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"TestType": "EActorOverkillTestType"
			}
		},
		
		"SDamageOverInterval": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"Interval": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"TestType": "EActorOverkillTestType"
			}
		},
		
		"SUnitAbilSound": { //TODO: verify
			"parent": null,
			"fields": {
				"AbilCmd": "CAbilCommand",
				"Sound": "CSoundLink",
				"GroupSound": "CSoundLink"
			}
		},
		
		"SIconVariation": { //TODO: verify
			"parent": null,
			"fields": {
				"Number": "uint32",
				"Image": "CImagePath"
			}
		},
		
		"SLayerIcon": { //TODO: verify
			"parent": null,
			"fields": {
				"Image": {
					"type": "CImagePath",
					"array": true
				}
			}
		},
		
		"SLayerIconVariation": { //TODO: verify
			"parent": "SLayerIcon",
			"fields": {
				"Number": "int32"
			}
		},
		
		"SLayerIconShield": { //TODO: verify
			"parent": null,
			"fields": {
				"Image": {
					"type": "CImagePath",
					"array": true
				}
			}
		},
		
		"SLayerIconShieldVariation": { //TODO: verify
			"parent": "SLayerIconShield",
			"fields": {
				"Number": "uint32"
			}
		},
		
		"SErrorOverride": { //TODO: verify
			"parent": null,
			"fields": {
				"Error": "ECmdResult",
				"Text": "CStringLink",
				"Sound": "CSoundLink",
				"GroupSound": "CSoundLink"
			}
		},
		
		"SSerpentAggregate": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "ESerpentType",
				"BaseElementLengthMax": {
					"type": "real32",
					"minValue": 0
				},
				
				"SegmentRotationRate": {
					"type": "CActorAngle",
					"minValue": 1
				},
				
				"SwimmingUndulationElementLength": {
					"type": "real32",
					"minValue": 0
				},
				
				"SwimmingUndulationStartOffset": {
					"type": "real32",
					"minValue": 0
				},
				
				"SwimmingUndulationAmplitudePerUnit": {
					"type": "real32",
					"minValue": 0
				},
				
				"SwimmingUndulationWavelength": {
					"type": "real32",
					"minValue": 0
				},
				
				"SwimmingUndulationIdlePhaseVelocity": {
					"type": "real32",
					"minValue": 0
				},
				
				"TurnSmoothingActivationAngleMin": {
					"type": "CActorAngle",
					"minValue": 1,
					"maxValue": 179
				},
				
				"TurnSmoothingActivationAngleMax": {
					"type": "CActorAngle",
					"minValue": 1,
					"maxValue": 179
				},
				
				"TurnSmoothingRadiusMax": {
					"type": "real32",
					"minValue": 0
				},
				
				"UncoilingWhileIdleRotationRateMin": {
					"type": "CActorAngle",
					"minValue": 0
				},
				
				"UncoilingWhileIdleRotationRateMax": {
					"type": "CActorAngle",
					"minValue": 0
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ESerpentFlag"
				}
			}
		},
		
		"SSerpentSegment": { //TODO: verify
			"parent": null,
			"fields": {
				"Radius": {
					"type": "real32",
					"minValue": 0.01
				}
			}
		},
		
		"STerrainSquibVisual": { //TODO: verify
			"parent": null,
			"fields": {
				"TerrainPhysicsMaterial": "CPhysicsMaterialLink",
				"ActorModel": "CActorCreateKey",
				"ActorModelLow": "CActorCreateKey",
				"ModelLink": "CModelLink",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EActorTerrainSquibVisualFlag"
				}
			}
		},
		
		"STerrainSquib": { //TODO: verify
			"parent": null,
			"fields": {
				"GroupName": "CActorLabelKey",
				"AttachQuery": "SAttachQuery",
				"MovementDistance": "CVariatorActorReal32",
				"IdlePeriod": "CVariatorActorReal32",
				"RangeUp": "real32",
				"RangeUpFade": {
					"type": "real32",
					"minValue": 0
				},
				
				"RangeDown": "real32",
				"RangeDownFade": {
					"type": "real32",
					"minValue": 0
				},
				
				"Visuals": {
					"type": "STerrainSquibVisual",
					"array": true
				}
			}
		},
		
		"SStatusHarvesterData": { //TODO: verify
			"parent": null,
			"fields": {
				"Text": "CStringLink",
				"SearchFilters": "CTargetFilters",
				"SearchRadius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				}
			}
		},
		
		"STextTagParameters": { //TODO: verify
			"parent": null,
			"fields": {
				"Text": "CStringLink",
				"TextShadow": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Offset": "C2iVector",
				"Attachment": "EAttachmentID",
				"FontSize": "uint32",
				"TextColor": "CColor",
				"EdgeColor": "CColor",
				"BackgroundColor": "CColor",
				"BackgroundImage": "CImagePath",
				"BackgroundImageTiled": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SAttachQuery": { //TODO: verify
			"parent": null,
			"fields": {
				"Methods": "CAttachMethods",
				"Fallback": "EAttachKeyword"
			}
		},
		
		"SAttachKey": { //TODO: verify
			"parent": null,
			"fields": {
				"Keyword": "EAttachKeyword",
				"Index": "TAttachPropIndex"
			}
		},
		
		"SAttributeChange": { //TODO: verify
			"parent": null,
			"fields": {
				"Attribute": "CBehaviorLink",
				"Points": "int32"
			}
		},
		
		"SDamageKind": { //TODO: verify
			"parent": null,
			"fields": {
				"KindArray": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				}
			}
		},
		
		"SDamageResponse": { //TODO: verify
			"parent": "SBehaviorResponse",
			"fields": {
				"ClampMaximum": "CFixed",
				"ClampMinimum": "CFixed",
				"Exhausted": "CEffectLink",
				"Fatal": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Handled": "CEffectLink",
				"Ignore": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Kind": {
					"type": "bool",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"Location": "EDamageLocation",
				"Maximum": "CFixed",
				"Minimum": "CFixed",
				"ModifyAmount": "CFixed",
				"ModifyFraction": "CFixed",
				"ModifyLimit": "CFixed",
				"ModifyMinimumDamage": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"TargetFilters": "CTargetFilters",
				"RequireEffectArray": {
					"type": "CEffectLink",
					"array": true
				},
				
				"ExcludeEffectArray": {
					"type": "CEffectLink",
					"array": true
				}
			}
		},
		
		"SDeathResponse": { //TODO: verify
			"parent": "SBehaviorResponse",
			"fields": {
				"Effect": "CEffectLink",
				"Relationship": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPlayerRelationship"
				},
				
				"Type": {
					"type": "bool",
					"array": true,
					"indexEnum": "EDeathType"
				}
			}
		},
		
		"SModification": { //TODO: verify
			"parent": null,
			"fields": {
				"ModifyFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorModify"
				},
				
				"StateFlags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorState"
				},
				
				"Height": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"HeightTime": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EBehaviorHeight"
				},
				
				"SightBonus": {
					"type": "CFixed",
					"minValue": -32,
					"maxValue": 32
				},
				
				"SightMaximum": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 32
				},
				
				"SightMinimum": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 32
				},
				
				"QueueCount": "int32",
				"QueueSize": "int32",
				"TimeScale": {
					"type": "CFixed",
					"minValue": 0.01,
					"maxValue": 10
				},
				
				"MoveSpeedMaximum": {
					"type": "CGameSpeed",
					"minValue": 0,
					"maxValue": 160
				},
				
				"MoveSpeedMinimum": {
					"type": "CGameSpeed",
					"minValue": 0,
					"maxValue": 160
				},
				
				"MoveSpeedBonus": "CGameSpeed",
				"MoveSpeedMultiplier": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"UnifiedMoveSpeedFactor": "CFixed",
				"AccelerationBonus": "CGameAcceleration",
				"AccelerationMultiplier": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"DecelerationBonus": "CGameAcceleration",
				"DecelerationMultiplier": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"SnareMultiplier": "CFixed",
				"AttackSpeedMultiplier": {
					"type": "CFixed",
					"minValue": 0.01
				},
				
				"UnifiedAttackSpeedFactor": "CFixed",
				"WeaponRange": {
					"type": "CFixed",
					"minValue": -500,
					"maxValue": 500
				},
				
				"WeaponMinRange": {
					"type": "CFixed",
					"minValue": -500,
					"maxValue": 500
				},
				
				"DamageDealtScaled": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"DamageDealtFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"DamageDealtUnscaled": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind"
				},
				
				"DamageDealtMaximum": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind",
					"minValue": 0
				},
				
				"DamageDealtMinimum": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EDamageKind",
					"minValue": 0
				},
				
				"DamageDealtAttributeScaled": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"DamageDealtAttributeMultiplier": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"DamageDealtAttributeUnscaled": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitAttribute"
				},
				
				"LifeArmorBonus": "CFixed",
				"LifeArmorMultiplier": "CFixed",
				"ShieldArmorBonus": "CFixed",
				"ShieldArmorMultiplier": "CFixed",
				"ResourceHarvestAmountBonus": {
					"type": "uint32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceHarvestAmountMultiplier": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceHarvestTimeBonus": {
					"type": "CGameTime",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"ResourceHarvestTimeMultiplier": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"VitalMaxArray": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalMaxFractionArray": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalRegenArray": {
					"type": "CGameRate",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalDamageGainArray": {
					"type": "SDamageKind",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"VitalDamageLeechArray": {
					"type": "SDamageKind",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"AbilClassEnableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCAbil"
				},
				
				"AbilClassDisableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCAbil"
				},
				
				"AbilLinkEnableArray": {
					"type": "CAbilLink",
					"array": true
				},
				
				"AbilLinkDisableArray": {
					"type": "CAbilLink",
					"array": true
				},
				
				"BehaviorCategoriesEnable": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorCategory"
				},
				
				"BehaviorCategoriesDisable": {
					"type": "bool",
					"array": true,
					"indexEnum": "EBehaviorCategory"
				},
				
				"BehaviorClassEnableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCBehavior"
				},
				
				"BehaviorClassDisableArray": {
					"type": "bool",
					"array": true,
					"indexEnum": "EClassIdCBehavior"
				},
				
				"BehaviorLinkEnableArray": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"BehaviorLinkDisableArray": {
					"type": "CBehaviorLink",
					"array": true
				},
				
				"WeaponArray": {
					"type": "SUnitWeaponData",
					"array": true
				},
				
				"WeaponScanBonus": "CFixed",
				"WeaponEnableArray": {
					"type": "CWeaponLink",
					"array": true
				},
				
				"WeaponDisableArray": {
					"type": "CWeaponLink",
					"array": true
				},
				
				"TurretEnableArray": {
					"type": "CTurretLink",
					"array": true
				},
				
				"TurretDisableArray": {
					"type": "CTurretLink",
					"array": true
				},
				
				"SoundArray": {
					"type": "CSoundLink",
					"array": true,
					"indexEnum": "EUnitSound"
				},
				
				"Detect": "CFixed",
				"DetectArc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"DetectBonus": "CFixed",
				"DetectFilters": "CTargetFilters",
				"Radar": "CFixed",
				"RadarArc": {
					"type": "CFangleArc",
					"minValue": 0,
					"maxValue": 360
				},
				
				"RadarFilters": "CTargetFilters",
				"Food": {
					"type": "CFixed",
					"minValue": -10000,
					"maxValue": 10000
				},
				
				"AttributeChangeArray": {
					"type": "SAttributeChange",
					"array": true
				},
				
				"RateMultiplierArray": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EBehaviorRate",
					"minValue": 0.001
				},
				
				"DeathResponse": "SDeathResponse",
				"PlaneDelta": {
					"type": "int8",
					"array": true,
					"indexEnum": "EPlane",
					"minValue": -1,
					"maxValue": 1
				},
				
				"ScoreKillBonus": "int32",
				"ScoreLostBonus": "int32",
				"SubgroupPriority": "int16"
			}
		},
		
		"SPowerStage": { //TODO: verify
			"parent": null,
			"fields": {
				"MaxStackCount": {
					"type": "uint32",
					"minValue": 1
				},
				
				"MinPowerLevel": "TPowerLevel",
				"Modification": "SModification",
				"LevelGainEffect": "CEffectLink",
				"LevelLossEffect": "CEffectLink"
			}
		},
		
		"SSpawnInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Unit": "CUnitLink",
				"Count": "uint32",
				"MaxCount": "uint32",
				"StartCount": "uint32",
				"Requirements": "CRequirementLink",
				"Delay": "CGameTime",
				"Effect": "CEffectLink"
			}
		},
		
		"SVeterancyLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"InfoIcon": "CImagePath",
				"MinVeterancyXP": "uint32",
				"Modification": "SModification",
				"LevelGainEffect": "CEffectLink",
				"LevelLossEffect": "CEffectLink"
			}
		},
		
		"SCameraParam": { //TODO: verify
			"parent": null,
			"fields": {
				"Modify": "bool",
				"Value": "real32"
			}
		},
		
		"SCameraZoom": { //TODO: verify
			"parent": null,
			"fields": {
				"Param": {
					"type": "SCameraParam",
					"array": true,
					"indexEnum": "ECameraParam"
				}
			}
		},
		
		"SCameraSmooth": { //TODO: verify
			"parent": null,
			"fields": {
				"SmoothTimeMin": "real32",
				"SmoothTimeMax": "real32",
				"DisplacementMin": "real32",
				"VelocityMax": "real32"
			}
		},
		
		"SCharacterVariation": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Model": "CModelLink",
				"Actor": "CActorLink",
				"DefaultCategories": {
					"type": "CString",
					"array": true
				}
			}
		},
		
		"SConversationProductionLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"SubtitlePrefix": "CString",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EConversationProductionLevelFlag"
				}
			}
		},
		
		"SConversationFacialAnim": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Text": "CStringLink",
				"SpeechTag": "CString",
				"SpeechAtts": "CString",
				"AnimTag": "CString",
				"AnimAtts": "CString"
			}
		},
		
		"SConversationLine": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Text": "CStringLink",
				"Comment": "CString",
				"FacialAnim": "TConversationItemId",
				"FacialBlend": {
					"type": "uint32",
					"minValue": 0,
					"maxValue": 100
				},
				
				"FacialAsVoiceDir": "bool",
				"Sound": "CSoundLink",
				"SoundIndex": "int32",
				"FixedDuration": "uint32",
				"NoWait": "bool",
				"OverlapPrevious": "uint32",
				"AnimProps": "CAnimProps",
				"AnimBlendIn": "int32",
				"AnimBlendOut": "int32",
				"LookAtType": "CString",
				"LookAtAttach": "CAttachMethods",
				"Objects": {
					"type": "TConversationStateIndexId",
					"array": true,
					"indexEnum": "EConversationStateObject"
				},
				
				"Variations": {
					"type": "TConversationStateVariation",
					"array": true,
					"indexEnum": "EConversationStateObject"
				},
				
				"CustomSpeaker": "CStringLink",
				"SpeakerCharacter": "CCharacterLink",
				"SpeakerVariation": "CString",
				"ListenerCharacter": "CCharacterLink",
				"AltLine": "bool",
				"AltLineMatchText": "bool",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				},
				
				"Actions": {
					"type": "SConversationAction",
					"array": true
				},
				
				"CutsceneFile": "CString",
				"CutscenePosition": "CGamePoint3D"
			}
		},
		
		"SConversationRunActions": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				},
				
				"Actions": {
					"type": "SConversationAction",
					"array": true
				}
			}
		},
		
		"SConversationWait": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Duration": "uint32",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				}
			}
		},
		
		"SConversationJump": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Location": "TConversationItemId",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				}
			}
		},
		
		"SConversationChoice": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Text": "CStringLink",
				"Comment": "CString",
				"RequiresPrevious": "bool",
				"Permanent": "bool",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				},
				
				"Actions": {
					"type": "SConversationAction",
					"array": true
				},
				
				"Children": {
					"type": "TConversationItemId",
					"array": true
				}
			}
		},
		
		"SConversationGroup": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Name": "CStringLink",
				"Comment": "CString",
				"ChoiceSelection": "EConversationSelectionMethod",
				"MaxChoices": "uint32",
				"LineSelection": "EConversationSelectionMethod",
				"MaxLines": "uint32",
				"PlayOnceOnly": "bool",
				"ChoiceCamera": "TConversationStateIndexId",
				"ConditionCheck": "EConversationConditionCheck",
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				},
				
				"Children": {
					"type": "TConversationItemId",
					"array": true
				},
				
				"CutsceneFile": "CString",
				"CutscenePosition": "CGamePoint3D",
				"ApplyCutsceneToChildren": "bool"
			}
		},
		
		"SConversationComment": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationItemId",
				"Text": "CStringLink"
			}
		},
		
		"SConversationStateInfoIds": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": {
					"type": "TConversationStateInfoId",
					"array": true
				}
			}
		},
		
		"SConversationStateInfoText": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateInfoId",
				"Text": "CStringLink"
			}
		},
		
		"SConversationStateInfoValue": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateInfoId",
				"Value": "CFixed"
			}
		},
		
		"SConversationStateInfoModel": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateInfoId",
				"Model": "CModelLink"
			}
		},
		
		"SConversationStateInfoUpgrade": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateInfoId",
				"Upgrade": "CUpgradeLink"
			}
		},
		
		"SConversationStateInfoAbilCmd": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateInfoId",
				"Abil": "CAbilLink",
				"Cmd": "TAbilCmdIndex"
			}
		},
		
		"SConversationStateVariation": { //TODO: verify
			"parent": null,
			"fields": {
				"Value": "TConversationStateVariation",
				"DefaultCategories": {
					"type": "CString80",
					"array": true
				}
			}
		},
		
		"SConversationStateIndex": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TConversationStateIndexId",
				"Name": "CStringLink",
				"EditorPrefix": "CStringLink",
				"EditorSuffix": "CStringLink",
				"Color": "CColor",
				"ImagePath": "CImagePath",
				"ImageEdge": "ETextTagEdge",
				"ImageAttach": "EAttachmentID",
				"MoviePath": "CMoviePath",
				"InfoText": {
					"type": "SConversationStateInfoText",
					"array": true
				},
				
				"InfoValue": {
					"type": "SConversationStateInfoValue",
					"array": true
				},
				
				"InfoModel": {
					"type": "SConversationStateInfoModel",
					"array": true
				},
				
				"InfoUpgrade": {
					"type": "SConversationStateInfoUpgrade",
					"array": true
				},
				
				"InfoAbilCmd": {
					"type": "SConversationStateInfoAbilCmd",
					"array": true
				},
				
				"Variations": {
					"type": "SConversationStateVariation",
					"array": true
				}
			}
		},
		
		"SConversationUserValue": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "CUserLink",
				"Field": "TUserFieldId",
				"Index": "int32",
				"Instance": "TUserInstanceId"
			}
		},
		
		"SConversationCondition": { //TODO: verify
			"parent": null,
			"fields": {
				"FixedId": "TConversationStateOpId",
				"State": "CConversationStateLink",
				"Index": "TConversationStateIndexId",
				"User": "SConversationUserValue",
				"Operation": "EConversationConditionOp",
				"Value": "int32"
			}
		},
		
		"SConversationConditionSet": { //TODO: verify
			"parent": null,
			"fields": {
				"Conditions": {
					"type": "SConversationCondition",
					"array": true
				},
				
				"Text": "CStringLink"
			}
		},
		
		"SConversationAction": { //TODO: verify
			"parent": null,
			"fields": {
				"FixedId": "TConversationStateOpId",
				"State": "CConversationStateLink",
				"Index": "TConversationStateIndexId",
				"User": "SConversationUserValue",
				"Operation": "EConversationActionOp",
				"Value": "int32"
			}
		},
		
		"SConversationActionSet": { //TODO: verify
			"parent": null,
			"fields": {
				"Actions": {
					"type": "SConversationAction",
					"array": true
				},
				
				"Text": "CStringLink"
			}
		},
		
		"SEffectDamageArea": { //TODO: verify
			"parent": "SEffectArea",
			"fields": {
				"Bonus": "CFixed",
				"Fraction": "CFixed",
				"Validator": "CValidatorLink"
			}
		},
		
		"SEffectEnumArea": { //TODO: verify
			"parent": "SEffectArea",
			"fields": {
				"Effect": "CEffectLink"
			}
		},
		
		"SEffectModifyPlayerCost": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Abil": "CAbilLink",
				"Unit": "SEffectWhichUnit"
			}
		},
		
		"SEffectModifyUnitCost": { //TODO: verify
			"parent": null,
			"fields": {
				"Abil": "CAbilCommand",
				"Player": "SEffectWhichPlayer",
				"ChargeCountUse": "CFixed",
				"ChargeTimeUse": "CGameTime",
				"CooldownTimeUse": "CGameTime",
				"Fraction": "SCostFactor"
			}
		},
		
		"SEffectModifyVital": { //TODO: verify
			"parent": null,
			"fields": {
				"Change": "CFixed",
				"ChangeFraction": {
					"type": "CFixed",
					"minValue": -1,
					"maxValue": 1
				}
			}
		},
		
		"SEffectSwitchCase": { //TODO: verify
			"parent": null,
			"fields": {
				"Validator": "CValidatorLink",
				"Effect": "CEffectLink",
				"FallThrough": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SEffectMover": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CMoverLink",
				"IfRangeLTE": "CFixed"
			}
		},
		
		"SFootprintBitSet": { //TODO: verify
			"parent": null,
			"fields": {
				"Character": "CString4",
				"Positive": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPath"
				},
				
				"Negative": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPath"
				}
			}
		},
		
		"SFootprintLayer": { //TODO: verify
			"parent": null,
			"fields": {
				"Area": "CiQuad",
				"Sets": {
					"type": "SFootprintBitSet",
					"array": true
				},
				
				"Rows": {
					"type": "CString50",
					"array": true
				}
			}
		},
		
		"SPlacementBits": { //TODO: verify
			"parent": null,
			"fields": {
				"Positive": "EPath",
				"Negative": "EPath"
			}
		},
		
		"SFootprintShape": { //TODO: verify
			"parent": null,
			"fields": {
				"Mode": "EFootprintShapeMode",
				"Radius": {
					"type": "CFixed",
					"minValue": 0
				},
				
				"Offsets": "TFootprintOffsets",
				"Borders": "TFootprintBorders"
			}
		},
		
		"SMinimapData": { //TODO: verify
			"parent": null,
			"fields": {
				"InnerBorderColor": "CColor",
				"OuterBorderColor": "CColor",
				"FrustumColor": "CColor",
				"SelectedUnitColor": "CColor",
				"UnderAttackUnitColor": "CColor",
				"ResourceUnitColor": "CColor",
				"BlipUnitColor": "CColor",
				"UnitBorderColor": "CColor",
				"SelectedUnitBorderColor": "CColor",
				"BackGroundColor": "CColor",
				"BorderSize": "real32",
				"SelectedBorderSize": "real32",
				"MinUnitDotSize": "real32",
				"RadarAlpha": "uint8"
			}
		},
		
		"SListenerRolloff": { //TODO: verify
			"parent": null,
			"fields": {
				"CameraValue": "real32",
				"ListenerFactor": "real32"
			}
		},
		
		"SSoundData": { //TODO: verify
			"parent": null,
			"fields": {
				"AlertFadeTimeOut": "uint32",
				"AlertFadeTimeIn": "uint32",
				"AlertFadeVolume": {
					"type": "CVolumeRange",
					"minValue": -96,
					"maxValue": 0
				},
				
				"DSPArray": {
					"type": "CDSPLink",
					"array": true
				},
				
				"DupeFadeBlend": "ESoundBlend",
				"DupeFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"DupeFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"FogFadeBlend": "ESoundBlend",
				"FogFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"FogFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"MuteFadeBlend": "ESoundBlend",
				"MuteFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"MuteFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"ReverbRolloffBlend": "ESoundBlend",
				"ReverbRolloffPoints": {
					"type": "SReverbRolloff",
					"array": true
				},
				
				"ThresholdFadeTime": "uint32",
				"ThresholdPoints": {
					"type": "SVolumeThreshold",
					"array": true
				},
				
				"Volume": {
					"type": "CVolume",
					"minValue": -96,
					"maxValue": 0
				},
				
				"VolumeBaseline": {
					"type": "CVolume",
					"minValue": -96,
					"maxValue": 0
				},
				
				"VolumeRolloffBlend": "ESoundBlend",
				"VolumeRolloffFadeBlend": "ESoundBlend",
				"VolumeRolloffFadeIn": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"VolumeRolloffFadeOut": {
					"type": "SVolumeFade",
					"array": true
				},
				
				"VolumeRolloffPoints": {
					"type": "SVolumeRolloff",
					"array": true
				}
			}
		},
		
		"SSelectionData": { //TODO: verify
			"parent": null,
			"fields": {
				"SelectionWidth": "real32",
				"SelectionFallOff": "real32",
				"SelectionAlpha": "C3Vector",
				"SelectionTiming": "C3Vector",
				"SelectionSegmentCount": "uint32",
				"SelectionSegmentPercentSolid": "real32",
				"SelectionRotationSpeed": "real32",
				"SelectionInnerOffsetRatio": "real32",
				"SelectionInnerBoundaryRatio": "real32",
				"SelectionInnerBoundaryFallOffRatio": "real32",
				"PreselectionWidth": "real32",
				"PreselectionFallOff": "real32",
				"PreselectionAlpha": "C3Vector",
				"PreselectionTiming": "C3Vector",
				"PreselectionSegmentCount": "uint32",
				"PreselectionSegmentPercentSolid": "real32",
				"PreselectionRotationSpeed": "real32"
			}
		},
		
		"SPointModel": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelPath",
				"Scale": "real32",
				"NameSize": "uint32",
				"HeightOffset": "real32",
				"SelectionOffset": "C3Vector",
				"SelectionRadius": "real32"
			}
		},
		
		"SSoundQuality": { //TODO: verify
			"parent": null,
			"fields": {
				"AutoDetectCPUCoreMaximum": "uint32",
				"Channels": {
					"type": "uint32",
					"maxValue": 4093
				},
				
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ESoundQualityFlag"
				},
				
				"Name": "CStringLink",
				"Format": "ESoundFormat",
				"Resampler": "ESoundResampler",
				"SampleRate": "uint32",
				"SpeakerMode": "ESpeakerMode",
				"VariationMaximum": {
					"type": "uint32",
					"array": true,
					"indexEnum": "ESoundCategory"
				}
			}
		},
		
		"SMovieConfig": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Path": "CMoviePath",
				"Source": "CIdentifier"
			}
		},
		
		"STutorialConfig": { //TODO: verify
			"parent": null,
			"fields": {
				"Title": "CStringLink",
				"Description": "CStringLink",
				"Icon": "CImagePath",
				"Movie": "CMoviePath"
			}
		},
		
		"SCampaignData": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString",
				"Name": "CStringLink",
				"Description": "CStringLink",
				"ImagePath": "CImagePath",
				"LaunchMap": "CString",
				"ProgressLaunchMap": "CString",
				"TutorialMap": "CString",
				"SaveName": "CString",
				"CompletedSaveName": "CString",
				"PublishArchiveName": "CString",
				"ProgressAchievement": "CAchievementLink",
				"Movie": "SMovieConfig",
				"CampaignBanks": {
					"type": "CString",
					"array": true
				},
				
				"TransitionBanks": {
					"type": "CString",
					"array": true
				},
				
				"ShowArchivesButton": "bool",
				"ArchiveDisabledTooltip": "CStringLink"
			}
		},
		
		"SChallenge": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString",
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Score": "CStringLink",
				"MapPath": "CAssetPath",
				"ThumbnailImagePath": "CAssetPath",
				"Achievement": {
					"type": "CAchievementLink",
					"array": true
				},
				
				"IsAllowedInTrial": "bool"
			}
		},
		
		"SChallengeCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Challenge": {
					"type": "SChallenge",
					"array": true
				}
			}
		},
		
		"SLookAtTypeInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Group": "CActorKey",
				"Weight": "CFixed",
				"Time": "uint32"
			}
		},
		
		"SLookAtType": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString80",
				"Name": "CStringLink",
				"Start": {
					"type": "SLookAtTypeInfo",
					"array": true
				},
				
				"Stop": {
					"type": "SLookAtTypeInfo",
					"array": true
				}
			}
		},
		
		"SCameraShakeRotation": { //TODO: verify
			"parent": null,
			"fields": {
				"Yaw": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"Pitch": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				},
				
				"Roll": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 360
				}
			}
		},
		
		"SCameraShakeAmplitude": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString80",
				"Name": "CStringLink",
				"Position": "C3Vector",
				"Rotation": "SCameraShakeRotation"
			}
		},
		
		"SCameraShakeFrequency": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString80",
				"Name": "CStringLink",
				"Position": "C3Vector",
				"Rotation": "SCameraShakeRotation"
			}
		},
		
		"SObjectGroupData": { //TODO: verify
			"parent": null,
			"fields": {
				"MinLevel": "uint32",
				"MinimapIcon": "CImagePath"
			}
		},
		
		"SLoadingScreenHelp": { //TODO: verify
			"parent": null,
			"fields": {
				"Text": "CStringLink",
				"Race": "CRaceLink"
			}
		},
		
		"SLoadingBar": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"FrameSuffix": "CString"
			}
		},
		
		"SUnitSpeedText": { //TODO: verify
			"parent": null,
			"fields": {
				"MinSpeed": {
					"type": "CGameSpeed",
					"minValue": 0
				},
				
				"Text": "CStringLink"
			}
		},
		
		"SWeaponSpeedText": { //TODO: verify
			"parent": null,
			"fields": {
				"MinSpeed": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Text": "CStringLink"
			}
		},
		
		"SGameModeInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "uint32",
				"CanOverrideText": "bool",
				"IsTutorial": "bool",
				"Name": "CStringLink",
				"Description": "CStringLink"
			}
		},
		
		"SGameCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"Usage": "EGameCategoryUsage",
				"Info": "SGameModeInfo",
				"Modes": {
					"type": "SGameModeInfo",
					"array": true
				}
			}
		},
		
		"SDefaultGameVariant": { //TODO: verify
			"parent": null,
			"fields": {
				"CategoryId": "uint32",
				"ModeId": "uint32",
				"MinPlayers": "int32",
				"MaxPlayers": "int32",
				"TeamCount": "int32",
				"PlayersPerTeam": "int32",
				"AIDifficulty": "TDifficultyLevel",
				"Options": {
					"type": "bool",
					"array": true,
					"indexEnum": "EGameVariantOption"
				},
				
				"AchievementTags": {
					"type": "CFourCC",
					"array": true
				}
			}
		},
		
		"SHotkeyInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Category": "CStringLink",
				"Name": "CStringLink",
				"Tooltip": "CStringLink"
			}
		},
		
		"SResourceUI": { //TODO: verify
			"parent": null,
			"fields": {
				"Icon": "CAssetLink",
				"IconBackground": "CAssetLink",
				"Tooltip": "CStringLink"
			}
		},
		
		"SHelpControlCategoryInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Description": "CStringLink"
			}
		},
		
		"SHelpControlInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Category": "CStringLink",
				"Name": "CStringLink",
				"Description": "CStringLink",
				"Basic": "bool"
			}
		},
		
		"SHelpGameMechanicInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Icon": "CAssetLink",
				"IconBackground": "CAssetLink",
				"Name": "CStringLink",
				"Description": "CStringLink"
			}
		},
		
		"SHerdLevel": { //TODO: verify
			"parent": null,
			"fields": {
				"Weight": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SHerdNode": { //TODO: verify
			"parent": null,
			"fields": {
				"Weight": {
					"type": "real32",
					"minValue": 0
				},
				
				"Link": "CHerdNodeLink"
			}
		},
		
		"SHeroAbilCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Tooltip": "CStringLink",
				"Image": "CImagePath",
				"RequiredLevel": "uint32",
				"State": "EHeroAbilCategoryState",
				"AbilArray": {
					"type": "CHeroAbilLink",
					"array": true
				},
				
				"UserReference": "CUserReference"
			}
		},
		
		"SHeroStatModifier": { //TODO: verify
			"parent": null,
			"fields": {
				"Stat": "CHeroStatLink",
				"Value": "int32",
				"State": "EHeroStatState"
			}
		},
		
		"SItemContainerSlot": { //TODO: verify
			"parent": "SItemContainer",
			"fields": {
				"Equip": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Row": {
					"type": "uint8",
					"maxValue": 7
				},
				
				"Column": {
					"type": "uint8",
					"maxValue": 7
				}
			}
		},
		
		"STimeEvent": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": "CTimeOfDay",
				"Name": "CStringLink"
			}
		},
		
		"SDirectionalLight": { //TODO: verify
			"parent": null,
			"fields": {
				"UseAmbientOcclusion": "bool",
				"Color": "C3Vector",
				"ColorMultiplier": "real32",
				"SpecularColor": "C3Vector",
				"SpecColorMultiplier": "real32",
				"Direction": "C3Vector"
			}
		},
		
		"SVariationConfig": { //TODO: verify
			"parent": null,
			"fields": {
				"Command": "EVariationCommands",
				"Sensitivity": "uint32",
				"Region": "ETonemapRegionTypes"
			}
		},
		
		"SLightRegionInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"UseDefault": "bool",
				"AmbientColor": "C3Vector",
				"DiffuseColor": {
					"type": "C3Vector",
					"array": true,
					"indexEnum": "EDirectionalLight"
				},
				
				"DiffuseMultiplier": {
					"type": "real32",
					"array": true,
					"indexEnum": "EDirectionalLight"
				},
				
				"SpecularColor": "C3Vector",
				"SpecularMultiplier": "real32"
			}
		},
		
		"SLightInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "CString",
				"TimeOfDay": "CTimeOfDay",
				"AmbientColor": "C3Vector",
				"TerrainUseBackLight": "bool",
				"Param": {
					"type": "real32",
					"array": true,
					"indexEnum": "ELightParam",
					"minValue": -1,
					"maxValue": 100
				},
				
				"DirectionalLight": {
					"type": "SDirectionalLight",
					"array": true,
					"indexEnum": "EDirectionalLight"
				},
				
				"OperatorHDR": "int8",
				"TriggerTransition": "uint32",
				"CorrectGamma": "bool",
				"Colorize": "bool",
				"UseSeparateDetailSSAO": "bool",
				"Variations": {
					"type": "SVariationConfig",
					"array": true
				},
				
				"LightRegions": {
					"type": "SLightRegionInfo",
					"array": true
				}
			}
		},
		
		"SMissionCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CStringLink",
				"Map": "CMapLink",
				"Tooltip": "CStringLink",
				"CompletedTooltip": "CStringLink",
				"RewardImage": "CImagePath",
				"RewardTooltip": "CStringLink",
				"State": "EMissionState"
			}
		},
		
		"SLootChoice": { //TODO: verify
			"parent": null,
			"fields": {
				"Chance": {
					"type": "uint8",
					"minValue": 0,
					"maxValue": 100
				},
				
				"Child": "CLootLink"
			}
		},
		
		"SAttachProps": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "EAttachmentID",
				"Keys": {
					"type": "TAttachPropIndex",
					"array": true,
					"indexEnum": "EAttachKeyword"
				},
				
				"SquibType": "ESquibType",
				"WeightExplicit": "real32",
				"WeightFactor": "real32",
				"RadiusTarget": "real32",
				"RadiusShield": "real32"
			}
		},
		
		"STextureNameAdaption": { //TODO: verify
			"parent": null,
			"fields": {
				"TriggerOnSubstring": "CIdentifier",
				"Slot": "CTextureSlot",
				"PropsAdd": "CTextureProps",
				"PropsRemove": "CTextureProps",
				"PropsSet": "CTextureProps",
				"AppliesToInnate": "bool",
				"AppliesToFile": "bool"
			}
		},
		
		"STextureDeclare": { //TODO: verify
			"parent": null,
			"fields": {
				"Prefix": "CIdentifier",
				"Adaptions": {
					"type": "STextureNameAdaption",
					"array": true
				}
			}
		},
		
		"STextureInfo": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot",
				"Expression": "CTextureExpression",
				"Probability": "uint32"
			}
		},
		
		"STextureExpressionSpec": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot",
				"Expression": "CTextureExpression"
			}
		},
		
		"STextureMatchSpec": { //TODO: verify
			"parent": null,
			"fields": {
				"Slot": "CTextureSlot",
				"Source": "CTextureSlot"
			}
		},
		
		"SModelVariation": { //TODO: verify
			"parent": null,
			"fields": {
				"Number": "int32",
				"Probability": "uint32",
				"Radius": "real32",
				"RadiusLoose": "real32",
				"PhysicsForceFactor": {
					"type": "real32",
					"minValue": -1000,
					"maxValue": 1000
				},
				
				"PhysicsDeathMotionFactor": "CVariatorActorReal32",
				"TextureAppliedGroups": "CTextureProps",
				"TextureExpressionsForEditor": {
					"type": "STextureExpressionSpec",
					"array": true
				},
				
				"TextureMatchesForEditor": {
					"type": "STextureMatchSpec",
					"array": true
				}
			}
		},
		
		"SModelDataEvent": { //TODO: verify
			"parent": null,
			"fields": {
				"Variation": "int32",
				"Anim": "CAnimProps",
				"Name": "CIdentifier",
				"Type": "EModelEvent",
				"Time": "real32",
				"Attachment": "EAttachmentID",
				"Payload": "CIdentifier",
				"ModelQuality": "EModelQuality"
			}
		},
		
		"SAnimFile": { //TODO: verify
			"parent": null,
			"fields": {
				"FilePath": "CAnimsPath",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EAnimLoadFlag"
				}
			}
		},
		
		"SPhysicsMaterialMapping": { //TODO: verify
			"parent": null,
			"fields": {
				"PhysicsMaterialInnate": "EPhysicsMaterial",
				"PhysicsMaterialOverride": "CPhysicsMaterialLink"
			}
		},
		
		"SPathingData": { //TODO: verify
			"parent": null,
			"fields": {
				"Bits": {
					"type": "bool",
					"array": true,
					"indexEnum": "EPath"
				}
			}
		},
		
		"SMotionOverlay": { //TODO: verify
			"parent": null,
			"fields": {
				"Type": "EMotionOverlayType",
				"Polarity": "EMotionOverlayPolarity",
				"PolarityDriver": "CDataSoupKey",
				"Axis": "C3fVector",
				"Wavelength": "CVariatorGameFixed",
				"WavelengthChangeProbability": {
					"type": "CFixed",
					"maxValue": 1
				},
				
				"RevolverSpeed": "CFangleRateMissile",
				"RevolverSpeedRange": "CFangleRateMissile",
				"RevolverMaxSpeed": "CFangleRateMissile",
				"RevolverMaxSpeedRange": "CFangleRateMissile",
				"RevolverAccel": "CFangleAccelMissile",
				"RevolverAccelRange": "CFangleAccelMissile"
			}
		},
		
		"SMotionOverlayPhase": { //TODO: verify
			"parent": null,
			"fields": {
				"Scale": "CVariatorGameFixed"
			}
		},
		
		"SMotionPhase": { //TODO: verify
			"parent": null,
			"fields": {
				"Driver": "EMotionDriverType",
				"Acceleration": "CMissileAcceleration",
				"AccelerationRange": "CMissileAcceleration",
				"Speed": "CMissileSpeed",
				"SpeedRange": "CMissileSpeed",
				"MinSpeed": "CMissileSpeed",
				"MaxSpeed": "CMissileSpeed",
				"Gravity": "CFixed",
				"Clearance": "CFixed",
				"ClearanceLookahead": "CFixed",
				"ClearanceAcceleration": "CMissileAcceleration",
				"ClearanceIgnoresTargetProximity": "bool",
				"IgnoresTerrain": "bool",
				"TurnType": "EMotionTurnType",
				"ActorTracking": "EMotionActorTrackingType",
				"ArrivalTestType": "EMotionArrivalTestType",
				"BlendType": "EMotionBlendType",
				"Outro": "CPhaseOutro",
				"RotationLaunchActorType": "EMotionRotationLaunchActorType",
				"RotationActorType": "EMotionRotationActorType",
				"Timeout": "CFixed",
				"ThrowRotationType": "EMotionThrowRotationType",
				"ThrowVector": "C3fVector",
				"ThrowBandYaw": "CThrowBand",
				"ThrowBandPitch": "CThrowBand",
				"ThrowForward": "C3fVector",
				"AdaptableParabolaIsUpright": "bool",
				"AdaptableParabolaClearance": "CVariatorGameFixed",
				"AdaptableParabolaDistances": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EMotionAdaptableParabolaHotspot"
				},
				
				"AdaptableParabolaAccels": {
					"type": "CMissileAcceleration",
					"array": true,
					"indexEnum": "EMotionAdaptableParabolaSeg"
				},
				
				"YawPitchRoll": "CYawPitchRoll",
				"YawPitchRollRange": "CYawPitchRoll",
				"YawPitchRollAccel": "CYawPitchRoll",
				"YawPitchRollAccelRange": "CYawPitchRoll",
				"PowerslideAngle": "CFangle",
				"PowerslideDecel": "CMissileAcceleration",
				"FlightTime": "CVariatorGameFixed",
				"OutroAltitude": "CPhaseOutro",
				"Overlays": {
					"type": "SMotionOverlayPhase",
					"array": true
				}
			}
		},
		
		"SStartingUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Count": "uint32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EStartingUnitFlag"
				},
				
				"Offset": {
					"type": "CGamePoint",
					"array": true
				},
				
				"Range": "CFixed",
				"Unit": "CUnitLink"
			}
		},
		
		"SRequirementNode": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CRequirementNodeLink"
			}
		},
		
		"SRequirementCount": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "TTechAlias",
				"State": "ERequirementState",
				"Unlock": "TTechAlias"
			}
		},
		
		"SRewardCategory": { //TODO: verify
			"parent": null,
			"fields": {
				"File": "CString",
				"Tag": "CFourCC"
			}
		},
		
		"SPitchShift": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": "uint32",
				"Pitch": {
					"type": "CPitch",
					"minValue": -48,
					"maxValue": 48
				}
			}
		},
		
		"SReverbBalance": { //TODO: verify
			"parent": null,
			"fields": {
				"Direct": {
					"type": "TSoundBalance",
					"minValue": -10000,
					"maxValue": 1000
				},
				
				"Room": {
					"type": "TSoundBalance",
					"minValue": -10000,
					"maxValue": 1000
				}
			}
		},
		
		"SReverbRolloff": { //TODO: verify
			"parent": null,
			"fields": {
				"Distance": "real32",
				"Direct": {
					"type": "real32",
					"minValue": 0
				},
				
				"Room": {
					"type": "real32",
					"minValue": 0
				}
			}
		},
		
		"SVolumeFade": { //TODO: verify
			"parent": null,
			"fields": {
				"Time": "uint32",
				"Volume": {
					"type": "CVolume",
					"minValue": -96,
					"maxValue": 0
				}
			}
		},
		
		"SVolumeRolloff": { //TODO: verify
			"parent": null,
			"fields": {
				"Distance": "real32",
				"Volume": {
					"type": "CVolume",
					"minValue": -96,
					"maxValue": 0
				}
			}
		},
		
		"SVolumeThreshold": { //TODO: verify
			"parent": null,
			"fields": {
				"Count": "uint32",
				"Volume": "CVolume"
			}
		},
		
		"SSoundAsset": { //TODO: verify
			"parent": null,
			"fields": {
				"File": "CSoundPath",
				"LoopCount": {
					"type": "int32",
					"minValue": -1
				},
				
				"LoopTime": {
					"type": "CiRange",
					"minValue": 0
				},
				
				"Offset": {
					"type": "CiRange",
					"minValue": 0
				},
				
				"Pitch": {
					"type": "CPitchRange",
					"minValue": -48,
					"maxValue": 48
				},
				
				"SyncPoints": {
					"type": "uint32",
					"array": true
				},
				
				"Volume": {
					"type": "CVolumeRange",
					"minValue": -96,
					"maxValue": 6
				},
				
				"Weight": {
					"type": "TSoundWeight",
					"minValue": 0,
					"maxValue": 100
				},
				
				"FacialAnim": "CString",
				"FacialGroup": "CString",
				"PortraitAnim": "CString",
				"FacialFile": "CFacialPath",
				"PortraitModel": "CModelLink",
				"PortraitActor": "CActorLink",
				"Speaker": "CStringLink",
				"Subtitle": "CStringLink"
			}
		},
		
		"SSoundLocaleFlags": { //TODO: verify
			"parent": null,
			"fields": {
				"Locale": "TLocaleId",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "ESoundFlag"
				}
			}
		},
		
		"SSoundtrackSection": { //TODO: verify
			"parent": null,
			"fields": {
				"Chance": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"Sound": "CSoundLink",
				"Start": "uint32"
			}
		},
		
		"SSoundtrackMasterLayer": { //TODO: verify
			"parent": null,
			"fields": {
				"Sound": "CSoundLink"
			}
		},
		
		"SSoundtrackSlaveLayer": { //TODO: verify
			"parent": null,
			"fields": {
				"Sections": {
					"type": "SSoundtrackSection",
					"array": true
				}
			}
		},
		
		"SSoundtrackCue": { //TODO: verify
			"parent": null,
			"fields": {
				"MasterLayer": "SSoundtrackMasterLayer",
				"SlaveLayers": {
					"type": "SSoundtrackSlaveLayer",
					"array": true
				},
				
				"Weight": {
					"type": "TSoundWeight",
					"minValue": 0,
					"maxValue": 100
				}
			}
		},
		
		"STacAbilData": { //TODO: verify
			"parent": null,
			"fields": {
				"AbilLink": "CAbilLink",
				"Cooldown": {
					"type": "CFixed",
					"array": true
				}
			}
		},
		
		"STargetFindEnumArea": { //TODO: verify
			"parent": null,
			"fields": {
				"Arc": "CFangleArc",
				"MaxCount": "uint32",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RadiusBonus": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Validator": "CValidatorLink"
			}
		},
		
		"STargetSorts": { //TODO: verify
			"parent": null,
			"fields": {
				"SortArray": {
					"type": "CTargetSortLink",
					"array": true
				},
				
				"RequestCount": "uint32",
				"RequestPercentage": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SCreepSettings": { //TODO: verify
			"parent": null,
			"fields": {
				"CreepOpaqueAlphaThreshold": "real32",
				"CreepTranslucentMinThreshold": "real32",
				"CreepTranslucentMaxThreshold": "real32",
				"CreepNoiseSpeed": "real32",
				"CreepNoiseTiling": "real32",
				"CreepHeightMapStrength": "real32",
				"CreepNoiseStrength": "real32",
				"CreepBaseTextureTileValue": "C2Vector",
				"CreepBaseNormalMapTileValue": "C2Vector",
				"CreepEdgeNormalMapTileValue": "C2Vector",
				"CreepEdgeNormalMapMinRampThreshold": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"CreepTranslucentPassTint": "C3Vector",
				"CreepTranslucentPassEmissiveFactor": "C3Vector",
				"CreepDiffuseColorTint": "C3Vector",
				"CreepTextureRotation": "real32",
				"CreepGroundNormalBlend": "real32"
			}
		},
		
		"SDSPArray": { //TODO: verify
			"parent": null,
			"fields": {
				"LinkArray": {
					"type": "CDSPLink",
					"array": true
				}
			}
		},
		
		"SFoliageSimulationConfig": { //TODO: verify
			"parent": null,
			"fields": {
				"SamplingDistance": {
					"type": "real32",
					"array": true,
					"indexEnum": "EFoliageLayers"
				},
				
				"AcceptWorldForces": {
					"type": "bool",
					"array": true,
					"indexEnum": "EFoliageLayers"
				}
			}
		},
		
		"STerrainDoodad": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"RandomRotation": "bool",
				"Probability": "real32",
				"PlacementRadius": "real32"
			}
		},
		
		"SCardLayoutButton": { //TODO: verify
			"parent": "SCardButton",
			"fields": {
				"Row": "uint8",
				"Column": "uint8"
			}
		},
		
		"SCardLayout": { //TODO: verify
			"parent": null,
			"fields": {
				"CardId": "CCardId",
				"LayoutButtons": {
					"type": "SCardLayoutButton",
					"array": true
				},
				
				"RowText": {
					"type": "CStringLink",
					"array": true
				}
			}
		},
		
		"SUnitAbilData": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CAbilLink"
			}
		},
		
		"SUnitBehaviorData": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CBehaviorLink"
			}
		},
		
		"SUnitWeaponData": { //TODO: verify
			"parent": null,
			"fields": {
				"Link": "CWeaponLink",
				"Turret": "CTurretLink"
			}
		},
		
		"SAddedOnData": { //TODO: verify
			"parent": null,
			"fields": {
				"UnitLink": "CUnitLink",
				"BehaviorLink": "CBehaviorLink"
			}
		},
		
		"SUnitEquipment": { //TODO: verify
			"parent": null,
			"fields": {
				"Effect": "CEffectLink",
				"Icon": "CImagePath",
				"Name": "CStringLink",
				"Tooltip": "CStringLink",
				"Weapon": "CWeaponLink"
			}
		},
		
		"SUnitReviveInfo": { //TODO: verify
			"parent": "SCost",
			"fields": {
				"Time": "CGameTime"
			}
		},
		
		"SUpgradeEffect": { //TODO: verify
			"parent": null,
			"fields": {
				"Operation": "EUpgradeOperation",
				"Reference": "CCatalogReference",
				"Value": "TUpgradeEffectValue"
			}
		},
		
		"SUserField": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TUserFieldId",
				"Type": "EUserType",
				"GameLinkType": "EGameCatalog",
				"UserType": "CUserLink",
				"Count": "uint32",
				"Flags": {
					"type": "bool",
					"array": true,
					"indexEnum": "EUserFieldFlag"
				},
				
				"EditorColumn": "uint32",
				"EditorText": "EEditorTextType"
			}
		},
		
		"SUserInstanceField": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TUserFieldId",
				"Index": "uint32"
			}
		},
		
		"SUserInstanceAbilCmd": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Abil": "CAbilLink",
				"Cmd": "TAbilCmdIndex"
			}
		},
		
		"SUserInstanceActor": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Actor": "CActorLink"
			}
		},
		
		"SUserInstanceColor": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Color": "CColor"
			}
		},
		
		"SUserInstanceCompare": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Compare": "EValueCompare"
			}
		},
		
		"SUserInstanceFixed": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Fixed": "CFixed"
			}
		},
		
		"SUserInstanceGameLink": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"GameLink": "CString"
			}
		},
		
		"SUserInstanceImage": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Image": "CImagePath",
				"Edge": "ETextTagEdge",
				"Attach": "EAttachmentID"
			}
		},
		
		"SUserInstanceInt": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Int": "int32"
			}
		},
		
		"SUserInstanceModel": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Model": "CModelLink"
			}
		},
		
		"SUserInstanceMovie": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Movie": "CMoviePath"
			}
		},
		
		"SUserInstanceSound": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Sound": "CSoundLink"
			}
		},
		
		"SUserInstanceString": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"String": "CString"
			}
		},
		
		"SUserInstanceText": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Text": "CStringLink"
			}
		},
		
		"SUserInstanceUnit": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Unit": "CUnitLink"
			}
		},
		
		"SUserInstanceUpgrade": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Upgrade": "CUpgradeLink"
			}
		},
		
		"SUserInstanceUser": { //TODO: verify
			"parent": null,
			"fields": {
				"Field": "SUserInstanceField",
				"Type": "CUserLink",
				"Instance": "TUserInstanceId"
			}
		},
		
		"SUserInstance": { //TODO: verify
			"parent": null,
			"fields": {
				"Id": "TUserInstanceId",
				"AbilCmd": {
					"type": "SUserInstanceAbilCmd",
					"array": true
				},
				
				"Actor": {
					"type": "SUserInstanceActor",
					"array": true
				},
				
				"Color": {
					"type": "SUserInstanceColor",
					"array": true
				},
				
				"Compare": {
					"type": "SUserInstanceCompare",
					"array": true
				},
				
				"Fixed": {
					"type": "SUserInstanceFixed",
					"array": true
				},
				
				"GameLink": {
					"type": "SUserInstanceGameLink",
					"array": true
				},
				
				"Image": {
					"type": "SUserInstanceImage",
					"array": true
				},
				
				"Int": {
					"type": "SUserInstanceInt",
					"array": true
				},
				
				"Model": {
					"type": "SUserInstanceModel",
					"array": true
				},
				
				"Movie": {
					"type": "SUserInstanceMovie",
					"array": true
				},
				
				"Sound": {
					"type": "SUserInstanceSound",
					"array": true
				},
				
				"String": {
					"type": "SUserInstanceString",
					"array": true
				},
				
				"Text": {
					"type": "SUserInstanceText",
					"array": true
				},
				
				"Unit": {
					"type": "SUserInstanceUnit",
					"array": true
				},
				
				"Upgrade": {
					"type": "SUserInstanceUpgrade",
					"array": true
				},
				
				"User": {
					"type": "SUserInstanceUser",
					"array": true
				}
			}
		},
		
		"SValidatorEnumArea": { //TODO: verify
			"parent": null,
			"fields": {
				"Arc": "CFangleArc",
				"Compare": "EValueCompare",
				"Count": "uint32",
				"Radius": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"RadiusBonus": {
					"type": "CFixed",
					"minValue": 0,
					"maxValue": 500
				},
				
				"Validator": "CValidatorLink"
			}
		},
		
		"SValidatorCondition": { //TODO: verify
			"parent": null,
			"fields": {
				"Test": "CValidatorLink",
				"Return": "CValidatorLink"
			}
		},
		
		"SValidatorFunction": { //TODO: verify
			"parent": "SValidatorCondition",
			"fields": {
				"Success": "CValidatorLink",
				"Failure": "CValidatorLink",
				"Ignored": "CValidatorLink",
				"Break": {
					"type": "bool",
					"minValue": 0,
					"maxValue": 1
				}
			}
		},
		
		"SWaterDoodad": { //TODO: verify
			"parent": null,
			"fields": {
				"Model": "CModelLink",
				"Density": {
					"type": "real32",
					"minValue": 0,
					"maxValue": 1
				},
				
				"MinSize": {
					"type": "real32",
					"minValue": 0.0005
				},
				
				"MaxSize": {
					"type": "real32",
					"minValue": 0.0005
				},
				
				"Lifetime": "uint32"
			}
		},
		
		"SWaterStateDesc": { //TODO: verify
			"parent": null,
			"fields": {
				"Name": "CString32",
				"Height": "real32",
				"Color": "C4Vector",
				"ColorFallOff": "real32",
				"CausticsFallOff": "real32",
				"Specularity": "real32",
				"SpecularScaler": "real32",
				"UvRate": "C4Vector",
				"UvRotate": "real32",
				"MeshRoughness": "real32",
				"TextureRoughness": "real32",
				"ReflectionDistortion": "real32",
				"RefractionDistortion": "real32",
				"ShadowDistortion": "real32",
				"MinReflection": "real32",
				"ReflectivityPower": "real32"
			}
		}
	},
	
	"enums": {
		"EGameCatalog": {
			"prefix": "e_gameCatalog",
			"values": [
				"Unknown",
				"Abil",
				"Achievement",
				"AchievementTerm",
				"Actor",
				"ActorSupport",
				"Alert",
				"ArmyCategory",
				"ArmyUnit",
				"ArmyUpgrade",
				"AttachMethod",
				"BankCondition",
				"Beam",
				"Behavior",
				"Button",
				"Camera",
				"Character",
				"Cliff",
				"CliffMesh",
				"Conversation",
				"ConversationState",
				"Cursor",
				"DSP",
				"Effect",
				"Error",
				"Footprint",
				"FoW",
				"Game",
				"GameUI",
				"Herd",
				"HerdNode",
				"Hero",
				"HeroAbil",
				"HeroStat",
				"Item",
				"ItemClass",
				"ItemContainer",
				"Light",
				"Location",
				"Loot",
				"Map",
				"Model",
				"Mover",
				"Objective",
				"PhysicsMaterial",
				"Preload",
				"Race",
				"Requirement",
				"RequirementNode",
				"Reverb",
				"Reward",
				"ScoreResult",
				"ScoreValue",
				"Sound",
				"Soundtrack",
				"TacCooldown",
				"Tactical",
				"TargetFind",
				"TargetSort",
				"Terrain",
				"TerrainObject",
				"TerrainTex",
				"Texture",
				"Tile",
				"Turret",
				"Unit",
				"Upgrade",
				"User",
				"Validator",
				"Water",
				"Weapon"
			]
		},
		
		"EGameObject": {
			"prefix": "e_gameObject",
			"values": [
				"Unknown",
				"Abil",
				"Achievement",
				"AchievementTerm",
				"Actor",
				"ActorSupport",
				"Alert",
				"ArmyCategory",
				"ArmyUnit",
				"ArmyUpgrade",
				"AttachMethod",
				"BankCondition",
				"Beam",
				"Behavior",
				"Button",
				"Camera",
				"Character",
				"Cliff",
				"CliffMesh",
				"Conversation",
				"ConversationState",
				"Cursor",
				"DSP",
				"Effect",
				"Error",
				"Footprint",
				"FoW",
				"Game",
				"GameUI",
				"Herd",
				"HerdNode",
				"Hero",
				"HeroAbil",
				"HeroStat",
				"Item",
				"ItemClass",
				"ItemContainer",
				"Light",
				"Location",
				"Loot",
				"Map",
				"Model",
				"Mover",
				"Objective",
				"PhysicsMaterial",
				"Preload",
				"Race",
				"Requirement",
				"RequirementNode",
				"Reverb",
				"Reward",
				"ScoreResult",
				"ScoreValue",
				"Sound",
				"Soundtrack",
				"TacCooldown",
				"Tactical",
				"TargetFind",
				"TargetSort",
				"Terrain",
				"TerrainObject",
				"TerrainTex",
				"Texture",
				"Tile",
				"Turret",
				"Unit",
				"Upgrade",
				"User",
				"Validator",
				"Water",
				"Weapon",
				"Assets",
				"GameHotkeys",
				"GameStrings",
				"ObjectStrings"
			]
		},
		
		"EUnitMob": {
			"prefix": "e_unitMob",
			"values": [
				"Unknown",
				"None",
				"Obsolete",
				"OnHold",
				"Story",
				"Campaign",
				"Classic",
				"Multiplayer"
			]
		},
		
		"EClassIdCGame": {
			"prefix": "e_classId",
			"values": [
				"CGameUnknown",
				"CGame"
			]
		},
		
		"EGameSync": {
			"prefix": "e_gameSync",
			"values": [
				"Unknown",
				"GameRunSyncValue",
				"Debug",
				"Internal",
				"GameData",
				"UpgradeManager",
				"Random",
				"Cheat",
				"GameEvent",
				"Pathing",
				"UnitFinder",
				"Creep",
				"Density",
				"Height",
				"Vision",
				"TerrainSync",
				"Build",
				"TechTree",
				"Alliance",
				"UnitTables",
				"Player",
				"User",
				"Selection",
				"StartLocations",
				"Abil",
				"Behavior",
				"Channeler",
				"Effects",
				"Revealer",
				"Persistent",
				"Unit",
				"Beam",
				"TriggerPlacedRefs",
				"TriggerEventRegistry",
				"TriggerVariables",
				"TriggerQueue",
				"TriggerLastCreated",
				"TriggerState",
				"TriggerThread",
				"TriggerSound",
				"Trigger",
				"RegionMonitor",
				"Marker",
				"GalaxyText",
				"Galaxy",
				"Brain",
				"BrainCPU",
				"Conjoined",
				"Objective",
				"ResourceRequest",
				"Help",
				"Portrait",
				"Conversation",
				"ConversationDriver",
				"Purchase",
				"Transmission",
				"TriggerDialog",
				"Ping",
				"Planet",
				"Bank",
				"Score",
				"Research",
				"Mercenary",
				"BattleReport",
				"Pause",
				"Placeholders",
				"GameSyncUI",
				"CinematicsDriver",
				"ObjectGroups",
				"Victory",
				"DamageHistory"
			]
		},
		
		"EGameResult": {
			"prefix": "e_gameResult",
			"values": [
				"Unknown",
				"Undecided",
				"Victory",
				"Defeat",
				"Tie"
			]
		},
		
		"EAllianceId": {
			"prefix": "e_allianceId",
			"values": [
				"Unknown",
				"Passive",
				"Vision",
				"Control",
				"Spend",
				"Trade",
				"SeekHelp",
				"GiveHelp",
				"Chat",
				"Defeat",
				"Pushable",
				"Power"
			]
		},
		
		"EPlayerType": {
			"prefix": "e_playerType",
			"values": [
				"Unknown",
				"None",
				"User",
				"Computer",
				"Neutral",
				"Hostile"
			]
		},
		
		"ETargetFilter": {
			"prefix": "e_targetFilter",
			"values": [
				"Unknown",
				"Self",
				"Player",
				"Ally",
				"Neutral",
				"Enemy",
				"Air",
				"Ground",
				"Light",
				"Armored",
				"Biological",
				"Robotic",
				"Mechanical",
				"Psionic",
				"Massive",
				"Structure",
				"Hover",
				"Heroic",
				"Worker",
				"RawResource",
				"HarvestableResource",
				"Missile",
				"Destructible",
				"Item",
				"Uncommandable",
				"CanHaveEnergy",
				"CanHaveShields",
				"PreventDefeat",
				"PreventReveal",
				"Buried",
				"Cloaked",
				"Visible",
				"Stasis",
				"UnderConstruction",
				"Dead",
				"Revivable",
				"Hidden",
				"Hallucination",
				"Invulnerable",
				"HasEnergy",
				"HasShields",
				"Benign",
				"Passive",
				"Detector",
				"Radar",
				"Stunned",
				"Summoned",
				"Unstoppable",
				"Outer"
			]
		},
		
		"EMarkerMatch": {
			"prefix": "e_markerMatch",
			"values": [
				"Unknown",
				"Id",
				"Link",
				"CasterPlayer",
				"CasterUnit"
			]
		},
		
		"EHeightMap": {
			"prefix": "e_heightMap",
			"values": [
				"Unknown",
				"Air",
				"Glide",
				"Ground"
			]
		},
		
		"EPath": {
			"prefix": "e_path",
			"values": [
				"Unknown",
				"GroundNoSpawn",
				"NoBuild",
				"NearResources",
				"DropOff",
				"Creep",
				"NoCreep",
				"Masked",
				"Fogged",
				"BlockVision",
				"BoostCliff",
				"BoostHeight",
				"ShrubVision",
				"Dense",
				"NoCanSee"
			]
		},
		
		"EPlane": {
			"prefix": "e_plane",
			"values": [
				"Unknown",
				"Ground",
				"Air"
			]
		},
		
		"EPlacementTest": {
			"prefix": "e_placementTest",
			"values": [
				"Unknown",
				"Creep",
				"Power",
				"Fog",
				"IgnoreBlockers",
				"IgnoreInvisible",
				"Zone",
				"Cliff",
				"Density"
			]
		},
		
		"EUnitVital": {
			"prefix": "e_unitVital",
			"values": [
				"Unknown",
				"Life",
				"Shields",
				"Energy"
			]
		},
		
		"EAcquireLevel": {
			"prefix": "e_acquireLevel",
			"values": [
				"Unknown",
				"None",
				"Passive",
				"Defensive",
				"Offensive"
			]
		},
		
		"EDamageKind": {
			"prefix": "e_damageKind",
			"values": [
				"Unknown",
				"Spell",
				"Melee",
				"Ranged",
				"Splash"
			]
		},
		
		"EDeathType": {
			"prefix": "e_deathType",
			"values": [
				"Unknown",
				"Normal",
				"Remove",
				"Blast",
				"Disintegrate",
				"Eat",
				"Electrocute",
				"Eviscerate",
				"Fire",
				"Freeze",
				"Impact",
				"Morph",
				"Silentkill",
				"Squish",
				"Timeout",
				"Unlink",
				"UnderConstruction",
				"Salvage",
				"Cancel"
			]
		},
		
		"EEffectHistory": {
			"prefix": "e_effectHistory",
			"values": [
				"Unknown",
				"Damage",
				"Healing",
				"Modifier"
			]
		},
		
		"EEffectTimeScale": {
			"prefix": "e_effectTimeScale",
			"values": [
				"Unknown",
				"Caster",
				"Target",
				"Global"
			]
		},
		
		"EChargeLocation": {
			"prefix": "e_chargeLocation",
			"values": [
				"Unknown",
				"Abil",
				"Unit",
				"Player",
				"Global",
				"Behavior"
			]
		},
		
		"ECooldownLocation": {
			"prefix": "e_cooldownLocation",
			"values": [
				"Unknown",
				"Abil",
				"Unit",
				"Player",
				"Global",
				"Behavior"
			]
		},
		
		"EResourceState": {
			"prefix": "e_resourceState",
			"values": [
				"Unknown",
				"Raw",
				"Harvestable"
			]
		},
		
		"EResourceType": {
			"prefix": "e_resourceType",
			"values": [
				"Unknown",
				"Minerals",
				"Vespene",
				"Terrazine",
				"Custom"
			]
		},
		
		"ECostCategory": {
			"prefix": "e_costCategory",
			"values": [
				"Unknown",
				"None",
				"Army",
				"Economy",
				"Technology"
			]
		},
		
		"EEditorFlag": {
			"prefix": "e_editorFlag",
			"values": [
				"Unknown",
				"NoPlacement",
				"NoPalettes",
				"BlockStructures",
				"AmbientOcclusion",
				"CanRotate",
				"NoAutoRotate",
				"NeutralDefault",
				"HostileDefault"
			]
		},
		
		"EFogVisibility": {
			"prefix": "e_fogVisibility",
			"values": [
				"Unknown",
				"Hidden",
				"Snapshot",
				"Dimmed",
				"Visible"
			]
		},
		
		"EEffectLocation": {
			"prefix": "e_effectLocation",
			"values": [
				"Unknown",
				"CasterUnit",
				"CasterPoint",
				"CasterUnitOrPoint",
				"CasterOuterUnit",
				"CasterOuterPoint",
				"CasterOuterUnitOrPoint",
				"SourceUnit",
				"SourcePoint",
				"SourceUnitOrPoint",
				"OuterUnit",
				"OuterPoint",
				"OuterUnitOrPoint",
				"TargetUnit",
				"TargetPoint",
				"TargetUnitOrPoint",
				"TargetOuterUnit",
				"TargetOuterPoint",
				"TargetOuterUnitOrPoint",
				"OriginUnit",
				"OriginPoint",
				"OriginUnitOrPoint"
			]
		},
		
		"EEffectLocationType": {
			"prefix": "e_effectLocationType",
			"values": [
				"Unknown",
				"Unit",
				"Point",
				"UnitOrPoint"
			]
		},
		
		"EEffectPlayer": {
			"prefix": "e_effectPlayer",
			"values": [
				"Unknown",
				"Origin",
				"Creator",
				"Caster",
				"CasterOuter",
				"Outer",
				"Source",
				"Target",
				"TargetOuter",
				"Neutral",
				"Hostile"
			]
		},
		
		"EEffectUnit": {
			"prefix": "e_effectUnit",
			"values": [
				"Unknown",
				"Caster",
				"CasterOuter",
				"Outer",
				"Source",
				"Target",
				"TargetOuter",
				"Origin"
			]
		},
		
		"ETeamColor": {
			"prefix": "e_teamColor",
			"values": [
				"Unknown",
				"Diffuse",
				"Emissive"
			]
		},
		
		"EShieldImpact": {
			"prefix": "e_shieldImpact",
			"values": [
				"Unknown",
				"Damage",
				"Fizzle"
			]
		},
		
		"EEffectSearchFlag": {
			"prefix": "e_effectSearchFlag",
			"values": [
				"Unknown",
				"CallForHelp",
				"CenterAtLaunch",
				"ExtendByUnitRadius",
				"OffsetByUnitRadius",
				"OffsetAreaByAngle",
				"SameCliff"
			]
		},
		
		"EEffectCreepFlag": {
			"prefix": "e_effectCreepFlag",
			"values": [
				"Unknown",
				"RemoveCreep",
				"Permanent",
				"Immediate",
				"Ideal"
			]
		},
		
		"ECostDisplay": {
			"prefix": "e_costDisplay",
			"values": [
				"Unknown",
				"Life",
				"Shields",
				"Energy",
				"Minerals",
				"Vespene",
				"Terrazine",
				"Custom"
			]
		},
		
		"ETechCountState": {
			"prefix": "e_techState",
			"values": [
				"Unknown",
				"Queued",
				"InProgress",
				"Complete"
			]
		},
		
		"EPlayerRelationship": {
			"prefix": "e_playerRelationship",
			"values": [
				"Unknown",
				"Self",
				"Ally",
				"Neutral",
				"Enemy"
			]
		},
		
		"EEquipmentDisplayFlag": {
			"prefix": "e_equipmentDisplayFlag",
			"values": [
				"Unknown",
				"CollapseBuffed",
				"ExpandUpgraded",
				"DisplayRounded"
			]
		},
		
		"EValueCompare": {
			"prefix": "e_valueCompare",
			"values": [
				"Unknown",
				"Eq",
				"NE",
				"LT",
				"GT",
				"LE",
				"GE"
			]
		},
		
		"EFidget": {
			"prefix": "e_fidget",
			"values": [
				"Unknown",
				"Anim",
				"Idle",
				"Move",
				"Turn"
			]
		},
		
		"EBeacon": {
			"prefix": "e_beacon",
			"values": [
				"Unknown",
				"Army",
				"Defend",
				"Attack",
				"Harass",
				"Idle",
				"Auto",
				"Detect",
				"Scout",
				"Claim",
				"Expand",
				"Rally",
				"Custom1",
				"Custom2",
				"Custom3",
				"Custom4"
			]
		},
		
		"ECustomBuildOpening": {
			"prefix": "e_customBuildOpening",
			"values": [
				"Unknown",
				"Invalid",
				"One",
				"Two",
				"Three",
				"Four",
				"Five"
			]
		},
		
		"ECustomBuildLateGame": {
			"prefix": "e_customBuildLateGame",
			"values": [
				"Unknown",
				"Invalid",
				"One",
				"Two",
				"Three",
				"Four",
				"Five"
			]
		},
		
		"ECustomCombinedBuildList": {
			"prefix": "e_customCombinedBuildList",
			"values": [
				"Unknown",
				"Invalid",
				"StartOpen",
				"OpenOne",
				"OpenTwo",
				"OpenThree",
				"OpenFour",
				"OpenFive",
				"EndOpen",
				"StartLate",
				"LateOne",
				"LateTwo",
				"LateThree",
				"LateFour",
				"LateFive",
				"EndLate"
			]
		},
		
		"EBeaconFlag": {
			"prefix": "e_beaconFlag",
			"values": [
				"Unknown",
				"None",
				"AutoCastOn",
				"AutoCastOff",
				"ClearAll",
				"ClearExtra",
				"CustomBuild",
				"ViewNext",
				"ViewPrev",
				"Dropoff"
			]
		},
		
		"EUnitTaunt": {
			"prefix": "e_unitTaunt",
			"values": [
				"Unknown",
				"Cheer",
				"Dance"
			]
		},
		
		"EDifficultyFlag": {
			"prefix": "e_difficultyFlag",
			"values": [
				"Unknown",
				"TrialAllowed"
			]
		},
		
		"ECliffLevelCompare": {
			"prefix": "e_cliffLevelCompare",
			"values": [
				"Unknown",
				"Lower",
				"Equal",
				"Higher"
			]
		},
		
		"EVitalColor": {
			"prefix": "e_vitalColor",
			"values": [
				"Unknown",
				"Life",
				"Shields",
				"Energy"
			]
		},
		
		"EClassIdCAbil": {
			"prefix": "e_classId",
			"values": [
				"CAbilUnknown",
				"CAbil",
				"CAbilProgress",
				"CAbilEffect",
				"CAbilQueueable",
				"CAbilRedirect",
				"CAbilArmMagazine",
				"CAbilAttack",
				"CAbilAugment",
				"CAbilBattery",
				"CAbilBeacon",
				"CAbilBehavior",
				"CAbilBuild",
				"CAbilBuildable",
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
				"CAbilQueue",
				"CAbilRally",
				"CAbilRedirectInstant",
				"CAbilRedirectTarget",
				"CAbilResearch",
				"CAbilRevive",
				"CAbilSpecialize",
				"CAbilStop",
				"CAbilTrain",
				"CAbilTransport",
				"CAbilWarpable",
				"CAbilWarpTrain"
			]
		},
		
		"EAbilAlignment": {
			"prefix": "e_abilAlignment",
			"values": [
				"Unknown",
				"Neutral",
				"Negative",
				"Positive"
			]
		},
		
		"EAbilCmdFlags": {
			"prefix": "e_abilCmd",
			"values": [
				"Unknown",
				"AllowSelfCast",
				"Hidden",
				"ShowInGlossary",
				"ToSelection"
			]
		},
		
		"EAbilCmdState": {
			"prefix": "e_abilCmdState",
			"values": [
				"Unknown",
				"Available",
				"Restricted",
				"Suppressed"
			]
		},
		
		"EAbilSharedFlag": {
			"prefix": "e_abilSharedFlag",
			"values": [
				"Unknown",
				"DisableWhileDead"
			]
		},
		
		"EAbilTechPlayer": {
			"prefix": "e_abilTechPlayer",
			"values": [
				"Unknown",
				"Owner",
				"Upkeep"
			]
		},
		
		"EAbilArmMagazineEffect": {
			"prefix": "e_abilArmMagEffect",
			"values": [
				"Unknown",
				"Create",
				"Death",
				"Launch",
				"Release"
			]
		},
		
		"EAbilArmMagazineFlag": {
			"prefix": "e_abilArmMagFlag",
			"values": [
				"Unknown",
				"AutoCastOffOwnerLeave",
				"AutoCreate",
				"BestUnit",
				"IgnoreUnitCost",
				"Retarget",
				"ShowStatus",
				"Transient",
				"UnitOrderQueue",
				"WaitForFood"
			]
		},
		
		"EAbilArmMagazineInfoFlag": {
			"prefix": "e_abilArmMagInfoFlag",
			"values": [
				"Unknown",
				"AutoBuild",
				"AutoBuildOn",
				"External"
			]
		},
		
		"EAbilArmMagazineLaunch": {
			"prefix": "e_abilArmMagLaunch",
			"values": [
				"Unknown",
				"FireAtTarget",
				"ReleaseAtSource",
				"ReleaseAtTarget"
			]
		},
		
		"EAbilArmMagazineManage": {
			"prefix": "e_abilArmMagManage",
			"values": [
				"Unknown",
				"Destroy",
				"Ignore",
				"Recall"
			]
		},
		
		"EAbilAttackStage": {
			"prefix": "e_abilAttackStage",
			"values": [
				"Unknown",
				"Approach",
				"Attack",
				"Loiter"
			]
		},
		
		"EAbilAugmentFlag": {
			"prefix": "e_abilAugmentFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"AutoCastOffOwnerLeave",
				"AutoCastOn",
				"BestUnit",
				"Smart"
			]
		},
		
		"EAbilBehaviorFlag": {
			"prefix": "e_abilBehaviorFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"AutoCastOffOwnerLeave",
				"AutoCastOn",
				"BestUnit",
				"Toggle",
				"ToggledOn",
				"Transient"
			]
		},
		
		"EAbilBehaviorStage": {
			"prefix": "e_abilBehaviorStage",
			"values": [
				"Unknown",
				"Untoggled",
				"Toggled"
			]
		},
		
		"EAbilBuildEffect": {
			"prefix": "e_abilBuildEffect",
			"values": [
				"Unknown",
				"Start",
				"Finish",
				"Cancel"
			]
		},
		
		"EAbilBuildFlag": {
			"prefix": "e_abilBuildFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"Cancelable",
				"HomogenousInterrupt",
				"IgnoreFood",
				"IgnoreUnitCost",
				"InstantPlacement",
				"Interruptible",
				"NeutralDetachedAddOn",
				"PeonHide",
				"PeonDisableAbils",
				"PeonDisableCollision",
				"PeonFidgetAcross",
				"PeonKillCancel",
				"PeonKillFinish",
				"PeonMaintained",
				"RangeIncludesBuilding",
				"ShowProgress"
			]
		},
		
		"EAbilBuildStage": {
			"prefix": "e_abilBuildStage",
			"values": [
				"Unknown",
				"Approach",
				"Wait",
				"Construct",
				"Halt",
				"Resume",
				"Finish",
				"Collide"
			]
		},
		
		"EAbilBuildType": {
			"prefix": "e_abilBuildType",
			"values": [
				"Unknown",
				"Normal",
				"AddOn"
			]
		},
		
		"EAbilEffectFlag": {
			"prefix": "e_abilEffectFlag",
			"values": [
				"Unknown",
				"AbortOnAllianceChange",
				"AllowMovement",
				"AutoCast",
				"AutoCastOffOwnerLeave",
				"AutoCastOn",
				"BestUnit",
				"Chase",
				"ClearLastAttackTarget",
				"DeferCooldown",
				"LineMovement",
				"NoDeceleration",
				"RangeUsePathing",
				"ReExecutable",
				"RequireTargetVision",
				"Smart",
				"Transient",
				"TransientPreferred",
				"WaitToSpend",
				"PassengerAcquireExternal",
				"PassengerAcquirePassengers",
				"PassengerAcquireTransport",
				"TransportAcquirePassengers",
				"UpdateChargesOnLevelChange"
			]
		},
		
		"EAbilEffectStage": {
			"prefix": "e_abilEffectStage",
			"values": [
				"Unknown",
				"Approach",
				"Wait",
				"Prep",
				"Cast",
				"Channel",
				"Finish",
				"Bail"
			]
		},
		
		"EAbilHarvestFlag": {
			"prefix": "e_abilHarvestFlag",
			"values": [
				"Unknown",
				"BypassResourceQueue"
			]
		},
		
		"EAbilHarvestStage": {
			"prefix": "e_abilHarvestStage",
			"values": [
				"Unknown",
				"ApproachResource",
				"WaitAtResource",
				"Harvest",
				"WaitToReturn",
				"WaitForDropOff",
				"ApproachDropOff",
				"DropOff"
			]
		},
		
		"EAbilInteractFlag": {
			"prefix": "e_abilInteractFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"BestUnit",
				"Exclusive",
				"SameCliffLevel",
				"ShareControl",
				"ShareVision",
				"Smart"
			]
		},
		
		"EAbilInventoryAlignment": {
			"prefix": "e_abilInventoryAlignment",
			"values": [
				"Unknown",
				"Right",
				"Left"
			]
		},
		
		"EAbilInventoryFlag": {
			"prefix": "e_abilInventoryFlag",
			"values": [
				"Unknown",
				"ItemDeath"
			]
		},
		
		"EAbilLearnFlag": {
			"prefix": "e_abilLearnFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"HideOnMaxLevel",
				"HideOnPointsSpent",
				"Transient",
				"UnitOrderQueue"
			]
		},
		
		"EAbilMergeFlag": {
			"prefix": "e_abilMergeFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"IgnoreUnitCost"
			]
		},
		
		"EAbilMorphEffect": {
			"prefix": "e_abilMorphEffect",
			"values": [
				"Unknown",
				"Start",
				"Finish",
				"Cancel"
			]
		},
		
		"EAbilMorphFlag": {
			"prefix": "e_abilMorphFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"AutoCastIdleOnly",
				"AutoCastOffOwnerLeave",
				"AutoCastOn",
				"Automatic",
				"BestUnit",
				"Birth",
				"DisableAbils",
				"DisableCollision",
				"FastBuild",
				"Interruptible",
				"IgnoreCollision",
				"IgnoreFacing",
				"IgnoreFood",
				"IgnorePlacement",
				"IgnoreUnitCost",
				"MoveBlockers",
				"Produce",
				"Rally",
				"RallyReset",
				"ShowPlaceholder",
				"ShowProgress",
				"SuppressMovement",
				"Transient",
				"WaitUntilStopped"
			]
		},
		
		"EAbilMorphPhase": {
			"prefix": "e_abilMorphPhase",
			"values": [
				"Unknown",
				"Delay",
				"Duration"
			]
		},
		
		"EAbilMorphSection": {
			"prefix": "e_abilMorphSection",
			"values": [
				"Unknown",
				"Abils",
				"Actor",
				"Collide",
				"Facing",
				"Mover",
				"Stats"
			]
		},
		
		"EAbilMorphStage": {
			"prefix": "e_abilMorphStage",
			"values": [
				"Unknown",
				"Approach",
				"Wait",
				"AbilsStart",
				"AbilsEnd",
				"ActorStart",
				"ActorEnd",
				"CollideStart",
				"CollideEnd",
				"FacingStart",
				"FacingEnd",
				"MoverStart",
				"MoverEnd",
				"StatsStart",
				"StatsEnd",
				"UnitStart",
				"UnitEnd"
			]
		},
		
		"EAbilMoveFlag": {
			"prefix": "e_abilMoveFlag",
			"values": [
				"Unknown",
				"ShowIfImmobile"
			]
		},
		
		"EAbilPawnFlag": {
			"prefix": "e_abilPawnFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"Smart"
			]
		},
		
		"EAbilQueueFlag": {
			"prefix": "e_abilQueueFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"Hidden",
				"NotifyAddOn",
				"Passive"
			]
		},
		
		"EAbilRallyFlag": {
			"prefix": "e_abilRallyFlag",
			"values": [
				"Unknown",
				"ShowWhileMerging",
				"ShowWhileWarping"
			]
		},
		
		"EAbilRallyStage": {
			"prefix": "e_abilRallyStage",
			"values": [
				"Unknown",
				"Place"
			]
		},
		
		"EAbilRedirectFlag": {
			"prefix": "e_abilRedirectFlag",
			"values": [
				"Unknown",
				"IncludeSelf"
			]
		},
		
		"EAbilResearchFlag": {
			"prefix": "e_abilResearchFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"Transient",
				"UnitOrderQueue"
			]
		},
		
		"EAbilReviveFlag": {
			"prefix": "e_abilReviveFlag",
			"values": [
				"Unknown",
				"BestUnit",
				"Transient",
				"UnitOrderQueue",
				"WaitForFood"
			]
		},
		
		"EAbilReviveVital": {
			"prefix": "e_abilReviveVital",
			"values": [
				"Unknown",
				"Ignore",
				"Start",
				"Maximum"
			]
		},
		
		"EAbilSpecializeFlag": {
			"prefix": "e_abilSpecializeFlag",
			"values": [
				"Unknown",
				"AutoCastOffOwnerLeave",
				"BestUnit",
				"Transient",
				"UnitOrderQueue"
			]
		},
		
		"EAbilSpecializeInfoFlag": {
			"prefix": "e_abilSpecializeInfoFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"AutoCastOn"
			]
		},
		
		"EAbilStopFlag": {
			"prefix": "e_abilStopFlag",
			"values": [
				"Unknown",
				"HoldFire"
			]
		},
		
		"EAbilTrainFlag": {
			"prefix": "e_abilTrainFlag",
			"values": [
				"Unknown",
				"AutoCastOffOwnerLeave",
				"BestUnit",
				"DisableCollision",
				"IgnoreUnitCost",
				"KillOnCancel",
				"KillOnFinish",
				"Select",
				"Transient",
				"UnitOrderQueue",
				"WaitForFood"
			]
		},
		
		"EAbilTrainInfoFlag": {
			"prefix": "e_abilTrainInfoFlag",
			"values": [
				"Unknown",
				"AutoCast",
				"AutoCastOn"
			]
		},
		
		"EAbilTrainLocation": {
			"prefix": "e_abilTrainLocation",
			"values": [
				"Unknown",
				"Source",
				"Rally"
			]
		},
		
		"EAbilTrainRotation": {
			"prefix": "e_abilTrainRotation",
			"values": [
				"Unknown",
				"Target",
				"Source"
			]
		},
		
		"EAbilTransportFlag": {
			"prefix": "e_abilTransportFlag",
			"values": [
				"Unknown",
				"AllowPassengerSmartCmd",
				"AllowSmartCmd",
				"CargoDeath",
				"IgnoreBlockers",
				"PlayerHold",
				"ShowCargoSize",
				"ShowStatus"
			]
		},
		
		"EAbilWarpTrainFlag": {
			"prefix": "e_abilWarpTrainFlag",
			"values": [
				"Unknown",
				"IgnoreRampTest",
				"IgnoreUnitCost"
			]
		},
		
		"EAbilArmMagazineCmd": {
			"prefix": "e_abilArmMagazineCmd",
			"values": [
				"Unknown",
				"Ammo1",
				"Ammo2",
				"Ammo3",
				"Ammo4",
				"Ammo5",
				"Ammo6",
				"Ammo7",
				"Ammo8",
				"Ammo9",
				"Ammo10",
				"Ammo11",
				"Ammo12",
				"Ammo13",
				"Ammo14",
				"Ammo15",
				"Ammo16",
				"Ammo17",
				"Ammo18",
				"Ammo19",
				"Ammo20"
			]
		},
		
		"EAbilAttackCmd": {
			"prefix": "e_abilAttackCmd",
			"values": [
				"Unknown",
				"Execute"
			]
		},
		
		"EAbilAugmentCmd": {
			"prefix": "e_abilAugmentCmd",
			"values": [
				"Unknown",
				"Execute"
			]
		},
		
		"EAbilBatteryCmd": {
			"prefix": "e_abilBatteryCmd",
			"values": [
				"Unknown",
				"Execute"
			]
		},
		
		"EAbilBeaconCmd": {
			"prefix": "e_abilBeaconCmd",
			"values": [
				"Unknown",
				"Cancel",
				"Move"
			]
		},
		
		"EAbilBehaviorCmd": {
			"prefix": "e_abilBehaviorCmd",
			"values": [
				"Unknown",
				"On",
				"Off"
			]
		},
		
		"EAbilBuildCmd": {
			"prefix": "e_abilBuildCmd",
			"values": [
				"Unknown",
				"Build1",
				"Build2",
				"Build3",
				"Build4",
				"Build5",
				"Build6",
				"Build7",
				"Build8",
				"Build9",
				"Build10",
				"Build11",
				"Build12",
				"Build13",
				"Build14",
				"Build15",
				"Build16",
				"Build17",
				"Build18",
				"Build19",
				"Build20",
				"Build21",
				"Build22",
				"Build23",
				"Build24",
				"Build25",
				"Build26",
				"Build27",
				"Build28",
				"Build29",
				"Build30",
				"Halt"
			]
		},
		
		"EAbilBuildableCmd": {
			"prefix": "e_abilBuildableCmd",
			"values": [
				"Unknown",
				"Cancel",
				"Halt"
			]
		},
		
		"EAbilEffectInstantCmd": {
			"prefix": "e_abilEffectInstantCmd",
			"values": [
				"Unknown",
				"Execute",
				"Cancel"
			]
		},
		
		"EAbilEffectTargetCmd": {
			"prefix": "e_abilEffectTargetCmd",
			"values": [
				"Unknown",
				"Execute",
				"Cancel"
			]
		},
		
		"EAbilHarvestCmd": {
			"prefix": "e_abilHarvestCmd",
			"values": [
				"Unknown",
				"Gather",
				"Return",
				"Cancel"
			]
		},
		
		"EAbilInteractCmd": {
			"prefix": "e_abilInteractCmd",
			"values": [
				"Unknown",
				"Designate"
			]
		},
		
		"EAbilInventoryCmd": {
			"prefix": "e_abilInventoryCmd",
			"values": [
				"Unknown",
				"Drop",
				"Move",
				"Take",
				"ItemInstant",
				"ItemTarget",
				"ItemCancel",
				"PawnInstant"
			]
		},
		
		"EAbilLearnCmd": {
			"prefix": "e_abilLearnCmd",
			"values": [
				"Unknown",
				"Learn1",
				"Learn2",
				"Learn3",
				"Learn4",
				"Learn5",
				"Learn6",
				"Learn7",
				"Learn8",
				"Learn9",
				"Learn10",
				"Learn11",
				"Learn12",
				"Learn13",
				"Learn14",
				"Learn15",
				"Learn16",
				"Learn17",
				"Learn18",
				"Learn19",
				"Learn20"
			]
		},
		
		"EAbilMergeCmd": {
			"prefix": "e_abilMergeCmd",
			"values": [
				"Unknown",
				"SelectedUnits",
				"WithTarget"
			]
		},
		
		"EAbilMorphCmd": {
			"prefix": "e_abilMorphCmd",
			"values": [
				"Unknown",
				"Execute",
				"Cancel"
			]
		},
		
		"EAbilMergeableCmd": {
			"prefix": "e_abilMergeableCmd",
			"values": [
				"Unknown",
				"Cancel"
			]
		},
		
		"EAbilMoveCmd": {
			"prefix": "e_abilMoveCmd",
			"values": [
				"Unknown",
				"Move",
				"Patrol",
				"HoldPos",
				"AcquireMove",
				"Turn"
			]
		},
		
		"EAbilPawnCmd": {
			"prefix": "e_abilPawnCmd",
			"values": [
				"Unknown",
				"Pawn1",
				"Pawn2",
				"Pawn3",
				"Pawn4",
				"Pawn5",
				"Pawn6",
				"Pawn7",
				"Pawn8",
				"Pawn9",
				"Pawn10",
				"Pawn11",
				"Pawn12",
				"Pawn13",
				"Pawn14",
				"Pawn15",
				"Pawn16",
				"Pawn17",
				"Pawn18",
				"Pawn19",
				"Pawn20"
			]
		},
		
		"EAbilQueueCmd": {
			"prefix": "e_abilQueueCmd",
			"values": [
				"Unknown",
				"CancelLast",
				"CancelSlot"
			]
		},
		
		"EAbilRallyCmd": {
			"prefix": "e_abilRallyCmd",
			"values": [
				"Unknown",
				"Rally1",
				"Rally2",
				"Rally3",
				"Rally4"
			]
		},
		
		"EAbilRedirectInstantCmd": {
			"prefix": "e_abilRedirectInstantCmd",
			"values": [
				"Unknown",
				"Execute"
			]
		},
		
		"EAbilRedirectTargetCmd": {
			"prefix": "e_abilRedirectTargetCmd",
			"values": [
				"Unknown",
				"Execute"
			]
		},
		
		"EAbilResearchCmd": {
			"prefix": "e_abilResearchCmd",
			"values": [
				"Unknown",
				"Research1",
				"Research2",
				"Research3",
				"Research4",
				"Research5",
				"Research6",
				"Research7",
				"Research8",
				"Research9",
				"Research10",
				"Research11",
				"Research12",
				"Research13",
				"Research14",
				"Research15",
				"Research16",
				"Research17",
				"Research18",
				"Research19",
				"Research20",
				"Research21",
				"Research22",
				"Research23",
				"Research24",
				"Research25",
				"Research26",
				"Research27",
				"Research28",
				"Research29",
				"Research30"
			]
		},
		
		"EAbilReviveCmd": {
			"prefix": "e_abilReviveCmd",
			"values": [
				"Unknown",
				"Revive1",
				"Revive2",
				"Revive3",
				"Revive4",
				"Revive5",
				"Revive6",
				"Revive7",
				"Revive8",
				"Revive9",
				"Revive10",
				"Revive11",
				"Revive12",
				"Revive13",
				"Revive14",
				"Revive15",
				"Revive16",
				"Revive17",
				"Revive18",
				"Revive19",
				"Revive20",
				"ReviveAtTarget1",
				"ReviveAtTarget2",
				"ReviveAtTarget3",
				"ReviveAtTarget4",
				"ReviveAtTarget5",
				"ReviveAtTarget6",
				"ReviveAtTarget7",
				"ReviveAtTarget8",
				"ReviveAtTarget9",
				"ReviveAtTarget10"
			]
		},
		
		"EAbilSpecializeCmd": {
			"prefix": "e_abilSpecializeCmd",
			"values": [
				"Unknown",
				"Specialize1",
				"Specialize2",
				"Specialize3",
				"Specialize4",
				"Specialize5",
				"Specialize6",
				"Specialize7",
				"Specialize8",
				"Specialize9",
				"Specialize10",
				"Specialize11",
				"Specialize12",
				"Specialize13",
				"Specialize14",
				"Specialize15",
				"Specialize16",
				"Specialize17",
				"Specialize18",
				"Specialize19",
				"Specialize20"
			]
		},
		
		"EAbilStopCmd": {
			"prefix": "e_abilStopCmd",
			"values": [
				"Unknown",
				"Stop",
				"HoldFire",
				"Cheer",
				"Dance"
			]
		},
		
		"EAbilTrainCmd": {
			"prefix": "e_abilTrainCmd",
			"values": [
				"Unknown",
				"Train1",
				"Train2",
				"Train3",
				"Train4",
				"Train5",
				"Train6",
				"Train7",
				"Train8",
				"Train9",
				"Train10",
				"Train11",
				"Train12",
				"Train13",
				"Train14",
				"Train15",
				"Train16",
				"Train17",
				"Train18",
				"Train19",
				"Train20",
				"Train21",
				"Train22",
				"Train23",
				"Train24",
				"Train25",
				"Train26",
				"Train27",
				"Train28",
				"Train29",
				"Train30"
			]
		},
		
		"EAbilTransportCmd": {
			"prefix": "e_abilTransportCmd",
			"values": [
				"Unknown",
				"Load",
				"UnloadAll",
				"UnloadAt",
				"UnloadUnit",
				"LoadAll"
			]
		},
		
		"EAbilWarpableCmd": {
			"prefix": "e_abilWarpableCmd",
			"values": [
				"Unknown",
				"Cancel"
			]
		},
		
		"EAbilWarpTrainCmd": {
			"prefix": "e_abilWarpTrainCmd",
			"values": [
				"Unknown",
				"Train1",
				"Train2",
				"Train3",
				"Train4",
				"Train5",
				"Train6",
				"Train7",
				"Train8",
				"Train9",
				"Train10",
				"Train11",
				"Train12",
				"Train13",
				"Train14",
				"Train15",
				"Train16",
				"Train17",
				"Train18",
				"Train19",
				"Train20"
			]
		},
		
		"EClassIdCAchievement": {
			"prefix": "e_classId",
			"values": [
				"CAchievementUnknown",
				"CAchievement"
			]
		},
		
		"EAchievementFlag": {
			"prefix": "e_achievementFlag",
			"values": [
				"Unknown",
				"Cloaked",
				"Enabled",
				"Finalize",
				"Hidden",
				"Local",
				"Progress",
				"Victory",
				"Callout",
				"Repeatable"
			]
		},
		
		"EAchievementFilter": {
			"prefix": "e_achievementFilter",
			"values": [
				"Unknown",
				"MapMelee",
				"MapSignature",
				"MatchAnonymous",
				"MatchFFA",
				"MatchMulti",
				"MatchNoHandicaps",
				"MatchNoAIBuilds",
				"MatchObserver",
				"MatchParticipant",
				"MatchRanked",
				"MatchSingle"
			]
		},
		
		"EAchievementTagCheck": {
			"prefix": "e_achievementTagCheck",
			"values": [
				"Unknown",
				"Present",
				"Absent"
			]
		},
		
		"EClassIdCAchievementTerm": {
			"prefix": "e_classId",
			"values": [
				"CAchievementTermUnknown",
				"CAchievementTerm",
				"CAchievementTermAbil",
				"CAchievementTermAbilInteract",
				"CAchievementTermAbilLoad",
				"CAchievementTermAbilUse",
				"CAchievementTermAchievement",
				"CAchievementTermBehavior",
				"CAchievementTermBehaviorAbsorbed",
				"CAchievementTermBehaviorCount",
				"CAchievementTermBehaviorElapsed",
				"CAchievementTermBehaviorState",
				"CAchievementTermCombine",
				"CAchievementTermEffect",
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
				"CAchievementTermUnit",
				"CAchievementTermUnitBirth",
				"CAchievementTermUnitDeath",
				"CAchievementTermUnitKills",
				"CAchievementTermUnitRegen",
				"CAchievementTermUnitSupplyLoss"
			]
		},
		
		"EAchievementTermCombine": {
			"prefix": "e_achievementTermCombine",
			"values": [
				"Unknown",
				"StateAdd",
				"ValueAdd",
				"ValueExpand"
			]
		},
		
		"EAchievementTermEvaluate": {
			"prefix": "e_achievementTermEvaluate",
			"values": [
				"Unknown",
				"Always",
				"Attain",
				"Expand",
				"Failed"
			]
		},
		
		"EAchievementTermFlag": {
			"prefix": "e_achievementTermFlag",
			"values": [
				"Unknown",
				"Hidden",
				"Notify",
				"Persist"
			]
		},
		
		"EAchievementTermPrevious": {
			"prefix": "e_achievementTermPrevious",
			"values": [
				"Unknown",
				"Ignore",
				"Add",
				"Expand"
			]
		},
		
		"EClassIdCActor": {
			"prefix": "e_classId",
			"values": [
				"CActorUnknown",
				"CActor",
				"CActorBase",
				"CActorBearings",
				"CActorCamera",
				"CActorModel",
				"CActorQuad",
				"CActorForce",
				"CActorForceLineSegment",
				"CActorBeam",
				"CActorRange",
				"CActorRegion",
				"CActorSite",
				"CActorSiteOp",
				"CActorSiteOpBase",
				"CActorSound",
				"CActorSplat",
				"CActorAction",
				"CActorArc",
				"CActorBeamSimple",
				"CActorBeamStandard",
				"CActorCameraModel",
				"CActorCreep",
				"CActorDoodad",
				"CActorDoodadPreserver",
				"CActorFoliageFXSpawner",
				"CActorEditorCamera",
				"CActorEditorPoint",
				"CActorEventMacro",
				"CActorForceBox",
				"CActorForceConeRoundedEnd",
				"CActorForceCylinder",
				"CActorForceSphere",
				"CActorGlobalConfig",
				"CActorLight",
				"CActorLightOmni",
				"CActorLightSpot",
				"CActorLightModel",
				"CActorLightOmniModel",
				"CActorLightSpotModel",
				"CActorLookAt",
				"CActorList",
				"CActorPortrait",
				"CActorPower",
				"CActorProgress",
				"CActorPropertyCurveSet",
				"CActorQueryResponse",
				"CActorRegionArc",
				"CActorRegionCircle",
				"CActorRegionCombine",
				"CActorRegionGame",
				"CActorRegionPolygon",
				"CActorRegionQuad",
				"CActorRegionWater",
				"CActorScene",
				"CActorSelection",
				"CActorSetQueried",
				"CActorShadow",
				"CActorShield",
				"CActorShieldImpact",
				"CActorSimple",
				"CActorSiteBillboard",
				"CActorSiteMover",
				"CActorSiteRocker",
				"CActorSiteOp2DRotation",
				"CActorSiteOpAction",
				"CActorSiteOpAttach",
				"CActorSiteOpAttachVolume",
				"CActorSiteOpBanker",
				"CActorSiteOpBankerUnit",
				"CActorSiteOpBasic",
				"CActorSiteOpDeathMotion",
				"CActorSiteOpEffect",
				"CActorSiteOpForward",
				"CActorSiteOpHeight",
				"CActorSiteOpHigherOfTerrainAndWater",
				"CActorSiteOpHostBearings",
				"CActorSiteOpHostedOffset",
				"CActorSiteOpIncoming",
				"CActorSiteOpLocalOffset",
				"CActorSiteOpPatch",
				"CActorSiteOpPhysicsImpact",
				"CActorSiteOpRandomPointInCircle",
				"CActorSiteOpRandomPointInCrossbar",
				"CActorSiteOpRandomPointInSphere",
				"CActorSiteOpRotationExplicit",
				"CActorSiteOpRotationRandom",
				"CActorSiteOpRotationVariancer",
				"CActorSiteOpRotator",
				"CActorSiteOpRotationSmooth",
				"CActorSiteOpSelectionOffset",
				"CActorSiteOpSerpentHead",
				"CActorSiteOpSerpentSegment",
				"CActorSiteOpShadow",
				"CActorSiteOpTipability",
				"CActorSiteOpUp",
				"CActorSiteOpZ",
				"CActorSnapshot",
				"CActorStateMonitor",
				"CActorSquib",
				"CActorTerrain",
				"CActorTerrainDeformer",
				"CActorText",
				"CActorTurret",
				"CActorUnit",
				"CActorMissile"
			]
		},
		
		"EActorBaselineType": {
			"prefix": "e_actorBaseline",
			"values": [
				"Unknown",
				"Stand",
				"Walk"
			]
		},
		
		"EActorBaselinePhase": {
			"prefix": "e_actorBaselinePhase",
			"values": [
				"Unknown",
				"StandIntro",
				"Stand",
				"WalkIntro",
				"Walk",
				"WalkOutro"
			]
		},
		
		"EActorFlag": {
			"prefix": "e_actorFlag",
			"values": [
				"Unknown",
				"AddToExternalFinder",
				"SuppressCreationErrors",
				"SuppressSaveLoad"
			]
		},
		
		"EActorDoodadFlag": {
			"prefix": "e_actorDoodadFlag",
			"values": [
				"Unknown",
				"PauseAnimsWhileFogged",
				"FootprintOnly"
			]
		},
		
		"EActorScopeBearingsTrackingType": {
			"prefix": "e_actorScopeBearingsTracking",
			"values": [
				"Unknown",
				"AutomaticBySituation",
				"ForceOn",
				"ForceOff"
			]
		},
		
		"EActorModelFlag": {
			"prefix": "e_actorModelFlag",
			"values": [
				"Unknown",
				"AllowHitTest",
				"AutomateGlobalLoops",
				"IgnoreWalkables",
				"NeedsVolumeMonitoring",
				"SuppressMissingAttachErrors",
				"SuppressPlayerDecals",
				"UpdateVisibility",
				"UseConstSyncSeed",
				"UseSyncSeed",
				"WireframeRender"
			]
		},
		
		"EActorSelectionFlag": {
			"prefix": "e_actorSelectionFlag",
			"values": [
				"Unknown",
				"IsSyncSelection",
				"IsFlash",
				"UseCheapQuadSplat",
				"UseCrescent"
			]
		},
		
		"EActorUnitFlag": {
			"prefix": "e_actorUnitFlag",
			"values": [
				"Unknown",
				"ShowBlobShadow",
				"StandAnimBirthVariation",
				"SuppressCreationErrors",
				"SuppressStandIntro",
				"SuppressWalkIntro",
				"SuppressWalkOutro",
				"SuppressDefaultStatusBar"
			]
		},
		
		"EActorRequestCreateSharing": {
			"prefix": "e_actorRequestCreateSharing",
			"values": [
				"Unknown",
				"None",
				"Always",
				"PerEffectTree"
			]
		},
		
		"EActorSplatHeight": {
			"prefix": "e_actorSplatHeight",
			"values": [
				"Unknown",
				"Normal",
				"MinimumActor",
				"MinimumTerrain"
			]
		},
		
		"EActorEffectLocation": {
			"prefix": "e_actorEffectLocation",
			"values": [
				"Unknown",
				"OriginUnit",
				"OriginPoint",
				"OriginUnitOrPoint",
				"CasterUnit",
				"CasterPoint",
				"CasterUnitOrPoint",
				"SourceUnit",
				"SourcePoint",
				"SourceUnitOrPoint",
				"MissileUnitOrPoint",
				"TargetUnit",
				"TargetPoint",
				"TargetUnitOrPoint",
				"OuterUnit",
				"OuterPoint",
				"OuterUnitOrPoint"
			]
		},
		
		"EActorHostedPropInheritType": {
			"prefix": "e_actorHostedPropInherit",
			"values": [
				"Unknown",
				"None",
				"OneShot",
				"Continuous"
			]
		},
		
		"EActorSiteBillboardType": {
			"prefix": "e_actorSiteOpBillboard",
			"values": [
				"Unknown",
				"Unobstructable",
				"UseTowardsCameraDistance"
			]
		},
		
		"EActorSiteOpActionLocation": {
			"prefix": "e_actorSiteOpAction",
			"values": [
				"Unknown",
				"Center",
				"Impact",
				"Launch"
			]
		},
		
		"EActorSiteOpAttachSource": {
			"prefix": "e_actorSiteOpAttachSource",
			"values": [
				"Unknown",
				"Automatic",
				"Chain",
				"Host"
			]
		},
		
		"EActorSiteOpBasicType": {
			"prefix": "e_actorSiteOpBasic",
			"values": [
				"Unknown",
				"WorldPosition",
				"ActorBearings",
				"ActorPosition",
				"CreatorBearings",
				"CreatorPosition",
				"InitialBearings",
				"ScopeBearings",
				"ScopePosition"
			]
		},
		
		"EActorSiteOpPhysicsImpactType": {
			"prefix": "e_actorSiteOpPhysicsImpact",
			"values": [
				"Unknown",
				"Normal"
			]
		},
		
		"EActorSiteOpTerrainAndWaterFlag": {
			"prefix": "e_actorSiteOpTerrainAndWaterFlag",
			"values": [
				"Unknown",
				"FollowWaves",
				"PassThroughIfNoWater"
			]
		},
		
		"EActorSiteOpRotatorType": {
			"prefix": "e_actorSiteOpRotator",
			"values": [
				"Unknown",
				"AccumulateAndSetRotation",
				"AddRotationChange"
			]
		},
		
		"EActorSiteOpTipabilityFlag": {
			"prefix": "e_actorSiteOpTipabilityFlag",
			"values": [
				"Unknown",
				"NoLowerThanBaseHeight",
				"NoLowerThanScope"
			]
		},
		
		"EActorRadialDistribution": {
			"prefix": "e_actorRadialDistribution",
			"values": [
				"Unknown",
				"Uniform",
				"Exponential",
				"Gaussian"
			]
		},
		
		"EActorCrossbarDistribution": {
			"prefix": "e_actorCrossbarDistribution",
			"values": [
				"Unknown",
				"Uniform",
				"Gaussian",
				"GaussianInverse"
			]
		},
		
		"EActorShieldFlashType": {
			"prefix": "e_actorShieldFlashType",
			"values": [
				"Unknown",
				"Facer",
				"Full",
				"Header",
				"None"
			]
		},
		
		"EActorTransferFlag": {
			"prefix": "e_actorTransferFlag",
			"values": [
				"Unknown",
				"Animator",
				"AnimProps",
				"FOWColor",
				"FOWShader",
				"Model",
				"Position",
				"Rotation",
				"Textures",
				"Status"
			]
		},
		
		"EActorTextAlignment": {
			"prefix": "e_actorTextAlignment",
			"values": [
				"Unknown",
				"Left",
				"Top",
				"Center",
				"Right",
				"Bottom"
			]
		},
		
		"EActorTextOption": {
			"prefix": "e_actorTextOption",
			"values": [
				"Unknown",
				"ConformToTerrain",
				"UseTerrainHeight",
				"UseWalkableHeight"
			]
		},
		
		"EActorOnOffType": {
			"prefix": "e_actor",
			"values": [
				"Unknown",
				"Off",
				"On"
			]
		},
		
		"EActorActionFlag": {
			"prefix": "e_actorActionFlag",
			"values": [
				"Unknown",
				"AlignedImpactsAndDamages",
				"IgnoresShields",
				"ImpactForceSite",
				"LaunchForceSite",
				"VictimRevealsAttacker"
			]
		},
		
		"EActorRangeFlag": {
			"prefix": "e_actorRangeFlag",
			"values": [
				"Unknown",
				"GameWorld",
				"Minimap"
			]
		},
		
		"EActorRegionFlag": {
			"prefix": "e_actorRegionFlag",
			"values": [
				"Unknown",
				"UseEffectRange"
			]
		},
		
		"EActorHeightSourceType": {
			"prefix": "e_actorHeightSource",
			"values": [
				"Unknown",
				"AsyncFast",
				"AsyncPrecise",
				"SyncAir",
				"SyncGround"
			]
		},
		
		"EActorHeightTestType": {
			"prefix": "e_actorHeightTest",
			"values": [
				"Unknown",
				"Average",
				"Highest",
				"Lowest"
			]
		},
		
		"EActorIncomingType": {
			"prefix": "e_actorIncoming",
			"values": [
				"Unknown",
				"Direct",
				"Missile"
			]
		},
		
		"EActorSoundFlag": {
			"prefix": "e_actorSoundFlag",
			"values": [
				"Unknown",
				"UpdateVisibility"
			]
		},
		
		"EActorTerrainDeformerFlag": {
			"prefix": "e_actorTerrainDeformerFlag",
			"values": [
				"Unknown",
				"DestroysFoliage",
				"UseUnitFootprint",
				"RestoreOnHidden",
				"RestoreOnMovement",
				"RestoreOnDestroy"
			]
		},
		
		"EUnitStatusGroup": {
			"prefix": "e_unitStatusGroup",
			"values": [
				"Unknown",
				"Owner",
				"Allied",
				"Enemy",
				"All",
				"Replay"
			]
		},
		
		"EActorProximity": {
			"prefix": "e_actorProximity",
			"values": [
				"Unknown",
				"CenterActor",
				"CenterModelBounds"
			]
		},
		
		"EActorForceFlag": {
			"prefix": "e_actorForceFlag",
			"values": [
				"Unknown",
				"FallOff",
				"Stacks"
			]
		},
		
		"EActorForceField": {
			"prefix": "e_actorForceField",
			"values": [
				"Unknown",
				"Directional",
				"Radial"
			]
		},
		
		"EActorForceDirection": {
			"prefix": "e_actorForceDirection",
			"values": [
				"Unknown",
				"Up",
				"Forward"
			]
		},
		
		"EActorForceOrigin": {
			"prefix": "e_actorForceOrigin",
			"values": [
				"Unknown",
				"AtBottom",
				"AtCenter"
			]
		},
		
		"EActorCombatRevealDurationType": {
			"prefix": "e_actorCombatRevealDuration",
			"values": [
				"Unknown",
				"OneShot",
				"ByVictim"
			]
		},
		
		"ESerpentType": {
			"prefix": "e_serpent",
			"values": [
				"Unknown",
				"Basic",
				"Swimming"
			]
		},
		
		"ESerpentFlag": {
			"prefix": "e_actorSerpentFlag",
			"values": [
				"Unknown",
				"UseAttachDistances"
			]
		},
		
		"EActorTerrainSquibVisualFlag": {
			"prefix": "e_actorTerrainSquibVisualFlag",
			"values": [
				"Unknown",
				"OneShot"
			]
		},
		
		"EMinimapShape": {
			"prefix": "e_minimapShape",
			"values": [
				"Unknown",
				"Quad",
				"Circle"
			]
		},
		
		"EClassIdCActorSupport": {
			"prefix": "e_classId",
			"values": [
				"CActorSupportUnknown"
			]
		},
		
		"EActorMsgType": {
			"prefix": "e_actorMsg",
			"values": [
				"Unknown",
				"NULL",
				"ABSTRACT",
				"Params",
				"Action",
				"Actor",
				"Anim",
				"AnimProps",
				"AttachMethods",
				"BehaviorBase",
				"EffectAction",
				"EffectBase",
				"LookAt",
				"Missile",
				"MotionPhase",
				"Name",
				"RefName",
				"SetFrom",
				"Status",
				"Terrain",
				"Texture",
				"TextureProps",
				"Turret",
				"Unit",
				"WeaponBase",
				"INTERNAL",
				"AnimLoaded",
				"AnimSetSlavedTime",
				"AnimSetResetOtherBlocks",
				"EffectActionCenter",
				"EffectActionCommence",
				"EffectActionImpactUpdate",
				"EffectActionParticipants",
				"FacialPlay",
				"FacialStop",
				"LookAtStart",
				"LookAtStop",
				"MissilePreHost",
				"OverrideAge",
				"QuerySetCaster",
				"SetQueriedSpawn",
				"SetMimicPlayer",
				"SetSelectionColor",
				"SetTeamColorIndex",
				"UpdateTeamColor",
				"UpdateVisibility",
				"SYSTEM",
				"Abil",
				"AbilMorph",
				"AbilRally",
				"AbilTrain",
				"AbilTransport",
				"ActorCopy",
				"ActorCreation",
				"ActorDestruction",
				"ActorOrphan",
				"ActorThink",
				"ActorUpdate",
				"AgeReached",
				"AIUIUpdate",
				"AnimDone",
				"AnimBracketState",
				"AssetPreInit",
				"Behavior",
				"BehaviorLevel",
				"CameraProximityUpdate",
				"Confirmation",
				"Creep",
				"CursorUpdate",
				"DeathModelInitializeDone",
				"EditorMapInitialize",
				"Effect",
				"FlyerHelperChange",
				"GameInitialize",
				"HerdLevel",
				"HerdSpeed",
				"Item",
				"MissileTentacleRetracted",
				"ModelEvent",
				"ModelSwapped",
				"MotionPhaseStart",
				"MotionPhaseStop",
				"MoverArrived",
				"OptionsChange",
				"PhysicsImpact",
				"PhysicsImpactTerrainValidate",
				"PortraitThink",
				"PortraitUpdate",
				"PreSelectionUpdate",
				"ProgressLevel",
				"PropertyCurveDone",
				"RegionSubject",
				"SelectionLocalFlash",
				"SelectionLocalSubgroupUpdate",
				"SelectionLocalUpdate",
				"SelectionSyncFlash",
				"SelectionSyncSubgroupUpdate",
				"SelectionSyncUpdate",
				"SnapshotCreation",
				"SoundDone",
				"SquibChoice",
				"StateChange",
				"StatusOff",
				"StatusOn",
				"SupporterDestruction",
				"TerrainPhysicsMaterialEnter",
				"TerrainPhysicsMaterialLeave",
				"TerrainSquib",
				"TextureUpdate",
				"TimerExpired",
				"TransmissionPlay",
				"TransmissionStop",
				"TurretDisable",
				"TurretEnable",
				"TurretFidget",
				"TurretRotation",
				"TurretRotationUpdate",
				"UnitAttacked",
				"UnitAttacker",
				"UnitBirth",
				"UnitBlipUpdate",
				"UnitCallForHelp",
				"UnitClick",
				"UnitClickLocal",
				"UnitConstruction",
				"UnitCreation",
				"UnitDamaged",
				"UnitDeath",
				"UnitDeathWhileHidden",
				"UnitDeathCustomize",
				"UnitDetectedByViewer",
				"UnitFidget",
				"UnitHeightUpdate",
				"UnitHighlight",
				"UnitHighlightLocal",
				"UnitMovementUpdate",
				"UnitPlayerChange",
				"UnitPoints",
				"UnitPortrait",
				"UnitRefund",
				"UnitRegen",
				"UnitRevive",
				"UnitShrubUpdate",
				"UnitTaunt",
				"Upgrade",
				"WeaponStart",
				"WeaponStop",
				"USER",
				"ActionDamage",
				"ActionDamagePhysics",
				"ActionImpact",
				"ActionImpactPhysics",
				"AliasAdd",
				"AliasDump",
				"AliasRemove",
				"AnimBaselineStart",
				"AnimBaselineStop",
				"AnimBlendTimeApply",
				"AnimBlendTimeRemove",
				"AnimBracketClear",
				"AnimBracketResume",
				"AnimBracketStart",
				"AnimBracketStop",
				"AnimCancelActiveBlends",
				"AnimClear",
				"AnimClearAllBut",
				"AnimClearTimeScaleGlobal",
				"AnimCopy",
				"AnimDumpDB",
				"AnimGlobalLoopsClear",
				"AnimGlobalLoopsStart",
				"AnimGlobalLoopsStop",
				"AnimGroupApply",
				"AnimGroupRemove",
				"AnimGroupRemoveAll",
				"AnimPlay",
				"AnimPlaySequence",
				"AnimSetCompletion",
				"AnimSetDuration",
				"AnimSetLockedAll",
				"AnimSetPaused",
				"AnimSetPausedAll",
				"AnimSetTime",
				"AnimSetTimeScale",
				"AnimSetTimeScaleAbsolute",
				"AnimSetTimeScaleGlobal",
				"AnimSetUserWeight",
				"ArcSetAngle",
				"Attach",
				"AttachDump",
				"AttachModel",
				"AttachModelOffset",
				"AttachOffset",
				"AttachSetBearings",
				"AttachSetBearingsFrom",
				"AttachSetPosition",
				"AttachSetPositionFrom",
				"AttachSetRotation",
				"AttachSetRotationFrom",
				"CameraSetActive",
				"CameraSetClipToBounds",
				"CameraSetEyePosition",
				"CameraSetLink",
				"CameraSetParam",
				"ClearOpacity",
				"ClearScale",
				"ClearTeamColor",
				"ClearTintColor",
				"CombatRevealComplete",
				"Create",
				"CreateCopy",
				"CreepEngulfmentStart",
				"CreepEngulfmentStartTransition",
				"CreepEngulfmentStop",
				"CreepEngulfmentStopTransition",
				"DeathCustomize",
				"DeathCustomsDump",
				"DeathCustomsEnablePhysics",
				"DeathSequencePrepare",
				"DeathSequenceExecute",
				"Destroy",
				"DestroyParticles",
				"DestroyRibbons",
				"DoodadPreserve",
				"ExternalFinderAdd",
				"ExternalFinderRemove",
				"FilterUpdate",
				"ForceSetAngle",
				"ForceSetHeight",
				"ForceSetLength",
				"ForceSetMagnitude",
				"ForceSetRadius",
				"ForceSetWidth",
				"GlowStart",
				"GlowStop",
				"HaloClearColor",
				"HaloSetColor",
				"HaloSetColorFromAllianceType",
				"HaloStart",
				"HaloStop",
				"HostedPropDump",
				"HostedPropDumpAll",
				"HostSetOffset",
				"HostSiteOpsSet",
				"LightSetAmbientOcclusion",
				"LightSetAttenuationStart",
				"LightSetColorMultiplier",
				"LightSetFalloff",
				"LightSetHotspot",
				"LightSetLightOpaque",
				"LightSetLightTransparent",
				"LightSetRange",
				"LightSetShadowCasting",
				"LightSetSpecular",
				"LightSetSpecularColor",
				"ListAdd",
				"ListRemove",
				"MessageThinkActivate",
				"MessageUpdateActivate",
				"MinimapIcon",
				"MinimapIconBackground",
				"MinimapIconBackgroundScale",
				"MinimapIconScale",
				"MinimapTooltip",
				"MissileTentacleReturn",
				"ModelAllowHitTest",
				"ModelEventSuppress",
				"ModelLinkCustomize",
				"ModelSuddenMotionStart",
				"ModelSuddenMotionStop",
				"ModelSwap",
				"MovementTrackingStart",
				"MovementTrackingStop",
				"MoverMove",
				"MoverSetAcceleration",
				"MoverSetDeceleration",
				"MoverSetDestination2D",
				"MoverSetDestinationFrom",
				"MoverSetDestinationH",
				"MoverSetDestinationZ",
				"MoverSetSpeed",
				"MoverSetSpeedMax",
				"MoverStop",
				"MoverStopNow",
				"PhysicsBodyDump",
				"PhysicsImpactCustomize",
				"PhysicsImpactsEnable",
				"PhysicsImpactTerrainReject",
				"PhysicsMatchKeysOrderedDump",
				"PhysicsMatchKeysOrderedSet",
				"PhysicsTerminate",
				"PlayUnitSound",
				"PortraitAnimSetTimeFrom",
				"PortraitCustomize",
				"PreTargetingUpdate",
				"Print",
				"PropertyCurveAdd",
				"PropertyCurveAddLabel",
				"PropertyCurveAddPoint",
				"PropertyCurveStart",
				"PropertyCurveStop",
				"PropertyCurveStopLooping",
				"QueryPersistent",
				"QueryRadius",
				"QueryRegion",
				"RangeUpdate",
				"RefClear",
				"RefCreate",
				"RefDestroy",
				"RefDump",
				"RefNotify",
				"RefSet",
				"RefSetFromActor",
				"RefSetFromMsg",
				"RefSetFromRequest",
				"RefSetRefreshName",
				"RefTableDump",
				"SceneDeathCustomSetSyncPassChance",
				"SceneHaloSetColor",
				"SceneHaloSetEmission",
				"SceneHaloSetWidth",
				"SceneParticlesDestroy",
				"ScenePhysicsImpactSpy",
				"ScenePhysicsInitFailureSpy",
				"ScenePowerShowAll",
				"SceneRibbonsDestroy",
				"SceneStrobeSetCycleLength",
				"SceneStrobeSetFalloff",
				"SceneStrobeSetHeight",
				"SetBearings",
				"SetBearingsFrom",
				"SetBearingsH",
				"SetCastShadows",
				"SetFacing",
				"SetHeight",
				"SetLocalTintColor",
				"SetMinimapVisibility",
				"SetOpacity",
				"SetPhysicsState",
				"SetPosition",
				"SetPosition2D",
				"SetPosition2DH",
				"SetPositionFrom",
				"SetPositionH",
				"SetRenderToTextureEnabled",
				"SetRotation",
				"SetRotationFrom",
				"SetScale",
				"SetScaleAbsolute",
				"SetShowStatusBar",
				"SetSoundSuffix",
				"SetStatusBarOn",
				"SetTeamColor",
				"SetTeamColorBlendPair",
				"SetText",
				"SetTextColor",
				"SetTextLocalized",
				"SetTextSize",
				"SetTintColor",
				"SetTintColorBlendPair",
				"SetTransferOverrideAnim",
				"SetVisibility",
				"SetWalkAnimMoveSpeed",
				"SetZ",
				"Signal",
				"SoundAddDSP",
				"SoundLinkCustomize",
				"SoundSetMuted",
				"SoundSetOffset",
				"SoundSetPaused",
				"SoundSetPitch",
				"SoundSetReverbBalanceDirect",
				"SoundSetReverbBalanceRoom",
				"SoundSetVolume",
				"StatusDecrement",
				"StatusIncrement",
				"StatusSet",
				"StrobeStart",
				"StrobeStop",
				"TakeSnapshot",
				"TerrainPhysicsMaterialOverride",
				"TerrainPhysicsMaterialRestore",
				"TerrainPhysicsReinitialize",
				"TerrainSquibActivateGroup",
				"TerrainSquibDeactivate",
				"TextureDumpDB",
				"TextureDump",
				"TextureGroupApply",
				"TextureGroupApplyGlobal",
				"TextureGroupRemove",
				"TextureGroupRemoveGlobal",
				"TextureResetToDefault",
				"TextureSelectById",
				"TextureSelectByMatch",
				"TextureSelectBySlot",
				"TextureSelectByUpdateLink",
				"TextureSelectDecalByPlayer",
				"TextureVideoEnableTimeOverride",
				"TextureVideoPlay",
				"TextureVideoSetFrame",
				"TextureVideoSetPaused",
				"TextureVideoSetTime",
				"TextureVideoSetTimeAll",
				"TextureVideoStop",
				"TextureVideoStopAll",
				"TimerSet",
				"TimerKill",
				"Transition",
				"UIStatusFlagSet"
			]
		},
		
		"EActorTermType": {
			"prefix": "e_actorTerm",
			"values": [
				"Unknown",
				"NULL",
				"ABSTRACT",
				"Keys",
				"ValidateBase",
				"CONCRETE",
				"AbilCmd",
				"AbilKey",
				"AbilKeyAny",
				"AbilLevel",
				"AbilTrainProduced",
				"AbilTransport",
				"Age",
				"AIUIMode",
				"AnimBaselineState",
				"AnimName",
				"AnimPlayable",
				"AnimPlaying",
				"At",
				"Attach",
				"CanApplyActionPhysics",
				"Cap",
				"CompareField",
				"CreepCanEngulf",
				"CreepEngulfs",
				"CreepIntersects",
				"Death",
				"EffectParent",
				"EffectPeriodIndex",
				"EffectExecuteIndex",
				"Exclude",
				"FlyerHelper",
				"FromEffectTreeDescendant",
				"Game",
				"GameTime",
				"HasAllianceTypeWith",
				"HasStatus",
				"HasScopeFlag",
				"Height",
				"IsDuringReplay",
				"IsKnownAs",
				"IsStatus",
				"IsUnderwater",
				"KilledBy",
				"KilledByEffect",
				"Level",
				"MissileTentacle",
				"MissileTentacleIsReturning",
				"ModelEventName",
				"ModelIsLowQuality",
				"ModelName",
				"ModelSwapFrom",
				"ModelSwapTo",
				"ModelVariation",
				"MorphFrom",
				"MorphTo",
				"MotionPhase",
				"MovementNetOverInterval",
				"MoverLink",
				"Msg",
				"Option",
				"Orphaned",
				"OverkillType",
				"PassChance",
				"PhysicsImpactClassify",
				"PhysicsImpactClassifyCombo",
				"PhysicsImpactCollisionArea",
				"PhysicsImpactDensity",
				"PhysicsImpactEnvironment",
				"PhysicsImpactFromFloating",
				"PhysicsImpactImpulse",
				"PhysicsImpactMaterial",
				"PhysicsImpactMaterialCombo",
				"PhysicsImpactMaterialRelativeHardness",
				"PhysicsImpactParticipantIsKnownAs",
				"PhysicsImpactRelativeApproachSpeed",
				"PlayerHasReward",
				"PortraitActor",
				"PortraitModel",
				"PropertyCurveName",
				"Require",
				"Scope",
				"ScopeContains",
				"Selected",
				"Speed",
				"Squib",
				"StateChanged",
				"StateValid",
				"SubName",
				"SupportedBy",
				"Taunt",
				"TerrainPhysicsMaterial",
				"TerrainPhysicsMaterialAtActor",
				"TextureGroupsGlobal",
				"TextureSlotSatisfiesExpression",
				"TextureUpdateLink",
				"TextureUpdateSlot",
				"TimerName",
				"UnitWalking",
				"ValidateCreationEffect",
				"ValidateEffect",
				"ValidateMorphFrom",
				"ValidateMorphTo",
				"ValidatePlayer",
				"ValidatePortraitUnit",
				"ValidateUnit",
				"ValidateUnitType",
				"ViewerTreatsUnitAs",
				"WeaponTargetAngle",
				"WeaponTargetDistance",
				"WeaponTargetElevation"
			]
		},
		
		"EActorFilter": {
			"prefix": "e_actorFilter",
			"values": [
				"Unknown",
				"Self",
				"Ally",
				"Neutral",
				"Enemy"
			]
		},
		
		"EAnimSetTimeFromSource": {
			"prefix": "e_animSetTimeFrom",
			"values": [
				"Unknown",
				"CloakChangeStart",
				"MorphStart"
			]
		},
		
		"EAnimSetTimeFlag": {
			"prefix": "e_animSetTimeFlag",
			"values": [
				"Unknown",
				"Scaled",
				"TriggerEventsOnScrub"
			]
		},
		
		"EAnimTimeVariantType": {
			"prefix": "e_animTimeVariant",
			"values": [
				"Unknown",
				"AsAutomatic",
				"AsDuration",
				"AsTimeScale",
				"AsTimeScaleAbsolute"
			]
		},
		
		"EAnimTransitionFlag": {
			"prefix": "e_animTransitionFlag",
			"values": [
				"Unknown",
				"Instant"
			]
		},
		
		"EAnimBracketStartFlag": {
			"prefix": "e_animBracketStartFlag",
			"values": [
				"Unknown",
				"ClosingFull",
				"ContentNonLooping",
				"ContentPlayOnce",
				"OpeningPlayForever",
				"Instant"
			]
		},
		
		"EAnimGroupApplyFlag": {
			"prefix": "e_animGroupApplyFlag",
			"values": [
				"Unknown",
				"ClosingFull",
				"Instant"
			]
		},
		
		"EActorBaselineState": {
			"prefix": "e_actorBaselineState",
			"values": [
				"Unknown",
				"Stand",
				"Walk",
				"WalkIntro",
				"WalkMiddle",
				"WalkOutro"
			]
		},
		
		"EActorBlendType": {
			"prefix": "e_actorBlend",
			"values": [
				"Unknown",
				"Bounce",
				"Cycle",
				"OneShot"
			]
		},
		
		"ETextureSelectByUpdateLinkOp": {
			"prefix": "e_textureSelectByUpdateLinkOp",
			"values": [
				"Unknown",
				"Append",
				"Replace"
			]
		},
		
		"ETexturePropsOp": {
			"prefix": "e_texturePropsOp",
			"values": [
				"Unknown",
				"ContainsAll",
				"ContainsAny",
				"Equals"
			]
		},
		
		"ETextureVideoPlayFlag": {
			"prefix": "e_textureVideoPlayFlag",
			"values": [
				"Unknown",
				"Looping",
				"Synced"
			]
		},
		
		"ETextureVideoSoundType": {
			"prefix": "e_textureVideoSound",
			"values": [
				"Unknown",
				"2D",
				"3DAtAttach",
				"3DAtOrigin",
				"None"
			]
		},
		
		"EActorResponseScope": {
			"prefix": "e_actorResponseScope",
			"values": [
				"Unknown",
				"QueryDirector",
				"QuerySubject"
			]
		},
		
		"EActorScopeFlags": {
			"prefix": "e_actorScopeFlag",
			"values": [
				"Unknown",
				"DisableSoundEmitters"
			]
		},
		
		"EActorThresholdTest": {
			"prefix": "e_actorThresholdTest",
			"values": [
				"Unknown",
				"Below",
				"Above"
			]
		},
		
		"EActorRefSpace": {
			"prefix": "e_actorRefSpace",
			"values": [
				"Unknown",
				"Any",
				"Global",
				"Scope",
				"Actor"
			]
		},
		
		"EActorIntersectType": {
			"prefix": "e_actorIntersect",
			"values": [
				"Unknown",
				"AgainstCenter",
				"AgainstRadiusContact",
				"AgainstRadiusGame",
				"AgainstRadiusVisual"
			]
		},
		
		"EActorScopeType": {
			"prefix": "e_actorScope",
			"values": [
				"Unknown",
				"Effect",
				"Portrait",
				"Standalone",
				"Unit",
				"UnitEditor"
			]
		},
		
		"EActorRequestScope": {
			"prefix": "e_actorRequestScope",
			"values": [
				"Unknown",
				"Implicit",
				"Caster",
				"CasterOuter",
				"Effect",
				"Missile",
				"Outer",
				"Source",
				"Target",
				"TargetOuter"
			]
		},
		
		"EActorRequestActor": {
			"prefix": "e_actorRequestActor",
			"values": [
				"Unknown",
				"Implicit",
				"Create",
				"Find"
			]
		},
		
		"EActorHostedProp": {
			"prefix": "e_actorHostedProp",
			"values": [
				"Unknown",
				"BaseModelScale",
				"CastShadows",
				"CloakEffect",
				"CreepEngulfment",
				"Decal",
				"LocalTintColor",
				"Opacity",
				"PhysicsState",
				"Scale",
				"TeamColor",
				"TimeScale",
				"TintColor",
				"Visibility",
				"WarpGroup"
			]
		},
		
		"EActorViewerTreatsAs": {
			"prefix": "e_actorViewerTreatsAs",
			"values": [
				"Unknown",
				"Detected"
			]
		},
		
		"EActorValidateUnitFlag": {
			"prefix": "e_actorValidateUnitFlag",
			"values": [
				"Unknown",
				"IncludeDerivedSnapshot"
			]
		},
		
		"EActorTransitionType": {
			"prefix": "e_actorTransition",
			"values": [
				"Unknown",
				"In",
				"Out"
			]
		},
		
		"EActorEffectScope": {
			"prefix": "e_actorEffectScope",
			"values": [
				"Unknown",
				"Caster",
				"CasterOuter",
				"Effect",
				"Missile",
				"Outer",
				"OuterContainer",
				"Source",
				"SourceInside",
				"SourceOutside",
				"Target",
				"TargetOuter"
			]
		},
		
		"EActorGame": {
			"prefix": "e_actorGame",
			"values": [
				"Unknown",
				"Local",
				"Sync"
			]
		},
		
		"EActorCloakEffect": {
			"prefix": "e_actorCloakEffect",
			"values": [
				"Unknown",
				"None",
				"Ally",
				"Detected",
				"Enemy"
			]
		},
		
		"EActorPropertyCurveType": {
			"prefix": "e_actorPropertyCurve",
			"values": [
				"Unknown",
				"CameraEyePosition",
				"CameraParams",
				"Offset",
				"Position",
				"Rotation",
				"Scale",
				"TeamColor",
				"TintColor",
				"SoundParams"
			]
		},
		
		"EActorPropertyCurveFlag": {
			"prefix": "e_actorPropertyCurveFlag",
			"values": [
				"Unknown",
				"Looping"
			]
		},
		
		"EActorPropertyCurveTangentType": {
			"prefix": "e_actorPropertyCurveTangent",
			"values": [
				"Unknown",
				"Custom",
				"Fast",
				"Flat",
				"Linear",
				"Slow",
				"Smooth",
				"Step",
				"Auto"
			]
		},
		
		"EUIStatusFlagType": {
			"prefix": "e_uiStatusFlagType",
			"values": [
				"Unknown",
				"Incapacitated"
			]
		},
		
		"EUnitStatus": {
			"prefix": "e_unitStatus",
			"values": [
				"Unknown",
				"Shields",
				"Life",
				"Energy",
				"Cargo",
				"Progress",
				"Duration",
				"Magazine",
				"Workers",
				"Custom",
				"Charges",
			]
		},
		
		"EActorDestroyType": {
			"prefix": "e_actorDestroyType",
			"values": [
				"Unknown",
				"Normal",
				"Immediate"
			]
		},
		
		"EFlyerDisplay": {
			"prefix": "e_flyerDisplay",
			"values": [
				"Unknown",
				"None",
				"Selected",
				"All"
			]
		},
		
		"EAIUIMode": {
			"prefix": "e_AIUIMode",
			"values": [
				"Unknown",
				"Hidden",
				"Visible",
				"Selectable"
			]
		},
		
		"EActorPhysicsImpactMember": {
			"prefix": "e_actorPhysicsImpactMember",
			"values": [
				"Unknown",
				"Self",
				"Other"
			]
		},
		
		"EActorPhysicsImpactSpyType": {
			"prefix": "e_actorPhysicsImpactSpy",
			"values": [
				"Unknown",
				"Off",
				"Automatic",
				"TerrainOnly",
				"ModelsOnly"
			]
		},
		
		"EActorPhysicsImpactEnvironment": {
			"prefix": "e_actorPhysicsImpactEnvironment",
			"values": [
				"Unknown",
				"OnLand",
				"Underwater",
				"Any"
			]
		},
		
		"EActorPhysicsImpactMaterialRelativeHardness": {
			"prefix": "e_actorPhysicsImpactMaterialRelativeHardness",
			"values": [
				"Unknown",
				"DontCare",
				"Softer",
				"SofterOrEqual",
				"Equal",
				"HarderOrEqual",
				"Harder"
			]
		},
		
		"EActorPhysicsImpactRangeType": {
			"prefix": "e_actorPhysicsImpactRange",
			"values": [
				"Unknown",
				"DontCare",
				"CollisionArea",
				"Impulse",
				"RelativeApproachSpeed"
			]
		},
		
		"EActorDeathSequenceFlag": {
			"prefix": "e_actorDeathSequenceFlag",
			"values": [
				"Unknown",
				"PreventKill"
			]
		},
		
		"EActorOverkillType": {
			"prefix": "e_actorOverkill",
			"values": [
				"Unknown",
				"DamagePastRemainingHealth",
				"DamageOverInterval"
			]
		},
		
		"EActorOverkillTestType": {
			"prefix": "e_actorOverkillTest",
			"values": [
				"Unknown",
				"PercentageOfMaxLife",
				"PercentageOfMaxLifePlusShields",
				"Fixed"
			]
		},
		
		"EUnitSound": {
			"prefix": "e_unitSound",
			"values": [
				"Unknown",
				"Birth",
				"Ready",
				"Help",
				"What",
				"Yes",
				"Attack",
				"Pissed",
				"Movement",
				"Turning",
				"Board",
				"Construction",
				"Click",
				"ClickError",
				"Highlight"
			]
		},
		
		"EClassIdCAlert": {
			"prefix": "e_classId",
			"values": [
				"CAlertUnknown",
				"CAlert"
			]
		},
		
		"EAlertAction": {
			"prefix": "e_alertAction",
			"values": [
				"Unknown",
				"Flash",
				"Select",
				"Target",
				"View"
			]
		},
		
		"EAlertDisplay": {
			"prefix": "e_alertDisplay",
			"values": [
				"Unknown",
				"Self",
				"Other",
				"Ally",
				"Neutral",
				"Enemy",
				"Observer"
			]
		},
		
		"EAlertFlag": {
			"prefix": "e_alertFlag",
			"values": [
				"Unknown",
				"Combine",
				"Hide",
				"Ping"
			]
		},
		
		"EAlertPeripheral": {
			"prefix": "e_alertPeripheral",
			"values": [
				"Unknown",
				"SelfBaseUnderAttack",
				"AllyBaseUnderAttack",
				"SelfUnitUnderAttack",
				"AllyUnitUnderAttack",
				"BuildingComplete",
				"UpgradeComplete",
				"TrainingComplete",
				"ResourceDepleted",
				"ResourceExhausted",
				"SpecializationComplete",
				"ResearchComplete",
				"WarpInComplete",
				"CalldownLaunch",
				"MorphComplete",
				"TrainComplete",
				"MothershipStart",
				"MothershipComplete",
				"ChronoBoostExpired",
				"LarvaHatched",
				"MULEExpired",
				"SelfUnitDied",
				"SelfUnitRevived",
				"EnemyUnitKilled",
				"EnemyBuildingKilled",
				"TeamLeaderUnderAttack",
				"SelfTownPortalUsed",
				"SelfUnitStunned",
				"SelfUltimateUsed",
				"TeamMercCampTaken",
				"TeamMercCampLost",
				"TeamBossTaken",
				"TeamBossLost"
			]
		},
		
		"EClassIdCArmyCategory": {
			"prefix": "e_classId",
			"values": [
				"CArmyCategoryUnknown",
				"CArmyCategory"
			]
		},
		
		"EArmyCategoryState": {
			"prefix": "e_armyCategoryState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked"
			]
		},
		
		"EArmyCategoryFlag": {
			"prefix": "e_armyCategoryFlag",
			"values": [
				"Unknown",
				"Hidden"
			]
		},
		
		"EClassIdCArmyUnit": {
			"prefix": "e_classId",
			"values": [
				"CArmyUnitUnknown",
				"CArmyUnit"
			]
		},
		
		"EArmyUnitState": {
			"prefix": "e_armyUnitState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked",
				"Purchased",
				"Disabled"
			]
		},
		
		"EClassIdCArmyUpgrade": {
			"prefix": "e_classId",
			"values": [
				"CArmyUpgradeUnknown",
				"CArmyUpgrade"
			]
		},
		
		"EArmyUpgradeState": {
			"prefix": "e_armyUpgradeState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked",
				"Purchased",
				"Disabled"
			]
		},
		
		"EClassIdCAttachMethod": {
			"prefix": "e_classId",
			"values": [
				"CAttachMethodUnknown",
				"CAttachMethod",
				"CAttachMethodArcTest",
				"CAttachMethodFilter",
				"CAttachMethodAttachType",
				"CAttachMethodIncoming",
				"CAttachMethodLeastDeflection",
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
				"CAttachMethodVolumesWeightedPick"
			]
		},
		
		"EAMArcTest": {
			"prefix": "e_amArcTest",
			"values": [
				"Unknown",
				"Weapon",
				"ActionAcquisition"
			]
		},
		
		"EAMFilterLogic": {
			"prefix": "e_amFilterLogic",
			"values": [
				"Unknown",
				"AND",
				"NAND",
				"OR",
				"XOR"
			]
		},
		
		"EAMFilterAttachType": {
			"prefix": "e_amFilterAttachType",
			"values": [
				"Unknown",
				"Any",
				"Point",
				"Volume"
			]
		},
		
		"EAMFilterType": {
			"prefix": "e_amFilterType",
			"values": [
				"Unknown",
				"Absolute",
				"Preference"
			]
		},
		
		"EAMArcTestType": {
			"prefix": "e_amArcTestType",
			"values": [
				"Unknown",
				"Absolute",
				"Preference",
				"FallbackToClosestOnArc"
			]
		},
		
		"EAMNumericField": {
			"prefix": "e_amNumericField",
			"values": [
				"Unknown",
				"RadiusTarget",
				"RadiusShield"
			]
		},
		
		"EAMNumericFieldOp": {
			"prefix": "e_amNumericFieldOp",
			"values": [
				"Unknown",
				"GreaterThan",
				"GreaterThanOrEqual",
				"Equals",
				"LessThan",
				"LessThanOrEqual"
			]
		},
		
		"EAMOccupancyLogic": {
			"prefix": "e_amOccupancyLogic",
			"values": [
				"Unknown",
				"RequireAny",
				"RequireNone",
				"PreferAny",
				"PreferNone"
			]
		},
		
		"EAMPatternType": {
			"prefix": "e_amPatternType",
			"values": [
				"Unknown",
				"Stripe",
				"Bounce"
			]
		},
		
		"EAMReductionType": {
			"prefix": "e_amReductionType",
			"values": [
				"Unknown",
				"Fixed",
				"Percentage"
			]
		},
		
		"EAMRandomDistribution": {
			"prefix": "e_amRandomDistribution",
			"values": [
				"Unknown",
				"Uniform",
				"Exponential"
			]
		},
		
		"EAMAttachType": {
			"prefix": "e_amAttachType",
			"values": [
				"Unknown",
				"HasKeywords",
				"NoKeywords"
			]
		},
		
		"EClassIdCBankCondition": {
			"prefix": "e_classId",
			"values": [
				"CBankConditionUnknown",
				"CBankCondition",
				"CBankConditionCompare",
				"CBankConditionCompareValueCount",
				"CBankConditionCompareValueInteger",
				"CBankConditionCompareValueString",
				"CBankConditionCompareValueSum",
				"CBankConditionCombine",
				"CBankConditionCurrentMap"
			]
		},
		
		"EBankConditionCombine": {
			"prefix": "e_bankConditionCombine",
			"values": [
				"Unknown",
				"And",
				"Or"
			]
		},
		
		"EClassIdCBeam": {
			"prefix": "e_classId",
			"values": [
				"CBeamUnknown",
				"CBeam",
				"CBeamSync",
				"CBeamSyncSweeper",
				"CBeamAsync",
				"CBeamAsyncLinear",
				"CBeamAsyncShadow"
			]
		},
		
		"EClassIdCBehavior": {
			"prefix": "e_classId",
			"values": [
				"CBehaviorUnknown",
				"CBehavior",
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
				"CBehaviorVeterancy",
				"CBehaviorWander"
			]
		},
		
		"EBehaviorCategory": {
			"prefix": "e_behaviorCategory",
			"values": [
				"Unknown",
				"Permanent",
				"Restorable",
				"Temporary"
			]
		},
		
		"EBehaviorFlag": {
			"prefix": "e_behaviorFlag",
			"values": [
				"Unknown",
				"Permanent",
				"IgnoreInEditor",
				"EnabledWhileDead"
			]
		},
		
		"EBehaviorBuff": {
			"prefix": "e_behaviorBuff",
			"values": [
				"Unknown",
				"Channeled",
				"Channeling",
				"Countdown",
				"Extend",
				"DisableWhileUnderConstruction",
				"RemoveDamageResponseExhausted",
				"RefreshStack",
				"UpdateDurationWhileDisabled"
			]
		},
		
		"EBehaviorBuffReplace": {
			"prefix": "e_behaviorBuffReplace",
			"values": [
				"Unknown",
				"ShortestDuration",
				"FarthestDistance"
			]
		},
		
		"EConjoinedFlag": {
			"prefix": "e_conjoinedFlag",
			"values": [
				"Unknown",
				"ShareLife",
				"ShareShields",
				"ShareEnergy",
				"ShareVisible",
				"ShareAcquire",
				"ShareSelect"
			]
		},
		
		"EBehaviorDisplay": {
			"prefix": "e_behaviorDisplay",
			"values": [
				"Unknown",
				"Self",
				"Ally",
				"Neutral",
				"Enemy"
			]
		},
		
		"EBehaviorInfoFlag": {
			"prefix": "e_behaviorInfoFlag",
			"values": [
				"Unknown",
				"Hidden"
			]
		},
		
		"EBehaviorResourceFlag": {
			"prefix": "e_behaviorResourceFlag",
			"values": [
				"Unknown",
				"HideHarvesters",
				"RemoveWhenEmpty"
			]
		},
		
		"EBehaviorAlignment": {
			"prefix": "e_behaviorAlignment",
			"values": [
				"Unknown",
				"Neutral",
				"Positive",
				"Negative"
			]
		},
		
		"EBehaviorModify": {
			"prefix": "e_behaviorModify",
			"values": [
				"Unknown",
				"DisableAbils",
				"EnableAttack",
				"EnableMove",
				"Movement",
				"Reveal",
				"Detected",
				"ShareSight",
				"SuppressMoving",
				"SuppressTurning",
				"Warpable",
				"HideChangeUI",
				"OrdersUninterruptible"
			]
		},
		
		"EBehaviorState": {
			"prefix": "e_behaviorState",
			"values": [
				"Unknown",
				"Bury",
				"Cloak",
				"GenerateThreat",
				"Hallucination",
				"Invulnerable",
				"Benign",
				"Passive",
				"RevealProgress",
				"Stasis",
				"Stun",
				"Summoned",
				"SuppressAttack",
				"SuppressBuildOn",
				"SuppressCloak",
				"SuppressCollision",
				"SuppressCombat",
				"SuppressDetection",
				"SuppressDropOff",
				"SuppressFidgeting",
				"SuppressFoodMade",
				"SuppressFoodUsed",
				"SuppressInvulnerability",
				"SuppressPassenger",
				"SuppressRadar",
				"SuppressRequirements",
				"SuppressTech",
				"SuppressThreat",
				"SuppressLife",
				"SuppressShields",
				"SuppressEnergy",
				"SuppressLifeRegen",
				"SuppressShieldsRegen",
				"SuppressEnergyRegen",
				"NoDraw",
				"TransientMorph",
				"Uncommandable",
				"Undetectable",
				"Unradarable",
				"Unselectable",
				"Unstoppable",
				"Untargetable",
				"LineMovement",
				"Detector",
				"Radar"
			]
		},
		
		"EBehaviorPowerUserFlag": {
			"prefix": "e_behaviorPowerUserFlag",
			"values": [
				"Unknown",
				"DisplayPower",
				"KillIfUnpowered",
				"LevelFromSourceCount"
			]
		},
		
		"EBehaviorSpawnFlag": {
			"prefix": "e_behaviorSpawnFlag",
			"values": [
				"Unknown",
				"HideCount",
				"IgnoreMorph",
				"KillSpawnedOnDeath"
			]
		},
		
		"EBehaviorVeterancyFlag": {
			"prefix": "e_behaviorVeterancyFlag",
			"values": [
				"Unknown",
				"CombineNumericModifications",
				"CombineXP",
				"MaxLevelLeech"
			]
		},
		
		"EBehaviorVeterancyXP": {
			"prefix": "e_behaviorVeterancyXP",
			"values": [
				"Unknown",
				"DamageDealt",
				"DamageTaken",
				"Kills"
			]
		},
		
		"EDamageLocation": {
			"prefix": "e_damageLocation",
			"values": [
				"Unknown",
				"Attacker",
				"Defender"
			]
		},
		
		"EBehaviorRate": {
			"prefix": "e_behaviorRate",
			"values": [
				"Unknown",
				"Charge",
				"Cooldown",
				"Morph",
				"Progress",
				"Queueable",
				"Spawn",
				"Creep"
			]
		},
		
		"EBehaviorHeight": {
			"prefix": "e_behaviorHeight",
			"values": [
				"Unknown",
				"Start",
				"Stop"
			]
		},
		
		"EClassIdCButton": {
			"prefix": "e_classId",
			"values": [
				"CButtonUnknown",
				"CButton"
			]
		},
		
		"EButtonTooltipFlag": {
			"prefix": "e_buttonTooltipFlag",
			"values": [
				"Unknown",
				"ShowName",
				"ShowHotkey",
				"ShowLevel",
				"ShowResources",
				"ShowSupply",
				"ShowUsage",
				"ShowTime",
				"ShowCooldown",
				"ShowRange",
				"ShowRadius",
				"ShowDuration",
				"ShowRequirements",
				"ShowAutocast"
			]
		},
		
		"EClassIdCCamera": {
			"prefix": "e_classId",
			"values": [
				"CCameraUnknown",
				"CCamera"
			]
		},
		
		"ECameraMode": {
			"prefix": "e_cameraMode",
			"values": [
				"Unknown",
				"Normal",
				"Follow"
			]
		},
		
		"ECameraParam": {
			"prefix": "e_cameraParam",
			"values": [
				"Unknown",
				"FieldOfView",
				"NearClip",
				"FarClip",
				"ShadowClip",
				"Distance",
				"Pitch",
				"Yaw",
				"Roll",
				"HeightOffset",
				"DepthOfField",
				"FocalDepth",
				"FalloffStart",
				"FalloffEnd"
			]
		},
		
		"ECameraHeightMap": {
			"prefix": "e_cameraHeightMap",
			"values": [
				"Unknown",
				"Air",
				"Camera"
			]
		},
		
		"EClassIdCCharacter": {
			"prefix": "e_classId",
			"values": [
				"CCharacterUnknown",
				"CCharacter"
			]
		},
		
		"ECharacterGender": {
			"prefix": "e_characterGender",
			"values": [
				"Unknown",
				"Female",
				"Male"
			]
		},
		
		"ECharacterRace": {
			"prefix": "e_characterRace",
			"values": [
				"Unknown",
				"Protoss",
				"Terran",
				"Zerg",
				"XelNaga"
			]
		},
		
		"ECharacterRelevance": {
			"prefix": "e_characterRelevance",
			"values": [
				"Unknown",
				"Major",
				"Medium",
				"Minor"
			]
		},
		
		"EClassIdCCliff": {
			"prefix": "e_classId",
			"values": [
				"CCliffUnknown",
				"CCliff"
			]
		},
		
		"EClassIdCCliffMesh": {
			"prefix": "e_classId",
			"values": [
				"CCliffMeshUnknown",
				"CCliffMesh"
			]
		},
		
		"EClassIdCConversation": {
			"prefix": "e_classId",
			"values": [
				"CConversationUnknown",
				"CConversation"
			]
		},
		
		"EConversationSelectionMethod": {
			"prefix": "e_conversationSelectionMethod",
			"values": [
				"Unknown",
				"All",
				"Multiple",
				"Sequence",
				"Random"
			]
		},
		
		"EConversationProductionLevel": {
			"prefix": "e_conversationProductionLevel",
			"values": [
				"Unknown",
				"0",
				"1",
				"2",
				"3",
				"4"
			]
		},
		
		"EConversationProductionLevelFlag": {
			"prefix": "e_conversationProductionLevelFlag",
			"values": [
				"Unknown",
				"Locked"
			]
		},
		
		"EConversationConditionCheck": {
			"prefix": "e_conversationConditionCheck",
			"values": [
				"Unknown",
				"All",
				"Any"
			]
		},
		
		"EClassIdCConversationState": {
			"prefix": "e_classId",
			"values": [
				"CConversationStateUnknown",
				"CConversationState"
			]
		},
		
		"EConversationStateFlag": {
			"prefix": "e_conversationStateFlag",
			"values": [
				"Unknown",
				"AllowConditions",
				"AllowActions",
				"Sorted"
			]
		},
		
		"EConversationStateObject": {
			"prefix": "e_conversationStateObject",
			"values": [
				"Unknown",
				"Speaker",
				"Listener",
				"Camera"
			]
		},
		
		"EConversationStateInfo": {
			"prefix": "e_conversationStateInfo",
			"values": [
				"Unknown",
				"Text",
				"Value",
				"Model",
				"Upgrade",
				"AbilCmd"
			]
		},
		
		"EConversationConditionOp": {
			"prefix": "e_conversationConditionOp",
			"values": [
				"Unknown",
				"Equal",
				"NotEqual",
				"Less",
				"LessEqual",
				"Greater",
				"GreaterEqual"
			]
		},
		
		"EConversationActionOp": {
			"prefix": "e_conversationActionOp",
			"values": [
				"Unknown",
				"Set",
				"Add",
				"Subtract"
			]
		},
		
		"EClassIdCCursor": {
			"prefix": "e_classId",
			"values": [
				"CCursorUnknown",
				"CCursor"
			]
		},
		
		"EClassIdCDSP": {
			"prefix": "e_classId",
			"values": [
				"CDSPUnknown",
				"CDSP",
				"CDSPChorus",
				"CDSPCompressor",
				"CDSPDistortion",
				"CDSPEcho",
				"CDSPFlange",
				"CDSPHighPass",
				"CDSPLowPass",
				"CDSPLowPassSimple",
				"CDSPNormalize",
				"CDSPOscillator",
				"CDSPParamEQ",
				"CDSPPitchShift",
				"CDSPReverb"
			]
		},
		
		"EOscillator": {
			"prefix": "e_oscillator",
			"values": [
				"Unknown",
				"Sine",
				"Square",
				"SawUp",
				"SawDown",
				"Triangle",
				"Noise"
			]
		},
		
		"EClassIdCEffect": {
			"prefix": "e_classId",
			"values": [
				"CEffectUnknown",
				"CEffect",
				"CEffectResponse",
				"CEffectApplyBehavior",
				"CEffectApplyForce",
				"CEffectCancelOrder",
				"CEffectCreateHealer",
				"CEffectCreatePersistent",
				"CEffectCreateUnit",
				"CEffectDamage",
				"CEffectDestroyHealer",
				"CEffectDestroyPersistent",
				"CEffectEnumArea",
				"CEffectEnumMagazine",
				"CEffectEnumTransport",
				"CEffectIssueOrder",
				"CEffectLaunchMissile",
				"CEffectModifyPlayer",
				"CEffectModifyUnit",
				"CEffectRedirectMissile",
				"CEffectReleaseMagazine",
				"CEffectRemoveBehavior",
				"CEffectReturnMagazine",
				"CEffectSet",
				"CEffectSwitch",
				"CEffectTeleport",
				"CEffectTransferBehavior",
				"CEffectUseCalldown",
				"CEffectUseMagazine"
			]
		},
		
		"EEffectRevealFlag": {
			"prefix": "e_effectRevealFlag",
			"values": [
				"Unknown",
				"Unfog",
				"Detect",
				"Radar",
				"LoS",
				"Permanent"
			]
		},
		
		"EEffectCombine": {
			"prefix": "e_effectCombine",
			"values": [
				"Unknown",
				"And",
				"Or"
			]
		},
		
		"EEffectApplyBehaviorFlag": {
			"prefix": "e_effectApplyBehaviorFlag",
			"values": [
				"Unknown",
				"UseDuration"
			]
		},
		
		"EEffectCancelOrderFlag": {
			"prefix": "e_effectCancelOrderFlag",
			"values": [
				"Unknown",
				"Active",
				"Queued",
				"Uninterruptible"
			]
		},
		
		"ECreatePersistent": {
			"prefix": "e_createPersistent",
			"values": [
				"Unknown",
				"Channeled",
				"Channeling",
				"EffectSuccess",
				"EffectFailure",
				"OrphanParams",
				"RandomEffect",
				"RandomOffset",
				"RandomPeriod",
				"PersistUntilDestroyed"
			]
		},
		
		"ECreateUnit": {
			"prefix": "e_createUnit",
			"values": [
				"Unknown",
				"Birth",
				"DropOff",
				"OffsetByRadius",
				"Placement",
				"PlacementIgnoreBlockers",
				"PlacementIgnoreCliffTest",
				"Precursor",
				"ProvideFood",
				"SetFacing",
				"SelectControlGroups",
				"TechComplete",
				"UseFood"
			]
		},
		
		"EDamageVisibility": {
			"prefix": "e_damageVisibility",
			"values": [
				"Unknown",
				"Hidden",
				"Snapshot",
				"Visible"
			]
		},
		
		"EDamageFlag": {
			"prefix": "e_damageFlag",
			"values": [
				"Unknown",
				"Live",
				"Kill",
				"Notification",
				"NoKillCredit",
				"NoLeech",
				"NoGain",
				"NoScaledDealtBonus",
				"NoFractionDealtBonus",
				"NoUnscaledDealtBonus",
				"NoDealtMaximum",
				"NoDealtMinimum",
				"NoBehaviorResponse",
				"NoVitalAbsorbLife",
				"NoVitalAbsorbShields",
				"NoVitalAbsorbEnergy",
				"NoVitalLeechLife",
				"NoVitalLeechShields",
				"NoVitalLeechEnergy",
				"NoVitalGainLife",
				"NoVitalGainShields",
				"NoVitalGainEnergy"
			]
		},
		
		"EDamageSound": {
			"prefix": "e_damageSound",
			"values": [
				"Unknown",
				"Launch",
				"Impact"
			]
		},
		
		"EDamageTotal": {
			"prefix": "e_damageTotal",
			"values": [
				"Unknown",
				"Maximum",
				"Minimum",
				"Combine"
			]
		},
		
		"EEffectHealerFlag": {
			"prefix": "e_effectHealerFlag",
			"values": [
				"Unknown",
				"Channeled",
				"Channeling"
			]
		},
		
		"EEffectMissile": {
			"prefix": "e_effectMissile",
			"values": [
				"Unknown",
				"2D",
				"Channeled",
				"Placement",
				"PlacementIgnoreBlockers",
				"PlacementIgnoreCliffTest",
				"PointFallback",
				"Retarget",
				"Return",
				"Transfer",
				"TravelValidation",
				"ValidateAbil",
				"ValidateWeapon"
			]
		},
		
		"EMoverPatternType": {
			"prefix": "e_moverPatternType",
			"values": [
				"Unknown",
				"Stripe",
				"Bounce"
			]
		},
		
		"EEffectModify": {
			"prefix": "e_effectModify",
			"values": [
				"Unknown",
				"Copy",
				"Owner",
				"Hide",
				"Show",
				"Mimic",
				"NullifyMissile",
				"Salvage",
				"CopyAutoCast"
			]
		},
		
		"EEffectTeleport": {
			"prefix": "e_effectTeleport",
			"values": [
				"Unknown",
				"TestCliff",
				"TestFog",
				"TestZone"
			]
		},
		
		"EResponseFlag": {
			"prefix": "e_responseFlag",
			"values": [
				"Unknown",
				"Acquire",
				"Flee"
			]
		},
		
		"ENotifyAreaFlag": {
			"prefix": "e_notifyAreaFlag",
			"values": [
				"Unknown",
				"HelpFriend",
				"HurtFriend",
				"HurtEnemy",
				"OnlyWorkers",
				"MinorDanger"
			]
		},
		
		"EEffectRedirectMissile": {
			"prefix": "e_effectRedirectMissile",
			"values": [
				"Unknown",
				"OriginalValidation"
			]
		},
		
		"EClassIdCError": {
			"prefix": "e_classId",
			"values": [
				"CErrorUnknown"
			]
		},
		
		"ECmdResult": {
			"prefix": "e_cmd",
			"values": [
				"Unknown",
				"OKPlaceholder",
				"NotSupportedPlaceholder",
				"Error",
				"CantQueueThatOrder",
				"Retry",
				"Cooldown",
				"QueueIsFull",
				"RallyQueueIsFull",
				"NotEnoughMinerals",
				"NotEnoughVespene",
				"NotEnoughTerrazine",
				"NotEnoughCustom",
				"NotEnoughFood",
				"FoodUsageImpossible",
				"NotEnoughLife",
				"NotEnoughShields",
				"NotEnoughEnergy",
				"LifeSuppressed",
				"ShieldsSuppressed",
				"EnergySuppressed",
				"NotEnoughCharges",
				"CantAddMoreCharges",
				"TooMuchMinerals",
				"TooMuchVespene",
				"TooMuchTerrazine",
				"TooMuchCustom",
				"TooMuchFood",
				"TooMuchLife",
				"TooMuchShields",
				"TooMuchEnergy",
				"MustTargetUnitWithLife",
				"MustTargetUnitWithShields",
				"MustTargetUnitWithEnergy",
				"CantTrade",
				"CantSpend",
				"CantTargetThatUnit",
				"CouldntAllocateUnit",
				"UnitCantMove",
				"BuildTechRequirementsNotMet",
				"CantFindPlacementLocation",
				"CantBuildOnThat",
				"CantBuildTooCloseToDropOff",
				"CantBuildLocationInvalid",
				"CantSeeBuildLocation",
				"CantBuildTooCloseToCreepSource",
				"CantBuildTooCloseToResources",
				"CantBuildTooFarFromWater",
				"CantBuildTooFarFromCreepSource",
				"CantBuildTooFarFromBuildPowerSource",
				"CantBuildOnDenseTerrain",
				"CantTrainTooFarFromTrainPowerSource",
				"CantLandLocationInvalid",
				"CantSeeLandLocation",
				"CantLandTooCloseToCreepSource",
				"CantLandTooCloseToResources",
				"CantLandTooFarFromWater",
				"CantLandTooFarFromCreepSource",
				"CantLandTooFarFromBuildPowerSource",
				"CantLandTooFarFromTrainPowerSource",
				"CantLandOnDenseTerrain",
				"AddOnTooFarFromBuilding",
				"MustBuildRefineryFirst",
				"BuildingIsUnderConstruction",
				"CantFindDropOff",
				"CantLoadOtherPlayersUnits",
				"NotEnoughRoomToLoadUnit",
				"CantUnloadUnitsThere",
				"CantWarpInUnitsThere",
				"CantLoadImmobileUnits",
				"CantRechargeImmobileUnits",
				"CantRechargeUnderConstructionUnits",
				"CantLoadThatUnit",
				"NoCargoToUnload",
				"NotWhileOccupied",
				"CantAttackWithoutAmmo",
				"CantHoldAnyMoreAmmo",
				"TechRequirementsNotMet",
				"MustLockdownUnitFirst",
				"MustTargetUnit",
				"MustTargetInventory",
				"MustTargetVisibleUnit",
				"MustTargetVisibleLocation",
				"MustTargetWalkableLocation",
				"MustTargetPawnableUnit",
				"YouCantControlThatUnit",
				"YouCantIssueCommandsToThatUnit",
				"MustTargetResources",
				"RequiresHealTarget",
				"RequiresRepairTarget",
				"NoItemsToDrop",
				"CantHoldAnyMoreItems",
				"CantHoldThat",
				"TargetHasNoInventory",
				"CantDropThisItem",
				"CantMoveThisItem",
				"CantPawnThisUnit",
				"MustTargetCaster",
				"CantTargetCaster",
				"MustTargetOuter",
				"CantTargetOuter",
				"MustTargetYourOwnUnits",
				"CantTargetYourOwnUnits",
				"MustTargetFriendlyUnits",
				"CantTargetFriendlyUnits",
				"MustTargetNeutralUnits",
				"CantTargetNeutralUnits",
				"MustTargetEnemyUnits",
				"CantTargetEnemyUnits",
				"MustTargetAirUnits",
				"CantTargetAirUnits",
				"MustTargetGroundUnits",
				"CantTargetGroundUnits",
				"MustTargetStructures",
				"CantTargetStructures",
				"MustTargetLightUnits",
				"CantTargetLightUnits",
				"MustTargetArmoredUnits",
				"CantTargetArmoredUnits",
				"MustTargetBiologicalUnits",
				"CantTargetBiologicalUnits",
				"MustTargetHeroicUnits",
				"CantTargetHeroicUnits",
				"MustTargetRoboticUnits",
				"CantTargetRoboticUnits",
				"MustTargetMechanicalUnits",
				"CantTargetMechanicalUnits",
				"MustTargetPsionicUnits",
				"CantTargetPsionicUnits",
				"MustTargetMassiveUnits",
				"CantTargetMassiveUnits",
				"MustTargetMissile",
				"CantTargetMissile",
				"MustTargetWorkerUnits",
				"CantTargetWorkerUnits",
				"MustTargetEnergyCapableUnits",
				"CantTargetEnergyCapableUnits",
				"MustTargetShieldCapableUnits",
				"CantTargetShieldCapableUnits",
				"MustTargetFlyers",
				"CantTargetFlyers",
				"MustTargetBuriedUnits",
				"CantTargetBuriedUnits",
				"MustTargetCloakedUnits",
				"CantTargetCloakedUnits",
				"MustTargetUnitsInAStasisField",
				"CantTargetUnitsInAStasisField",
				"MustTargetUnderConstructionUnits",
				"CantTargetUnderConstructionUnits",
				"MustTargetDeadUnits",
				"CantTargetDeadUnits",
				"MustTargetRevivableUnits",
				"CantTargetRevivableUnits",
				"MustTargetHiddenUnits",
				"CantTargetHiddenUnits",
				"CantRechargeOtherPlayersUnits",
				"MustTargetHallucinations",
				"CantTargetHallucinations",
				"MustTargetInvulnerableUnits",
				"CantTargetInvulnerableUnits",
				"MustTargetDetectedUnits",
				"CantTargetDetectedUnits",
				"CantTargetUnitWithEnergy",
				"CantTargetUnitWithShields",
				"MustTargetUncommandableUnits",
				"CantTargetUncommandableUnits",
				"MustTargetPreventDefeatUnits",
				"CantTargetPreventDefeatUnits",
				"MustTargetPreventRevealUnits",
				"CantTargetPreventRevealUnits",
				"MustTargetPassiveUnits",
				"CantTargetPassiveUnits",
				"MustTargetStunnedUnits",
				"CantTargetStunnedUnits",
				"MustTargetSummonedUnits",
				"CantTargetSummonedUnits",
				"MustTargetUnstoppableUnits",
				"CantTargetUnstoppableUnits",
				"CantLockdown",
				"CantMindControl",
				"MustTargetDestructibles",
				"CantTargetDestructibles",
				"MustTargetItems",
				"CantTargetItems",
				"NoCalldownAvailable",
				"WaypointListFull",
				"MustTargetRace",
				"CantTargetRace",
				"MustTargetSimilarUnits",
				"CantTargetSimilarUnits",
				"CantFindEnoughTargets",
				"AlreadySpawningLarva",
				"CantTargetExhaustedResources",
				"CantUseMinimap",
				"CantUseInfoPanel",
				"OrderQueueIsFull",
				"CantHarvestThatResource",
				"HarvestersNotRequired",
				"AlreadyTargeted",
				"CantAttackWeaponsDisabled",
				"CouldntReachTarget",
				"TargetIsOutOfRange",
				"TargetIsTooClose",
				"TargetIsOutOfArc",
				"CantFindTeleportLocation",
				"InvalidItemClass",
				"CantFindCancelOrder"
			]
		},
		
		"EClassIdCFootprint": {
			"prefix": "e_classId",
			"values": [
				"CFootprintUnknown",
				"CFootprint"
			]
		},
		
		"EFootprintFlag": {
			"prefix": "e_footprintFlag",
			"values": [
				"Unknown",
				"CheckAll"
			]
		},
		
		"EFootprintLayer": {
			"prefix": "e_footprintLayer",
			"values": [
				"Unknown",
				"Check",
				"Place",
				"Pathing"
			]
		},
		
		"EFootprintShapeMode": {
			"prefix": "e_footprintShapeMode",
			"values": [
				"Unknown",
				"Regular",
				"Overlay",
				"Persist"
			]
		},
		
		"EClassIdCFoW": {
			"prefix": "e_classId",
			"values": [
				"CFoWUnknown",
				"CFoW"
			]
		},
		
		"EClassIdCGameUI": {
			"prefix": "e_classId",
			"values": [
				"CGameUIUnknown",
				"CGameUI"
			]
		},
		
		"ESelectionColor": {
			"prefix": "e_selectionColor",
			"values": [
				"Unknown",
				"Subgroup",
				"Selected",
				"Ally",
				"Enemy"
			]
		},
		
		"EUnitColorStyle": {
			"prefix": "e_unitColorStyle",
			"values": [
				"Unknown",
				"Normal",
				"OverrideMinimap",
				"OverrideWorld"
			]
		},
		
		"EOverrideColor": {
			"prefix": "e_overrideColor",
			"values": [
				"Unknown",
				"Self",
				"Ally",
				"Hostile",
				"Neutral"
			]
		},
		
		"EPointType": {
			"prefix": "e_point",
			"values": [
				"Unknown",
				"Normal",
				"StartLoc",
				"BlockPathing",
				"SoundEmitter",
				"ThreeD",
				"NoFlyZone"
			]
		},
		
		"EGameUIString": {
			"prefix": "e_gameUIString",
			"values": [
				"Unknown",
				"AbilsColon",
				"AbilsDisabled",
				"Active",
				"AIAllies",
				"All",
				"Allies",
				"Armor",
				"ArmorColon",
				"ArmySelect",
				"AssignedHarvesters",
				"AttacksColon",
				"AtUnit",
				"AttackSpeedColon",
				"AttackSpeedSlow",
				"AttackSpeedNormal",
				"AttackSpeedFast",
				"AttackSuppressed",
				"AutocastActivate",
				"AutocastDeactivate",
				"AvailableColon",
				"Average",
				"BattleChatConversationSentFormat",
				"BattleChatPartySentFormat",
				"BattleChatPrivateSentFormat",
				"BattleChatConversationReceivedFormat",
				"BattleChatPartyReceivedFormat",
				"BattleChatPrivateReceivedFormat",
				"BeaconMode",
				"BehaviorsColon",
				"BonusColon",
				"BonusVersus",
				"Building",
				"BuildTime",
				"CanAttackAny",
				"CanAttackAir",
				"CanAttackGround",
				"CancelUnit",
				"Cloaked",
				"Computer",
				"ControlGroup",
				"ConversationFormat",
				"CooldownColon",
				"CooldownRemainingColon",
				"CountColon",
				"DamageColon",
				"DamageDealtColon",
				"DamageDealtMaximumColon",
				"DamageDealtMinimumColon",
				"DamageDealtScaledColon",
				"DamageDealtUnscaledColon",
				"DamageVersusColon",
				"DefensiveShieldColon",
				"DetectionSuppressed",
				"Detector",
				"DetectorColon",
				"DurationColon",
				"Energy",
				"EnergyColon",
				"EnergyRateColon",
				"ExperienceColon",
				"Flyer",
				"IdleWorkerColon",
				"InProgress",
				"Instant",
				"InventoryPawn",
				"InventoryPickup",
				"InventoryUse",
				"Invulnerable",
				"Killed",
				"Kills",
				"KillsColon",
				"LevelColon",
				"LevelNumber",
				"Life",
				"LifeArmorColon",
				"LifeColon",
				"LifeRateColon",
				"LocalPlayer",
				"Melee",
				"MinimumRangeColon",
				"MoveSpeedColon",
				"MoveSpeedImmobile",
				"MoveSpeedSlow",
				"MoveSpeedNormal",
				"MoveSpeedFast",
				"NextLevelColon",
				"Observers",
				"Party",
				"Peak",
				"PeriodColon",
				"PowerColon",
				"Private",
				"Pylon",
				"QueueCountColon",
				"QueueSizeColon",
				"Queued",
				"RadarColon",
				"RadarSuppressed",
				"RadiusColon",
				"RangeColon",
				"Ranged",
				"RankColon",
				"Referees",
				"RemainingColon",
				"RemainingPattern",
				"RequirementsColon",
				"RequirementsOr",
				"Revealed",
				"ShieldArmorColon",
				"ShieldRateColon",
				"Shields",
				"ShieldsColon",
				"SightColon",
				"SightMaximumColon",
				"SightMinimumColon",
				"SightShared",
				"Small",
				"Spectators",
				"SpeedColon",
				"Spell",
				"Splash",
				"Stasis",
				"SupplyMadeColon",
				"SupplyUsedColon",
				"TargetAny",
				"TargetAir",
				"TargetGround",
				"TargetsColon",
				"ThisLevelColon",
				"Total",
				"TypeColon",
				"UnitsProducedColon",
				"UnknownString",
				"Unpowered",
				"UnloadCargo",
				"UpgradesProducedColon",
				"UpgradesAtColon",
				"VisionSuppressed",
				"VitalDamageGainColon",
				"VitalDamageLeechColon",
				"WeaponsDisabledColon",
				"WeaponsEnabledColon",
				"WeaponSpeedColon"
			]
		},
		
		"ECameraSave": {
			"prefix": "e_cameraSave",
			"values": [
				"Unknown",
				"0",
				"1",
				"2",
				"3",
				"4",
				"5",
				"6",
				"7"
			]
		},
		
		"EHotkey": {
			"prefix": "e_hotkey",
			"values": [
				"Unknown",
				"FPS",
				"Music",
				"Sound",
				"PTT",
				"ChatAll",
				"ChatAllies",
				"ChatCancel",
				"ChatDefault",
				"ChatIndividual",
				"ChatRecipient",
				"ChatSend",
				"DialogDismiss",
				"MenuAchievements",
				"MenuGame",
				"MenuMessages",
				"MenuHelp",
				"MenuSocial",
				"LeaderNone",
				"LeaderResources",
				"LeaderIncome",
				"LeaderSpending",
				"LeaderUnits",
				"LeaderStructures",
				"LeaderUnitsLost",
				"LeaderProduction",
				"LeaderUpgrades",
				"LeaderArmy",
				"LeaderAPM",
				"LeaderCPM",
				"ObserveAllPlayers",
				"ObserveAutoCamera",
				"ObserveClearSelection",
				"ObserveCommentator",
				"ObservePlayer0",
				"ObservePlayer1",
				"ObservePlayer2",
				"ObservePlayer3",
				"ObservePlayer4",
				"ObservePlayer5",
				"ObservePlayer6",
				"ObservePlayer7",
				"ObservePlayer8",
				"ObservePlayer9",
				"ObservePlayer10",
				"ObservePlayer11",
				"ObservePlayer12",
				"ObservePlayer13",
				"ObservePlayer14",
				"ObservePlayer15",
				"ObservePreview",
				"ObserveSelected",
				"ObserveStatusBars",
				"NamePanel",
				"StatPanelResources",
				"StatPanelArmySupply",
				"StatPanelUnitsLost",
				"StatPanelAPM",
				"StatPanelCPM",
				"ToggleVersusModeSides",
				"ToggleWorldPanel",
				"ConversationSkipOne",
				"CinematicSkip",
				"AICommunication",
				"AIArmy",
				"AIScout",
				"AIDetect",
				"AIExpand",
				"AIBuild",
				"AIClearAll",
				"AIDelete",
				"AIExit",
				"AICancel",
				"AlertRecall",
				"ArmySelect",
				"CameraCenter",
				"CameraFollow",
				"CameraMoveUp",
				"CameraMoveDown",
				"CameraMoveLeft",
				"CameraMoveRight",
				"CameraTurnLeft",
				"CameraTurnRight",
				"CameraZoomFirst",
				"CameraZoomLast",
				"CameraZoomNext",
				"CameraZoomPrev",
				"CameraPush",
				"ControlGroupAppend0",
				"ControlGroupAppend1",
				"ControlGroupAppend2",
				"ControlGroupAppend3",
				"ControlGroupAppend4",
				"ControlGroupAppend5",
				"ControlGroupAppend6",
				"ControlGroupAppend7",
				"ControlGroupAppend8",
				"ControlGroupAppend9",
				"ControlGroupAssign0",
				"ControlGroupAssign1",
				"ControlGroupAssign2",
				"ControlGroupAssign3",
				"ControlGroupAssign4",
				"ControlGroupAssign5",
				"ControlGroupAssign6",
				"ControlGroupAssign7",
				"ControlGroupAssign8",
				"ControlGroupAssign9",
				"ControlGroupRecall0",
				"ControlGroupRecall1",
				"ControlGroupRecall2",
				"ControlGroupRecall3",
				"ControlGroupRecall4",
				"ControlGroupRecall5",
				"ControlGroupRecall6",
				"ControlGroupRecall7",
				"ControlGroupRecall8",
				"ControlGroupRecall9",
				"GameSpeedDec",
				"GameSpeedInc",
				"GameTooltipsOn",
				"HeroSelect0",
				"HeroSelect1",
				"HeroSelect2",
				"HeroSelect3",
				"HeroSelect4",
				"HeroSelect5",
				"HeroSelect6",
				"HeroSelect7",
				"IdleWorker",
				"InventoryButtonAlt0",
				"InventoryButtonAlt1",
				"InventoryButtonAlt2",
				"InventoryButtonAlt3",
				"InventoryButtonAlt4",
				"InventoryButtonAlt5",
				"InventoryButtonAlt6",
				"InventoryButtonAlt7",
				"InventoryButtonUseSelf0",
				"InventoryButtonUseSelf1",
				"InventoryButtonUseSelf2",
				"InventoryButtonUseSelf3",
				"InventoryButtonUseSelf4",
				"InventoryButtonUseSelf5",
				"InventoryButtonUseSelf6",
				"InventoryButtonUseSelf7",
				"InventoryButtonUse0",
				"InventoryButtonUse1",
				"InventoryButtonUse2",
				"InventoryButtonUse3",
				"InventoryButtonUse4",
				"InventoryButtonUse5",
				"InventoryButtonUse6",
				"InventoryButtonUse7",
				"MinimapColors",
				"MinimapPing",
				"MinimapTargetingView",
				"MinimapNormalView",
				"MinimapTerrain",
				"PauseGame",
				"Ping",
				"QuickPing",
				"QuickSave",
				"ReplayPlayPause",
				"ReplayRestart",
				"ReplaySkipBack",
				"ReplaySkipNext",
				"ReplaySpeedDec",
				"ReplaySpeedInc",
				"ReplayStop",
				"ReplayHide",
				"Screenshot",
				"SelectionCancelDrag",
				"Selection",
				"SmartCommand",
				"StatusAll",
				"StatusOwner",
				"StatusAlly",
				"StatusEnemy",
				"SubgroupNext",
				"SubgroupPrev",
				"TargetCancel",
				"TargetChoose",
				"TeamResources",
				"TownCamera",
				"VideoRecord",
				"WarpIn",
				"CommandButtonSelf00",
				"CommandButtonSelf01",
				"CommandButtonSelf02",
				"CommandButtonSelf03",
				"CommandButtonSelf04",
				"CommandButtonSelf05",
				"CommandButtonSelf06",
				"CommandButtonSelf07",
				"CommandButtonSelf08",
				"CommandButtonSelf09",
				"CommandButtonSelf10",
				"CommandButtonSelf11",
				"CommandButtonSelf12",
				"CommandButtonSelf13",
				"CommandButtonSelf14",
				"CommandButton00",
				"CommandButton01",
				"CommandButton02",
				"CommandButton03",
				"CommandButton04",
				"CommandButton05",
				"CommandButton06",
				"CommandButton07",
				"CommandButton08",
				"CommandButton09",
				"CommandButton10",
				"CommandButton11",
				"CommandButton12",
				"CommandButton13",
				"CommandButton14",
				"CameraSave0",
				"CameraSave1",
				"CameraSave2",
				"CameraSave3",
				"CameraSave4",
				"CameraSave5",
				"CameraSave6",
				"CameraSave7",
				"CameraView0",
				"CameraView1",
				"CameraView2",
				"CameraView3",
				"CameraView4",
				"CameraView5",
				"CameraView6",
				"CameraView7",
				"UIEditorToggle",
				"UIEditorReload",
				"UIEditorSaveSelected",
				"UIEditorSaveAll",
				"UIEditorUndo",
				"UIEditorRedo",
				"UIEditorDeselect",
				"UIEditorShowInfoTooltip",
				"UIEditorToggleVisible",
				"UIEditorHoverControls",
				"UIEditorLockInfoTooltip",
				"UIEditorOutlineAnchors",
				"UIEditorIncreaseGridSpacing",
				"UIEditorDecreaseGridSpacing",
				"UIEditorSize720x406",
				"UIEditorSize800x600",
				"UIEditorSize1024x768",
				"UIEditorSize1280x1024",
				"UIEditorSize1280x960",
				"UIEditorSize1280x720",
				"UIEditorSize1680x1050",
				"UIEditorSize1400x1050",
				"UIEditorSize1920x1200",
				"UIEditorSize1920x1080",
				"UIEditorSize1600x1200",
				"UIEditorSize2048x1536",
				"UIEditorSize2560x1600",
				"UIEditorSize2560x2048",
				"UIEditorSize4096x2560",
				"UIEditorSize4096x2304",
				"UIEditorSize4096x3072"
			]
		},
		
		"EMercenaryPortraitTintColor": {
			"prefix": "e_mercenaryPortraitTintColor",
			"values": [
				"Unknown",
				"Available",
				"Purchased",
				"InsufficientCredits"
			]
		},
		
		"EGameCategoryUsage": {
			"prefix": "e_gameCategoryUsage",
			"values": [
				"Unknown",
				"Arcade",
				"Melee",
				"MeleeStrict"
			]
		},
		
		"EGameVariantOption": {
			"prefix": "e_gameVariantOption",
			"values": [
				"Unknown",
				"Custom",
				"Premade",
				"FreeForAll",
				"Coop",
				"Default"
			]
		},
		
		"ECameraShakeRotation": {
			"prefix": "e_cameraShakeRotation",
			"values": [
				"Unknown",
				"Yaw",
				"Pitch",
				"Roll"
			]
		},
		
		"EPathLocation": {
			"prefix": "e_pathLocation",
			"values": [
				"Unknown",
				"World",
				"Minimap"
			]
		},
		
		"ESoundQualityFlag": {
			"prefix": "e_soundQualityFlag",
			"values": [
				"Unknown",
				"Herds"
			]
		},
		
		"EStatusDisplay": {
			"prefix": "e_statusDisplay",
			"values": [
				"Unknown",
				"None",
				"Targeting",
				"Selected",
				"Damaged",
				"All"
			]
		},
		
		"EClassIdCHerd": {
			"prefix": "e_classId",
			"values": [
				"CHerdUnknown",
				"CHerd"
			]
		},
		
		"EHerdClosestTo": {
			"prefix": "e_herdClosestTo",
			"values": [
				"Unknown",
				"Listener",
				"Camera"
			]
		},
		
		"EClassIdCHerdNode": {
			"prefix": "e_classId",
			"values": [
				"CHerdNodeUnknown",
				"CHerdNode"
			]
		},
		
		"EClassIdCHero": {
			"prefix": "e_classId",
			"values": [
				"CHeroUnknown",
				"CHero"
			]
		},
		
		"EHeroState": {
			"prefix": "e_heroState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked"
			]
		},
		
		"EHeroAbilCategoryState": {
			"prefix": "e_heroAbilCategoryState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked"
			]
		},
		
		"EClassIdCHeroAbil": {
			"prefix": "e_classId",
			"values": [
				"CHeroAbilUnknown",
				"CHeroAbil"
			]
		},
		
		"EHeroAbilState": {
			"prefix": "e_heroAbilState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked",
				"New"
			]
		},
		
		"EClassIdCHeroStat": {
			"prefix": "e_classId",
			"values": [
				"CHeroStatUnknown",
				"CHeroStat"
			]
		},
		
		"EHeroStatState": {
			"prefix": "e_heroStatState",
			"values": [
				"Unknown",
				"Downgrade",
				"Unchanged",
				"Upgrade"
			]
		},
		
		"EClassIdCItem": {
			"prefix": "e_classId",
			"values": [
				"CItemUnknown",
				"CItem",
				"CItemAbil",
				"CItemEffect",
				"CItemEffectInstant",
				"CItemEffectTarget"
			]
		},
		
		"EItemFlag": {
			"prefix": "e_itemFlag",
			"values": [
				"Unknown",
				"CanDrop",
				"DropOnDeath",
				"EnabledWhileDead",
				"KillWhenDepleted"
			]
		},
		
		"EItemEffectFlag": {
			"prefix": "e_itemEffectFlag",
			"values": [
				"Unknown",
				"Transient"
			]
		},
		
		"EClassIdCItemClass": {
			"prefix": "e_classId",
			"values": [
				"CItemClassUnknown",
				"CItemClass"
			]
		},
		
		"EClassIdCItemContainer": {
			"prefix": "e_classId",
			"values": [
				"CItemContainerUnknown",
				"CItemContainer"
			]
		},
		
		"EClassIdCLight": {
			"prefix": "e_classId",
			"values": [
				"CLightUnknown",
				"CLight"
			]
		},
		
		"EGameTimeEvent": {
			"prefix": "e_gameTimeEvent",
			"values": [
				"Unknown",
				"Dawn",
				"Dusk"
			]
		},
		
		"EDirectionalLight": {
			"prefix": "e_directionalLight",
			"values": [
				"Unknown",
				"Key",
				"Fill",
				"Back"
			]
		},
		
		"ELightParam": {
			"prefix": "e_lightParam",
			"values": [
				"Unknown",
				"HDRExposure",
				"HDRBloomThreshold",
				"HDRAmbientMultiplier",
				"HDRDiffuseMultiplier",
				"HDRWhitePoint",
				"HDRSpecMultiplier",
				"HDREmisMultiplier",
				"HDRGain",
				"HDRScale",
				"TerrainSpecularExp",
				"TerrainHDRDiffuse",
				"TerrainHDRSpecular",
				"CreepSpecularExp",
				"CreepHDRDiffuseMultiplier",
				"CreepHDRSpecMultiplier",
				"CreepHDREmisMultiplier",
				"ColorizationInputLow",
				"ColorizationInputHigh",
				"ColorizationInputGamma",
				"ColorizationOutputLow",
				"ColorizationOutputHigh",
				"ColorizationBrightness",
				"ColorizationContrast",
				"ColorizationHue",
				"ColorizationSaturation",
				"ColorizationLightness",
				"ColorizationBlend",
				"SSAOOcclusionRadius",
				"SSAONoOcclusion",
				"SSAOFullOcclusion",
				"SSAOOcclusionPower",
				"SSAODetailOcclusionRadius",
				"SSAODetailNoOcclusion",
				"SSAODetailFullOcclusion",
				"SSAODetailOcclusionPower"
			]
		},
		
		"ETonemapRegionTypes": {
			"prefix": "e_tr",
			"values": [
				"Unknown",
				"Dark",
				"Midtone",
				"Highlight"
			]
		},
		
		"EVariationCommands": {
			"prefix": "e_hc",
			"values": [
				"Unknown",
				"MoreGreen",
				"MoreYellow",
				"MoreCyan",
				"MoreRed",
				"MoreBlue",
				"MoreMagenta",
				"Lighter",
				"Darker",
				"LessSaturation",
				"MoreSaturation"
			]
		},
		
		"EClassIdCLocation": {
			"prefix": "e_classId",
			"values": [
				"CLocationUnknown",
				"CLocation"
			]
		},
		
		"EMissionState": {
			"prefix": "e_missionState",
			"values": [
				"Unknown",
				"Locked",
				"Unlocked",
				"Hidden",
				"Complete"
			]
		},
		
		"EClassIdCLoot": {
			"prefix": "e_classId",
			"values": [
				"CLootUnknown",
				"CLoot",
				"CLootSpawn",
				"CLootEffect",
				"CLootItem",
				"CLootSet",
				"CLootUnit"
			]
		},
		
		"EClassIdCMap": {
			"prefix": "e_classId",
			"values": [
				"CMapUnknown",
				"CMap"
			]
		},
		
		"EMapKind": {
			"prefix": "e_mapKind",
			"values": [
				"Unknown",
				"Mission",
				"Story",
				"Upgrade"
			]
		},
		
		"EClassIdCModel": {
			"prefix": "e_classId",
			"values": [
				"CModelUnknown",
				"CModel",
				"CModelFoliage"
			]
		},
		
		"EModelFlag": {
			"prefix": "e_modelFlag",
			"values": [
				"Unknown",
				"AdjustTerrain",
				"AOData",
				"AutoUnload",
				"Download",
				"DynamicZChanger",
				"Facial",
				"FreezeParticlesAndRibbonsOnAnimPause",
				"ForcePortraitModel",
				"ForceTextureSearch",
				"FOW",
				"GrowBoundsByElements",
				"Ignorable",
				"IgnoreAspectRatioScale",
				"ParticipatesInRagdollOnRagdollCollisions",
				"PreventedWhenPhysicsPerformanceConstrained",
				"ShowCreepEngulfmentEvenOnLow",
				"TeenSafe",
				"VariationFallback",
				"Wait"
			]
		},
		
		"EAnimLoadFlag": {
			"prefix": "e_animLoadFlag",
			"values": [
				"Unknown",
				"Override"
			]
		},
		
		"EBoneID": {
			"prefix": "e_bone",
			"values": [
				"Unknown",
				"Bone_Chest",
				"Bone_Chest Y",
				"Bone_Chest Z",
				"Bone_Face",
				"Bone_Leg Left",
				"Bone_Leg Left Front",
				"Bone_Leg Left Rear",
				"Bone_Leg Right",
				"Bone_Leg Right Front",
				"Bone_Leg Right Rear",
				"Bone_Turret",
				"Bone_Turret 00",
				"Bone_Turret 01",
				"Bone_Turret 02",
				"Bone_Turret 03",
				"Bone_Turret 04",
				"Bone_Turret 05",
				"Bone_Turret 06",
				"Bone_Turret 07",
				"Bone_Turret 08",
				"Bone_Turret 09",
				"Bone_Turret Main",
				"Bone_Turret Main Y",
				"Bone_Turret Main Z",
				"Bone_Turret Y",
				"Bone_Turret Z"
			]
		},
		
		"EAnimProp": {
			"prefix": "e_animProp",
			"values": [
				"Unknown",
				"IGNORE",
				"Default",
				"Stand",
				"A",
				"B",
				"C",
				"D",
				"E",
				"F",
				"G",
				"H",
				"I",
				"J",
				"K",
				"L",
				"M",
				"N",
				"O",
				"P",
				"Q",
				"R",
				"S",
				"T",
				"U",
				"V",
				"W",
				"X",
				"Y",
				"Z",
				"Zero",
				"One",
				"Two",
				"Three",
				"Four",
				"Five",
				"Six",
				"Seven",
				"Eight",
				"Nine",
				"Alternate",
				"Attached",
				"Attack",
				"Back",
				"Birth",
				"Blast",
				"Blink",
				"Block",
				"Build",
				"Burrow",
				"Channel",
				"Cloak",
				"Close",
				"Click",
				"Complex",
				"Corrupted",
				"Cover",
				"Creep",
				"Custom",
				"Dance",
				"Dead",
				"Death",
				"Detect",
				"Dialogue",
				"Disintegrate",
				"Dominant",
				"Double",
				"Eat",
				"Electrocute",
				"End",
				"Enemy",
				"Equal",
				"Eviscerate",
				"Far",
				"Fast",
				"Fidget",
				"Fire",
				"Flail",
				"Fling",
				"Fly",
				"Forward",
				"Freeze",
				"Gather",
				"GLbirth",
				"GLdeath",
				"GLdead",
				"GLstand",
				"Glow",
				"Highlight",
				"Hover",
				"Inferior",
				"Jump",
				"Kill",
				"Land",
				"Large",
				"Left",
				"Listen",
				"Lighting",
				"Load",
				"Medium",
				"Morph",
				"NearImpact",
				"Penetrate",
				"Pickup",
				"Placement",
				"Portrait",
				"Pose",
				"Ready",
				"Reload",
				"Restart",
				"Right",
				"Run",
				"Scared",
				"Shield",
				"Silentkill",
				"Simple",
				"Slow",
				"Small",
				"Spell",
				"Squish",
				"Standup",
				"Start",
				"Superior",
				"Talk",
				"Taunt",
				"Thrown",
				"Turbo",
				"Turn",
				"Unburrow",
				"Unload",
				"Unpowered",
				"Victory",
				"Walk",
				"Work",
				"Wounded",
				"Angry",
				"Happy",
				"Sad",
				"AngryEyes",
				"ClosedEyes",
				"FearEyes",
				"HappyEyes",
				"NeutralEyes",
				"SadEyes",
				"SeriousEyes",
				"SurpriseEyes",
				"Arm",
				"Chest",
				"Eye",
				"Leg",
				"Adjutant",
				"Dehaka",
				"Evomaster",
				"Horner",
				"Kerrigan",
				"Lasarra",
				"Raynor",
				"Stukov",
				"Valerian",
				"Zagara",
				"Protoss",
				"Terran",
				"Zerg",
				"Alternateex",
				"Berserk",
				"Bone",
				"Chain",
				"Complete",
				"Critical",
				"Decay",
				"Defend",
				"Drain",
				"EatTree",
				"Entangle",
				"Fill",
				"Flesh",
				"Gold",
				"Hit",
				"Light",
				"Looping",
				"Lumber",
				"Moderate",
				"Off",
				"Puke",
				"Severe",
				"Slam",
				"Spiked",
				"Spin",
				"StageFirst",
				"StageSecond",
				"StageThird",
				"StageFourth",
				"StageFifth",
				"Swim",
				"Throw",
				"Upgrade",
				"00",
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"11",
				"12",
				"13",
				"14",
				"15",
				"16",
				"17",
				"18",
				"19",
				"20",
				"21",
				"22",
				"23",
				"24",
				"25",
				"26",
				"27",
				"28",
				"29",
				"30",
				"31",
				"32",
				"33",
				"34",
				"35",
				"36",
				"37",
				"38",
				"39",
				"40",
				"41",
				"42",
				"43",
				"44",
				"45",
				"46",
				"47",
				"48",
				"49",
				"50",
				"51",
				"52",
				"53",
				"54",
				"55",
				"56",
				"57",
				"58",
				"59",
				"60",
				"61",
				"62",
				"63",
				"64",
				"65",
				"66",
				"67",
				"68",
				"69",
				"70",
				"71",
				"72",
				"73",
				"74",
				"75",
				"76",
				"77",
				"78",
				"79",
				"80",
				"81",
				"82",
				"83",
				"84",
				"85",
				"86",
				"87",
				"88",
				"89",
				"90",
				"91",
				"92",
				"93",
				"94",
				"95",
				"96",
				"97",
				"98",
				"99",
				"VariationEnd"
			]
		},
		
		"EAttachmentID": {
			"prefix": "e_attach",
			"values": [
				"Unknown",
				"Pos_SetLocation",
				"Pos_SetLocation 01",
				"Pos_SetLocation 02",
				"Pos_SetLocation 03",
				"Pos_SetLocation 04",
				"Pos_SetLocation 05",
				"Pos_SetLocation 06",
				"Pos_SetLocation 07",
				"Pos_SetLocation 08",
				"Pos_SetLocation 09",
				"Pos_SetLocation 10",
				"Pos_SetLocation 11",
				"Pos_SetLocation 12",
				"Pos_SetLocation 13",
				"Pos_SetLocation 14",
				"Pos_SetLocation 15",
				"Pos_RaynorToTychus",
				"Pos_TychusToRaynor",
				"Pos_RaynorToHorner",
				"Pos_HornerToRaynor",
				"Pos_RaynorToHanson",
				"Pos_HansonToRaynor",
				"Pos_RaynorToTosh",
				"Pos_ToshToRaynor",
				"Pos_RaynorToSwann",
				"Pos_SwannToRaynor",
				"Pos_RaynorToAdjutant",
				"Pos_AdjutantToRaynor",
				"Pos_Raynor",
				"Pos_Tychus",
				"Pos_Horner",
				"Pos_Hanson",
				"Pos_Swann",
				"Pos_Adjutant",
				"Pos_JessicaHall",
				"Pos_MarcusCade",
				"Pos_Warfield",
				"Pos_Hill",
				"Pos_Merc03",
				"Pos_Tosh",
				"Pos_Firebat",
				"Pos_SiegeTank",
				"Pos_Dropship",
				"Pos_Viking",
				"Pos_Spidermine",
				"Pos_Ghost",
				"Pos_Banshee",
				"Pos_Marauder",
				"Pos_Stetmann",
				"Pos_Marine",
				"Pos_Bartender",
				"Pos_Kerrigan",
				"Pos_EvolutionMaster",
				"Pos_Zagara",
				"Pos_Primal",
				"Pos_ProtossScientist",
				"Pos_Stukov",
				"Ref_Origin",
				"Ref_Center",
				"Ref_Attacher",
				"Ref_Attacher 01",
				"Ref_Attacher 02",
				"Ref_Attacher 03",
				"Ref_Attacher 04",
				"Ref_Attacher 05",
				"Ref_Attacher 06",
				"Ref_Attacher 07",
				"Ref_Attacher 08",
				"Ref_Attacher 09",
				"Ref_Attacher 10",
				"Ref_Attacher 11",
				"Ref_Attacher 12",
				"Ref_Attacher 13",
				"Ref_Attacher 14",
				"Ref_Attacher 15",
				"Ref_Attacher 16",
				"Ref_Attacher 17",
				"Ref_Attacher 18",
				"Ref_Attacher 19",
				"Ref_Damage",
				"Ref_Damage 01",
				"Ref_Damage 02",
				"Ref_Damage 03",
				"Ref_Damage 04",
				"Ref_Damage 05",
				"Ref_Damage 06",
				"Ref_Damage 07",
				"Ref_Damage 08",
				"Ref_Damage 09",
				"Ref_Damage 10",
				"Ref_Damage 11",
				"Ref_Damage 12",
				"Ref_Damage 13",
				"Ref_Damage 14",
				"Ref_Damage 15",
				"Ref_Damage 16",
				"Ref_Damage 17",
				"Ref_Damage 18",
				"Ref_Damage 19",
				"Ref_Elevator",
				"Ref_Engine",
				"Ref_Hardpoint",
				"Ref_Hardpoint 01",
				"Ref_Hardpoint 02",
				"Ref_Hardpoint 03",
				"Ref_Hardpoint 04",
				"Ref_Hardpoint 05",
				"Ref_Hardpoint 06",
				"Ref_Hardpoint 07",
				"Ref_Hardpoint 08",
				"Ref_Hardpoint 09",
				"Ref_Hardpoint 10",
				"Ref_Hardpoint 11",
				"Ref_Hardpoint 12",
				"Ref_Hardpoint 13",
				"Ref_Hardpoint 14",
				"Ref_Hardpoint 15",
				"Ref_Hardpoint 16",
				"Ref_Hardpoint 17",
				"Ref_Hardpoint 18",
				"Ref_Hardpoint 19",
				"Ref_Hardpoint Left",
				"Ref_Hardpoint Right",
				"Ref_Hit",
				"Ref_Hit 01",
				"Ref_Hit 02",
				"Ref_Hit 03",
				"Ref_Hit 04",
				"Ref_Hit 05",
				"Ref_Hit 06",
				"Ref_Hit 07",
				"Ref_Hit 08",
				"Ref_Hit 09",
				"Ref_Mount",
				"Ref_Overhead",
				"Ref_RallyPoint",
				"Ref_Shield",
				"Ref_StatusBar",
				"Ref_StatusBar 01",
				"Ref_StatusBar 02",
				"Ref_StatusBar 03",
				"Ref_StatusBar 04",
				"Ref_StatusBar 05",
				"Ref_StatusBar 06",
				"Ref_StatusBar 07",
				"Ref_StatusBar 08",
				"Ref_StatusBar 09",
				"Ref_StatusBar 10",
				"Ref_StatusBar 11",
				"Ref_StatusBar 12",
				"Ref_StatusBar 13",
				"Ref_StatusBar 14",
				"Ref_StatusBar 15",
				"Ref_StatusBar 16",
				"Ref_StatusBar 17",
				"Ref_StatusBar 18",
				"Ref_StatusBar 19",
				"Ref_Target",
				"Ref_Target 01",
				"Ref_Target 02",
				"Ref_Target 03",
				"Ref_Target 04",
				"Ref_Target 05",
				"Ref_Target 06",
				"Ref_Target 07",
				"Ref_Target 08",
				"Ref_Target 09",
				"Ref_Target 10",
				"Ref_Target 11",
				"Ref_Target 12",
				"Ref_Target 13",
				"Ref_Target 14",
				"Ref_Target 15",
				"Ref_Target 16",
				"Ref_Target 17",
				"Ref_Target 18",
				"Ref_Target 19",
				"Ref_Target 20",
				"Ref_Target 21",
				"Ref_Target 22",
				"Ref_Target 23",
				"Ref_Target 24",
				"Ref_Target 25",
				"Ref_Target 26",
				"Ref_Target 27",
				"Ref_Target 28",
				"Ref_Target 29",
				"Ref_Target 30",
				"Ref_Target 31",
				"Ref_Target 32",
				"Ref_Target 33",
				"Ref_Target 34",
				"Ref_Target 35",
				"Ref_Target 36",
				"Ref_Target 37",
				"Ref_Target 38",
				"Ref_Target 39",
				"Ref_Target 40",
				"Ref_Target Final",
				"Ref_Target Heavy",
				"Ref_Target Light",
				"Ref_Target Medium",
				"Ref_Target Shield",
				"Ref_Transmission",
				"Ref_Turret",
				"Ref_TurretY",
				"Ref_TurretZ",
				"Ref_Upgrade",
				"Ref_Upgrade Armor",
				"Ref_Upgrade Engine",
				"Ref_Upgrade Engine Bottom",
				"Ref_Upgrade Engine Left",
				"Ref_Upgrade Engine Right",
				"Ref_Upgrade Weapon",
				"Ref_Upgrade Weapon Bottom",
				"Ref_Upgrade Weapon Left",
				"Ref_Upgrade Weapon Right",
				"Ref_Weapon",
				"Ref_Weapon 01",
				"Ref_Weapon 02",
				"Ref_Weapon 03",
				"Ref_Weapon 04",
				"Ref_Weapon 05",
				"Ref_Weapon 06",
				"Ref_Weapon 07",
				"Ref_Weapon 08",
				"Ref_Weapon 09",
				"Ref_Weapon 10",
				"Ref_Weapon 11",
				"Ref_Weapon 12",
				"Ref_Weapon 13",
				"Ref_Weapon 14",
				"Ref_Weapon 15",
				"Ref_Weapon 16",
				"Ref_Weapon 17",
				"Ref_Weapon 18",
				"Ref_Weapon 19",
				"Ref_Weapon 20",
				"Ref_Weapon 21",
				"Ref_Weapon 22",
				"Ref_Weapon 23",
				"Ref_Weapon 24",
				"Ref_Weapon 25",
				"Ref_Weapon 26",
				"Ref_Weapon 27",
				"Ref_Weapon 28",
				"Ref_Weapon 29",
				"Ref_Weapon 30",
				"Ref_Weapon Bottom",
				"Ref_Weapon Left",
				"Ref_Weapon Right",
				"Ref_Agria",
				"Ref_Aiur",
				"Ref_Albion",
				"Ref_Avernus",
				"Ref_BelShir",
				"Ref_Castanar",
				"Ref_Char",
				"Ref_Dylar",
				"Ref_Haven",
				"Ref_Korhal",
				"Ref_MarSara",
				"Ref_Meinhoff",
				"Ref_Monlyth",
				"Ref_Moria",
				"Ref_NewFolsom",
				"Ref_PortZion",
				"Ref_PU72516J",
				"Ref_Redstone",
				"Ref_Tarsonis",
				"Ref_Tyrador",
				"Ref_Umoja",
				"Ref_Valhalla",
				"Ref_Xil",
				"Ref_Head",
				"Ref_Head Mount",
				"Ref_Hand Left",
				"Ref_Hand Right",
				"Ref_Foot Left",
				"Ref_Foot Right",
				"Ref_Foot Left Rear",
				"Ref_Foot Right Rear",
				"Ref_Chest",
				"Ref_Chest Left",
				"Ref_Chest Right",
				"Ref_Chest Mount",
				"Ref_Chest Mount Left",
				"Ref_Chest Mount Right",
				"Ref_Chest Mount Rear"
			]
		},
		
		"EAttachKeyword": {
			"prefix": "e_attachKey",
			"values": [
				"Unknown",
				"IGNORE",
				"Attacher",
				"Air",
				"Armor",
				"Back",
				"Bottom",
				"Cargo",
				"Center",
				"Chest",
				"CustomA",
				"CustomB",
				"CustomC",
				"Damage",
				"Death",
				"Effector",
				"Engine",
				"Final",
				"Foot",
				"Front",
				"Ground",
				"Hardpoint",
				"Head",
				"Heavy",
				"Hit",
				"HPBar",
				"Left",
				"Light",
				"Medium",
				"Mount",
				"Movement",
				"Origin",
				"Overhead",
				"Primary",
				"RallyPoint",
				"Right",
				"Secondary",
				"SetA",
				"SetB",
				"SetC",
				"Shield",
				"StatusBar",
				"Target",
				"TargetShield",
				"Top",
				"Transmission",
				"Turret",
				"TurretY",
				"TurretZ",
				"Upgrade",
				"Weapon",
				"Work",
				"Agria",
				"Aiur",
				"Albion",
				"Avernus",
				"BelShir",
				"Castanar",
				"Char",
				"Dylar",
				"Haven",
				"Korhal",
				"MarSara",
				"Meinhoff",
				"Monlyth",
				"Moria",
				"NewFolsom",
				"PortZion",
				"PU72516J",
				"Redstone",
				"Tarsonis",
				"Tyrador",
				"Umoja",
				"Valhalla",
				"Xil"
			]
		},
		
		"EModelPhysicsType": {
			"prefix": "e_modelPhysics",
			"values": [
				"Unknown",
				"Automatic",
				"AlwaysKeyframed",
				"AlwaysSimulated",
				"Never"
			]
		},
		
		"ESquibType": {
			"prefix": "e_squibType",
			"values": [
				"Unknown",
				"None",
				"Dirt",
				"Rock",
				"Snow",
				"Sand",
				"Water",
				"Flesh",
				"LightArmor",
				"Metal",
				"Shield",
				"Miss"
			]
		},
		
		"EFoliageLayer": {
			"prefix": "e_foliageLayer",
			"values": [
				"Unknown",
				"Grass",
				"Brush",
				"Tree"
			]
		},
		
		"EOcclusion": {
			"prefix": "e_occlusion",
			"values": [
				"Unknown",
				"None",
				"Hide",
				"Show"
			]
		},
		
		"EAnimFlags": {
			"prefix": "e_animFlag",
			"values": [
				"Unknown",
				"FullMatch",
				"PlayForever",
				"NonLooping",
				"AssetDrivenLooping",
				"RandomStartOffset"
			]
		},
		
		"EGraphicsLevel": {
			"prefix": "e_gl",
			"values": [
				"Unknown",
				"Low",
				"Medium",
				"High",
				"Ultra",
				"Extreme"
			]
		},
		
		"EGraphicsOption": {
			"prefix": "e_go",
			"values": [
				"Unknown",
				"Texture",
				"Lighting",
				"Shadow",
				"PostProc",
				"Terrain",
				"Reflection",
				"Effects",
				"Physics",
				"Shader",
				"Model",
				"Portraits",
				"Movies",
				"SSAO"
			]
		},
		
		"EPhysicsState": {
			"prefix": "e_physics",
			"values": [
				"Unknown",
				"Disabled",
				"Keyframed",
				"Simulated"
			]
		},
		
		"ESplatLayer": {
			"prefix": "e_sl",
			"values": [
				"Unknown",
				"Layer0",
				"Layer1",
				"Layer2",
				"Layer3",
				"BuildingLayer",
				"BlobShadowLayer",
				"AOELayer",
				"PowerLayer",
				"MaterialUILayer",
				"FakeVectorUILayer",
				"VectorUILayer"
			]
		},
		
		"EEventID": {
			"prefix": "e_event",
			"values": [
				"Unknown",
				"Evt_Fade",
				"Evt_FallIntoWater",
				"Evt_Fog",
				"Evt_FootPrintLeft",
				"Evt_FootPrintRight",
				"Evt_Light",
				"Evt_ModelData",
				"Evt_MoviePause",
				"Evt_MoviePlay",
				"Evt_MovieRestart",
				"Evt_AtRest",
				"Evt_Impact",
				"Evt_Simulate",
				"Evt_RTT",
				"Evt_SeqEnd",
				"Evt_SeqBegin",
				"Evt_Sound",
				"Evt_Spawn",
				"Evt_Splat"
			]
		},
		
		"EModelQuality": {
			"prefix": "e_modelQuality",
			"values": [
				"Unknown",
				"Any",
				"Low",
				"High"
			]
		},
		
		"EModelEvent": {
			"prefix": "e_modelEvent",
			"values": [
				"Unknown",
				"Custom",
				"FootprintLeft",
				"FootprintRight",
				"Sound"
			]
		},
		
		"EPausedParticleSystemBehavior": {
			"prefix": "e_pausedParticleSystemBehavior",
			"values": [
				"Unknown",
				"Automatic",
				"Continuous",
				"Fade",
				"FreezeAll",
				"FreezeEmissionRate"
			]
		},
		
		"EClassIdCMover": {
			"prefix": "e_classId",
			"values": [
				"CMoverUnknown",
				"CMover",
				"CMoverAvoid",
				"CMoverFlock",
				"CMoverMissile",
				"CMoverNull"
			]
		},
		
		"EPlacement": {
			"prefix": "e_placement",
			"values": [
				"Unknown",
				"Require",
				"Prevent"
			]
		},
		
		"EPathAvoid": {
			"prefix": "e_pathAvoid",
			"values": [
				"Unknown",
				"Normal",
				"Walker"
			]
		},
		
		"EPathMode": {
			"prefix": "e_pathMode",
			"values": [
				"Unknown",
				"Ground",
				"Jumper",
				"Scaler",
				"Digger",
				"Flying",
				"Builder"
			]
		},
		
		"EMotionDriverType": {
			"prefix": "e_motionDriver",
			"values": [
				"Unknown",
				"None",
				"AdaptableParabola",
				"Ballistic",
				"Guidance",
				"Throw"
			]
		},
		
		"EMotionRotationLaunchActorType": {
			"prefix": "e_motionRotLaunchActor",
			"values": [
				"Unknown",
				"None",
				"LaunchToTarget",
				"LaunchToTarget2D",
				"Supplied"
			]
		},
		
		"EMotionRotationActorType": {
			"prefix": "e_motionRotActor",
			"values": [
				"Unknown",
				"None",
				"Docking",
				"LookAtTarget",
				"LookAtTarget2D",
				"Upright",
				"ZeroRoll"
			]
		},
		
		"EMotionThrowRotationType": {
			"prefix": "e_motionThrowRot",
			"values": [
				"Unknown",
				"None",
				"LauncherForward",
				"LookAtTarget",
				"LookAtTarget2D",
				"ThrowForward",
				"Vectored"
			]
		},
		
		"EMotionTurnType": {
			"prefix": "e_motionTurn",
			"values": [
				"Unknown",
				"Default",
				"RevertToUp",
				"Optimal"
			]
		},
		
		"EMotionBlendType": {
			"prefix": "e_motionBlend",
			"values": [
				"Unknown",
				"None",
				"Linear",
				"Logarithmic",
				"Exponential"
			]
		},
		
		"EMotionAdaptableParabolaSeg": {
			"prefix": "e_motionAdaptableParabolaSeg",
			"values": [
				"Unknown",
				"Launch",
				"Ascent",
				"Apex",
				"Descent",
				"Land"
			]
		},
		
		"EMotionAdaptableParabolaHotspot": {
			"prefix": "e_motionAdaptableParabolaHotspot",
			"values": [
				"Unknown",
				"Launch",
				"PreApex",
				"PostApex",
				"Land"
			]
		},
		
		"EMotionArrivalTestType": {
			"prefix": "e_motionArrivalTest",
			"values": [
				"Unknown",
				"Adaptive",
				"2D",
				"3D",
				"Never"
			]
		},
		
		"EMotionActorTrackingType": {
			"prefix": "e_motionActorTracking",
			"values": [
				"Unknown",
				"Hookless",
				"Linear",
				"Actual"
			]
		},
		
		"EMotionOverlayType": {
			"prefix": "e_motionOverlay",
			"values": [
				"Unknown",
				"None",
				"Orbit",
				"Revolver",
				"Wave"
			]
		},
		
		"EMotionOverlayPolarity": {
			"prefix": "e_motionOverlayPolarity",
			"values": [
				"Unknown",
				"None",
				"Positive",
				"Negative",
				"Random",
				"Alternating"
			]
		},
		
		"EMoverFlag": {
			"prefix": "e_moverFlag",
			"values": [
				"Unknown",
				"IgnoreMovementSuppression"
			]
		},
		
		"EClassIdCObjective": {
			"prefix": "e_classId",
			"values": [
				"CObjectiveUnknown",
				"CObjective"
			]
		},
		
		"EObjectiveType": {
			"prefix": "e_objectiveType",
			"values": [
				"Unknown",
				"Optional",
				"Primary"
			]
		},
		
		"EObjectiveReward": {
			"prefix": "e_objectiveReward",
			"values": [
				"Unknown",
				"DNA",
				"Infestation",
				"Mutagen"
			]
		},
		
		"EClassIdCPhysicsMaterial": {
			"prefix": "e_classId",
			"values": [
				"CPhysicsMaterialUnknown",
				"CPhysicsMaterial"
			]
		},
		
		"EPhysicsMaterial": {
			"prefix": "e_physicsMaterial",
			"values": [
				"Unknown",
				"MetalHeavy",
				"MetalLight",
				"MetalProtoss",
				"Rock",
				"Flesh",
				"Bone",
				"LightArmor",
				"Sand",
				"Dirt",
				"Water",
				"Lava",
				"Creep",
				"Plastic",
				"Rubber",
				"Wood",
				"Snow",
				"Ice",
				"Paper",
				"ClothHeavy",
				"ClothLight",
				"Hair",
				"EnergyShield"
			]
		},
		
		"EClassIdCPreload": {
			"prefix": "e_classId",
			"values": [
				"CPreloadUnknown",
				"CPreload",
				"CPreloadAsset",
				"CPreloadScene",
				"CPreloadActor",
				"CPreloadConversation",
				"CPreloadModel",
				"CPreloadSound",
				"CPreloadUnit"
			]
		},
		
		"EPreloadTiming": {
			"prefix": "e_preload",
			"values": [
				"Unknown",
				"Blocking",
				"Immediate",
				"Offscreen",
				"ThisSession",
				"NextSession"
			]
		},
		
		"EPreloadFlag": {
			"prefix": "e_preloadFlag",
			"values": [
				"Unknown",
				"Instantiate",
				"MapCampaign"
			]
		},
		
		"EPreloadModelFlag": {
			"prefix": "e_preloadModelFlag",
			"values": [
				"Unknown",
				"Require3DPortrait"
			]
		},
		
		"EClassIdCRace": {
			"prefix": "e_classId",
			"values": [
				"CRaceUnknown",
				"CRace"
			]
		},
		
		"ERaceFlag": {
			"prefix": "e_raceFlag",
			"values": [
				"Unknown",
				"Selectable",
				"TrialAllowed"
			]
		},
		
		"EStartingUnitFlag": {
			"prefix": "e_startingUnitFlag",
			"values": [
				"Unknown",
				"ResourceRally",
				"ResourceSetRally"
			]
		},
		
		"EClassIdCRequirement": {
			"prefix": "e_classId",
			"values": [
				"CRequirementUnknown",
				"CRequirement"
			]
		},
		
		"ERequirement": {
			"prefix": "e_requirement",
			"values": [
				"Unknown",
				"Use",
				"Show"
			]
		},
		
		"EClassIdCRequirementNode": {
			"prefix": "e_classId",
			"values": [
				"CRequirementNodeUnknown",
				"CRequirementNode",
				"CRequirementGT",
				"CRequirementLT",
				"CRequirementGTE",
				"CRequirementLTE",
				"CRequirementEq",
				"CRequirementNE",
				"CRequirementAnd",
				"CRequirementOr",
				"CRequirementXor",
				"CRequirementNot",
				"CRequirementOdd",
				"CRequirementDiv",
				"CRequirementMod",
				"CRequirementMul",
				"CRequirementSum",
				"CRequirementConst",
				"CRequirementAllowAbil",
				"CRequirementAllowBehavior",
				"CRequirementAllowUnit",
				"CRequirementAllowUpgrade",
				"CRequirementCountAbil",
				"CRequirementCountBehavior",
				"CRequirementCountEffect",
				"CRequirementCountUnit",
				"CRequirementCountUpgrade"
			]
		},
		
		"ERequirementNodeFlag": {
			"prefix": "e_requirementNodeFlag",
			"values": [
				"Unknown",
				"TechTreeCheat"
			]
		},
		
		"ERequirementState": {
			"prefix": "e_requirementState",
			"values": [
				"Unknown",
				"QueuedOnly",
				"QueuedOrBetter",
				"QueuedOnlyAtUnit",
				"QueuedOrBetterAtUnit",
				"InProgressOnly",
				"InProgressOrBetter",
				"InProgressOnlyAtUnit",
				"InProgressOrBetterAtUnit",
				"CompleteOnly",
				"CompleteOnlyAtUnit",
				"Killed",
				"Kills",
				"Peak",
				"Total"
			]
		},
		
		"EClassIdCReverb": {
			"prefix": "e_classId",
			"values": [
				"CReverbUnknown",
				"CReverb"
			]
		},
		
		"EClassIdCReward": {
			"prefix": "e_classId",
			"values": [
				"CRewardUnknown",
				"CReward",
				"CRewardDecal",
				"CRewardIcon",
				"CRewardModel",
				"CRewardPortrait",
				"CRewardBadge",
				"CRewardPoints"
			]
		},
		
		"ERewardFlag": {
			"prefix": "e_rewardFlag",
			"values": [
				"Unknown",
				"Allowed",
				"Default",
				"Cloaked",
				"Hidden"
			]
		},
		
		"EClassIdCScoreResult": {
			"prefix": "e_classId",
			"values": [
				"CScoreResultUnknown",
				"CScoreResult",
				"CScoreResultRoot",
				"CScoreResultScore",
				"CScoreResultGraph",
				"CScoreResultPane",
				"CScoreResultBuildOrder",
				"CScoreResultCallouts",
				"CScoreResultExperience",
				"CScoreResultPerformance"
			]
		},
		
		"EScoreResultFlag": {
			"prefix": "e_scoreResultFlag",
			"values": [
				"Unknown",
				"Hidden"
			]
		},
		
		"EClassIdCScoreValue": {
			"prefix": "e_classId",
			"values": [
				"CScoreValueUnknown",
				"CScoreValue",
				"CScoreValueCustom",
				"CScoreValueStandard",
				"CScoreValueCombine"
			]
		},
		
		"EScoreCollapse": {
			"prefix": "e_scoreCollapse",
			"values": [
				"Unknown",
				"Maximize",
				"Average",
				"Latest"
			]
		},
		
		"EScoreSort": {
			"prefix": "e_scoreSort",
			"values": [
				"Unknown",
				"Ascending",
				"Descending"
			]
		},
		
		"EScoreValue": {
			"prefix": "e_scoreValue",
			"values": [
				"Unknown",
				"ActionsAlliance",
				"ActionsCommand",
				"ActionsControlGroup",
				"ActionsResourceTrade",
				"ActionsSelect",
				"ActionsTarget",
				"APM",
				"APMAverage",
				"CommandsAlliance",
				"CommandsCommand",
				"CommandsControlGroup",
				"CommandsResourceTrade",
				"CommandsSelect",
				"CommandsTarget",
				"CPM",
				"CPMAverage",
				"UncontestedCombatTime",
				"IdleProductionTime",
				"IdleWorkerTime",
				"UnitKillsPeakCount",
				"UnitsTotalCount",
				"UnitsKilledCount",
				"UnitsLostCount",
				"UnitsFriendlyFireCount",
				"UnitsSalvagedCount",
				"UnitsCanceledCount",
				"UnitsPeakCount",
				"UnitsQueuedCount",
				"UnitsInProgressCount",
				"UnitsActiveCount",
				"UnitsActiveNone",
				"UnitsActiveArmy",
				"UnitsActiveEconomy",
				"UnitsActiveTechnology",
				"UnitsStartCount",
				"UnitsTotalValue",
				"UnitsKilledValue",
				"UnitsLostValue",
				"UnitsFriendlyFireValue",
				"UnitsSalvagedValue",
				"UnitsCanceledValue",
				"UnitsPeakValue",
				"UnitsMadePoints",
				"UnitsKilledPoints",
				"StructuresTotalCount",
				"StructuresKilledCount",
				"StructuresLostCount",
				"StructuresFriendlyFireCount",
				"StructuresSalvagedCount",
				"StructuresCanceledCount",
				"StructuresPeakCount",
				"StructuresQueuedCount",
				"StructuresInProgressCount",
				"StructuresActiveCount",
				"StructuresActiveNone",
				"StructuresActiveArmy",
				"StructuresActiveEconomy",
				"StructuresActiveTechnology",
				"StructuresStartCount",
				"StructuresTotalValue",
				"StructuresKilledValue",
				"StructuresLostValue",
				"StructuresFriendlyFireValue",
				"StructuresSalvagedValue",
				"StructuresCanceledValue",
				"StructuresPeakValue",
				"StructuresMadePoints",
				"StructuresKilledPoints",
				"WorkersActiveCount",
				"WorkersStartCount",
				"WorkersTotalCount",
				"WorkersKilledCount",
				"WorkersLostCount",
				"WorkersPeakCount",
				"PreventDefeatQueuedCount",
				"PreventDefeatInProgressCount",
				"PreventDefeatActiveCount",
				"PreventDestroyQueuedCount",
				"PreventDestroyInProgressCount",
				"PreventDestroyActiveCount",
				"PreventRevealQueuedCount",
				"PreventRevealInProgressCount",
				"PreventRevealActiveCount",
				"WeaponTechnologyCount",
				"ArmorTechnologyCount",
				"MiscTechnologyCount",
				"WeaponTechnologyValue",
				"ArmorTechnologyValue",
				"MiscTechnologyValue",
				"TechnologyPercent",
				"TechnologyPoints",
				"FoodCappedTime",
				"FoodMade",
				"FoodMadeKilled",
				"FoodMadeLost",
				"FoodUsed",
				"FoodUsedKilled",
				"FoodUsedLost",
				"FoodUsedNone",
				"FoodUsedArmy",
				"FoodUsedEconomy",
				"FoodUsedTechnology",
				"MineralsCurrent",
				"VespeneCurrent",
				"TerrazineCurrent",
				"CustomCurrent",
				"MineralsCollected",
				"VespeneCollected",
				"TerrazineCollected",
				"CustomCollected",
				"MineralsDonated",
				"VespeneDonated",
				"TerrazineDonated",
				"CustomDonated",
				"MineralsReceived",
				"VespeneReceived",
				"TerrazineReceived",
				"CustomReceived",
				"MineralsCollectionRate",
				"VespeneCollectionRate",
				"TerrazineCollectionRate",
				"CustomCollectionRate",
				"MineralsFloatAverage",
				"VespeneFloatAverage",
				"TerrazineFloatAverage",
				"CustomFloatAverage",
				"MineralsSpent",
				"VespeneSpent",
				"TerrazineSpent",
				"CustomSpent",
				"MineralsKilledNone",
				"MineralsKilledArmy",
				"MineralsKilledEconomy",
				"MineralsKilledTechnology",
				"VespeneKilledNone",
				"VespeneKilledArmy",
				"VespeneKilledEconomy",
				"VespeneKilledTechnology",
				"TerrazineKilledNone",
				"TerrazineKilledArmy",
				"TerrazineKilledEconomy",
				"TerrazineKilledTechnology",
				"CustomKilledNone",
				"CustomKilledArmy",
				"CustomKilledEconomy",
				"CustomKilledTechnology",
				"MineralsLostNone",
				"MineralsLostArmy",
				"MineralsLostEconomy",
				"MineralsLostTechnology",
				"VespeneLostNone",
				"VespeneLostArmy",
				"VespeneLostEconomy",
				"VespeneLostTechnology",
				"TerrazineLostNone",
				"TerrazineLostArmy",
				"TerrazineLostEconomy",
				"TerrazineLostTechnology",
				"CustomLostNone",
				"CustomLostArmy",
				"CustomLostEconomy",
				"CustomLostTechnology",
				"MineralsFriendlyFireNone",
				"MineralsFriendlyFireArmy",
				"MineralsFriendlyFireEconomy",
				"MineralsFriendlyFireTechnology",
				"VespeneFriendlyFireNone",
				"VespeneFriendlyFireArmy",
				"VespeneFriendlyFireEconomy",
				"VespeneFriendlyFireTechnology",
				"TerrazineFriendlyFireNone",
				"TerrazineFriendlyFireArmy",
				"TerrazineFriendlyFireEconomy",
				"TerrazineFriendlyFireTechnology",
				"CustomFriendlyFireNone",
				"CustomFriendlyFireArmy",
				"CustomFriendlyFireEconomy",
				"CustomFriendlyFireTechnology",
				"MineralsUsedInProgressNone",
				"MineralsUsedInProgressArmy",
				"MineralsUsedInProgressEconomy",
				"MineralsUsedInProgressTechnology",
				"VespeneUsedInProgressNone",
				"VespeneUsedInProgressArmy",
				"VespeneUsedInProgressEconomy",
				"VespeneUsedInProgressTechnology",
				"TerrazineUsedInProgressNone",
				"TerrazineUsedInProgressArmy",
				"TerrazineUsedInProgressEconomy",
				"TerrazineUsedInProgressTechnology",
				"CustomUsedInProgressNone",
				"CustomUsedInProgressArmy",
				"CustomUsedInProgressEconomy",
				"CustomUsedInProgressTechnology",
				"MineralsUsedCurrentNone",
				"MineralsUsedCurrentArmy",
				"MineralsUsedCurrentEconomy",
				"MineralsUsedCurrentTechnology",
				"VespeneUsedCurrentNone",
				"VespeneUsedCurrentArmy",
				"VespeneUsedCurrentEconomy",
				"VespeneUsedCurrentTechnology",
				"TerrazineUsedCurrentNone",
				"TerrazineUsedCurrentArmy",
				"TerrazineUsedCurrentEconomy",
				"TerrazineUsedCurrentTechnology",
				"CustomUsedCurrentNone",
				"CustomUsedCurrentArmy",
				"CustomUsedCurrentEconomy",
				"CustomUsedCurrentTechnology",
				"MineralsUsedTotalNone",
				"MineralsUsedTotalArmy",
				"MineralsUsedTotalEconomy",
				"MineralsUsedTotalTechnology",
				"VespeneUsedTotalNone",
				"VespeneUsedTotalArmy",
				"VespeneUsedTotalEconomy",
				"VespeneUsedTotalTechnology",
				"TerrazineUsedTotalNone",
				"TerrazineUsedTotalArmy",
				"TerrazineUsedTotalEconomy",
				"TerrazineUsedTotalTechnology",
				"CustomUsedTotalNone",
				"CustomUsedTotalArmy",
				"CustomUsedTotalEconomy",
				"CustomUsedTotalTechnology",
				"MineralsUsedActiveForces",
				"VespeneUsedActiveForces",
				"TerrazineUsedActiveForces",
				"CustomUsedActiveForces",
				"LifeDamageDealtTotal",
				"ShieldsDamageDealtTotal",
				"EnergyDamageDealtTotal",
				"LifeDamageTakenTotal",
				"ShieldsDamageTakenTotal",
				"EnergyDamageTakenTotal",
				"LifeHealedTotal",
				"ShieldsHealedTotal",
				"EnergyHealedTotal",
				"LifeSpentTotal",
				"ShieldsSpentTotal",
				"EnergySpentTotal"
			]
		},
		
		"EScoreValueFlag": {
			"prefix": "e_scoreValueFlag",
			"values": [
				"Unknown",
				"DisplayAsPercent",
				"DisplayAsSigned",
				"Hidden",
				"PersistToDB",
				"Profile",
				"Statistic"
			]
		},
		
		"EScoreValueType": {
			"prefix": "e_scoreValueType",
			"values": [
				"Unknown",
				"Integer",
				"Fixed",
				"Time"
			]
		},
		
		"EScoreValueOperation": {
			"prefix": "e_scoreValueOperation",
			"values": [
				"Unknown",
				"Add",
				"Subtract"
			]
		},
		
		"EScoreValueReport": {
			"prefix": "e_scoreValueReport",
			"values": [
				"Unknown",
				"Final",
				"Samples",
				"Average"
			]
		},
		
		"EClassIdCSound": {
			"prefix": "e_classId",
			"values": [
				"CSoundUnknown",
				"CSound"
			]
		},
		
		"ESoundBlend": {
			"prefix": "e_soundBlend",
			"values": [
				"Unknown",
				"Linear",
				"Inverse",
				"Logarithmic"
			]
		},
		
		"ESoundFlag": {
			"prefix": "e_soundFlag",
			"values": [
				"Unknown",
				"AutoUnload",
				"Download",
				"Ignorable",
				"Purgable",
				"Stream",
				"Unpausable",
				"Wait",
				"HideSubtitle",
				"Temporary",
				"NeedsUpdate",
				"NeedsFXA",
				"NeedsTTS",
				"Rerecord",
				"Obsolete",
				"ManualOverride"
			]
		},
		
		"ESoundSelect": {
			"prefix": "e_soundSelect",
			"values": [
				"Unknown",
				"Sequential",
				"Shuffle"
			]
		},
		
		"ESoundCategory": {
			"prefix": "e_soundCategory",
			"values": [
				"Unknown",
				"Test",
				"ME",
				"Movie",
				"TV",
				"Dialogue",
				"Mission",
				"Music",
				"Other",
				"Ambient",
				"SAmbient",
				"Alert",
				"Death",
				"Ready",
				"Spell",
				"Combat",
				"Voice",
				"Message",
				"UI",
				"UIMovie",
				"Flames",
				"Build",
				"Gather",
				"Doodad",
				"SEmitters",
				"SPieces",
				"Foley",
				"Movement"
			]
		},
		
		"ESoundDupe": {
			"prefix": "e_soundDupe",
			"values": [
				"Unknown",
				"Prevent",
				"Replace"
			]
		},
		
		"ESoundFormat": {
			"prefix": "e_soundFormat",
			"values": [
				"Unknown",
				"PCM8",
				"PCM16",
				"PCM24",
				"PCM32",
				"PCMFLOAT"
			]
		},
		
		"ESoundMode": {
			"prefix": "e_soundMode",
			"values": [
				"Unknown",
				"2D",
				"3DHead",
				"3DWorld"
			]
		},
		
		"ESoundResampler": {
			"prefix": "e_soundResampler",
			"values": [
				"Unknown",
				"None",
				"Linear",
				"Cubic",
				"Spline"
			]
		},
		
		"ESpeaker": {
			"prefix": "e_speaker",
			"values": [
				"Unknown",
				"FrontLeft",
				"FrontRight",
				"Center",
				"LFE",
				"BackLeft",
				"BackRight",
				"SideLeft",
				"SideRight"
			]
		},
		
		"ESpeakerMode": {
			"prefix": "e_speakerMode",
			"values": [
				"Unknown",
				"Mono",
				"Stereo",
				"Quad",
				"Surround",
				"5Point1",
				"7Point1",
				"ProLogic"
			]
		},
		
		"EClassIdCSoundtrack": {
			"prefix": "e_classId",
			"values": [
				"CSoundtrackUnknown",
				"CSoundtrack"
			]
		},
		
		"ESoundtrackCategory": {
			"prefix": "e_soundtrackCategory",
			"values": [
				"Unknown",
				"Ambience",
				"Music"
			]
		},
		
		"ESoundtrackFlag": {
			"prefix": "e_soundtrackFlag",
			"values": [
				"Unknown",
				"Continuous"
			]
		},
		
		"EClassIdCTacCooldown": {
			"prefix": "e_classId",
			"values": [
				"CTacCooldownUnknown",
				"CTacCooldown"
			]
		},
		
		"EClassIdCTactical": {
			"prefix": "e_classId",
			"values": [
				"CTacticalUnknown",
				"CTactical",
				"CTacticalOrder",
				"CTacticalSet"
			]
		},
		
		"EClassIdCTargetFind": {
			"prefix": "e_classId",
			"values": [
				"CTargetFindUnknown",
				"CTargetFind",
				"CTargetFindBestPoint",
				"CTargetFindWorkerRallyPoint",
				"CTargetFindRallyPoint",
				"CTargetFindEnumArea",
				"CTargetFindEffect",
				"CTargetFindLastAttacker",
				"CTargetFindOffset",
				"CTargetFindOrder",
				"CTargetFindSet"
			]
		},
		
		"ETargetFindFlag": {
			"prefix": "e_targetFindFlag",
			"values": [
				"Unknown",
				"EvaluateCmd"
			]
		},
		
		"ETargetFindSet": {
			"prefix": "e_targetFindSet",
			"values": [
				"Unknown",
				"Combined",
				"Sequential",
				"Successful"
			]
		},
		
		"EClassIdCTargetSort": {
			"prefix": "e_classId",
			"values": [
				"CTargetSortUnknown",
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
				"CTargetSortVeterancy",
				"CTargetSortVital",
				"CTargetSortVitalFraction"
			]
		},
		
		"EClassIdCTerrain": {
			"prefix": "e_classId",
			"values": [
				"CTerrainUnknown",
				"CTerrain"
			]
		},
		
		"ETerrainHeightFlag": {
			"prefix": "e_terrainHeightFlag",
			"values": [
				"Unknown",
				"AirSmoothing"
			]
		},
		
		"EFoliageLayers": {
			"prefix": "e_fl",
			"values": [
				"Unknown",
				"Grass",
				"Shrubs",
				"Trees"
			]
		},
		
		"EClassIdCTerrainObject": {
			"prefix": "e_classId",
			"values": [
				"CTerrainObjectUnknown",
				"CTerrainObject",
				"CCliffDoodad"
			]
		},
		
		"EClassIdCTerrainTex": {
			"prefix": "e_classId",
			"values": [
				"CTerrainTexUnknown",
				"CTerrainTex"
			]
		},
		
		"EClassIdCTexture": {
			"prefix": "e_classId",
			"values": [
				"CTextureUnknown",
				"CTexture"
			]
		},
		
		"ETextureProp": {
			"prefix": "e_textureProp",
			"values": [
				"Unknown",
				"ignore",
				"variation",
				"00",
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				"tileset",
				"agria",
				"aiur",
				"albion",
				"avernus",
				"belshir",
				"braxisalpha",
				"castanar",
				"char",
				"char2",
				"chardunes",
				"desertworld",
				"dominionlab",
				"haven",
				"helios",
				"hybridlabinner",
				"hybridlabouter",
				"hybridlabxelnaga",
				"iceworld",
				"korhal",
				"korhalcity",
				"korhaloutskirts",
				"korhalplatform",
				"marsara",
				"meinhoff",
				"monlyth",
				"newfolsom",
				"niflheim",
				"portzion",
				"prisonship",
				"redstone",
				"shakuras",
				"starship",
				"tarsonis",
				"tyrador",
				"typhon",
				"ulaan",
				"ulnar",
				"valhalla",
				"xil",
				"zhakuldas",
				"zerus",
				"location",
				"armory",
				"battlefield",
				"bridge",
				"cantina",
				"lab",
				"marsarabar",
				"observatory",
				"charset",
				"kaldirset",
				"zerusset",
				"hybridduskset",
				"hybridnightset",
				"spaceset",
				"korhalspaceset",
				"korhalplanetset",
				"adornment",
				"backpack",
				"helmet",
				"merc",
				"dark",
				"gender",
				"female",
				"male",
				"race",
				"terran",
				"protoss",
				"zerg",
				"misc",
				"briefing",
				"campaign",
				"newsreport",
				"video",
				"buff",
				"burned",
				"infested",
				"phased",
				"component",
				"emissive",
				"diffuse",
				"normal",
				"specular"
			]
		},
		
		"ETextureSlot": {
			"prefix": "e_textureSlot",
			"values": [
				"Unknown",
				"none",
				"ignore",
				"background",
				"buff",
				"decal",
				"main",
				"reflection",
				"video",
				"video01",
				"video02",
				"video03",
				"video04",
				"campaign",
				"colonistShip",
				"terran",
				"zerg",
				"protoss",
				"merc",
				"body",
				"head",
				"hair",
				"generic01",
				"generic02",
				"generic03",
				"generic04",
				"generic05"
			]
		},
		
		"ETextureSlotComponent": {
			"prefix": "e_textureSlotComponent",
			"values": [
				"Unknown",
				"default",
				"diffuse",
				"emissive",
				"normal",
				"specular"
			]
		},
		
		"ETextureExpressionOp": {
			"prefix": "e_textureExpressionOp",
			"values": [
				"Unknown",
				"IGNORE",
				"BestMatch",
				"ExcludeHasAll",
				"ExcludeHasAny",
				"ExcludeMovies",
				"ExcludeRangeSiblings",
				"Innate",
				"RequireAll",
				"RequireAny"
			]
		},
		
		"EClassIdCTile": {
			"prefix": "e_classId",
			"values": [
				"CTileUnknown",
				"CTile"
			]
		},
		
		"ETerrainTileFlag": {
			"prefix": "e_terrainTileFlag",
			"values": [
				"Unknown",
				"Reversed",
				"Conform",
				"Elevated"
			]
		},
		
		"EClassIdCTurret": {
			"prefix": "e_classId",
			"values": [
				"CTurretUnknown",
				"CTurret"
			]
		},
		
		"ETurretIdle": {
			"prefix": "e_turretIdle",
			"values": [
				"Unknown",
				"Reset",
				"ResetIfMoving",
				"Spin",
				"Hold",
				"FollowMovement",
				"FollowMovementReverse"
			]
		},
		
		"EClassIdCUnit": {
			"prefix": "e_classId",
			"values": [
				"CUnitUnknown",
				"CUnit"
			]
		},
		
		"ECardButtonType": {
			"prefix": "e_cardButtonType",
			"values": [
				"Unknown",
				"Undefined",
				"AbilCmd",
				"Passive",
				"SelectBuilder",
				"SelectLarva",
				"Submenu",
				"CancelSubmenu",
				"CancelTargetMode",
				"CancelPlacementMode"
			]
		},
		
		"EUnitFlag": {
			"prefix": "e_unitFlag",
			"values": [
				"Unknown",
				"Bounce",
				"Turnable",
				"Movable",
				"Worker",
				"CreateVisible",
				"Unclickable",
				"Uncommandable",
				"Unhighlightable",
				"Untooltipable",
				"Unselectable",
				"Untargetable",
				"Uncursorable",
				"Hero",
				"HiddenCargoUI",
				"IndividualSubgroups",
				"NoDraw",
				"PreventReveal",
				"PreventDefeat",
				"PreventDestroy",
				"PenaltyRevealed",
				"Uncloakable",
				"Missile",
				"Undetectable",
				"Unradarable",
				"UseLineOfSight",
				"KillCredit",
				"TownAlert",
				"Invulnerable",
				"Destructible",
				"Cloaked",
				"Buried",
				"NoScore",
				"IgnoreTerrainZInit",
				"TurnBeforeMove",
				"AlwaysThreatens",
				"NoDeathEvent",
				"NoPortraitTalk",
				"TownCamera",
				"AIThreatGround",
				"AIThreatAir",
				"AILifetime",
				"AISplash",
				"AIHighPrioTarget",
				"AISplitter",
				"AIDefense",
				"AICaster",
				"AISupport",
				"ShowResources",
				"ArmorDisabledWhileConstructing",
				"Pawnable",
				"AIFleeDamageDisabled",
				"AIPressForwardDisabled",
				"AIObservatory",
				"ForceCollisionCheck",
				"AIChangeling",
				"ShareControl",
				"BuiltOnOptional",
				"AcquireRally",
				"AIAllowSuicideOverride",
				"AIForceTactical",
				"VisionTestCenterOnly",
				"Unstoppable",
				"AIPreferBurrow",
				"ClearRallyOnDeath",
				"SelectableWhileDead",
				"TargetableWhileDead",
				"IgnoreAttackAlert",
				"PreferLastAttackTarget",
				"AIResourceBlocker",
				"ArmySelect"
			]
		},
		
		"EUnitCollide": {
			"prefix": "e_unitCollide",
			"values": [
				"Unknown",
				"Land1",
				"Land2",
				"Land3",
				"Land4",
				"Land5",
				"Land6",
				"Land7",
				"Land8",
				"Land9",
				"Land10",
				"Land11",
				"Land12",
				"Land13",
				"Land14",
				"Land15",
				"Land16",
				"Air1",
				"Air2",
				"Air3",
				"Air4",
				"Air5",
				"Air6",
				"Air7",
				"Air8",
				"Air9",
				"Air10",
				"Air11",
				"Air12",
				"Air13",
				"Air14",
				"Air15",
				"Air16"
			]
		},
		
		"EUnitResponse": {
			"prefix": "e_unitResponse",
			"values": [
				"Unknown",
				"Nothing",
				"Flee",
				"Acquire",
				"AcquireNoFlee"
			]
		},
		
		"EUnitAttribute": {
			"prefix": "e_unitAttribute",
			"values": [
				"Unknown",
				"Light",
				"Armored",
				"Biological",
				"Mechanical",
				"Robotic",
				"Psionic",
				"Massive",
				"Structure",
				"Hover",
				"Heroic",
				"Summoned"
			]
		},
		
		"ECmdFlags": {
			"prefix": "e_cmdFlag",
			"values": [
				"Unknown",
				"Alternate",
				"Queued",
				"Preempt",
				"SmartClick",
				"SmartRally",
				"Subgroup",
				"SetAutoCast",
				"SetAutoCastOn"
			]
		},
		
		"EKillDisplay": {
			"prefix": "e_killDisplay",
			"values": [
				"Unknown",
				"Default",
				"Always",
				"Never"
			]
		},
		
		"ERankDisplay": {
			"prefix": "e_rankDisplay",
			"values": [
				"Unknown",
				"Default",
				"Always",
				"Never"
			]
		},
		
		"EDeathReveal": {
			"prefix": "e_deathReveal",
			"values": [
				"Unknown",
				"Vision",
				"Snapshot"
			]
		},
		
		"EUnitEffect": {
			"prefix": "e_unitEffect",
			"values": [
				"Unknown",
				"Create",
				"Birth",
				"Death",
				"Revive"
			]
		},
		
		"EClassIdCUpgrade": {
			"prefix": "e_classId",
			"values": [
				"CUpgradeUnknown",
				"CUpgrade"
			]
		},
		
		"EUpgradeFlag": {
			"prefix": "e_upgradeFlag",
			"values": [
				"Unknown",
				"TechTreeCheat",
				"UpgradeCheat"
			]
		},
		
		"EUpgradeOperation": {
			"prefix": "e_upgradeOperation",
			"values": [
				"Unknown",
				"Add",
				"Subtract",
				"Multiply",
				"Divide",
				"Set"
			]
		},
		
		"EClassIdCUser": {
			"prefix": "e_classId",
			"values": [
				"CUserUnknown",
				"CUser"
			]
		},
		
		"EUserType": {
			"prefix": "e_userType",
			"values": [
				"Unknown",
				"AbilCmd",
				"Actor",
				"Color",
				"Compare",
				"Fixed",
				"GameLink",
				"Image",
				"Int",
				"Model",
				"Movie",
				"Sound",
				"String",
				"Text",
				"Unit",
				"Upgrade",
				"User"
			]
		},
		
		"EUserFieldFlag": {
			"prefix": "e_userFieldFlag",
			"values": [
				"Unknown",
				"Modifiable",
				"ConvState"
			]
		},
		
		"EEditorTextType": {
			"prefix": "e_editorText",
			"values": [
				"Unknown",
				"Name",
				"Prefix",
				"Suffix"
			]
		},
		
		"ETextTagEdge": {
			"prefix": "e_textTagEdge",
			"values": [
				"Unknown",
				"Top",
				"Left",
				"Bottom",
				"Right"
			]
		},
		
		"EClassIdCValidator": {
			"prefix": "e_classId",
			"values": [
				"CValidatorUnknown",
				"CValidator",
				"CValidatorCombine",
				"CValidatorCondition",
				"CValidatorFunction",
				"CValidatorGameCompareTimeOfDay",
				"CValidatorGameCompareTerrain",
				"CValidatorLocation",
				"CValidatorLocationCompareCliffLevel",
				"CValidatorLocationComparePower",
				"CValidatorLocationCompareRange",
				"CValidatorLocationArc",
				"CValidatorLocationCreep",
				"CValidatorLocationCrossChasm",
				"CValidatorLocationCrossCliff",
				"CValidatorLocationEnumArea",
				"CValidatorLocationPathable",
				"CValidatorLocationPlacement",
				"CValidatorLocationType",
				"CValidatorLocationVision",
				"CValidatorPlayer",
				"CValidatorPlayerAlliance",
				"CValidatorPlayerRequirement",
				"CValidatorPlayerCompare",
				"CValidatorPlayerCompareDifficulty",
				"CValidatorPlayerCompareFoodAvailable",
				"CValidatorPlayerCompareFoodMade",
				"CValidatorPlayerCompareFoodUsed",
				"CValidatorPlayerCompareRace",
				"CValidatorPlayerCompareResource",
				"CValidatorPlayerCompareResult",
				"CValidatorPlayerCompareType",
				"CValidatorUnit",
				"CValidatorUnitAI",
				"CValidatorUnitCombatAI",
				"CValidatorUnitAbil",
				"CValidatorUnitBehaviorState",
				"CValidatorUnitDetected",
				"CValidatorUnitFilters",
				"CValidatorUnitFlying",
				"CValidatorUnitInventory",
				"CValidatorUnitInventoryIsFull",
				"CValidatorUnitInventoryContainsItem",
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
				"CValidatorUnitType",
				"CValidatorUnitWeaponAnimating",
				"CValidatorUnitWeaponFiring",
				"CValidatorUnitWeaponPlane",
				"CValidatorUnitCompare",
				"CValidatorUnitCompareAIAreaEvalRatio",
				"CValidatorUnitCompareAbilLevel",
				"CValidatorUnitCompareAttackPriority",
				"CValidatorUnitCompareBehaviorCount",
				"CValidatorUnitCompareCargo",
				"CValidatorUnitCompareChargeUsed",
				"CValidatorUnitCompareCooldown",
				"CValidatorUnitCompareDamageTakenTime",
				"CValidatorUnitCompareDeath",
				"CValidatorUnitCompareDetectRange",
				"CValidatorUnitCompareField",
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
				"CValidatorUnitCompareVitality"
			]
		},
		
		"EPathingType": {
			"prefix": "e_pathingType",
			"values": [
				"Unknown",
				"None",
				"Ground",
				"Building",
				"Cliff"
			]
		},
		
		"ECargoSpace": {
			"prefix": "e_cargoSpace",
			"values": [
				"Unknown",
				"Free",
				"Load",
				"Size",
				"Used"
			]
		},
		
		"EUnitAIFlag": {
			"prefix": "e_unitAIFlag",
			"values": [
				"Unknown",
				"Campaign",
				"ForceUnburrow",
				"ScriptControlled",
				"SuggestBurrow",
				"SuggestUnburrow",
				"Suicide",
				"WantsToMove",
				"ForcedToMove"
			]
		},
		
		"EAttackPriority": {
			"prefix": "e_attackPriority",
			"values": [
				"Unknown",
				"IsThreat",
				"InRange",
				"InRangeCurrentTarget"
			]
		},
		
		"EDetectType": {
			"prefix": "e_detectType",
			"values": [
				"Unknown",
				"Normal",
				"Radar"
			]
		},
		
		"EUnitType": {
			"prefix": "e_unitType",
			"values": [
				"Unknown",
				"Link",
				"LeaderAlias",
				"SelectAlias",
				"AIBully"
			]
		},
		
		"EVitalType": {
			"prefix": "e_vitalType",
			"values": [
				"Unknown",
				"Current",
				"Delta",
				"Fraction",
				"Maximum"
			]
		},
		
		"EValidateCombine": {
			"prefix": "e_validateCombine",
			"values": [
				"Unknown",
				"And",
				"Or"
			]
		},
		
		"EClassIdCWater": {
			"prefix": "e_classId",
			"values": [
				"CWaterUnknown",
				"CWater"
			]
		},
		
		"EClassIdCWeapon": {
			"prefix": "e_classId",
			"values": [
				"CWeaponUnknown",
				"CWeapon",
				"CWeaponLegacy",
				"CWeaponStrafe"
			]
		},
		
		"EWeaponOption": {
			"prefix": "e_weaponOption",
			"values": [
				"Unknown",
				"Disabled",
				"Hidden",
				"Melee",
				"CanInitiateAttackOrder",
				"OnlyFireWhileInAttackOrder",
				"OnlyFireAtAttackOrderTarget",
				"ContinuousScan",
				"LinkedCooldown",
				"DisplayCooldown",
				"HoldFileInShrubs",
				"RequireEnabledAttackAbil",
				"IgnoreThreat"
			]
		},
		
		"EWeaponLegacyMovement": {
			"prefix": "e_weaponLegacyMovement",
			"values": [
				"Unknown",
				"None",
				"Slowing",
				"Moving"
			]
		},
		
		"EWeaponLegacyOption": {
			"prefix": "e_weaponLegacyOption",
			"values": [
				"Unknown",
				"UseRangeToCenter",
				"LockTurretWhileFiring",
				"CanRetargetWhileChanneling",
				"KeepChanneling",
				"Uninterruptible",
				"NoDeceleration"
			]
		},
		
		"EWeaponPrioritization": {
			"prefix": "e_weaponPrioritize",
			"values": [
				"Unknown",
				"ByDistance",
				"ByAngle",
				"ByDistanceFromTarget"
			]
		},
	}
};
