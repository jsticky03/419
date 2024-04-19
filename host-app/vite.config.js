import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext' // assumes we use browsers supporting latest features
  },
  plugins: [
    vue(),
    federation({
      name: 'host_app',
      remotes: {
        remote_app: 'http://localhost:5189/assets/remoteEntry.js'
      },
      shared: ['vue']
    })
  ],
})
