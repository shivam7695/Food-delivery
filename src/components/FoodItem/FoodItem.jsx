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
                ?<img className='add' onClick={()=>addToCart(id)} src="add-icon-png-2480.png" alt='' />
                : <div className='food-item-counter'>
                    <img classsname='remove' onClick={()=>removeFromCart(id)}  src="remove-icon-png-7130.png"  alt="" />
                    <p className='count'>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src="add-icon-png-2480.png" alt="" />
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