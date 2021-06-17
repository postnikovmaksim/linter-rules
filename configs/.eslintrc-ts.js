module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		// TS
		'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
		'@typescript-eslint/ban-tslint-comment': ['error'],
		'@typescript-eslint/consistent-indexed-object-style': ['error'],
		'@typescript-eslint/consistent-type-assertions': ['error'],
		'@typescript-eslint/consistent-type-definitions': ['error'],
		'@typescript-eslint/member-delimiter-style': ['error'],
		'@typescript-eslint/method-signature-style': ['error'],
		'@typescript-eslint/naming-convention': ['error', {
			selector: 'interface',
			format: ['PascalCase'],
			custom: {
				regex: '^I[A-Z]',
				match: true,
			},
		}],
		'@typescript-eslint/no-confusing-non-null-assertion': ['error'],
		'@typescript-eslint/no-confusing-void-expression': ['error'],
		'@typescript-eslint/no-extraneous-class': ['error'],
		'@typescript-eslint/no-invalid-void-type': ['error'],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
		// "@typescript-eslint/no-unnecessary-condition": ["error"],
		'@typescript-eslint/no-unnecessary-type-arguments': ['error'],
		'@typescript-eslint/no-unnecessary-type-constraint': ['error'],
		'@typescript-eslint/prefer-enum-initializers': ['error'],
		'@typescript-eslint/prefer-function-type': ['error'],
		'@typescript-eslint/prefer-includes': ['error'],
		'@typescript-eslint/prefer-nullish-coalescing': ['error'],
		'@typescript-eslint/prefer-optional-chain': ['error'],
		'@typescript-eslint/promise-function-async': ['error'],
		'@typescript-eslint/switch-exhaustiveness-check': ['error'],
		'@typescript-eslint/type-annotation-spacing': ['error'],

		// Extension Rules
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error'],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error', {
			arrays: 'never',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],
		'comma-spacing': 'off',
		'@typescript-eslint/comma-spacing': ['error'],
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': ['error'],
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': ['error'],
		'func-call-spacing': 'off',
		'@typescript-eslint/func-call-spacing': ['error'],
		indent: 'off',
		'@typescript-eslint/indent': ['error', 'tab'],
		'init-declarations': 'off',
		'@typescript-eslint/init-declarations': ['error', 'always'],
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': ['error'],
		'lines-between-class-members': 'off',
		'@typescript-eslint/lines-between-class-members': ['error'],
		'no-dupe-class-members': 'off',
		'@typescript-eslint/no-dupe-class-members': ['error'],
		'no-duplicate-imports': 'off',
		'@typescript-eslint/no-duplicate-imports': ['error'],
		'no-invalid-this': 'off',
		'@typescript-eslint/no-invalid-this': ['error'],
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': ['error'],
		'no-loss-of-precision': 'off',
		'@typescript-eslint/no-loss-of-precision': ['error'],
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': ['error', {
			ignore: [-1, 0, 1],
			ignoreArrayIndexes: true,
		}],
		'no-redeclare': 'off',
		'@typescript-eslint/no-redeclare': ['error'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-throw-literal': 'off',
		'@typescript-eslint/no-throw-literal': ['error'],
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': ['error'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error', { functions: false }],
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': ['error'],
		'object-curly-spacing': 'off',
		'@typescript-eslint/object-curly-spacing': ['error', 'always', {
			arraysInObjects: false,
			objectsInObjects: true,
		}],
		quotes: 'off',
		'@typescript-eslint/quotes': ['error', 'single'],
		'no-return-await': 'off',
		'@typescript-eslint/return-await': 'error',
		semi: 'off',
		'@typescript-eslint/semi': ['error'],
		'space-before-function-paren': 'off',
		'@typescript-eslint/space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-infix-ops': 'off',
		'@typescript-eslint/space-infix-ops': ['error'],
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': ['error'],
				'@typescript-eslint/explicit-module-boundary-types': ['error'],
			},
		},
		{
			files: ['*.test.ts'],
			rules: {
				'@typescript-eslint/no-magic-numbers': 'off',
			},
		}
	],
}
