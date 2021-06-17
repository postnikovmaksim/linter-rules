module.exports = {
	extends: [
		'plugin:import/recommended',
	],
	plugins: [
		'import',
	],
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']} },
		'import/ignore': ['\\.d.ts'],
		'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx']},
	},
	rules: {
		// Static analysis
		'import/no-unresolved': ['error'],
		'import/named': ['error'],
		'import/default': ['error'],
		'import/namespace': ['error'],
		'import/no-absolute-path': ['error'],
		'import/no-self-import': ['error'],
		'import/no-cycle': ['error'],
		'import/no-useless-path-segments': ['error'],

		// Helpful warnings
		'import/export': ['error'],
		'import/no-named-as-default': ['error'],
		'import/no-named-as-default-member': ['error'],
		'import/no-extraneous-dependencies': ['error'],
		'import/no-mutable-exports': ['error'],

		// Style guide
		'import/first': ['error'],
		'import/no-duplicates': ['error'],
		'import/order': ['error', {
			'newlines-between': 'always',
			alphabetize: { order: 'asc',
				caseInsensitive: true },
		}],
		'import/newline-after-import': ['error'],
		'import/no-unassigned-import': ['error', {
			"allow": [
				"**/*.css",
				"regenerator-runtime/runtime",
				"core-js/stable",
				"babel-register",
			]
		}],
		'import/no-named-default': ['error'],
	}
}
