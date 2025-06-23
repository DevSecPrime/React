'use client'

import React, { useState } from 'react'
import Header from '@/Components/Header'

const Page = () => {
  
const [name,setName] = useState('Aryan');
const [surname,setSurname] = useState('The Prime');

  return (
    <div>
      <Header name={name} surname={surname} ></Header>
    </div>
  )
}

export default Page
