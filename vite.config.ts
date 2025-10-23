import { defineConfig, type Plugin } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// Get build metadata
function getBuildMetadata() {
  try {
    const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
    const commitDate = execSync('git log -1 --format=%cI').toString().trim()
    const buildTime = new Date().toISOString()
    return { commitHash, commitDate, buildTime }
  } catch {
    return {
      commitHash: 'unknown',
      commitDate: 'unknown',
      buildTime: new Date().toISOString(),
    }
  }
}

// Plugin to inject build metadata into HTML
function htmlBuildMetadata(): Plugin {
  const metadata = getBuildMetadata()

  return {
    name: 'html-build-metadata',
    transformIndexHtml(html) {
      return html
        .replace('__BUILD_COMMIT__', metadata.commitHash)
        .replace('__BUILD_COMMIT_DATE__', metadata.commitDate)
        .replace('__BUILD_TIME__', metadata.buildTime)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlBuildMetadata()],
  base: '/eps-schedule/',
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
})
