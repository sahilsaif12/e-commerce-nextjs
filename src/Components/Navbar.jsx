import Image from 'next/image'
import React, { Suspense } from 'react'
import ModeBtn from './ModeBtn'
import Link from 'next/link'
import CategoryList from './CategoryList';
async function Navbar() {
    const response = await fetch(`${process.env.API_URL}/products/categories`);
    if (!response.ok) {
        throw new Error('An error occurred while fetching the books');
    }

    const categories = await response.json();

    return (
        <div className="dark:bg-gray-900 bg-gray-200 " >

            <div className="flex items-center p-2 px-4 justify-between">
                <div className="flex flex-col md:flex-row md:justify-between items-center  md:w-2/3">

                    <div className="text-3xl logo-font tracking-wider font-bold bg-gradient-to-r  text-transparent bg-clip-text dark:from-blue-200 from-blue-950  dark:to-purple-600  to-purple-600">A2Zone</div>

                    <Suspense >
                        <CategoryList categories={categories} />
                    </Suspense>
                </div>
                {/* <Image src='/menu.svg' className='invert' width={20} height={20} /> */}


                <ModeBtn />
            </div>
        </div>
    )
}

export default Navbar