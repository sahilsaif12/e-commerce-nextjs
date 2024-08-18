"use client"
import { setFinalAmount } from '@/features/cartSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Billing() {
    let d = new Date();
    d = d.toDateString()

    const cart = useSelector((state) => state.cart.cartItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const dispatch = useDispatch()
    const [total, settotal] = useState(totalAmount)
    useEffect(() => {
      dispatch(setFinalAmount(totalAmount-10-(totalAmount*0.1)))
    }, [totalAmount])
    
    return (
        <div className=" md:m-3 md:fixed top-20 left-2/3 "  >
            <div class="p-6 max-w-md mx-auto bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
                <div class="text-center">
                    <h1 class="text-2xl font-bold text-blue-600 logo-font dark:text-blue-400 tracking-widest">A2Zone</h1>
                </div>

                <div class="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                    <div class="font-semibold text-lg text-gray-900 dark:text-gray-100">Invoice</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">
                        <p>{d}</p>
                        <p>Invoice #: INV12345</p>
                    </div>
                </div>


                <div class="mt-4">
                    <div class="flex  justify-between font-semibold text-gray-900 dark:text-gray-100">
                        <p>Description</p>
                        <p>Amount</p>
                    </div>
                    <div class="border-t border-gray-200 dark:border-gray-700 mt-2">
                        {
                            cart.map((item) => {
                                return <div key={item.id} class="flex  justify-between mt-2 text-gray-800 dark:text-gray-300">
                                    <p className='line-clamp-1 w-2/3' >{item.title}</p>
                                    {item.quantity > 1 && <div className='text-blue-300' >x {item.quantity} </div>}
                                    <p>$ {item.price * item.quantity}</p>
                                </div>
                            })
                        }
                        <hr />
                    </div>
                    {
                        cart.length > 0 &&
                        <div>

                            <div class="flex justify-between mt-4 font-bold text-gray-900 dark:text-gray-100">
                                <p>Total</p>
                                <p>$  {totalAmount.toFixed(2)} </p>
                            </div>
                            <div class="flex justify-between mt-4 font-bold text-gray-900 dark:text-gray-100">
                                <p>Discount</p>
                                <p>- $10 </p>
                            </div>
                            <div class="flex justify-between mt-4 font-bold text-gray-900 dark:text-gray-100">
                                <p>Additional Discount (10%)</p>
                                <p>- $ {((totalAmount * 0.1)).toFixed(2)} </p>
                            </div>
                            <hr />
                            <div class="flex justify-between mt-4 font-bold text-gray-900 dark:text-gray-100">
                                <p>Final Total</p>
                                <p>$  {(totalAmount - 10 - (totalAmount * 0.1)).toFixed(2)} </p>
                            </div>

                            <div className="flex justify-center w-full ">
                                <Link href={'/checkout'}>
                                    <button className='dark:bg-teal-600 md:px-4  bg-orange-400 font-semibold p-3 rounded-lg'>
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    }

                    <div class="text-center mt-6  text-gray-600 dark:text-gray-400">
                        <p>Thank you for shopping from us!</p>
                    </div>
                </div>

            </div>
            </div>
            )
}

            export default Billing