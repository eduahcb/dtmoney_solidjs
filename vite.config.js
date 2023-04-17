import { defineConfig } from 'vite'

import solidPlugin from 'vite-plugin-solid'
import jsconfigPlugin from 'vite-jsconfig-paths'

export default defineConfig({
  plugins: [solidPlugin(), jsconfigPlugin()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
