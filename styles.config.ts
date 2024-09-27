import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input:[
        './lib/sass/extraselect.bs3.scss',
        './lib/sass/extraselect.bs4.scss',
        './lib/sass/extraselect.bs5.scss',
      ],
      // {
      //   extraselect: fileURLToPath(new URL('./lib/ExtraSelect.scss', import.meta.url)),
      //   'extraselect.bs3': fileURLToPath(new URL('./lib/bootstrap3.scss', import.meta.url)),
      //   'extraselect.bs4': fileURLToPath(new URL('./lib/bootstrap4.scss', import.meta.url)),
      //   'extraselect.bs5': fileURLToPath(new URL('./lib/bootstrap5.scss', import.meta.url)),
      // },
      output: [
        {
          assetFileNames: (assetInfo) => {
            return assetInfo.originalFileName?.replace("lib/sass/","").replace(".scss","[extname]") ?? "[name][extname]"
          },
          dir: 'dist/css'
        }
      ]
    }
  }
})
