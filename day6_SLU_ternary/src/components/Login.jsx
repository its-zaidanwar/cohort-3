import React from 'react'
import Register from './Register'
const Login = ({setToggle}) => { 
  return ( 
    <div className='bg-red-200 flex w-full min-h-screen items-center justify-center'> 
      <form action="" className='bg-white w-[400px] p-8 rounded-2xl shadow-xl flex flex-col gap-5'> 
        
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          Login
        </h1>

        <input 
          className='border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200'
          type="text" 
          placeholder='Email' 
        />

        <input 
          className='border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200'
          type="text" 
          placeholder='Password'
        />

        <button className='bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200'>
          Login
        </button>

        <p className='text-center text-gray-500'>
          Didn't have an account?{" "}
          <span onClick={()=>{
            setToggle(prev => !prev) 
          }} className='text-red-500 font-semibold cursor-pointer hover:underline'>
            Register here
          </span> 
        </p>
      </form> 
    </div> 
  ) 
} 
 
export default Login