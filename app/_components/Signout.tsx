"use client"
import { signOut } from 'next-auth/react';
import React from 'react'

function Signout() {
  return (
    <button type="button"
          onClick={()=> signOut()}
        >sign out</button>
  )
}

export default Signout