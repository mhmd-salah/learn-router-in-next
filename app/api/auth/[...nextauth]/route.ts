import { authOption } from "@/app/lib/nextAuth";
import NextAuth from "next-auth/next";

const handlar = NextAuth(authOption)
export {handlar as GET , handlar as POST}