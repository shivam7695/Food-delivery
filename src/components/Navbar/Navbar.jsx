import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/store';

const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("Home");
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar' id='navbar'>
      <Link to="/"><img src="foode-logo.jpg" alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-downlaod' onClick={()=> setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us..</a>
      </ul>
      <div className="navbar-right">
        <img src="search_icon.png" alt="" />
        <div className="navbar-search-icon">
            <Link to="/cart"> <img src="basket_icon.png" alt="" /> </Link>
                <div className={getTotalCartAmount()===0?"": "dot"}>

                </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In </button>
      </div>
      
    </div>
    
  )
}

export default Navbar
