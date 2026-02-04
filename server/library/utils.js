console.log("utils.js loaded");

import jwt from "jsonwebtoken";

//function to generate JWT token

export const generateToken = (user) => {
  const token = jwt.sign({ user }, your_jwt, process.env.JWT_SECRET);
  return token;
};
