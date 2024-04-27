import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img className='logos' src="https://imgs.search.brave.com/WJJagTEZD8zwFMVB9xVhEzNCjBGCIrj_p2AvJZG9jlc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVj/NzU5Y2Y1ZDg2Y2M5/NDVmZDY4MGY0ZC9l/ZDVkYmFlNS1kNjJh/LTRlMmQtYWEwZi0x/ZmZlMGJkYzM0OTYv/Rm9vZGVfUHJpbWFy/eUxvZ29fRGFyay5q/cGc" alt="" />
            <p> "From farm to table, we're dedicated to providing fresh, quality ingredients in every meal."</p>
            <div className="footer-social-icon">
            <i className="icon fa-brands fa-square-facebook"></i>
            <i className="icon fa-brands fa-square-x-twitter"></i>
            <i className="icon fa-brands fa-linkedin"></i>
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
