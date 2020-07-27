import jwt from "jsonwebtoken";
require('dotenv').config()


import { User } from '../types/graph';

d
const decodeJWT = async(token: string) : Promise<User | undefined> => {
    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN || "");
        console.log(decoded);
    }catch(error){
        return undefined;
    }
};

export default decodeJWT;