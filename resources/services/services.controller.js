import { fetchServices } from "./services.service.js";

export const getServices = async (req, res, next) => {
  try {
    const services = await fetchServices();
    return res.status(200).json({
      success: true,
      data: services,
      message: "Success fetching services",
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
