import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteSvgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    react(),
    viteSvgIcons({
      iconDirs: [path.resolve(__dirname, './src/svg')],
      symbolId: '[name]'
    })
  ]
})
