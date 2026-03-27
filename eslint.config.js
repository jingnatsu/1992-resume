import js from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import typescriptParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroPlugin.parser,
      parserOptions: {
        parser: typescriptParser,
      },
    },
  },
  {
    ignores: ['dist/', '.astro/'],
  },
];
