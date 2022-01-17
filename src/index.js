import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopDataProvider } from "./component/pages/shop/shopDataState.jsx";
import { DirectoryMenuItemsProvider } from "./component/pages/homepage/directoryMenuItemsStates/directoryMenuItemsStates.jsx";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { allReducers } from "./Redux/combiningReducers";

// const store = createStore(
// 	allReducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
	<BrowserRouter>
		<DirectoryMenuItemsProvider>
			<ShopDataProvider>
				<App />
			</ShopDataProvider>
		</DirectoryMenuItemsProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
