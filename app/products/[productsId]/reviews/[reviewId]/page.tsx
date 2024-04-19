import React from 'react'

function ReviewId ({ params }:{params:{reviewId:string,productsId:string}}) {
  return (
    <div>
      review id : { params.reviewId } and product id is : { params.productsId }
    </div>
  )
}

export default ReviewId
