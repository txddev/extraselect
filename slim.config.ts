import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {    
    lib: {
      formats:["es"],
      entry: './lib/ExtraSelect.vue',
      // the proper extensions will be added
      fileName: 'extraselect'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue','vue-virtual-scroller'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
          'vue-virtual-scroller': 'vue-virtual-scroller'
        }
      }
    }
  }
})
