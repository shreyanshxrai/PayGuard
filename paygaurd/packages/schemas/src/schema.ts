
import {z} from "zod";
import { email } from "zod/v4";

export const signupSchema = z.object({
    name : z.string(),
    email : z.string().email() ,
    phone : z.string(),
    password : z.string()

})
export const siginSchema =  z.object({
   
    email : z.string().email() ,
    
    password : z.string()})

export type signupUser = z.infer<typeof signupSchema>;
export type siginUser = z.infer<typeof siginSchema>;


