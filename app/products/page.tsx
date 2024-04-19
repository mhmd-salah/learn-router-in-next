"use client"

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

function Products () {
  const router:AppRouterInstance = useRouter()
  return (
    <div>
      <h1>products:</h1>
        <h3>product-1</h3>
        <h3>product-2</h3>
        <h3>product-3</h3>
        <button onClick={_=> router.push("products/1") }>Products details</button>
    </div>
  )
}

export default Products
