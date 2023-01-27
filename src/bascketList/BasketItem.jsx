import React from "react";

function BasketItem({
	mainId,
	quantity,
	displayName,
	regularPrice,
	imageBackground,
	removeToBasketShow,
	incrementQuantity,
	decrementQuantity,
}) {
	return (
		<ul class="collection item">
			<li class="collection-item avatar  ">
				<img src={imageBackground} alt="" class="circle" />
				<span class="title">{displayName}</span>

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
				<div class="secondary-content close">
					<i
						onClick={() => removeToBasketShow(mainId)}
						class="material-icons color-close"
					>
						close
					</i>
				</div>
			</li>
		</ul>
	);
}

export default BasketItem;
