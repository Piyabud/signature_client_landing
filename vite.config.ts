import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from "node:path";
import { fileURLToPath } from 'node:url';

// สำหรับ TypeScript อาจจะต้องใช้โค้ดนี้เพื่อให้ `__dirname` ทำงานได้
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
