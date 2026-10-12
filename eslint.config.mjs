import cbnConfig from '@combeenation/eslint-config';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    extends: [cbnConfig],
    files: ['src/**/*.{ts,tsx}'],
    ignores: ['**/cfgr-defs.generated.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]);
