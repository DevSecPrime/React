import React from 'react'
import Counter from './Counter'
const Header = (props) => {
    console.log({props});
    return (

        <>
         <div className='mx-auto h-8 px-2 bg-green-500 flex items-center justify-between font-bold'>
            <h2 className='text-black'>logo</h2>
            <div className='flex items-center justify-between gap-x-4 text-black gap-8'>
                <p>Home</p>
                <p>About</p>
                <p>Carrier</p>
            </div>

<div>
</div>
          
        </div>
        <p>name: {props.name}</p>
<p>surname: {props.surname}</p>
        <Counter/>
        </>
       

    )
}

export default Header
