import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  
  build: {  
    lib: {
      formats:["es","iife"],
      
      name: 'Extraselect',
      // the proper extensions will be added
      fileName: 'extraselect-bs'
    },  
    rollupOptions: {
      input:{
        bs5: fileURLToPath(new URL('./lib/bootstrap5.scss', import.meta.url)),
        bs4: fileURLToPath(new URL('./lib/bootstrap4.scss', import.meta.url)),
      },
      output: [
        {
          dir: 'styles'
        }
      ]
    }
  }
})
