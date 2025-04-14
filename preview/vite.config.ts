import { cloudflare } from '@cloudflare/vite-plugin'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import reactPlugin from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [cloudflare(), reactPlugin(), vanillaExtractPlugin()]
})
