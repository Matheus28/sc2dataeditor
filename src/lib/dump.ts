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
	const enumsFromStringsNeeded = [
		"EAbilAttackFlag",
		"EAbilBatteryFlag",
		"EAbilBehaviorCycleMode",
		"EAbilLastTarget",
		"EAbilOrderDisplayType",
		"EAccumulatorApplicationRule",
		"EAccumulatorAttributePointsFlag",
		"EAccumulatorBehaviorType",
		"EAccumulatorOperation",
		"EActorModelAspectDuring",
		"EActorModelAspectModelOwnerType",
		"EActorModelAspectObservedPlayerType",
		"EActorModelAspectObservingPoV",
		"EActorModelAspectPerson",
		"EActorModelAspectRegardsAs",
		"EActorModelAspectTest",
		"EActorPhysicsDataFlag",
		"EActorPlayerIdSource",
		"EActorQuadDecorationFlag",
		"EActorQuadDecorationFunction",
		"EActorSoundPlayMode",
		"EActorSoundValueSource",
		"EAttackTypeResponse",
		"EBehaviorHeroicState",
		"EBehaviorPowerSourceFlag",
		"EChargeFlag",
		"ECursorRangeMode",
		"EDamageResponseCategory",
		"EDamageResponseDamageValue",
		"EDamageResponseHandledValue",
		"EDamageTypeResponse",
		"EEffectModifyFacing",
		"EEffectModifyTurret",
		"EEffectModifyTurretFlag",
		"EEffectRemoveBehaviorAlignment",
		"EGlueTheme",
		"EImplementionLevel",
		"EListWalkMode",
		"EMuteControl",
		"EPlayerLeaveFlag",
		"EPurchaseWarningCondition",
		"EQuickCastMode",
		"ESelectionTransferFlag",
		"ESoundDataFlag",
		"ESoundDupePriority",
		"ESoundMaxMethod",
		"ESoundMaxPrioritization",
		"ETargetModeValidation",
		"EUnitGender",
		"EVitalsAccumulatorModificationType",
		"EVolumeControl",
		"EAbilAttackModifierFlag",
		"EActorModelMaterialType",
		"EActorSiteOpTetherEnableType",
		"EActorSiteOrbiterType",
		"EActorTiltType",
		"EArtifactType",
		"EAMBestMatchFlag",
		"EBehaviorUnitTrackerAtMaxRule",
		"EBehaviorUnitTrackerSnapRule",
		"EEffectApplyBehaviorFlag",
		"EEffectContainer",
		"EExclusivityAction",
		"EExclusivityQueueAction",
		"EResponseContinueMethod",
		"EResponseUnitBirthType",
		"ESkillPoint",
		"ESoundExclusivityFlag",
		"ESoundMixSnapshotFlag",
		"EUnitTestState",
		"EWeaponType",
		"EVoiceOverSkinState",
		"EVoiceOverSoundType",
		"EBundleFlag",
		"EKineticFollow",
	];
	
	let strings = await fs.readFile(`${__dirname}/../../deps/SC2GameData/mods/core.sc2mod/enus.sc2data/LocalizedData/Editor/EditorCatalogStrings.txt`, "utf8");
	let arr = strings.split(/\r?\n/g,).map(v => v.split("=")[0].trim()).filter(v => v.length > 0);
	arr.sort();
	
	let set = new Set(arr);
	
	let enums:Record<string, EnumType> = {};
	
	const manualEnums:Record<string, EnumType> = JSON.parse(await fs.readFile(`${__dirname}/../../data/enums_manual.json`, "utf8"));
	
	for(let enumName of enumsFromStringsNeeded){
		if(!set.has(`EDSTR_ENUMNAME_${enumName}`)){
			console.log(`No ${enumName} in EditorCatalogStrings.txt`);
			continue;
		}
		
		let prefixName = `EDSTR_ENUMVAL_e_${enumName[1].toLowerCase() + enumName.slice(2)}`.toLowerCase();
		if(prefixName == "edstr_enumval_e_vitalsaccumulatormodificationtype") prefixName = "EDSTR_ENUMVAL_e_vitalsAccumulatorModification".toLowerCase();
		if(prefixName == "edstr_enumval_e_soundmaxprioritization") prefixName = "EDSTR_ENUMVAL_e_soundDupePrioritization".toLowerCase();
		if(prefixName == "edstr_enumval_e_actorsiteoptetherenabletype") prefixName = "EDSTR_ENUMVAL_e_actorSiteOpTetherFlag".toLowerCase();
		
		
		let values:EnumType = {};
		// O(N^2) but I'm too lazy to code it properly
		let index = 0;
		for(let key of arr){
			if(!key.toLowerCase().startsWith(prefixName)) continue;
			
			values[key.slice(`EDSTR_ENUMVAL_`.length)] = {
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
