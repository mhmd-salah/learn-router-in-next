"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

function ProductLayout ({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname()
  const isActive = pathname.startsWith("/products/4")
  console.log(pathname)
  console.log(isActive)
  return <>
    <Link href={ "products/4" }
      className={ isActive ? "font-bold text-red-500 ":" text-green-400" }
    >product 4</Link>
    <h1 className="text-red-400">hello</h1>
    {children}

  </>;
}
export default ProductLayout;