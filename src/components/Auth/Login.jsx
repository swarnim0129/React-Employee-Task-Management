import React, { useState } from 'react'
const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Form submitted")
    setEmail("")
    setPassword("")
    handleLogin(email,password)
  }


  return (
    <>
    <div className="flex h-screen w-screen items-center justify-center bg-black">
        <div className='border-2 p-20 border-emerald-600 rounded-2xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col items-center justify-center'>
            <input 
            required 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full py-2 text-white outline-none px-4 text-xl bg-transparent placeholder:text-gray-400" type="email" placeholder='Enter your email' />
            <input 
            required 
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }} 
            className='border-2 border-emerald-600 rounded-full py-2 mt-3 text-white outline-none px-4 text-xl bg-transparent placeholder:text-gray-400' placeholder='Enter your password'/>
            <button className='text-white bg-emerald-500 py-2 px-24 mt-4 rounded-full hover:bg-emerald-700'>Login</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Login
