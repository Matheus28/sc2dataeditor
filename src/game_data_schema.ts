// Generates a xsd schema

import assert from "assert";
import { unparsedGameData, catalogContents } from "./lib/game_data_unparsed";
import { DataFieldDefaults, SimpleRealTypesArray, unparsedEnums } from "./lib/game_data";
import { writeFileSync } from "fs";


function fixName(s:string):string {
	return s.replaceAll(/[^a-z0-9_]/gi, '_');
}

const accumulatorMapping:Record<string,string> = {
	"SAccumulatedUInt32": "uint32",
	"SAccumulatedInt32": "int32",
	"SAccumulatedFixed": "CFixed",
	"SAccumulatedGameRate": "CGameRate",
	"SAccumulatedGameTime": "CGameTime",
};

const addToEnum:Record<string, string[]> = {
	"EUnitCollide": [
		"Small",
		"Burrow",
		"Burrow3",
		"TinyCritter",
		"Swarm",
		"ForceField",
		"Locust",
		"DisruptorPhased",
		"Structure",
		"FlyingImmobile",
		"FlyingEscorts",
		"Ground",
		"LocustForceField",
		"Flying",
		"Colossus",
		"CreepTumor",
		"RoachBurrow",
		"Phased",
		"Larva",
		"Flying0",
		"Flying1",
		"Flying2",
		"Flying3",
		"Flying4",
		"Flying5",
		"Flying6",
	]
};

function getStructFieldsWithParents(name:string){
	let cur = unparsedGameData.classes[name];
	let fields = {...cur.fields};
	while(cur.parent){
		cur = unparsedGameData.classes[cur.parent];
		fields = {...fields, ...cur.fields};
	}
	
	return fields;
}

let str = "";

str += `<?xml version="1.0"?>\n`;
str += `<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">\n`;




str += `

<xs:complexType name="CBase" abstract="true">
	<xs:choice minOccurs="0" maxOccurs="unbounded">
		
	</xs:choice>

	<xs:attribute name="id" type="xs:string"/>
	<xs:attribute name="default" type="simple_bool"/>
	<xs:attribute name="parent" type="xs:string"/>
	<xs:anyAttribute processContents="skip"/>
</xs:complexType>

<!-- Completely ignored though -->
<xs:complexType name="constDecl">
	<xs:attribute name="id" type="xs:string"/>
	<xs:attribute name="type" type="xs:string"/>
	<xs:attribute name="value" type="xs:string"/>
	<xs:attribute name="path" type="xs:string"/>
</xs:complexType>


<!-- Simple Types -->
${Object.entries(DataFieldDefaults).map(([typeName, typeDefaultValue]) => {
	let complexType = `<xs:complexType name="${fixName(typeName)}"><xs:attribute name="value" type="simple_${fixName(typeName)}"/></xs:complexType>`;
	if(typeof typeDefaultValue == "string"){
		return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:string" /></xs:simpleType>`;
	}
	
	if(typeof typeDefaultValue == "boolean"){
		return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:string"><xs:enumeration value="0"/><xs:enumeration value="1"/></xs:restriction></xs:simpleType>`;
	}
	
	if((SimpleRealTypesArray as readonly string[]).indexOf(typeName) != -1){
		return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:string"><xs:pattern value="-?[0-9]+(.[0-9]*)?"/></xs:restriction></xs:simpleType>`;
	}else{
		if(typeName.startsWith("int")){
			return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:int" /></xs:simpleType>`;
		}
		
		if(typeName.startsWith("uint")){
			return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:unsignedInt" /></xs:simpleType>`;
		}
		
		return complexType + `<xs:simpleType name="simple_${"" + fixName(typeName)}"><xs:restriction base="xs:int" /></xs:simpleType>`;
	}
}).join("\n")}

<!-- Enums -->
${Object.entries(unparsedEnums).map(([enumName, enumContents]) => {
	let tmp = `<xs:complexType name="${fixName(enumName)}"><xs:attribute name="value" type="simple_${fixName(enumName)}"/></xs:complexType>`;
	tmp += `<xs:simpleType name="simple_${fixName(enumName)}"><xs:restriction base="xs:string">`;
	tmp += Object.values(enumContents).map(v => `<xs:enumeration value="${v.name}"/>`).join('\n');
	if(enumName in addToEnum){
		tmp += addToEnum[enumName].map(vv => `<xs:enumeration value="${vv}"/>`).join("\n");
	}
	tmp += `</xs:restriction></xs:simpleType>`;
	return tmp;
}).join("\n")}

