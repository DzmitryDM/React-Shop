import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "axios";
import { API_KEY, API_URL } from "./../config";
import GoodsList from "../goods/GoodsList";
import Preloader from "../general-component/Preloader";
import Cart from "../cart/Cart";
import BasketList from "../bascketList/BasketList";
import Alert from "../general-component/Alert";

function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBasketShow, setBasketShow] = useState(false);
	const [alertName, setAlertName] = useState('');


const closeAlert=()=>{
setAlertName('')
}

	const handlerBasketShow = () => {
		setBasketShow(!isBasketShow);
	};

	const getOrder = (item) => {
		const itemIndex = order.findIndex(
			(orderIndex) => orderIndex.mainId === item.mainId
		);
		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newItem = order.map((itemOrder, index) => {
				if (itemIndex === index) {
					return {
						...itemOrder,
						quantity: itemOrder.quantity + 1,
					};
				} else {
					return itemOrder;
				}
			});
			setOrder(newItem);
		}
      setAlertName(item.displayName)
	};

	const removeToBasketShow = (mainId) => {
		const remove = order.filter((item) => item.mainId !== mainId);
		setOrder(remove);
	};

	const incrementQuantity = (itemId) => {
		const increment = order.map((el) => {
			if (el.mainId === itemId) {
				return {
					...el,
					quantity: el.quantity + 1,
				};
			} else {
				return el;
			}
		});
		setOrder(increment);
	};

	const decrementQuantity = (mainId) => {
		const decrement = order.map((el) => {
			if (el.mainId === mainId) {
            const decQuantity=el.quantity -1
				return {
					...el,
					quantity: decQuantity >= 0 ? decQuantity - 1 : 0,
				};
			} else {
				return el;
			}
		});
		setOrder(decrement);
	};

	useEffect(() => {
		(async () => {
			const response = await axios.get(API_URL, {
				headers: {
					Authorization: API_KEY,
				},
			});
			setGoods(response.data.shop);
			setLoading(false);
		})();
	}, []);

	return (
		<main className="content">
			<Cart quantity={order.length} handlerBasketShow={handlerBasketShow} />
			{loading ? (
				<Preloader />
			) : (
				<GoodsList goods={goods} getOrder={getOrder} />
			)}

			{isBasketShow && (
				<BasketList
					order={order}
					removeToBasketShow={removeToBasketShow}
					handlerBasketShow={handlerBasketShow}
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
				/>
			)}
         {
         alertName && <Alert alertName={alertName} closeAlert={closeAlert}/>
         }
		</main>
	);
}

export default Shop;
