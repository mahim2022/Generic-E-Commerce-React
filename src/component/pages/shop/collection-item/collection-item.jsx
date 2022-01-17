import "./collection-item.scss";
import { Button } from "react-bootstrap";
import { CartItemState } from "../../../cartComponent/CartItemState/CartItemState";
import { useContext } from "react";
import { ItemsInsideCart } from "../../../cartComponent/ItemsInsideCart/ItemsInsideCart";

export const CollectionItem = ({ item }) => {
	const { id, name, price, imageUrl } = item;
	const [cartItem, setCartItem] = useContext(CartItemState);
	const addToCart = (product) => {
		const duplicate = cartItem.find((item) => item.id === product.id);
		if (duplicate) {
			const newCartItems = cartItem.map((product) => {
				if (product.id === item.id) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			setCartItem(newCartItems);
		} else
			setCartItem((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
	};

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button
				className="addToCartButton"
				variant="dark"
				onClick={() => {
					addToCart(item);
					// console.log(cartItem);
				}}
			>
				Add to Cart
			</Button>
		</div>
	);
};
