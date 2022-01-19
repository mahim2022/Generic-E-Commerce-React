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
import {
	Header,
	LogoContainer,
	OptionDiv,
	OptionLink,
	OptionsContainer,
} from "./NavigationMenuStyles";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase_Google_SignIn/firebase_Google_Signin";
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
export const NavigationMenu = () => {
	const [currentUser] = useContext(CurrentUserContext);
	const [cart, setCart] = useContext(cartToggle);
	const [cartItem] = useContext(CartItemState);
	const cartCount = cartItem.reduce(
		(accumulated, cartItem) => accumulated + cartItem.quantity,
		0
	);

	const getData = async () => {
		const docRef = doc(db, "Shopdata", "ShopData");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log(docSnap.data().shopData);
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	};

	return (
		<CartItemStateProvider>
			<Header>
				<LogoContainer to={"/"}>
					<Logo className="logo" />
				</LogoContainer>
				<OptionsContainer>
					<OptionLink to={"/shop"}>Shop</OptionLink>
					<OptionLink to={"/shop"} onClick={() => getData()}>
						Contacts
					</OptionLink>

					{currentUser ? (
						<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
					) : (
						<OptionLink to="/signup">Sign-In</OptionLink>
					)}
					<div onClick={() => setCart(!cart)}>
						<CartComponent count={cartCount}></CartComponent>
					</div>
				</OptionsContainer>
				{cart ? (
					<CartDropDownComponent item={cartItem}></CartDropDownComponent>
				) : null}
			</Header>
		</CartItemStateProvider>
	);
};
