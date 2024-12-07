

import { loginSchema } from "@/libs/zod";
import type { NextAuthConfig } from "next-auth";
import db from "@/libs/bd";
import bcrypt from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { nanoid } from "nanoid";
import { sendVerificationEmail } from "@/libs/brevo";

// Notice this is only an object, not a full Auth.js instance

export default {
  //   providers: [GitHub],
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization:{
        params:{
          prompt:"consent",
          access_type:"offline",
          response_type:"code",
        }
      },
      profile(profile) {
        return {
          id:profile.sub,
          username: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image:profile.picture,
          role: profile.role ? profile.role : "user",
        };
      },
    }),
    Credentials({
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials);

        if (!success) {
          throw new Error("Credenciales Incorrectas");
        }

        const user = await db.user.findUnique({
          where: {
            email: data.email as string,
          },
        });

        if (!user || !user.password) {
          throw new Error("Credenciales Incorrectas");
        }

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) {
          throw new Error("Constraseña Incorrecta");
        }

        if (!user.emailVerified) {
          const verifyTokenExits = await db.verficationToken.findFirst({
            where: {
              identifier: user.email,
            },
          });

          if (verifyTokenExits?.identifier) {
            await db.verficationToken.delete({
              where: {
                identifier: user.email,
              },
            });
          }

          const token = nanoid();

          await db.verficationToken.create({
            data: {
              identifier: user.email,
              token,
              expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
            },
          });

          await sendVerificationEmail(user.email, token);

          throw new Error("Enviar verificacion de correo");
        }

        // return user;
        return {
          id: user.id,
          name: user.username,
          email:user.email,
          image:user.image,
          role:user.role,
        };
      },
    }),
  ],
  
} satisfies NextAuthConfig;
