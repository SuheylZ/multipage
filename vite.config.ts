import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "vite-plugin-eslint"
import { resolve } from "path"


enum Modules {
  Main = "",
  Administration = "administration",
  DealMaker = "dealmaker",
  Merchant = "merchant",
  Public = "public"
}

class Resolver {
  private readonly _map: Map<Modules, string>

  constructor() {
    const keys = (Object.keys(Modules) as Array<keyof typeof Modules>).map(
      (x) => Modules[x]
    )
    this._map = new Map<Modules, string>()
    for (const key of keys) {
      this._map.set(key, key.toString())
    }
  }

  public root() {
    return resolve(__dirname, "src")
  }

  public outputFolder() {
    return resolve(__dirname, "dist")
  }

  public get(module: Modules) {
    if (this._map.has(module)) {
      const folder = this._map.get(module)!
      return resolve(this.root(), folder, "index.html")
    } else throw new Error("module not found")
  }
}

const mod = new Resolver()

// https://vitejs.dev/config/
export default defineConfig({
  root: mod.root(),
  build: {
    outDir: mod.outputFolder(),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(mod.root(), "index.html"),
        dealMaker: mod.get(Modules.DealMaker),
        merchant: mod.get(Modules.Merchant),
        administration: mod.get(Modules.Administration)
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




















































