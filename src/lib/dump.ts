import assert from "assert";
import * as fs from "fs/promises";


const headerLines = new Set(`
//GENERATED CODE====================================================================================
//  
//  Copyright Blizzard Entertainment 2003+
//  
//  
//  !!! WARNING !!! This is generated code. Changes made here will be overwritten.
//  
//GENERATED CODE====================================================================================
`.trim().split(/\r?\n/g).map(v => v.trim()));

type EnumType = Record<string, { index:number; name:string; }>;

(async function(){
	const dir = `${__dirname}/../../deps/SC2GameData/mods/core.sc2mod/base.sc2data/TriggerLibs/GameData/`;
	
	let files = await fs.readdir(dir);
	files = files.filter(v => v != "GameDataAllNatives.galaxy");
	
	let enumsArray = await Promise.all(files.map(async (filename) => {
		let str = await fs.readFile(dir + filename, "utf8");
		let lines = str.split(/\r?\n/g);
		
		let tmp = filename.split(".");
		tmp.pop();
		let filenameNoExt = tmp.join(".");
		
		headerLines.add(`//  ${filenameNoExt}.galaxy generated from ${filenameNoExt}.xml using GalaxyHeader.xtc`.trim());
		
		lines = lines.map(v => v.trim()).filter(v => v.length > 0).filter(v => !headerLines.has(v));
		
		
		type CurEnumType = {
			name:string;
			values:Record<string, { index:number; name?:string; }>
		};
		
		let curEnum:CurEnumType|undefined;
		
		
		let enums:Record<string, EnumType> = {};
		function flushEnum(curEnum:CurEnumType){
			for(let i in curEnum.values){
				assert('name' in curEnum.values[i]);
			}
			
			assert(!(curEnum.name in enums));
			enums[curEnum.name] = curEnum.values as EnumType;
		}
		
		for(let line of lines){
			let m = line.match(/^\/\/\s*([a-z0-9_]+)$/i);
			if(m){
				// New enum
				
				let name = m[1];
				assert(name[0] == 'E');
				
				if(curEnum) flushEnum(curEnum);
				
				curEnum = {
					name,
					values: {},
				};
				
				continue;
			}
			
			assert(curEnum);
			
			m = line.match(/^const int ([a-z0-9_]+) = ([0-9]+);$/i);
			if(m){
				let index = parseInt(m[2]);
				assert(isFinite(index));
				
				let key = m[1].replace(/^c_/, 'e_');
				
				assert(!(key in curEnum.values));
				curEnum.values[key] = { index: index };
				
				continue;
			}
			
			m = line.match(/^const string ([a-z0-9_]+)Name = "([^"]+)";$/i);
			if(m){
				let key = m[1].replace(/^c_/, 'e_');
				
				assert(key in curEnum.values);
				assert(!('name' in curEnum.values[key]));
				curEnum.values[key].name = m[2];
				continue;
			}
			
			throw new Error("Unexpected line: " + line);
		}
		
		if(curEnum) flushEnum(curEnum);
		
		return enums;
	}));
	
	let enums = enumsArray.reduce((acc, cur) => {
		for(let name in cur){
			assert(!(name in acc));
			acc[name] = cur[name];
		}
		
		return acc;
	}, {});
	
	try { await fs.mkdir(`${__dirname}/../../data/`); } catch {}
	await fs.writeFile(`${__dirname}/../../data/enums_galaxy.json`, JSON.stringify(enums, null, '\t'), 'utf8');
	
	
	assert("EGameCatalog" in enums);
	
	let autogenGalaxy = await fs.readFile(`${__dirname}/../../src/lib/dump.galaxy`, 'utf8');
	autogenGalaxy += "\nvoid dump_start(){\n";
	autogenGalaxy += `dump_output("{");\n`
	Object.values(enums["EGameCatalog"]).map(v => {
		let scopesEnumName = `EClassIdC${v.name}`;
		assert(scopesEnumName in enums);
		
		let scopes = Object.values(enums[scopesEnumName]).map(v => v.name);
		for(let scope of scopes){
			autogenGalaxy += `dump_scope("${scope}");\n`;
		}
	});
	autogenGalaxy += `dump_queued_scopes();\n`;
	autogenGalaxy += `dump_output("}");\n`
	autogenGalaxy += "}\n";
	
	await fs.writeFile(`${__dirname}/../../out/dump.galaxy`, autogenGalaxy);
})().then(async function(){
	let prefixOverrides:Record<string,string> = {
		"ETechCountState": "e_techState",
		"EAbilCmdFlags": "e_abilCmd",
		"EAbilArmMagazineEffect": "e_abilArmMagEffect",
		"EAbilArmMagazineFlag": "e_abilArmMagFlag",
		"EAbilArmMagazineInfoFlag": "e_abilArmMagInfoFlag",
		"EAbilArmMagazineLaunch": "e_abilArmMagLaunch",
		"EAbilArmMagazineManage": "e_abilArmMagManage",
		"EActorBaselineType": "e_actorBaseline",
		"EActorScopeBearingsTrackingType": "e_actorScopeBearingsTracking",
		"EActorHostedPropInheritType": "e_actorHostedPropInherit",
		"EActorSiteBillboardType": "e_actorSiteOpBillboard",
		"EActorSiteOpActionLocation": "e_actorSiteOpAction",
		"EActorSiteOpBasicType": "e_actorSiteOpBasic",
		"EActorSiteOpPhysicsImpactType": "e_actorSiteOpPhysicsImpact",
		"EActorSiteOpRotatorType": "e_actorSiteOpRotator",
		"EActorOnOffType": "e_actor",
		"EActorHeightSourceType": "e_actorHeightSource",
		"EActorHeightTestType": "e_actorHeightTest",
		"EActorIncomingType": "e_actorIncoming",
		"EActorCombatRevealDurationType": "e_actorCombatRevealDuration",
		"ESerpentType": "e_serpent",
		"ESerpentFlag": "e_actorSerpentFlag",
		"EActorMsgType": "e_actorMsg",
		"EActorTermType": "e_actorTerm",
		"EAnimSetTimeFromSource": "e_animSetTimeFrom",
		"EAnimTimeVariantType": "e_animTimeVariant",
		"EActorBlendType": "e_actorBlend",
		"ETextureVideoSoundType": "e_textureVideoSound",
		"EActorScopeFlags": "e_actorScopeFlag",
		"EActorIntersectType": "e_actorIntersect",
		"EActorScopeType": "e_actorScope",
		"EActorTransitionType": "e_actorTransition",
		"EActorPropertyCurveType": "e_actorPropertyCurve",
		"EActorPropertyCurveTangentType": "e_actorPropertyCurveTangent",
		"EUIStatusFlagType": "e_uiStatusFlagType",
		"EAIUIMode": "e_AIUIMode",
		"EActorPhysicsImpactSpyType": "e_actorPhysicsImpactSpy",
		"EActorPhysicsImpactRangeType": "e_actorPhysicsImpactRange",
		"EActorOverkillType": "e_actorOverkill",
		"EActorOverkillTestType": "e_actorOverkillTest",
		"EAMArcTest": "e_amArcTest",
		"EAMFilterLogic": "e_amFilterLogic",
		"EAMFilterAttachType": "e_amFilterAttachType",
		"EAMFilterType": "e_amFilterType",
		"EAMArcTestType": "e_amArcTestType",
		"EAMNumericField": "e_amNumericField",
		"EAMNumericFieldOp": "e_amNumericFieldOp",
		"EAMOccupancyLogic": "e_amOccupancyLogic",
		"EAMPatternType": "e_amPatternType",
		"EAMReductionType": "e_amReductionType",
		"EAMRandomDistribution": "e_amRandomDistribution",
		"EAMAttachType": "e_amAttachType",
		"ECmdResult": "e_cmd",
		"EPointType": "e_point",
		"ETonemapRegionTypes": "e_tr",
		"EVariationCommands": "e_hc",
		"EBoneID": "e_bone",
		"EAttachmentID": "e_attach",
		"EAttachKeyword": "e_attachKey",
		"EModelPhysicsType": "e_modelPhysics",
		"EAnimFlags": "e_animFlag",
		"EGraphicsLevel": "e_gl",
		"EGraphicsOption": "e_go",
		"EPhysicsState": "e_physics",
		"ESplatLayer": "e_sl",
		"EEventID": "e_event",
		"EMotionDriverType": "e_motionDriver",
		"EMotionRotationLaunchActorType": "e_motionRotLaunchActor",
		"EMotionRotationActorType": "e_motionRotActor",
		"EMotionThrowRotationType": "e_motionThrowRot",
		"EMotionTurnType": "e_motionTurn",
		"EMotionBlendType": "e_motionBlend",
		"EMotionArrivalTestType": "e_motionArrivalTest",
		"EMotionActorTrackingType": "e_motionActorTracking",
		"EMotionOverlayType": "e_motionOverlay",
		"EPreloadTiming": "e_preload",
		"EFoliageLayers": "e_fl",
		"EEditorTextType": "e_editorText",
		"EWeaponPrioritization": "e_weaponPrioritize",
		"EVitalsAccumulatorModificationType": "e_vitalsAccumulatorModification",
		"ESoundMaxPrioritization": "e_soundDupePrioritization",
		"EActorSiteOpTetherEnableType": "e_actorSiteOpTetherFlag",
		"ETechCategory": "e_techCat",
		"EParticipantType": "e_participant", // guess... verify
		"EActorSiteOpOrientAttachPointToType": "e_actorSiteOpOrientAttachPointTo",
		"ECmdFlags": "e_cmdFlag",
	};
	
	function processStrings(v:string){
		return v.split(/\r?\n/g,).map(v => v.split("=")[0].trim()).filter(v => v.length > 0);
	}
	
	let editorStrings = await fs.readFile(`${__dirname}/../../deps/SC2GameData/mods/core.sc2mod/enus.sc2data/LocalizedData/Editor/EditorCatalogStrings.txt`, "utf8");
	let gameStrings = await fs.readFile(`${__dirname}/../../deps/SC2GameData/mods/core.sc2mod/enus.sc2data/LocalizedData/GameStrings.txt`, "utf8");
	let editorArr = processStrings(editorStrings);
	editorArr.sort();
	
	let gameArr = processStrings(gameStrings).filter(v => v.startsWith("e_"));
	gameArr.sort();
	
	let set = new Set(editorArr);
	
	let enums:Record<string, EnumType> = {};
	
	const manualEnums:Record<string, EnumType> = JSON.parse(await fs.readFile(`${__dirname}/../../data/enums_manual.json`, "utf8"));
	
	const enumList:string[] = [];
	for(let key of editorArr){
		if(!key.startsWith("EDSTR_ENUMNAME_")) continue;
		enumList.push(key.slice("EDSTR_ENUMNAME_".length));
	}
	
	for(let enumName of enumList){
		if(!set.has(`EDSTR_ENUMNAME_${enumName}`)){
			console.log(`No ${enumName} in EditorCatalogStrings.txt`);
			continue;
		}
		
		let prefixName = `e_${enumName[1].toLowerCase() + enumName.slice(2)}`.toLowerCase();
		if(enumName in prefixOverrides){
			prefixName = `${prefixOverrides[enumName]}`.toLowerCase();
		}
		
		
		let values:EnumType = {};
		// O(N^2) but I'm too lazy to code it properly
		let index = 0;
		for(let key of editorArr){
			if(!key.toLowerCase().startsWith(`edstr_enumval_` + prefixName)) continue;
			
			key = key.slice(`EDSTR_ENUMVAL_`.length);
			if(key in values) continue;
			
			values[key] = {
				index: index++, // just a guess
				name: key.slice(prefixName.length),
			}
		}
		
		for(let key of gameArr){
			if(!key.toLowerCase().startsWith(prefixName)) continue;
			if(key in values) continue;
			
			values[key] = {
				index: index++, // just a guess
				name: key.slice(prefixName.length),
			}
		}
		
		if(Object.keys(values).length == 0){
			console.log(`${enumName} has no values in EditorCatalogStrings.txt (${prefixName})`);
			continue;
		}
		
		if(enumName in manualEnums){
			let manual = manualEnums[enumName];
			for(let [k,v] of Object.entries(manual)){
				if(v.index < 0) delete manual[k];
			}
			
			if(Object.keys(values).length > Object.keys(manual).length){
				console.log(`Investigate manual enum ${enumName}. Found more values than we have there`);
			}
		}
		
		enums[enumName] = values;
	}
	
	await fs.writeFile(`${__dirname}/../../data/enums_editor.json`, JSON.stringify(enums, null, '\t'), "utf8");
});
