module.exports = {
	ignorePatterns: [
		'.eslintrc.js',
		'node_modules',
		'build',
		'.storybook',
		'.next'
	],
	extends: [
		'./configs/.eslintrc-base.js',
		'./configs/.eslintrc-import.js',
		'./configs/.eslintrc-react.js',
		'./configs/.eslintrc-ts.js'
	],
};
