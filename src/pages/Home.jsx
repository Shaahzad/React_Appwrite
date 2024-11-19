import React from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../Appwrite/Auth'

const Home = () => {
const navigate = useNavigate()

    const LogoutHandler = async () => {
        try {
            await account.deleteSession('current')
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='bg-purple-500 w-full h-20 flex justify-between items-center px-20'>
         <h1 className='font-bold text-white text-2xl'>Profile</h1>
        <ul className='flex justify-center items-center gap-6'>
            <li className='font-bold text-white hover:text-black cursor-pointer transition duration-500 ease-in-out'>Home</li>
            <li className='font-bold text-white hover:text-black cursor-pointer transition duration-500 ease-in-out'>About</li>
            <li className='font-bold text-white hover:text-black cursor-pointer transition duration-500 ease-in-out'>Future</li>
            <li className='font-bold text-white hover:text-black cursor-pointer transition duration-500 ease-in-out'>Contact Us</li>
            <li className='font-bold text-white bg-blue-500 p-4 rounded-full hover:text-black cursor-pointer transition duration-500 ease-in-out'
            onClick={LogoutHandler}
            >Logout</li>
        </ul>
         </div>
  )
}

export default Home