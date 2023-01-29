import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
	goods: [],
	loading: true,
	order: [],
	isBasketShow: false,
	alertName: "",
};

export const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState);

   value.closeAlert = () => {
      dispatch({ type: "CLOSE_ALERT" });
   };
   value.getOrder = (item) => {
      dispatch({ type: "GET_ORDER", payload: item });
   };
	value.setLoading = () => {
		dispatch({ type: "SET_LOADING" });
	};
	value.setGoods = (data) => {
		dispatch({ type: "SET_GOODS", payload: data });
	};
	value.handlerBasketShow = () => {
		dispatch({ type: "HANDLER_BASKET_SHOW" });
	};
	value.removeToBasketShow = (mainId) => {
		dispatch({ type: "REMOVE_TO_BASKET_SHOW", payload: {mainId} });
	};
	value.incrementQuantity = (mainId) => {
		dispatch({ type: "INCREMENT_QUANTITY", payload: {mainId} });
	};
	value.decrementQuantity = (mainId) => {
		dispatch({ type: "DECREMENT_QUANTITY", payload: {mainId} });
	};

	return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
