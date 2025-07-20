import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default async ({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, '../../'), '')

  return defineConfig({
    root: path.resolve(__dirname),
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    plugins: [react(), tsconfigPaths()],
    define: {
      'import.meta.env.VITE_APP_ENV': JSON.stringify(env.VITE_APP_ENV),
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
      },
    },
    server: {
      port: 8080,
    },
  })
}