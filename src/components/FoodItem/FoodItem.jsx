import React, { useContext } from 'react'
import "./FoodItem.css"
import { StoreContext } from '../../context/store';


const FoodItem = ({id,name,price,description,image}) => {

    
    const{cartItems, addToCart,removeFromCart} = useContext(StoreContext);


  return (
    <div className='food-item'>

        <div className="food-item-img-container">
            <img className='food-item-img' src={image} alt="" />
            {
                !cartItems[id]
                ?<i className='add' onClick={()=>addToCart(id)} class="fa-solid fa-plus"></i>
                : <div className='food-item-counter'>
                   <i classsname='remove' onClick={()=>removeFromCart(id)} class="fa-solid fa-minus"></i>
                    <p className='count'>{cartItems[id]}</p>
                    <i className='add' onClick={()=>addToCart(id)} class="fa-solid fa-plus"></i>
                    
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src="rating_starts.png" alt="" />
            </div>
            <p className="food-item-dese">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>

    </div>
  )
}

export default FoodItem
