import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  //sign in && sign up toggle code
  const [isSignIn,setisSignIn]=useState(true)
  const toggledata=()=>{
setisSignIn(!isSignIn);
  }
  return (
    <div>
      <Header/>
      <div>
      {/* //background image logo code */}
      <img  className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='logo-netflix'/>
      </div>

      {/* //form data code for  both sign in and aignup */}
      <form className='w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black text-white bg-opacity-80'>
      <h1 className='font-bold font-xl text-white text-3xl py-4'>{isSignIn?"Sign In":"Sign Up"}</h1>
      {!isSignIn&&<input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800 rounded-lg'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-800 rounded-lg'/>
        
        <button className=' rounded-lg p-4 my-6 w-full bg-red-700'>{isSignIn?"Sign In":"Sign Up"}</button>
      <p onClick={toggledata} className='cursor-pointer'>{isSignIn? "New to netflix? Sign Up Now":"Already Regitered Please Sign In "}</p>
      </form>
    </div>
  )
}

export default Login
