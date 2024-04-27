import React, { useState } from 'react'
import "./LoginPopup.css"

const LoginPopup = ({setShowLogin}) => {
    const[currState , setCurrState] =useState("Sign Up")

  return (
    <div className='LoginPopup'>
            <form action="" className='login-popup-container'> 
            <div className='login-popup-title'>
                <h2>{currState}</h2>
               
                <i onClick={()=>setShowLogin(false)} class="fa-solid fa-xmark"></i>
            </div>
            <div className="login-popup-input">
                {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required/>}
                
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required name="" id="" />
                
            </div>
            <button className='login-btn'>{currState === "Sign UP"?"Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox"  required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login"? 
            <p className='click'>Create a new account?  <span onClick={()=>setCurrState("Sign Up")} >Click here</span></p>: 
            <p className='click'>Already have an account?  <span onClick={()=>setCurrState("Login")} >Login here</span></p> }
           
            
            </form>
    </div>
  )
}

export default LoginPopup
