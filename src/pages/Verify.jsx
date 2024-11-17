import React from 'react'
import { account } from '../Appwrite/Auth';

const Verify = () => {
    const VerifyHandler = async () => {
        try {
            const res = await account.createVerification()
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='flex justify-center items-center gap-4 h-screen'>
      <h1 className='text-2xl font-bold'>Verify</h1>
      <button className='bg-black text-white px-2 py-2 rounded-lg font-bold' onClick={VerifyHandler}>Verify</button>
    </div>
  )
}

export default Verify