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
				"Upgrade": "CUpgradeLink",
				"Resource": {
					"type": "int32",
					"array": true,
					"indexEnum": "EResourceType"
				},
				
				"Time": {
					"type": "CGameTime",
					"minValue": 0
				},
				
				"Vital": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				},
				
				"Button": "SAbilCmdButton",
				"Alert": "CAlertLink",
				"Charge": "SCharge",
				"Cooldown": "SCooldown",
				
				"Display": {
					"type": "bool",
					"array": true,
					"indexEnum": "ECostDisplay"
				},
				
				"VitalFraction": {
					"type": "CFixed",
					"array": true,
					"indexEnum": "EUnitVital"
				}
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
	}
};
