import React, { useState } from 'react'
import { account } from '../Appwrite/Auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginHandler = async () => {
    try {
      const res = await account.createEmailPasswordSession(email, password)
      console.log(res)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex flex-col gap-4 shadow-2xl px-10 py-10'>
    <h1 className='text-2xl font-bold'>Login</h1>
    <input type="text" placeholder='Enter Email' className='border border-black outline-none px-2 py-2' onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder='Enter Password' className='border border-black outline-none px-2 py-2' onChange={(e) => setPassword(e.target.value)}/>
    <button className='bg-black text-white px-2 py-2 rounded-lg font-bold' onClick={loginHandler}>Submit</button>
    </div>
  </div>
  )
}

export default Login