// handling of login
import { findUserByEmail, registerUser } from "./auth.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// http://localhost:3000/auth/login
export const login = async (req, res) => {
  try {
    const userExist = await findUserByEmail(req.body.email);
    if (!userExist) {
      return res.status(401).json({
        success: false,
        data: null,
        message: "Wrong credentials",
      });
    }
    //comparing the userpassword to the hashed one
    const passwordResult = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    if (!passwordResult) {
      return res.status(401).json({
        success: false,
        data: null,
        message: "Wrong credentials",
      });
    }
    //separating the password from the rest
    const { password, ...userProps } = userExist;
    const token = jwt.sign({ user: userProps }, process.env.TOKEN_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({
      success: true,
      data: token,
      message: "Login Succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Sorry, error in server",
    });
  }
};

export const register = async (req, res) => {
  // console.log(req.body)
  try {
    const userExist = await findUserByEmail(req.body.email);

    if (userExist)
      return res.status(401).json({
        success: false,
        data: null,
        message: "Sorry, user already exist.",
      });
    const registeredUser = await registerUser(req.body);
    return res.status(201).json({
      success: true,
      data: registeredUser.id,
      message: "User registered succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
      message: "Sorry, error in server",
    });
  }
};
