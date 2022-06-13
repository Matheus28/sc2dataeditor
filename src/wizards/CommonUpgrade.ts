import { prompt, CatalogEntry, CatalogField, copyField, setToken, setField, hotkeyPositionToLetter } from "../lib/wizard";
import clc from "cli-color";

console.log("Welcome to the CommonUpgrade wizard! Enjoy your stay");
console.log("");

prompt.run(async function(){
	const id = await prompt.id("ID:");
	const upgradeEntry:CatalogEntry = {
		id,
		type: "CUpgrade",
		parent: "CommonUpgrade",
	};
	
	const abilResearchEntry:CatalogEntry = {
		id,
		type: "CAbilResearch",
		parent: "CommonUpgrade",
	};
	
	let maxLevel = await prompt.wizardInput(
		{
			text: "Upgrade max level",
			type: "int",
			min: 1,
			max: 5,
			default: 1,
			catalogDefault: 1,
		},
		{
			entry: upgradeEntry,
			name: ["MaxLevel"],
		},
	);
	
	const nameStringLink = `Name/${id}`;
	const tooltipStringLink = `Tooltip/${id}`;
	
	await prompt.wizardInputStringLink({ type: "str", text: "Upgrade name", default: "Unknown Upgrade" }, nameStringLink);
	await prompt.wizardInputStringLink({ type: "str", text: "Upgrade tooltip", default: "" }, tooltipStringLink);
	
	for(let i = 0; i < maxLevel; ++i){
		prompt.line(`Upgrade Level ${i+1}`);
		
		await prompt.wizardInput(
			{
				text: "Time to upgrade",
				type: "int",
				min: 0,
				default: 5,
				catalogDefault: 0,
			},
			{
				entry: abilResearchEntry,
				name: ["InfoArray", "Time"],
				indexes: [`Research${i+1}`]
			},
		);
		
		await prompt.wizardInput(
			{
				text: "Mineral cost",
				type: "int",
				min: 0,
				catalogDefault: 0,
			},
			{
				entry: abilResearchEntry,
				name: ["InfoArray", "Resource"],
				indexes: [`Research${i+1}`, "Minerals"]
			}
		);
		
		await prompt.wizardInput(
			{
				text: "Gas cost",
				type: "int",
				min: 0,
				catalogDefault: 0,
			},
			{
				entry: abilResearchEntry,
				name: ["InfoArray", "Resource"],
				indexes: [`Research${i+1}`, "Vespene"]
			}
		);
		
		await prompt.wizardInput(
			{
				text: "Energy cost",
				type: "int",
				min: 0,
				default: 0,
				catalogDefault: 0,
			},
			{
				entry: abilResearchEntry,
				name: ["InfoArray", "Vital"],
				indexes: [`Research${i+1}`, "Energy"]
			},
		);
	}
	
	prompt.line(`Button`);
	
	function makeButtonEntry(i:number):CatalogEntry{
		return {
			id: `${id}@${i+1}`,
			type: "CButton",
			parent: "CommonUpgradeButton",
		};
	}
	
	let buttonCardID = await prompt.wizardInput(
		{
			text: "Button card id (usually leave blank)",
			type: "str",
			default: "",
			catalogDefault: "",
		},
		{
			entry: makeButtonEntry(0),
			name: ["DefaultButtonLayout", "CardId"],
		},
	);
	
	let buttonRow = await prompt.wizardInput(
		{
			text: "Button row (x)",
			type: "int",
			min: 0,
			max: 2,
			catalogDefault: 0,
		},
		{
			entry: makeButtonEntry(0),
			name: ["DefaultButtonLayout", "Row"],
		},
	);
	
	let buttonColumn = await prompt.wizardInput(
		{
			text: "Button column (y)",
			type: "int",
			min: 0,
			max: 4,
			catalogDefault: 0,
		},
		{
			entry: makeButtonEntry(0),
			name: ["DefaultButtonLayout", "Column"],
		},
	);
	
	await prompt.wizardInputHotkey(
		{
			type: "hotkey",
			text: "Button hotkey",
			default: hotkeyPositionToLetter(buttonRow, buttonColumn),
		},
		
		`Button/Hotkey/${id}`
	);
	
	let lastButtonArt:string = "Assets\\Textures\\btn-ability-protoss-envision.dds";
	
	for(let i = 0; i < maxLevel; ++i){
		setToken(makeButtonEntry(i), "x", id);
		lastButtonArt = await prompt.wizardInputToken(
			{
				text: `Button level ${i+1} art:`,
				type: "str",
				default: lastButtonArt,
			},
			makeButtonEntry(i),
			"art",
		);
		
		if(i > 0){
			setField({
				entry: makeButtonEntry(i),
				name: ["DefaultButtonLayout", "CardId"],
			}, buttonCardID == "" ? null : buttonCardID);
			
			setField({
				entry: makeButtonEntry(i),
				name: ["DefaultButtonLayout", "Row"],
			}, buttonRow == 0 ? null : buttonRow);
			
			setField({
				entry: makeButtonEntry(i),
				name: ["DefaultButtonLayout", "Column"],
			}, buttonColumn == 0 ? null : buttonColumn);
		}
	}
	
	// Requirements and nodes boilerplate
	setToken({ id, type: "CRequirementEq", parent: "CommonUpgrade"}, "x", id);
	setToken({ id: `${id}@Count`, type: "CRequirementCountUpgrade", parent: "CommonUpgrade@Count"}, "x", id);
	setToken({ id: `${id}@QoB`, type: "CRequirementCountUpgrade", parent: "CommonUpgrade@QoB"}, "x", id);
	
	for(let i = 0; i < maxLevel; ++i){
		setToken({ id: `${id}@${i+1}`, type: "CRequirement", parent: "CommonUpgrade"}, "x", id);
		setToken({ id: `${id}@${i+1}Show`, type: "CRequirementEq", parent: `CommonUpgrade@${i+1}Show`}, "x", id);
	}
	
});
