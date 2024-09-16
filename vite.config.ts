import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from "node:path";
import { fileURLToPath } from 'node:url';
import vuetify from 'vite-plugin-vuetify'

// สำหรับ TypeScript อาจจะต้องใช้โค้ดนี้เพื่อให้ `__dirname` ทำงานได้
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // เพิ่ม Vuetify plugin ตรงนี้
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