<!-- Structs -->
${Object.entries(unparsedGameData.classes).map(([structName, struct]) => {
	let base = (structName[0] == 'C' ? `CBase` : null);
	let fields = getStructFieldsWithParents(structName);
	
	return `
		<xs:complexType name="${structName}"${struct.abstract ? ` abstract="true"`:""}>
		${base ? `<xs:complexContent><xs:extension base="${base}">` : ""}
		
		<xs:choice minOccurs="0" maxOccurs="unbounded">
			${Object.entries(fields).map(([fieldName, fieldDesc]) => {
				const typeName = typeof fieldDesc == "string" ? fieldDesc : fieldDesc.type;
				const isArray = typeof fieldDesc != "string" && fieldDesc.array;
				if(!isArray){
					return `<xs:element minOccurs="0" maxOccurs="1" name="${fieldName}" type="${fixName(typeName)}" />`;
				}
				
				assert(typeof fieldDesc != "string");
				
				if(fieldDesc.indexEnum){
					return `<xs:element minOccurs="0" maxOccurs="unbounded" name="${fieldName}">
						<xs:complexType>
							<xs:complexContent>
								<xs:extension base="${fixName(typeName)}">
									<xs:attribute name="index" type="simple_${fixName(fieldDesc.indexEnum)}"/>
									<xs:attribute name="removed" type="simple_bool"/>
								</xs:extension>
							</xs:complexContent>
						</xs:complexType>
					</xs:element>`;
				}else{
					return `<xs:element minOccurs="0" maxOccurs="unbounded" name="${fieldName}">
						<xs:complexType>
							<xs:complexContent>
								<xs:extension base="${fixName(typeName)}">
									<xs:attribute name="index" type="xs:integer"/>
									<xs:attribute name="removed" type="simple_bool"/>
								</xs:extension>
							</xs:complexContent>
						</xs:complexType>
					</xs:element>`;
					
					return `<xs:element minOccurs="0" maxOccurs="unbounded" name="${fieldName}" type="${fixName(typeName)}" />`;
				}
			}).join("\n")}
		</xs:choice>
		
		${structName in accumulatorMapping ? `<xs:attribute name="value" type="simple_${accumulatorMapping[structName]}"/>` : ""}
		
		${Object.entries(fields).map(([fieldName, fieldDesc]) => {
			const typeName = typeof fieldDesc == "string" ? fieldDesc : fieldDesc.type;
			const isArray = typeof fieldDesc != "string" && fieldDesc.array;
			if(isArray) return "";
			
			if(typeName in accumulatorMapping){
				return `<xs:attribute name="${fieldName}" type="simple_${accumulatorMapping[typeName]}"/>`;
			}
			
			let isSimpleType = (typeName in unparsedEnums) || (typeName in DataFieldDefaults);
			if(!isSimpleType) return "";
			
			return `<xs:attribute name="${fieldName}" type="simple_${fixName(typeName)}"/>`;
		}).join("\n")}
		
		${base ? `</xs:extension></xs:complexContent>` : ""}
		</xs:complexType>`.slice(1)
}).join("\n")}
	
<!-- Catalog root -->
	<xs:complexType name="Catalog">
		<xs:choice minOccurs="0" maxOccurs="unbounded">
			<xs:element name="const" type="constDecl"/>
			${Object.entries(catalogContents).map(([_, scopes]) => scopes.map(scope => `<xs:element name="${scope}" type="${scope}"/>`).join("\n")).join('\n')}
		</xs:choice>
	</xs:complexType>
	
	<xs:element name="Catalog" type="Catalog">
		${Object.entries(catalogContents).map(([name, scopes]) => {
				if(scopes.length == 0) return "";
				return `<xs:unique name="${name}ID"><xs:selector xpath="${scopes.join("|")}"/><xs:field xpath="@id"/></xs:unique>`;
		}).join('\n')}
	</xs:element>
`;


str += `</xs:schema>\n`;

str = str.replace(/\n[ \t]*\n/g, '\n');
str = str.replace(/\n[ \t]*\n/g, '\n');

writeFileSync(`${__dirname}/../data/Catalog.xsd`, str, "utf8");
