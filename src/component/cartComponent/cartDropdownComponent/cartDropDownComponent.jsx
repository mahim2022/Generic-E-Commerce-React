import "./cartDropDownComponent.scss";
import { Button } from "react-bootstrap";
import { ItemsInsideCart } from "../ItemsInsideCart/ItemsInsideCart";
import {
	CartItemState,
	CartItemStateProvider,
} from "../CartItemState/CartItemState";
import { Component, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartToggle } from "../../../App";

export const CartDropDownComponent = (item) => {
	const [cart, setCart] = useContext(cartToggle);
	const navigate = useNavigate();
	const items = item.item;
	return (
		<CartItemStateProvider>
			<div className="cart-dropdown">
				<div className="cart-items">
					{items.length ? (
						items.map((item) => (
							<ItemsInsideCart key={item.id} item={item}></ItemsInsideCart>
						))
					) : (
						<span className="emptyCartText">Your Cart is Empty😕</span>
					)}
				</div>
				<Button
					onClick={() => {
						navigate("/checkout");
						setCart(!cart);
					}}
				>
					Go to checkout
				</Button>
			</div>
		</CartItemStateProvider>
	);
};
