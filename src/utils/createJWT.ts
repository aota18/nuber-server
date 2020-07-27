
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


const createJWT = (id: number) : string => {
  
    const token = jwt.sign(
    {
    id
    }, 
    process.env.JWT_TOKEN || "");

    return token;
}

export default createJWT;