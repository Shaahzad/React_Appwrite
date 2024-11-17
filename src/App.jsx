import React from 'react'
import { useState } from 'react'
import {account, ID} from './Appwrite/Auth'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Handlesignup = async () => {
   try {
    const user = await account.create(
      ID.unique(), 
      email,
      password
  );
  setEmail('')
  setPassword('')
  console.log(user)
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-4 shadow-2xl px-10 py-10'>
      <input type="text" placeholder='Enter Email' className='border border-black outline-none px-2 py-2' onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="password" placeholder='Enter Password' className='border border-black outline-none px-2 py-2' onChange={(e) => setPassword(e.target.value)} value={password}/>
      <button className='bg-black text-white px-2 py-2 rounded-lg font-bold' onClick={Handlesignup}>Submit</button>
      </div>
    </div>
  )
}

export default App