export const reducer = (state, { type, payload }) => {
	switch (type) {
     case "ON_PAGE_CHANGE":
      return{
      ...state,
      currentPage:payload
      }
		case "SET_LOADING":
			return {
				...state,
				loading: false,
			};
		case "SET_GOODS":
			return {
				...state,
				goods: payload,
			};
		case "HANDLER_BASKET_SHOW":
			return {
				...state,
				isBasketShow: !state.isBasketShow,
			};
		case "CLOSE_ALERT":
			return {
				...state,
				alertName: "",
			};
		case "GET_ORDER":
			const itemIndex = state.order.findIndex(
				(orderIndex) => orderIndex.mainId === payload.mainId
			);
			let newOrder = null;
			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1,
				};
				newOrder = [...state.order, newItem];
			} else {
				newOrder = state.order.map((itemOrder, index) => {
					if (index === itemIndex) {
						return {
							...itemOrder,
							quantity: itemOrder.quantity + 1,
						};
					} else {
						return itemOrder;
					}
				});
			}
			return {
				...state,
				order: newOrder,
				alertName: payload.displayName,
			};
		case "REMOVE_TO_BASKET_SHOW":
			return {
				...state,
				order: state.order.filter((item) => item.mainId !== payload.mainId),
			};
		case "INCREMENT_QUANTITY":
			return {
				...state,
				order: state.order.map((el) => {
					if (el.mainId === payload.mainId) {
						return {
							...el,
							quantity: el.quantity + 1,
						};
					} else {
						return el;
					}
				}),
			};
		case "DECREMENT_QUANTITY":
			return {
				...state,
				order: state.order.map((el) => {
					if (el.mainId === payload.mainId) {
						const decQuantity = el.quantity - 1;
						return {
							...el,
							quantity: decQuantity >= 0 ? decQuantity : 0,
						};
					} else {
						return el;
					}
				}),
			};
case "REMOVE_TO_BASKET":
   return{
   ...state,
   order:state.order.filter(item=>item.mainId === payload.mainId)
   }
		default:
			return state;
	}
};
