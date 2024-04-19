import { redirect } from "next/navigation";

type Props = {
  params: {
    productsId: string;
  }
}

function ProudctsDetails ({ params }:Props) {
  (function () {
    if (params.productsId === "2") {
      redirect("/products/5")
    }
  })()
  return (
    <div>
      products details number { params.productsId }
    </div>
  )
}

export default ProudctsDetails
