import React from 'react'
import { account } from '../Appwrite/Auth';

const Verify = () => {
      return (
    <div className='flex flex-col justify-center items-center gap-4 h-screen'>
      <h1 className='text-2xl font-bold'>Verify Email</h1>
      <button className='bg-black text-white px-2 py-2 rounded-lg font-bold'>Verify</button>
    </div>
  )
}

export default Verify