import {
  fetchBookings,
  fetchSingleBooking,
  createBooking,
} from "./booking.service.js";

export const getBookings = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const bookings = await fetchBookings(userId);
    return res.status(200).json({
      success: true,
      data: bookings,
      message: "Success fetching bookings",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Error in server",
    });
  }
};

export const postBooking = async (req, res) => {
  try {
    const createdBooking = await createBooking(req.body, req.user);
    return res.status(200).json({
      success: true,
      data: createdBooking,
      message: "Booking created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Error in server",
    });
  }
};

export const getSingleBooking = async (req, res) => {
  try {
    const id = +req.params.id;
    // console.log({ id });
    const booking = await fetchSingleBooking(req.user.id, id);
    res.status(booking ? 200 : 404).json({
      success: true,
      data: booking,
      message: "Success fetching a single booking",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Error in server",
    });
  }
};
