import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const[isSignIn , setIsSignIn]=useState(true);
  const handleSignIn=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
        <Header/>
        <div className="absolute ">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/186b5d52-052d-4779-b061-5eed089a99a6/web/IN-en-20251020-TRIFECTA-perspective_2972aef3-a02d-4d1c-9098-126151b3c3ee_small.jpg"
              alt="logo"/>
        </div>
       
        <form className="absolute my-36 mx-auto right-0 left-0 mt-36 bg-black bg-opacity-75 w-3/12">
          <h1 className="font-bold text-lg ml-4 text-white p-4">{isSignIn? 'SIGN IN ' :'SIGN UP'} </h1>
          { !isSignIn &&

          <input type="text" placeholder="full name" className=" ml-6 p-3 w-72 rounded-lg bg-slate-500 "/>}
            <br></br>
            <input type="text" placeholder="email" className=" ml-6 p-3 mt-4 w-72 rounded-lg bg-slate-500 "/><br></br>
            <input type="password" placeholder="password" className="ml-6 mt-4 rounded-lg w-72 p-3 bg-slate-500"/><br></br>
            <button className="ml-6 mt-8 mb-5 p-3 border rounded-lg bg-red-700 w-72 hover:bg-red-500 font-bold"> {isSignIn? 'Signin' :'Signup' }</button>
            <p className="text-white ml-6 mt-8 mb-6 p-3" onClick={handleSignIn}
            >{isSignIn? 'new to Netflix Sign UP now' :'already have account Sign In'} </p> 
            
        </form>
    </div>
  )
}

export default Login