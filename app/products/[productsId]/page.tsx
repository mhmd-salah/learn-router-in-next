import { redirect } from 'next/navigation';
import React from 'react'

function ProudctsDetails ({ params }:{params:{productsId:string}}) {
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
