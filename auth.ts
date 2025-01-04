import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/libs/bd";

// import { PrismaClient } from "@prisma/client"

// const prisma=new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  ...authConfig,
  session: { strategy: "jwt", maxAge: 60*20, },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
    // signIn({user,profile}){
    //   if (user.provider === "google") {
    //         return profile.email_verified && profile.email.endsWith("@example.com")
    //       }
    //       return true
    // }
    async signIn({ account, user }) {
      if (account && account.provider === "google") {
        return (user.email as string).endsWith("@gmail.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
    authorized: async ({auth})=>{
      return !!auth
    }
  },
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return {...token,...user};
  //   },
  //   async session({ session, token }) {
  //     session.user.role = token.role as string;
  //     return session;
  //   },
  // },
  events: {
    // El evento linkAccount se dispara cuando una cuenta (proveedor OAuth: GitHub, Google, Facebook, etc.)  se vincula a un usuario existente en tu base de datos.
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  pages: {
    signIn: "/signin",
  },
});
