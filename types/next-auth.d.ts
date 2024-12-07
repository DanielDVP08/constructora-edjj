import { DefaultSession } from "next-auth"
import "next-auth/jwt"

// import { User } from "@prisma/client";

declare module "next-auth" {
    interface Session{
        user:{
            role?:string
        } &DefaultSession["user"]
    }

    interface User{
        role?:string
    }
}

declare module "next-auth/jwt"{
    interface JWT{
        role?:string
    }
}

// declare module "next-auth"{
//     interface Session {
//         user:User
//     }
// }

// declare module "next-auth/jwt" {
//     type JWT = User
// }