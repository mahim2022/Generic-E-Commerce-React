import "./cartComponent.scss";
import { ReactComponent as CartIcon } from "./cartIcon.svg";
export const CartComponent = (count) => {
	return (
		<div className="cart-icon">
			<CartIcon className="shopping-icon"></CartIcon>
			<span className="item-count">{count.count}</span>
		</div>
	);
};
