import React from 'react'
import './Cart.css'

function Cart({quantity=0,handlerBasketShow=Function.prototype}) {
  return (
    <div className='cart' onClick={handlerBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ?<span>{quantity}</span>:0}
    </div>
  )
}

export default Cart
