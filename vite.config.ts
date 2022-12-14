import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {    
    lib: {
      formats:["es"],
      entry: './lib/components.js',
      name: 'Extraselect',
      // the proper extensions will be added
      fileName: 'extraselect'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue','@txd/utils','@vueuse/core'],
    }
  }
})
