// get req for balance

import { getAuthCookie } from "@/lib/auth/cookies";
import { verifyToken } from "@/lib/auth/jwt";
import { prisma } from "@repo/db";
import { NextResponse } from "next/server";

export async function GET(request : Request) {
    try {
        const token = await getAuthCookie() ;
        const payload = await verifyToken(token);
        if(payload){
            const { id } = payload;
            const userId = Number(id)
            const balance = await prisma.user.findUnique({where : {id : userId} , select : {}})
            if(balance){
            return NextResponse.json(balance, {status : 200})}

        }
        else {
            return NextResponse.json({msg : 'Unauthorized'},{status : 401});
        }
    }
    catch(err){
        console.error(err);
        return NextResponse.json({msg : 'server error'} , {status : 500})
    }
}