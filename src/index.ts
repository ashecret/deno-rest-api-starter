import { config } from './deps.ts'
import app from './app.ts'
const Config = config()
const PORT = Number(Config.PORT)

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https://' : 'http://'
  const url = `${protocol}${hostname ?? 'localhost'}:${port}`
  console.log(`Server running on ${url}`)
})

await app.listen({ port: PORT })
