import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/store';

const Navbar = ({setShowLogin}) => {
    const [menu , setMenu] = useState("Home");
    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar' id='navbar'>
      <Link to="/"><img src="https://imgs.search.brave.com/WJJagTEZD8zwFMVB9xVhEzNCjBGCIrj_p2AvJZG9jlc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVj/NzU5Y2Y1ZDg2Y2M5/NDVmZDY4MGY0ZC9l/ZDVkYmFlNS1kNjJh/LTRlMmQtYWEwZi0x/ZmZlMGJkYzM0OTYv/Rm9vZGVfUHJpbWFy/eUxvZ29fRGFyay5q/cGc" alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=> setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-downlaod' onClick={()=> setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=> setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us..</a>
      </ul>
      <div className="navbar-right">
       <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <div className="navbar-search-icon">
            <Link to="/cart"> <i class="fa-solid fa-basket-shopping"></i> </Link>
                <div className={getTotalCartAmount()===0?"": "dot"}>

                </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In </button>
      </div>
      
    </div>
    
  )
}

export default Navbar
