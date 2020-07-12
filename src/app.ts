import { Application, Organ } from './deps.ts'
import router from './routes/index.ts'
import { notFound, errorHandler } from './middlewares/index.ts'

const app = new Application()
app.use(Organ('short', true))

// Error handler
app.use(errorHandler)

// routes
app.use(router.routes())
app.use(router.allowedMethods())

// 404
app.use(notFound)

export default app
