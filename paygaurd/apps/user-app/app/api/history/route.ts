import { getAuthCookie } from "@/lib/auth/cookies";
import { verifyToken } from "@/lib/auth/jwt";

// get request for psyment history
export async function GET(userId : number) {
    try{
    const token = await getAuthCookie();
    const payload = await verifyToken(token);
    
    }

}