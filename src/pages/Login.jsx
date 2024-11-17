import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex flex-col gap-4 shadow-2xl px-10 py-10'>
        <h1>Login</h1>
    <input type="text" placeholder='Enter Email' className='border border-black outline-none px-2 py-2'/>
    <input type="password" placeholder='Enter Password' className='border border-black outline-none px-2 py-2'/>
    <button className='bg-black text-white px-2 py-2 rounded-lg font-bold'>Submit</button>
    </div>
  </div>
  )
}

export default Login