import { Router } from 'express'
import servicesRoutes from './resources/services/services.routes.js'
import authRoutes from './resources/auth/auth.routes.js'
import bookingRoutes from './resources/booking/booking.routes.js'

// web server setup
const router = Router()

router.use("/auth", authRoutes)

router.use("/services", servicesRoutes)

router.use("/bookings", bookingRoutes)

export default router

