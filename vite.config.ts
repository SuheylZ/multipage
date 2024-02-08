import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "vite-plugin-eslint"
import { resolve } from "path"

const outDir = resolve(__dirname, "dist")
const root = resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  root,
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        page1: resolve(root, "page2", "index.html")
      }
    }
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      exclude: []
    })
  ]
})



















