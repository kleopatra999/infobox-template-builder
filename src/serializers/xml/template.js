const data = `<data{{#boundVariableName}} source="{{.}}"{{/boundVariableName}}>
	{{#label}}<label>{{.}}</label>{{/label}}
	{{#defaultValue}}<default>{{.}}</default>{{/defaultValue}}
	{{#stringTemplate}}<format>{{.}}</format>{{/stringTemplate}}
</data>`;

const image = `<image{{#boundVariableName}} source="{{.}}"{{/boundVariableName}}>
	{{#caption}}
		<caption{{#boundVariableName}} source="{{.}}"{{/boundVariableName}}>
			{{#defaultValue}}<default>{{.}}</default>{{/defaultValue}}
			{{#stringTemplate}}<format>{{.}}</format>{{/stringTemplate}}
		</caption>
	{{/caption}}
	{{#if altDefaultValue}}
		<alt{{#altBoundVariableName}} source="{{.}}"{{/altBoundVariableName}}>
			<default>{{altDefaultValue}}</default>
		</alt>
	{{/if}}
	{{#defaultValue}}<default>{{.}}</default>{{/defaultValue}}
</image>`;

const title = `<title{{#boundVariableName}} source="{{.}}"{{/boundVariableName}}>
	{{#defaultValue}}<default>{{.}}</default>{{/defaultValue}}
	{{#stringTemplate}}<format>{{.}}</format>{{/stringTemplate}}
</title>`;

// headers within groups use the "title" node type
const header = `<header>{{value}}</header>`;

export const xmlString = `<infobox{{#theme}} theme="{{.}}"{{/theme}}{{#themeVarName}} theme-source="{{.}}"{{/themeVarName}}{{#layout}} layout="{{.}}"{{/layout}}>
	{{#each items as |item|}}
		{{#equals item._nodeType 'data'}}${data}{{/equals}}
		{{#equals item._nodeType 'image'}}${image}{{/equals}}
		{{#equals item._nodeType 'title'}}${title}{{/equals}}
		{{#equals item._nodeType 'group'}}
			<group>
				{{#each item.items as |groupItem|}}
					{{#equals groupItem._nodeType 'data'}}${data}{{/equals}}
					{{#equals groupItem._nodeType 'image'}}${image}{{/equals}}
					{{#equals groupItem._nodeType 'title'}}${header}{{/equals}}
				{{/each}}
			</group>
		{{/equals}}
	{{/each}}
</infobox>`;
