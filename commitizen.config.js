const types = [
	{
		value: "feat",
		name: "✨ feat: A new feature",
	},
	{
		value: "fix",
		name: "🐞 fix: A bug fix",
	},
	{
		value: "chore",
		name: "🔩 chore: Doesn't modify src or test files",
	},
	{
		value: "build",
		name: "🚀 build: Build system config or external dependencies",
	},
	{
		value: "refactor",
		name: "🔀 refactor: Neither fixes a bug nor adds a feature",
	},
	{
		value: "revert",
		name: "⏪ revert: Reverts a previous commit",
	},
];

const scopes = ["automation", "component", "config", "data", "docs", "layout", "media", "styles"].map((name) => ({
	name,
}));

module.exports = {
	types,
	scopes,
	messages: {
		type: "Type of change that you're committing:",
		scope: "\nChoose the SCOPE of this change (optional):",
		customScope: "Denote the SCOPE of this change:",
		subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
		body: "Provide a LONGER description of the change (optional):\n",
		breaking: "List BREAKING CHANGES (optional):\n",
		footer: "List CLOSED ISSUES (optional). E.g.: #31, #34:\n",
		confirmCommit: "Are you sure you want to proceed with the commit above?",
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
	subjectLimit: 60,
};
