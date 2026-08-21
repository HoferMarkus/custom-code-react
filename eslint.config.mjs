import cbnConfig from '@combeenation/eslint-config';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    extends: [cbnConfig],
    files: ['src/**/*.ts'],
    ignores: ['**/cfgr-defs.generated.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]);
