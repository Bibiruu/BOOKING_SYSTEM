import { fetchBookings } from "./booking.service.js"

export const getBookings =  async (req, res, next) => {
    try {
        const userId = req.user.id
        console.log(userId)
        const bookings = await fetchBookings(userId)
        return res.status(200).json({
            success: true,
            data: bookings,
            message: "Success fetching bookings"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: null,
            message: "Error in server"
        })
    }
}