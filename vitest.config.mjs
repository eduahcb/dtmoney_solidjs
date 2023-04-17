// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config'

import solidPlugin from 'vite-plugin-solid'
import jsconfigPaths from 'vite-jsconfig-paths'

import path from 'node:path'

export default defineConfig({
  test: {
    deps: {
      inline: [/solid-testing-library/]
    },
    transformMode: {
      web: [/\.jsx?$/]
    },
    globals: true,
    setupFiles: path.join(__dirname, 'src', 'setupTests.js'),
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
      all: true,
      functions: 90,
      lines: 90,
      branches: 90,
      statements: 90,
      reporter: ['text', 'lcov', 'html'],
      include: ['**/src/**/**/*.jsx', '**/src/**/**/*.js']
    }
  },
  plugins: [
    solidPlugin(),
    jsconfigPaths()
  ],
  resolve: {
    conditions: ['development', 'browser']
  }
})
