module.exports = {
	extends: [
		'eslint:recommended',
	],
	env: {
		node: true,
		browser: true,
		es2020: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		// Possible Errors
		'no-await-in-loop': ['error'],
		'no-console': ['error', { allow: ['warn', 'error']}],
		'no-template-curly-in-string': ['error'],
		'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
		'require-atomic-updates': ['error'],

		// Best Practices
		'accessor-pairs': ['error', { setWithoutGet: true }],
		'array-callback-return': ['error'],
		'block-scoped-var': ['error'],
		'class-methods-use-this': ['error'],
		'consistent-return': ['error'],
		curly: ['error', 'all'],
		'default-case': ['error'],
		'default-case-last': ['error'],
		'dot-location': ['error', 'property'],
		eqeqeq: ['error'],
		'grouped-accessor-pairs': ['error'],
		'guard-for-in': ['error'],
		'max-classes-per-file': ['error'],
		'no-alert': ['error'],
		'no-caller': ['error'],
		'no-constructor-return': ['error'],
		'no-else-return': ['error'],
		'no-empty-function': ['error'],
		'no-eval': ['error'],
		'no-extend-native': ['error'],
		'no-floating-decimal': ['error'],
		'no-implicit-coercion': ['error'],
		'no-implicit-globals': ['error'],
		'no-implied-eval': ['error'],
		'no-labels': ['error'],
		'no-lone-blocks': ['error'],
		'no-multi-spaces': ['error'],
		'no-multi-str': ['error'],
		'no-new': ['error'],
		'no-new-func': ['error'],
		'no-new-wrappers': ['error'],
		'no-nonoctal-decimal-escape': ['error'],
		'no-octal-escape': ['error'],
		'no-param-reassign': ['error'],
		'no-proto': ['error'],
		'no-return-assign': ['error'],
		'no-script-url': ['error'],
		'no-self-compare': ['error'],
		'no-unmodified-loop-condition': ['error'],
		'no-useless-concat': ['error'],
		'no-useless-return': ['error'],
		'no-void': ['error'],
		'prefer-promise-reject-errors': ['error'],
		'prefer-regex-literals': ['error'],
		radix: ['error'],

		// Variables
		'no-undef-init': ['error'],
		'no-undefined': ['error'],

		// Stylistic Issues
		'array-bracket-newline': ['error', 'consistent'],
		'array-bracket-spacing': ['error'],
		'array-element-newline': ['error', 'consistent'],
		'block-spacing': ['error'],
		camelcase: ['error'],
		'comma-style': ['error'],
		'computed-property-spacing': ['error'],
		'consistent-this': ['error', 'self'],
		'eol-last': ['error'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'implicit-arrow-linebreak': ['error'],
		'jsx-quotes': ['error'],
		'key-spacing': ['error'],
		'lines-around-comment': ['error'],
		'max-len': ['error', { code: 120,
			ignoreStrings: true }],
		'multiline-comment-style': ['error', 'bare-block'],
		'new-cap': ['error'],
		'new-parens': ['error'],
		'no-array-constructor': ['error'],
		'no-bitwise': ['error'],
		'no-continue': ['error'],
		'no-inline-comments': ['error'],
		'no-lonely-if': ['error'],
		'no-mixed-operators': ['error'],
		'no-multi-assign': ['error'],
		'no-multiple-empty-lines': ['error'],
		'no-nested-ternary': ['error'],
		'no-new-object': ['error'],
		'no-plusplus': ['error'],
		'no-trailing-spaces': ['error'],
		'no-underscore-dangle': ['error', { allow: ['__SITE_SETTINGS__', '__NEXT_REDUX_STORE__']}],
		'no-unneeded-ternary': ['error'],
		'no-whitespace-before-property': ['error'],
		'nonblock-statement-body-position': ['error'],
		'object-curly-newline': ['error', { consistent: true }],
		'object-property-newline': ['error'],
		'one-var': ['error', 'never'],
		'operator-assignment': ['error'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'as-needed'],
		'semi-spacing': ['error'],
		'semi-style': ['error'],
		'space-before-blocks': ['error'],
		'space-in-parens': ['error'],
		'space-unary-ops': ['error', { words: true,
			nonwords: false }],
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': ['error'],
		'template-tag-spacing': ['error'],
		'wrap-regex': ['error'],

		// ECMAScript 6
		'arrow-body-style': ['error'],
		'arrow-parens': ['error'],
		'arrow-spacing': ['error'],
		'no-useless-computed-key': ['error'],
		'no-var': ['error'],
		'prefer-const': ['error'],
		'prefer-destructuring': ['error'],
		'prefer-rest-params': ['error'],
		'prefer-template': ['error'],
		'rest-spread-spacing': ['error'],
		'template-curly-spacing': ['error'],


		// Переопределяются TS
		'brace-style': ['error'],
		'comma-dangle': ['error', {
			arrays: 'never',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],
		'comma-spacing': ['error'],
		'default-param-last': ['error'],
		'dot-notation': ['error'],
		'func-call-spacing': ['error'],
		indent: ['error', 'tab'],
		'init-declarations': ['error', 'always'],
		'keyword-spacing': ['error'],
		'lines-between-class-members': ['error'],
		'no-dupe-class-members': ['error'],
		'no-duplicate-imports': ['error'],
		'no-invalid-this': ['error'],
		'no-loop-func': ['error'],
		'no-loss-of-precision': ['error'],
		'no-magic-numbers': ['error', {
			ignore: [0, 1],
			ignoreArrayIndexes: true,
		}],
		'no-redeclare': ['error'],
		'no-shadow': ['error'],
		'no-throw-literal': ['error'],
		'no-unused-expressions': ['error'],
		'no-unused-vars': ['error'],
		'no-use-before-define': ['error', { functions: false }],
		'no-useless-constructor': ['error'],
		'object-curly-spacing': ['error', 'always', {
			arraysInObjects: false,
			objectsInObjects: true,
		}],
		quotes: ['error', 'single'],
		'no-return-await': ['error'],
		semi: ['error'],
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-infix-ops': ['error'],
	},
	overrides: [
		{
			files: ['*.test.js'],
			rules: {
				'no-magic-numbers': 'off',
			},
		}
	],
}