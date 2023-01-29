import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/context";
import "./Cart.css";

function Cart({ quantity = 0 }) {
	const { handlerBasketShow = Function.prototype } = useContext(ShopContext);

	return (
		<div className="cart" onClick={handlerBasketShow}>
			<i className="material-icons">shopping_cart</i>
			{quantity ? <span>{quantity}</span> : 0}
		</div>
	);
}

export default Cart;
