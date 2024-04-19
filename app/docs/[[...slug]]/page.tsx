import React from 'react'

function Slug ({ params }: { params: { slug: string[]; }; }) {
  if (params.slug?.length) {
    return <h1>viewing docs for feature  { params.slug[0] } and conspet { params.slug[1] }</h1>
  } else if (params.slug?.length === 1) {
    return <h1>Viewing  docs  for feature { params.slug[0] } and conspet { params.slug[1] }</h1>
  }
  return <h1>Docs Home Page</h1>
}

export default Slug
