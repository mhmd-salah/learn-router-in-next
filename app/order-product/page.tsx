"use client"
import "./order.css"
import { useRouter } from "next/navigation";



function OrderProduct () {
  const router = useRouter()
  const handleClick = () => {
    console.log("placing your order")
    router.replace("/")
  }
  return (
    <div className="order">
      <div >OrderProduct</div>
      <button
        onClick={handleClick}
      >Place order</button>
    </div>
  )
}

export default OrderProduct