import pkg from "jsonwebtoken";
const { sign } = pkg;
import ms from "ms"; // Import the ms library for handling time span strings
import ErrorHandler from "../utils/errorHandler.js";

const generateToken = (id) => {
  const createdTime = Math.floor(Date.now() / 1000); // Get the current timestamp in seconds
  const expiresIn = process.env.JWT_EXPIRE; // Read the JWT expiry from the environment variables

  // Handle numeric values (interpreted as seconds)
  if (typeof expiresIn === "number") {
    const expiryTime = createdTime + expiresIn;
    console.log("1")
    const token = sign({ id, iat: createdTime, exp: expiryTime }, process.env.JWT_SECRET, { expiresIn });
    console.log("2")
    return { token, createdAt: createdTime, expiresAt: expiryTime };
  }

  // Handle string values describing a time span
  if (typeof expiresIn === "string") {
    const parsedExpiresIn = ms(expiresIn);
    if (!parsedExpiresIn || isNaN(parsedExpiresIn)) {
      throw new ErrorHandler(`Invalid expiresIn format '${expiresIn}'`, 500);
    }
    console.log("3")
    const expiryTime = createdTime + parsedExpiresIn / 1000; // Convert parsedExpiresIn from milliseconds to seconds
    try {
      const token = sign({ id, iat: createdTime, exp: expiryTime }, process.env.JWT_SECRET);
      console.log("4")
      return { token, createdAt: createdTime, expiresAt: expiryTime };
    }catch(err) {
      console.log(`Error=${err}`)
    }
    
    
  }

  throw new ErrorHandler(`Invalid expiresIn format '${expiresIn}'`, 500);
};

export default generateToken;