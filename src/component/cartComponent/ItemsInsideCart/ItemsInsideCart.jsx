import { CartItemState } from "../CartItemState/CartItemState";
import { useContext } from "react";
import "./ItemsInsideCart.scss";

export const ItemsInsideCart = (item) => {
	const { imageUrl, name, quantity, price } = item.item;

	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item"></img>
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity}x ${price}
				</span>
			</div>
		</div>
	);
};
