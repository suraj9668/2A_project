import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/2A_project/', // यह नाम तुम्हारे GitHub Repo के नाम जैसा होना चाहिए
})