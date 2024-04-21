"use client"

import { useRouter } from "next/navigation";



function OrderProduct () {
  const router = useRouter()
  const handleClick = () => {
    console.log("placing your order")
    router.replace("/")
  }
  return (
    <>
      <div>OrderProduct</div>
      <button
        onClick={handleClick}
      >Place order</button>
    </>
  )
}

export default OrderProduct