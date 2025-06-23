'use client'

import React, { useState } from 'react'
import Header from '@/Components/Header'

const Page = () => {
  
const [name,setName] = useState('Aryan');
const [surname,setSurname] = useState('The Prime');

  return (
    <div>
      <h1>This is Main home Page</h1>
      {/* <Header name={name} surname={surname} ></Header> */}
    </div>
  )
}

export default Page
