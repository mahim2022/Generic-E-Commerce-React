import "./Check_Out_Item.scss";
import { CartItemState } from "../../../cartComponent/CartItemState/CartItemState";
import { useContext } from "react";

export const CheckOutItem = ({ item }) => {
	const { name, imageUrl, price, quantity } = item;

	const [cartItem, setCartItem] = useContext(CartItemState);

	const removeCartItem = (cartItem, item) => {
		const newCartItems = cartItem.filter((items) => items.id !== item.id);
		setCartItem(newCartItems);
	};

	const increaseItems = (cartItem, item) => {
		const newCartItems = cartItem.map((product) => {
			if (product.id === item.id) {
				product.quantity++;
				return product;
			} else {
				return product;
			}
		});
		setCartItem(newCartItems);
	};

	const decreaseItems = (cartItem, item) => {
		let newCartItems = cartItem.map((product) => {
			if (product.id === item.id) {
				product.quantity--;
				return product;
			} else {
				return product;
			}
		});
		//////removing item if less then 1/////////
		if (item.quantity < 1) {
			newCartItems = cartItem.filter((cartitem) => cartitem.id !== item.id);
		}
		setCartItem(newCartItems);
	};

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="product"></img>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => decreaseItems(cartItem, item)}>
					&larr;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => increaseItems(cartItem, item)}>
					&rarr;
				</div>
			</span>
			<span className="price">{price}</span>
			<span
				className="remove-button"
				onClick={() => removeCartItem(cartItem, item)}
			>
				&#10005;
			</span>
		</div>
	);
};
