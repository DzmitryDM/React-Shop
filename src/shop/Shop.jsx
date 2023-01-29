import React, { useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import { API_KEY, API_URL } from "./../config";
import GoodsList from "../goods/GoodsList";
import Preloader from "../general-component/Preloader";
import Cart from "../cart/Cart";
import BasketList from "../bascketList/BasketList";
import Alert from "../general-component/Alert";
import { useContext } from "react";
import { ShopContext } from "../context/context";

function Shop() {
	const { loading, setLoading, setGoods, order, isBasketShow, alertName } =
		useContext(ShopContext);

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
			<Cart quantity={order.length} />
			{loading ? <Preloader /> : <GoodsList />}

			{isBasketShow && <BasketList />}
			{alertName && <Alert />}
		</main>
	);
}

export default Shop;
