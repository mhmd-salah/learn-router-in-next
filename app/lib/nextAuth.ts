import { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOption:AuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
  })],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
  
  // secret: process.env.NEXTAUTH_SECRET
}