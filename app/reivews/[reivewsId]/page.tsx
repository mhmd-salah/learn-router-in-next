import { notFound } from 'next/navigation';
import React from 'react'

function ReviewId({params}:{params:{reivewsId:string}}) {
  if (parseInt(params.reivewsId) > 100) {
    notFound()
  }
  return (
    <div>
      review id : { params.reivewsId }
    </div>
  )
}

export default ReviewId
