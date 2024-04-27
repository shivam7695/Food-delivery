import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
          <img
        src="https://plus.unsplash.com/premium_photo-1661515581015-9178587e2f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8"
        alt=""
      />
            <h2>Order your favourite food here....</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Experience the convenience of hassle-free delivery, so you can focus on enjoying your meal.</p>
            <button>View Menu</button>
        </div>
        </div>
  )
}

export default Header
