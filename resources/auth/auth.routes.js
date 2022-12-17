import { Router } from 'express'
import { login } from './auth.controller.js'
const router = Router()

// middleware
// login users by email
router.post("/login", login)

export default router