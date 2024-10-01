export default function (
	/** @type {import('plop').NodePlopAPI} */
	plop
) {
	plop.setGenerator("component", {
		name: "component",
		description: "Create a React component",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "What is your component name?",
			},
			{
				type: "confirm",
				name: "wantTestFile",
				message: "Do you want a test file?",
			},
		],
		actions: function (data) {
			const actions = [
				{
					type: "add",
					path: "app/_components/{{pascalCase name}}/{{pascalCase name}}.tsx",
					templateFile: "plop-templates/Component/component.hbs",
				},
				{
					type: "add",
					path: "app/_components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
					templateFile: "plop-templates/Component/scss-module.hbs",
				},
				{
					type: "add",
					path: "app/_components/{{pascalCase name}}/index.ts",
					templateFile: "plop-templates/Component/index.hbs",
				},
				{
					type: "append",
					path: "app/_components/index.ts",
					// pattern: `/* PLOP_INJECT_EXPORT */`,
					template: `export { {{pascalCase name}} } from './{{pascalCase name}}';`,
				},
			];

			if (data.wantTestFile) {
				actions.push({
					type: "add",
					path: "app/_components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
					templateFile: "plop-templates/Component/test.hbs",
				});
				actions.push({
					type: "add",
					path: "app/_components/{{pascalCase name}}/{{pascalCase name}}.test-ids.ts",
					templateFile: "plop-templates/Component/test-ids.hbs",
				});
			}

			return actions;
		},
	});
}
