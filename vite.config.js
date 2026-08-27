import CbnCustomCodeSync from '@combeenation/vite-plugin-custom-code-sync';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default ({ mode }) => {
  const colorGreen = '42;30';
  const colorizedMode = `\x1b[${colorGreen}m ${mode} \x1b[0m`;
  console.log('------------------------------------------------------------------------------------------');
  console.log(`Building in ${colorizedMode} mode`);
  console.log('------------------------------------------------------------------------------------------');
  console.log('');

  return defineConfig({
    plugins: [tailwindcss(), cssInjectedByJsPlugin(), CbnCustomCodeSync()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.ts'),
        },
        output: {
          entryFileNames: 'cfgr.js',
          // support top-level await
          format: 'es',
          // prevent creating multiple chunks and thus breaking the expected output structure
          inlineDynamicImports: true,
        },
      },
      sourcemap: false,
    },
    server: {
      hmr: true,
      cors: true,
    },
  });
};
