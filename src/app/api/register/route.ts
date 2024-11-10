import {NextResponse, type NextRequest} from "next/server"
import bcrypt from "bcryptjs"
import db from "@/libs/bd"
import { nanoid } from "nanoid"
import { sendVerificationEmail } from "@/libs/brevo"

export async function POST(request:NextRequest){
    const data =await request.json()

    const userEmailFound=await db.user.findUnique({
        where: {
            email:data.email
        }
    })

    if (userEmailFound){
        return NextResponse.json({
            message:"El email ya existe"
        },{
            status:400
        })
    }

    const userNameFound=await db.user.findUnique({
        where: {
            username:data.username
        }
    })

    if (userNameFound){
        return NextResponse.json({
            message:"El usuario ya existe"
        },{
            status:400
        })
    }

    const hashedPassword=await bcrypt.hash(data.password,10)

    const newUser=await db.user.create({
        data:{
            username: data.username,
            email: data.email,
            password: hashedPassword,
        }
    })

    // verfificacion por email
    const token = nanoid();

    await db.verficationToken.create({
      data: {
        identifier: data.email,
        token,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      },
    });

    await sendVerificationEmail(data.email, token);


    return NextResponse.json(newUser)
    
}
