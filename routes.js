import { Router } from 'express'
import authRoutes from './resources/auth/auth.routes.js'

// web server setup
const router = Router()
router.use("/auth", authRoutes)

export default router

