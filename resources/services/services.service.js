import db from "../../utils/db.js";

export const fetchServices = () => {
  return db.service.findMany();
}
