"use client"
import { addItem, removeItem } from '@/features/cartSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

function Itemcard({ title, id, price, description, category, image, rating }) {
    const data = { id, title, price, image, description,rating, quantity: 1 }
    const cart = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch()
    const added = cart.find((item) => item.id === id)

    const handleAddItem = () =>{
        dispatch(addItem(data))
        toast.success(`${title} added to the cart`)

    }
    
    const handleRemoveItem = () =>{
        dispatch(removeItem(id))
        toast.error(`${title} removed from the cart`)

    }
    return (
        <div className="p-4 ">
{/* <ToastContainer
/> */}
            <div className="border rounded-xl  dark:border-purple-950 border-purple-300 shadow-inner dark:shadow-cyan-950 shadow-purple-400 p-3">
                <div class="relative grid w-full place-items-center rounded-xl dark:bg-gray-950 bg-gray-200  ">
                    {/* <div class="bg-white h-80 w-64 rounded-md"> */}
                    <div class="flex relative  justify-center bg w-full  items-center leading-none">
                        <img src={image}
                            loading='lazy'
                            alt="pic"
                            class="h-3/ bor max-h-64 w-3/5 h-64 rounded-lg  shadow-2xl shadow-cyan-900/60  border-4 border-gray-300/90 dark:border-gray-700 mt-6 transform -translate-y-14 hover:-translate-y-4 transition duration-700"
                        />
                        <div className="absolute flex border-2 dark:border-gray-700 dark:bg-gray-800 border-gray-400/30 bg-gray-400/40 rounded-xl px-1.5 p-1 items-center top-2 right-4 ">
                            <div className="mr-1  ">{rating}</div>
                            <Image src={'/star.svg'} className='' width={20} height={20} />
                        </div>
                    </div>
                    <div class="p-3 flex items-center justify-between">
                        <div className="w-3/4">
                            <p class="block mb-1 dark:text-slate-300 text-slate-800 ">{title}</p>
                            <p class="text-xs line-clamp-2 tracking-tighter text-gray-600">
                                {description}
                            </p>
                        </div>
                        <div className="p-2 dark:bg-gray-900 font-semibold bg-gray-100/90 rounded-lg ">
                            $ {price}
                        </div>
                    </div>
                    <button disabled={added} onClick={handleAddItem} class="flex justify-center items-center dark:bg-teal-800 disabled:cursor-not-allowed bg-orange-500  w-2/4 p-3 my-2 cursor-pointer rounded-xl ">

                        <Image src={`/${added ? "cart-added-done" : "add-cart"}.svg`} className="mx-2 dark:invert" width={20} height={20} />
                        <div className=''>{added ? "Added in cart" : "Add to Cart"}</div>

                    </button>

                    {added &&

                        <div onClick={handleRemoveItem} class="flex absolute right-2 bottom-2  justify-center items-center dark:bg-red-600 bg-red-500   p-2 my-2 cursor-pointer rounded-xl ">
                        <abbr  title="Remove item from cart">
                            <Image src={`/cart-cancel.svg`} className="mx-2 dark:invert" width={20} height={20} />
                            {/* <button>Remove</button> */}
                            </abbr>
                        </div>
                    }
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default Itemcard