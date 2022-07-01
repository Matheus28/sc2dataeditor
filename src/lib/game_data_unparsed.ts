import { readFileSync } from "fs";

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

export const catalogContents:Record<CatalogName, string[]> = {} as Record<CatalogName, string[]>;

for(let catalogName of CatalogNameArray){
	catalogContents[catalogName] = [];
}

let CatalogNameArrayByLen = CatalogNameArray.concat();
CatalogNameArrayByLen.sort((a, b) => {
	if(a.length == b.length) return 0;
	return a.length > b.length ? -1 : 1;
});

for(let className in unparsedGameData.classes){
	if(className[0] != 'C') continue;
	if(className == "CCliffDoodad") continue;
	
	let added:CatalogName|undefined;
	
	if(className != "CRequirement" && className.startsWith("CRequirement")){
		added = "RequirementNode";
		catalogContents["RequirementNode"].push(className);
	}else{
		for(let catalogName of CatalogNameArrayByLen){
			
			if(className.startsWith("C" + catalogName)){
				added = catalogName;
				catalogContents[catalogName].push(className);
				break;
			}
		}
	}
	
	if(added === undefined){
		console.log(`Couldn't find catalog for ${className}`);
	}
}

catalogContents["TerrainObject"].push("CCliffDoodad"); // I know, it's weird... but it's here
