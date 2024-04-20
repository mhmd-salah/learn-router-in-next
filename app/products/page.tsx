"use client"
import "./style.css"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";

function Products () {
  const router: AppRouterInstance = useRouter()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div>
      <h1
        className="text-red-600"
      >products:</h1>
        <h3>product-1</h3>
        <h3>product-2</h3>
        <h3>product-3</h3>
        <button onClick={_=> router.push("products/1") }>Products details</button>
    </div>
  )
}

export default Products
