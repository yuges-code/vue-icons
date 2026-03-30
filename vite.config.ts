import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'vue-icons',
      fileName: 'vue-icons',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
    emptyOutDir: true,
  },
  plugins: [
    vue()
  ],
});
