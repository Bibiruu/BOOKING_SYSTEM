import { Router } from "express";
import {
  getBookings,
  getSingleBooking,
  postBooking,
} from "./booking.controller.js";
import auth from "../../middlewares/auth.js";

const router = Router();

router.get("/", auth, getBookings);

router.post("/", auth, postBooking);

router.get("/:id", auth, getSingleBooking);

export default router;
