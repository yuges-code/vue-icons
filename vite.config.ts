import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    lib: {
      name: 'vue-icons',
      fileName: 'vue-icons',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      outDir: './dist/types',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
});
