import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {REPOSITORY_NAME} from './src/constants'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: REPOSITORY_NAME
})