import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  build: {    
    emptyOutDir: false,
    lib: {
      formats:["es","iife"],
      entry: './lib/main.js',
      name: 'Extraselect',
      // the proper extensions will be added
      fileName: 'bundle/extraselect'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      output: {
        assetFileNames: "bundle/extraselect.[ext]",
        // Provide global variables to use in the UMD build
        // for externalized deps
      }
    }
  }
})
