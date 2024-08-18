import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './Components/CartItems'
import Billing from './Components/Billing'

function page() {
    
  return (
    <div className="p-3 bg-red- md:mx-48 ">
    <div className="text-2xl dark:text-gray-300 font-semibold text-gray-700 flex gap-3">↪ Your Cart
    <Image src={'/cart-full.svg'} className="dark:invert" width={25} height={25}/>
     </div>
     
     <div className="flex">
     <CartItems/>
     <Billing/>
     </div>
    </div>
  )
}

export default page