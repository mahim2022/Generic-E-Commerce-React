import { createContext, useContext, useState } from "react";
import { CartItemState } from "./CartItemState";
import { useEffect } from "react";

export const TotalPrice = createContext();

export const TotalPriceProvider = (props) => {
	const [cartItem] = useContext(CartItemState);
	const [totalPrice, setTotalPrice] = useState(0);

	let GrandTotal = 0;

	if (cartItem.length) {
		GrandTotal = cartItem
			.map((item) => item.price * item.quantity)
			.reduce((prev, curr) => prev + curr, 0);
	}

	useEffect(() => {
		setTotalPrice(GrandTotal);
	});
	// console.log(totalPrice);

	return (
		<TotalPrice.Provider value={[totalPrice, setTotalPrice]}>
			{props.children}
		</TotalPrice.Provider>
	);
};
