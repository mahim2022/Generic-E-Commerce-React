import "./navigationMenu.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./Logo.svg";
import { auth } from "../Firebase_Google_SignIn/firebase_Google_Signin";
import { useContext } from "react";
import { CurrentUserContext } from "../../App";
import { CartComponent } from "../cartComponent/cartComponent";
import { CartDropDownComponent } from "../cartComponent/cartDropdownComponent/cartDropDownComponent";
import { cartToggle } from "../../App";
import {
	CartItemState,
	CartItemStateProvider,
} from "../cartComponent/CartItemState/CartItemState";

export const NavigationMenu = () => {
	const [currentUser] = useContext(CurrentUserContext);
	const [cart, setCart] = useContext(cartToggle);
	const [cartItem] = useContext(CartItemState);
	const cartCount = cartItem.reduce(
		(accumulated, cartItem) => accumulated + cartItem.quantity,
		0
	);

	return (
		<CartItemStateProvider>
			<div className="header">
				<Link className="logo-container" to={"/"}>
					<Logo className="logo" />
				</Link>
				<div className="options">
					<Link className="option" to={"/shop"}>
						Shop
					</Link>
					<Link
						className="option"
						to={"/shop"}
						onClick={() => console.log(cartItem)}
					>
						Contacts
					</Link>

					{currentUser ? (
						<div className="option" onClick={() => auth.signOut()}>
							SIGN OUT
						</div>
					) : (
						<Link className="option" to="/signup">
							SIGN IN
						</Link>
					)}
					<div onClick={() => setCart(!cart)}>
						<CartComponent count={cartCount}></CartComponent>
					</div>
				</div>
				{cart ? (
					<CartDropDownComponent item={cartItem}></CartDropDownComponent>
				) : null}
			</div>
		</CartItemStateProvider>
	);
};
