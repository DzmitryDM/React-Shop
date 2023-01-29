import React from "react";
import "./General.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/context";

function Alert() {
	const { alertName, closeAlert = Function.prototype } =
		useContext(ShopContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 2000);

		return () => clearTimeout(timerId);
		// eslint-disable-next-line
	}, [alertName]);

	return (
		<div id="toast-container">
			<div className="toast  #5e35b1 deep-purple darken-1">
				{alertName} добавлен в корзину
			</div>
		</div>
	);
}

export default Alert;
