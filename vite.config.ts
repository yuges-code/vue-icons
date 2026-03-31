import fs from 'fs';
import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { IconType } from '@yuges/icons';

const paths = {
  icons: path.resolve(__dirname, 'src/icons'),
};
let icons = [] as string[][];

Object.values(IconType).forEach(type => {
  const names = fs.readdirSync(path.resolve(paths.icons, type));

  icons = [
    ...icons,
    ...names.filter(name => ! name.endsWith('.ts')).map(name => [`icons/${type}/${name}`, path.resolve(paths.icons, `${type}/${name}`)])
  ];
});

const entries = {
  'vue-icons': path.resolve(__dirname, 'src/main.ts'),
  ...Object.fromEntries(icons),
};

export default defineConfig({
  build: {
    lib: {
      entry: entries,
      formats: ['es'],
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name].[ext]',
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
