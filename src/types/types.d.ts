const PHONE = "PHONE";
const EMAIL = "EMAIL";

export type verificationTarget = "PHONE" | "EMAIL";

export type rideStatus = 
| "ACCEPTED" 
| "FINISHED" 
| "CANCLED" 
| "REQUESTING" 
| "ONROUTE";