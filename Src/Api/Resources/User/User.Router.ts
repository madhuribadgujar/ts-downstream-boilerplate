import { Router } from 'express'
import { verifyUser } from './User.Controller'

const router = Router()

router.post('/verify', verifyUser)
export default router
