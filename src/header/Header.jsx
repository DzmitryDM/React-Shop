import React, { useContext } from 'react'
import { ShopContext } from '../context/context';
import './Header.css'

function Header() {
  
   	const {order=[],handlerBasketShow = Function.prototype } = useContext(ShopContext);
  
  return (
<nav className='#512da8 deep-purple darken-2'>
    <div className="nav-wrapper">
      <a href='https://github.com/DzmitryDM/react-shop' target="blank" className="brand-logo"> Shop</a>
    </div>
		<div className="cart" >
			<i onClick={handlerBasketShow} className="material-icons">shopping_cart</i>
			{order.length ? <span>{order.length}</span> : 0}
		</div>
  </nav>
  )
}

export default Header
