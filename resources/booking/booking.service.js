import db from "../../utils/db.js";

export const fetchBookings = (userid) => {
  return db.booking.findMany({
    where: {
      user_id: userid,
    },
    include: {
      booking_has_service: {
        select: {
          service: true,
          quantity: true
        },
      },
    },
  });
}

export const fetchSingleBooking = (userid, id) => {
  return db.booking.findFirst({
    where: {
      user_id: userid,
      id,
    },
    include: {
      booking_has_service: {
        select: {
          service: true,
        },
      },
    },
  });
}

export const createBooking = async (bookingData, user) => {
  const { services, date, ...otherBookingData } = bookingData;
  console.log(new Date(+date));
  const createdBooking = await db.booking.create({
    data: {
      ...otherBookingData,
      user_id: user.id,
      date: new Date(+date),
    },
  });
  const addedServices = await db.booking_has_service.createMany({
    data: services.map((service) => ({
      ...service,
      booking_id: createdBooking.id,
    })),
  });
  return createdBooking;
}
