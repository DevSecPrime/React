'use client'
import React from 'react'
import Counter from './Counter'
import Link from 'next/link';
const Header = (props) => {
    console.log({props});
    return (

        <>
         <div className='mx-auto h-8 px-2 bg-green-500 flex items-center justify-between font-bold'>
            <h2 className='text-black'>logo</h2>
            <div className='flex items-center justify-between gap-x-4 text-black gap-8'>
                <Link href={"/Home"}>Home</Link>
                <Link href={"/About"}>About</Link>
                <Link href={"/Carrier"}>Carrier</Link>
            </div>

<div>
</div>
          
        </div>
        <p>name: {props.name}</p>
        <p>surname: {props.surname}</p>
        {/* <Counter/> */}
        </>
       

    )
}

export default Header
