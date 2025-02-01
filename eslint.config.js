import { fileURLToPath } from 'url';
import path from 'path';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// NOTE: Most of the linting rules are copies from AirBnb
// Due to difficulties importing those rules, they have been copied.
// TODO: Should we give the AirBnb import another go?
// TODO: Should we move to a 2 space tab?
export default [
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
                tsconfigRootDir: __dirname,
                project: './tsconfig.eslint.json',
            },
            globals: {
                window: true,
                document: true,
                console: true,
                setTimeout: true,
                clearTimeout: true,
                setInterval: true,
                clearInterval: true,
                Promise: true,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            import: importPlugin,
            '@typescript-eslint': typescriptPlugin,
            'react-refresh': reactRefreshPlugin,
        },
        rules: {
            'no-console': 'warn',
            'no-debugger': 'warn',
            'array-bracket-newline': ['error', { multiline: true, minItems: null }],
            'array-bracket-spacing': ['error', 'never'],
            'array-callback-return': ['error', { allowImplicit: true }],
            'arrow-body-style': ['off'],
            'block-scoped-var': 'error',
            camelcase: ['error', { properties: 'always' }],
            'class-methods-use-this': 'error',
            'consistent-return': 'error',
            curly: ['error', 'multi-line'],
            'default-case': ['error', { commentPattern: '^no default$' }],
            'default-case-last': 'error',
            'default-param-last': 'error',
            'dot-location': ['error', 'property'],
            'dot-notation': ['error', { allowKeywords: true }],
            eqeqeq: ['error', 'always'],
            'func-call-spacing': ['error', 'never'],
            'function-paren-newline': ['error', 'consistent'],
            'implicit-arrow-linebreak': ['error', 'beside'],
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    js: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'ignore',
                },
            ],
            'jsx-quotes': ['error', 'prefer-double'],
            'no-constant-condition': 'error',
            'no-duplicate-imports': ['error', { includeExports: true }],
            'no-lone-blocks': 'error',
            'no-loop-func': 'error',
            'no-multi-assign': 'error',
            'no-new-wrappers': 'error',
            'no-plusplus': 'off',
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'ForInStatement',
                    message: 'for..in loops are not allowed in modern JavaScript.',
                },
            ],
            'no-shadow': ['error', { hoist: 'all' }],
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'object-curly-newline': ['error', { consistent: true }],
            'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
            'prefer-const': ['error', { destructuring: 'all' }],
            'prefer-template': 'error',
            'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
            'react/jsx-props-no-spreading': ['off'],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'off',
            semi: ['error', 'always'],
            'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
            'template-curly-spacing': ['error', 'never'],
        },
    },
];
