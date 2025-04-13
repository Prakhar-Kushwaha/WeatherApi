import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {ghPages} from 'vite-plugin-gh-pages'


export default defineConfig({
  plugins: [react()],//, ghPages()],
 // base: '/Weather-Api/weatherApi/',
  server :{
    host : true,
    port : 4578,
  }
})
