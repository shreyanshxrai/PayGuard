import {z} from "zod";
import { email } from "zod/v4";

const UserSchema = z.object({
    name : z.string(),
    email : z.string().email() ,
    phone : z.number().max(10).min(10),
    password : z.string()

})
 
export type User = z.infer<typeof UserSchema>;


