import React, { useEffect } from "react";
import "./Shop.css";
import axios from "axios";
import { API_KEY, API_URL } from "./../config";
import GoodsList from "../goods/GoodsList";
import Preloader from "../general-component/Preloader";
import BasketList from "../bascketList/BasketList";
import Alert from "../general-component/Alert";
import { useContext } from "react";
import { ShopContext } from "../context/context";
import Pagination from "../general-component/Pagination";

function Shop() {
	const {
		loading,
		setLoading,
		setGoods,
		isBasketShow,
		alertName,
		goods,
		currentPage,
		pageSize,
	} = useContext(ShopContext);

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

	const lastCount = currentPage * pageSize;
	const firstCount = lastCount - pageSize;
	const currentGoods = goods.slice(firstCount, lastCount);

	return (
		<main className="content">
			{loading ? <Preloader /> : <GoodsList currentGoods={currentGoods} />}
			{isBasketShow && <BasketList />}
			{goods.length && <Pagination totalCount={goods.length} />}
			{alertName && <Alert />}
		</main>
	);
}

export default Shop;
