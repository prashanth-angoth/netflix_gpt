import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [userSignIn, setUserSignIn] = useState(true);
  function toggleSignUp(){
    setUserSignIn(!userSignIn)
  };
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" alt="background"/>  
        </div>
        <form className='bg-black bg-opacity-50 flex flex-col items-center w-[35rem] h-[35rem] justify-center absolute top-1/3 left-1/3 rounded-lg'>
            <p className='text-white text-3xl font-bold p-4 m-4 mx-0'>{!!userSignIn? "Sign In" : "Sign Up"}</p>
            {!userSignIn &&<input type="userName" placeholder='user name' className='w-96 h-12 p-4 m-4 my-2 rounded-sm' />}
            <input type="email" placeholder='Email or phone number' className='w-96 h-12 p-4 m-4 my-2 rounded-sm' />
            <input type="password" placeholder='Password' className='w-96 h-12 p-4 m-4 my-2 rounded-sm' />
            <button className='bg-red-600 p-2 my-8 w-[384px] rounded-sm'>{!userSignIn? "Sign Up": "Sign In"}</button>
            <h4 className='text-white'><span>{!userSignIn?"ALready have account? ":"New to Netflix? "}</span><span className='text-blue-600 hover:cursor-pointer' onClick={() => toggleSignUp()}>{ !userSignIn?"Sign In":"sign up now"}</span></h4>
            <h4 className='text-white m-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-600'>Learn more</span></h4>
        </form>
    </div>
  )
}

export default Login
