import "./App.css";
import { Homepage } from "./component/pages/homepage/homepage";
import { Route, Routes } from "react-router-dom";
import { ShopPage } from "./component/pages/shop/shop-page";
import { NavigationMenu } from "./component/navigationMenu/navigationMenu";
import { SigningPage } from "./component/pages/signingPage/signingPage";
import React from "react";
import { auth } from "./component/Firebase_Google_SignIn/firebase_Google_Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { uploadData } from "./component/Firebase_Google_SignIn/firebase_Google_Signin";
import { Navigate } from "react-router";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartItemStateProvider } from "./component/cartComponent/CartItemState/CartItemState";
import { CheckOutPage } from "./component/pages/CheckOutPage/CheckOutPageComponent";
import { TotalPriceProvider } from "./component/cartComponent/CartItemState/TotalPrice";

export const CurrentUserContext = createContext();
export const cartToggle = createContext();

const App = () => {
	////////////CurrentUserContext/////////
	const [currentUser, setCurrentUser] = useState(null);
	///////////CartToggle///////////
	const [cart, setCart] = useState(false);
	/////////addToCart////////

	auth.onAuthStateChanged((user) => {
		setCurrentUser(user);
	});
	let navigate = useNavigate();

	return (
		<div>
			<CartItemStateProvider>
				<cartToggle.Provider value={[cart, setCart]}>
					<CurrentUserContext.Provider value={[currentUser]}>
						<TotalPriceProvider>
							<NavigationMenu></NavigationMenu>
							<Routes>
								<Route path="/" element={<Homepage />}></Route>
								<Route path="/shop/" element={<ShopPage />}>
									<Route path="/shop/:id" element={<ShopPage />}></Route>
								</Route>
								<Route
									exact
									path="/signup"
									element={currentUser ? <Homepage /> : <SigningPage />}
								></Route>
								<Route path="/checkout" element={<CheckOutPage />}></Route>
							</Routes>
						</TotalPriceProvider>
					</CurrentUserContext.Provider>
				</cartToggle.Provider>
			</CartItemStateProvider>
		</div>
	);
};

export default App;
