"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function CategoryList({categories}) {
    const [hide, sethide] = useState(true)
    const [currCategory, setcurrCategory] = useState('all')

  return (
    <div>
    <div onClick={()=>sethide(!hide)}>
    
        
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="menu-button"
                        class="h-6 w-6 cursor-pointer md:hidden block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
        

    
                    {/* <Image src={'/cross.svg'} className='w-6 h-6 '  width={20} height={20}/> */}
    </div>

                    <div class={`${hide && "hidden"} w-full md:flex md:items-center md:w-auto`} id="menu">
                        <ul
                            class="
                            pt-4
                            text-base text-gray-700
                            md:flex
                            md:justify-between 
                            md:pt-0"
                        >
                            <li key={323}> <Link href={`/`}    onClick={() =>setcurrCategory('all')} class={`${currCategory=='all' && 'text-purple-600 dark:text-purple-500 '} md:p-4 py-2 capitalize block dark:text-gray-400 text-gray-600 hover:text-purple-600 dark:hover:text-purple-400`}
                            >All products</Link>
                            </li>
                            {
                                categories.map((category,i) => {
                                    return <li key={i}> <Link   href={`/category/${category}`} onClick={() =>setcurrCategory(category)} class={`${currCategory===category && 'text-purple-600 dark:text-purple-500 '} md:p-4 py-2 capitalize block dark:text-gray-400 text-gray-600 hover:text-purple-600 dark:hover:text-purple-400`}
                                    >{category}</Link>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
  )
}

export default CategoryList