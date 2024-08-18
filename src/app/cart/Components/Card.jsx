"use client"
import { addItem, fullRemove, removeItem } from '@/features/cartSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

function Card({data}) {
    const { id, title, price, image, description,rating, quantity }=data
    const dispatch = useDispatch()


    return (
        <div>
            <div class="p-4 mx-auto bg-gray-100 md:my-4 my-2 border-2 dark:border-gray-600 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 max-w-sm md:max-w-2xl">
                <div class="shrink-0  ">
                    <img class="h-36 w-36 rounded-xl border-4 dark:border-gray-600   hover:shadow-2xl " src={image} alt={title} />
                </div>

                <div class="flex-1 text-center md:text-left">
                    <div class="text-lg font-semibold text-gray-900 dark:text-white">{title}</div>
                    <p class="mt-1 text-gray-500 dark:text-gray-300 line-clamp-4">
                    {description}
                    </p>
                    <div class="mt-4 flex justify-center md:justify-start items-center space-x-2">
                        <button onClick={() =>dispatch(removeItem(id))}  class="px-3 py-1 font-bold bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">-</button>
                        <span class="px-3 py-1 text-gray-900 dark:text-gray-100">{quantity}</span>
                        <button onClick={()=>dispatch(addItem(data))} class="px-2.5  py-1 font-bold bg-gray-300 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-full">+</button>
                    </div>
                </div>

                <div class="flex self-start items-start h-28  justify-between w-full md:w-auto">
                    <div class="text-lg  font-bold self-end  text-blue-600 dark:text-blue-400 md:ml-4">
                        ${price}
                    </div>
                    <button onClick={() =>dispatch(fullRemove(id))} class="ml-4 justify-self-start p-2 rounded-full  dark:bg-gray-700  ">
                        <Image src={'/delete.png'} className='dark:inver' width={24} height={24} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card