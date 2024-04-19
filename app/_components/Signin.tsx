"use client"

import { signIn } from "next-auth/react";

function Signin() {
  return (
    <button
            type="button"
            onClick={()=> signIn("google")}
          >sign in with google</button>
  )
}

export default Signin