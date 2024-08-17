import React from 'react'

function page({params}) {
  return (
    <div>{params.category}</div>
  )
}

export default page