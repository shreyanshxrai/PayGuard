import * as jose from "jose";
const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("SECRET is not defined");
}
console.log(process.env.JWT_SECRET);
const encodedSecret = new TextEncoder().encode(secret);
const alg = "HS256";
interface jwtpayload {
  id: number;
  email: string;
}
export async function generateToken(payload: jwtpayload) {
  const { id, email } = payload;
  const jwt = await new jose.SignJWT({ id, email })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("1 day")
    .sign(encodedSecret);
  return jwt;
}

export async function verifyToken(token : string){
 const {payload} = await jose.jwtVerify(token , encodedSecret);
 return payload;
}
