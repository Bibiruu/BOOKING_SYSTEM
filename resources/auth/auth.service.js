import db from "../../utils/db.js";
import bcrypt from "bcrypt";

export const findUserByEmail = (email) => {
  return db.user.findFirst({
    where: {
      email,
    },
  });
}

export const registerUser = async (userData) => {
  const { password, ...profileData } = userData;
  // hashing password 10 times
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  return db.user.create({
    data: {
      password: hashPassword,
      ...profileData,
    },
  });
}
