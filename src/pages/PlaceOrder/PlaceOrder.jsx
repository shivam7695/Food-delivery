import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/store'



const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext)
  return (
    <div>
      <form action="" className='place-order'>
        <div className="place-order-left">
            <p className='title'>Delivery Information</p>
            <div className="multi-field">
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email Address' />
            <input type="text"placeholder='street' />
            <div className="multi-field">
              <input type="text" placeholder='City' />
              <input type="text" placeholder='State' />
            </div>
            <div className="multi-field">
              <input type="text" placeholder='Zip Code' />
              <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone No.' />
        </div>

        <div className="place-order-right">
        <div className="cart-total">
          <h3>Cart Total</h3>
          <div>
            <hr />
            <div className="cart-total-detail">
              <p>SubTotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>$ {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total </b>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} >Proceed To Payment</button>
        </div>
        </div>

      </form>
    </div>
  )
}

export default PlaceOrder
