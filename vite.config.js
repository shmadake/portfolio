import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import chatHandler from './api/chat.js'

// Dev-only middleware so `npm run dev` also serves /api/chat (Vercel handles
// this automatically in production; this shim replicates it for local Vite).
function apiDevMiddleware(env) {
  return {
    name: 'api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') return res.end()
        let body = ''
        req.on('data', (c) => (body += c))
        req.on('end', async () => {
          req.body = body ? JSON.parse(body) : {}
          process.env.GEMINI_API_KEY = env.GEMINI_API_KEY
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
          }
          res.status = (code) => {
            res.statusCode = code
            return res
          }
          await chatHandler(req, res)
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), apiDevMiddleware(env)],
  }
})
