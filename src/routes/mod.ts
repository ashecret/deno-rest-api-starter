import { Router } from '../deps.ts'
import { healthController } from '../controllers/mod.ts'

const router = new Router({ prefix: '/api/v1' })
router.get('/health', healthController)

export default router
