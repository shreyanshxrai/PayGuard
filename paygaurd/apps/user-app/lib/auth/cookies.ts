import { cookies } from "next/headers"
const AUTH_COOKIE = 'auth-token'
export async function setAuthCookie(token : string) {
    const cookieStore = await cookies();
    
    cookieStore.set({
        name: AUTH_COOKIE,
        value : token,
        httpOnly : true,
        path : '/',
        sameSite: "lax",
        maxAge : 60*60*24,
        secure: process.env.NODE_ENV === "production"
    })
    
}

export async function deleteAuthCookie(){
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE)
}

export async function getAuthCookie() {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_COOKIE)
    return token?.value
}