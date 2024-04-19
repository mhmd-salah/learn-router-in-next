import { authOption } from "@/app/lib/nextAuth";
import nextAuth from "next-auth";
import NextAuth from "next-auth/next";

const handlar = NextAuth(authOption)
export {handlar as GET , handlar as POST}