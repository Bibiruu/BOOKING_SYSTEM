import { Router } from 'express'
import { getBookings, postBooking } from './booking.controller.js'
import auth from '../../middlewares/auth.js'

const router = Router()


router.get("/", auth, getBookings)

router.post("/", auth, postBooking)



export default router