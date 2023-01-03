/// <reference types="vitest" />

import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Worfind',
        short_name: 'Worfind',
        description: 'Performs analysis and manipulations on strings',
        theme_color: '#ffffff',
        lang: 'pt-BR',
        icons: [
          {
            src: '/favicons/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicons/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicons/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicons/favicon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicons/favicon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicons/favicon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
  },
})
