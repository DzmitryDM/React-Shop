import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/context";

function BasketItem({
	mainId,
	quantity,
	displayName,
	regularPrice,
}) {
	const {
		removeToBasketShow = Function.prototype,
		incrementQuantity = Function.prototype,
		decrementQuantity = Function.prototype,
	} = useContext(ShopContext);

	return (
		<ul className="collection item">
			<li className="collection-item avatar  ">
				<span className="title">{displayName}</span>

				<p>
					Колличество:{" "}
					<span
						className="material-icons increment"
						onClick={() => decrementQuantity(mainId)}
					>
						remove
					</span>{" "}
					{quantity}
					<span
						className="material-icons decrement"
						onClick={() => incrementQuantity(mainId)}
					>
						add
					</span>
				</p>
				<p>Цена: {regularPrice}</p>
				<div className="secondary-content close">
					<i
						onClick={() => removeToBasketShow(mainId)}
						className="material-icons color-close"
					>
						close
					</i>
				</div>
			</li>
		</ul>
	);
}

export default BasketItem;
