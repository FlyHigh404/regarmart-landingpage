import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // sekarang '@' menunjuk ke folder src
    },
  },
  // server: {
  //   host: '0.0.0.0',      // supaya bisa diakses dari luar
  //   port: 5173,           // sesuaikan dengan port project kamu
  //   allowedHosts: [
  //     '784d89982bdf.ngrok-free.app' // ganti dengan domain ngrok kamu
  //   ]
  // }
})
