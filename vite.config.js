import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Pages project sites are served at /<repo>/ ; user sites (*.github.io repo) use /. */
function resolveBase() {
  const explicit = process.env.VITE_BASE_PATH?.trim()
  if (explicit) return explicit === '/' ? '/' : explicit.endsWith('/') ? explicit : `${explicit}/`

  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (repo?.endsWith('.github.io')) return '/'
  if (process.env.GITHUB_ACTIONS === 'true' && repo) return `/${repo}/`
  return '/'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [vue(), tailwindcss()],
})
