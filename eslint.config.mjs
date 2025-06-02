import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import jest from 'eslint-plugin-jest';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import testingLibrary from 'eslint-plugin-testing-library';
import unusedImports from 'eslint-plugin-unused-imports';
import { resolve } from 'path';
import tsEslint from 'typescript-eslint';

const compat = new FlatCompat();

const project = resolve(process.cwd(), 'tsconfig.json');

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project,
      },
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      'jsx-a11y': jsxA11y,
    },

    rules: {
      'import/extensions': [
        'error',
        {
          js: 'ignorePackages',
          ts: 'never',
          json: 'always',
        },
      ],

      'import/prefer-default-export': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@next/next/no-img-element': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'react-hooks/exhaustive-deps': 'off',

      curly: ['error', 'all'],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],

      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],

      'no-console': 'error',

      '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          ignoreTernaryTests: true,
        },
      ],
    },
  },
  ...[jest.configs['flat/recommended'], testingLibrary.configs['flat/react']].map((config) => ({
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/__mocks__/*'],
    ...config,
  })),
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ...tsEslint.configs.disableTypeChecked,
  },
  prettierPlugin,
];

export default config;