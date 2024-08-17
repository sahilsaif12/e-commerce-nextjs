'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ModeBtn() {
    const [dark, setdark] = useState(true);
    const [animateKey, setAnimateKey] = useState(0); 

    const handleClick = () => {
        setdark(!dark);
        setAnimateKey(prevKey => prevKey + 1); 
        document.body.classList.toggle("dark");

    };
    useEffect(() => {
        document.body.classList.add("dark");
    }, [])
    
    return (
        <div onClick={handleClick} className="bg-gray-300 dark:bg-gray-700  rounded-full  p-2 cursor-pointer border-4 dark:border-gray-800 border-slate-300">
            {
                dark ?
                <Image 
                    key={`sun-${animateKey}`} // Unique key to force re-render
                    src="/sun.svg" 
                    className='w- animate-spin animate-once animate-duration-[800ms] invert animate-ease-in-out' 
                    width={26} 
                    height={26} 
                />
                :
                <Image 
                    key={`moon-${animateKey}`} // Unique key to force re-render
                    src="/moon.svg" 
                    className='w- animate-spin animate-once animate-duration-[800ms] invert-0 animate-reverse animate-ease-in-out' 
                    width={26} 
                    height={26} 
                />
            }
        </div>
    );
}

export default ModeBtn;
