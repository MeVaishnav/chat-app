import jwt from "jsonwebtoken";

//function to generate JWT token

export const generateToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  return token;
};
