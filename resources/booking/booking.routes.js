import { Router } from 'express'
import { getBookings } from './booking.controller.js'
import auth from '../../middlewares/auth.js'

const router = Router()


router.get("/", auth, getBookings)




export default router