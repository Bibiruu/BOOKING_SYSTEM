import jwt from "jsonwebtoken";
import { findUserByEmail } from "../resources/auth/auth.service.js";

export default function (req, res, next) {
  const authHeader = req.headers["authorization"];
  //Extracting the token & bearer authentication. Splitting the bearer from token on index 1.
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      response: "No token",
    });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (error, user) => {
    if (error) {
      return res.status(403).json({
        success: false,
        response: error,
      });
    }
    //taking the user
    const userData = await findUserByEmail(user.email);
    req.user = userData;
    next();
  });
}
