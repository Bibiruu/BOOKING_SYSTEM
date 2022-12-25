import db from '../../utils/db.js'

export function fetchBookings(userid) {
    return db.booking.findMany({
        where: {
            user_id: userid
        },
        include: {
            booking_has_service:{
                select: {
                    service: true
                }
            }
        }
    })
}