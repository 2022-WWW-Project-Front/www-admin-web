import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components')
      },
      {
        find: '@pages',
        replacement: resolve(__dirname, 'src/pages')
      },
      {
        find: '@stores',
        replacement: resolve(__dirname, 'src/stores')
      },
      {
        find: '@layout',
        replacement: resolve(__dirname, 'src/layout')
      },
      {
        find: '@public',
        replacement: resolve(__dirname, 'src/public')
      }
    ]
  },
  plugins: [react(), tsconfigPaths()]
})
