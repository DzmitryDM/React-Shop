import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/context";
import "./Basket.css";
import BasketItem from "./BasketItem";

function BasketList() {
	const { order = [], handlerBasketShow = Function.prototype,removeAllBasket=Function.prototype } =
		useContext(ShopContext);
const mainId = order.map(el=> el.mainId)
	const totalPrice = order.reduce((sum, el) => {
		return sum + el.regularPrice * el.quantity;
	}, 0);

	return (
		<ul className="collection basket">
			<li className="collection-item active #5e35b1 deep-purple darken-1">
				Корзина
				<i
					className="material-icons bascet-close right"
					onClick={() => handlerBasketShow()}
				>
					close
				</i>
			</li>
			{order.length ? (
				order.map((item) => <BasketItem key={item.mainId} {...item} />)
			) : (
				<li className="collection-item ">Корзина пуста</li>
			)}
			<li className="collection-item active #5e35b1 deep-purple darken-1">
				Общая стоимость: {totalPrice}
         <span className="removeAllBasket" onClick={()=>removeAllBasket(mainId)}>Очистить корзину</span>
			</li>
		</ul>
	);
}

export default BasketList;
