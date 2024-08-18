"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import Link from 'next/link'

function CartItems() {
    
    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()

  return (
    <div className="md:p-3 p-1">
    
    {
        cart.length > 0 ?
        cart.map((item) =>{
            return <Card key={item.id} data={item} />

        })
        :

        <div className="dark:text-gray-400 text-gray-700 md:p-3">
            You dont have any item on cart , browse on our <Link href={'/'} className="text-purple-400 cursor-pointer  border-b-2 border-dotted border-purple-400 ">Products</Link> and add your choices on the cart
        </div>
    }
    </div>
  )
}

export default CartItems