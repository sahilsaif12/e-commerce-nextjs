'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '@/features/themeSlice';
import Link from 'next/link';

function CartBtn() {
    const [id, setid] = useState(0)
    const cart = useSelector((state) => state.cart.cartItems)

  const dark = useSelector((state) => state.theme.darkMode)
  const dispatch = useDispatch()

    useEffect(() => {
        document.body.classList.add("dark");
    }, [])
    
    useEffect(() => {
        if (cart.length!=id) {
            setid(cart.length)
            
        }
    }, [cart])

    
    
  return (
    <Link href={'/cart'}>
    <div className="relative cursor-pointer  dark:hover:bg-gray-800 hover:bg-gray-300 p-2 rounded-lg">
    
                <sup key={id} className='absolute right-0 top- font-bold dark:bg-gray-950 bg-gray-300   py-2 p-1 rounded-full dark:text-teal-100   text-gray-800 
                animate-fade  saturate-200  animate-once animate-duration-[800ms]  animate-ease-in-out
                '>{cart.length}</sup>
    <Image
                    // key={`sun-${animateKey}`} // Unique key to force re-render
                    src={`/${dark? "cart":"cart-light"}.png `}
                    key={id}
                    className='w- animate-fade-right  saturate-200  animate-once animate-duration-[800ms]  animate-ease-in-out' 
                    width={26} 
                    height={26} 
                />
    </div>
    </Link>
  )
}

export default CartBtn