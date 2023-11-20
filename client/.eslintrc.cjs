module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'react-refresh'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	rules: {
		'prettier/prettier': ['error', { semi: true }],

		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'error',

		'arrow-body-style': ['error', 'as-needed'],
		"no-duplicate-imports": ["error", { "includeExports": true }],
		"eqeqeq": ["error", "always"],
		"func-name-matching": ["error", "always"]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
