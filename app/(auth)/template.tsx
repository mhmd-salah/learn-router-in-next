"use client"
import Link from "next/link";
import "./index.css";
import { useState } from "react";
function AuthLayout ({ children }: { children: React.ReactNode; }) {
  const [input ,setInput ] = useState("")
  return <>
    <div>
      <input type="text"
        value={input}
        onChange={ (e) => setInput(e.target.value) }
        className="border focus:outline-none"
      />
    </div>
    <div className="my-3 bg-gray-200 p-2 w-fit rounded-md">
      <Link
        className="px-2 py-1 bg-slate-100 mx-2 rounded-sm hover:bg-slate-200 transition"
        href="/login">login</Link>
      <Link
        className="px-2 py-1 bg-slate-100 mx-2 rounded-sm hover:bg-slate-200 transition"
        href="/register">regitser</Link>
      <Link
        className="px-2 py-1 bg-slate-100 mx-2 rounded-sm hover:bg-slate-200 transition"
        href="/forget-password">forget Password</Link>
    </div>
    { children }
  </>;
}
export default AuthLayout;