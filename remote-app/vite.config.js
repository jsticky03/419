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
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './CounterButton': './src/components/CounterButton.vue'
      },
      shared: ['vue']
    })
  ],
})
