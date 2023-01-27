import React from "react";
import "./Basket.css";
import BasketItem from "./BasketItem";

function BasketList({
	order = [],
	removeToBasketShow,
	handlerBasketShow,
	incrementQuantity,
	decrementQuantity,
}) {

const totalPrice=order.reduce((sum,el)=>{
return sum + el.regularPrice * el.quantity;
},0)


	return (
		<ul className="collection basket">
			<li className="collection-item active #5e35b1 deep-purple darken-1">
				Корзина
				<i
					className="material-icons bascet-close right"
					onClick={handlerBasketShow}
				>
					close
				</i>
			</li>
			{order.length ? (
				order.map((item) => (
					<BasketItem
						key={item.mainId}
						{...item}
						removeToBasketShow={removeToBasketShow}
						incrementQuantity={incrementQuantity}
						decrementQuantity={decrementQuantity}
					/>
				))
			) : (
				<li className="collection-item ">Корзина пуста</li>
			)}
			<li className="collection-item active #5e35b1 deep-purple darken-1">
				Общая стоимость: {totalPrice}
			</li>
		</ul>
	);
}

export default BasketList;
