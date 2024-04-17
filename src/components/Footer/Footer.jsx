import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img className='logos' src="foodee-logo.webp" alt="" />
            <p> "From farm to table, we're dedicated to providing fresh, quality ingredients in every meal."</p>
            <div className="footer-social-icon">
                <img src="facebook_icon.png" alt="" />
                <img src="twitter_icon.png" />
                <img src="linkedin_icon.png" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privecy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>get in touch</h2>
                <ul>
                    <li>+1 (555) 123-4567</li>
                    <li>Foodee1992@gmail.com</li>
                </ul>
            </div>
        </div>
       <hr />
       <p className='footer-copyright'>Copyright 2024 © foodee.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer