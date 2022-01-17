import { createContext, useState, useEffect } from "react";

export const CartItemState = createContext();

export const CartItemStateProvider = (props) => {
	const [cartItem, setCartItem] = useState([], () => {
		const data = localStorage.getItem("Cart-Item-State");
		return data ? JSON.parse(data) : [];
	});

	useEffect(() => {
		localStorage.setItem("Cart-Item-State", JSON.stringify(cartItem));
	}, [cartItem]);

	return (
		<CartItemState.Provider value={[cartItem, setCartItem]}>
			{props.children}
		</CartItemState.Provider>
	);
};
