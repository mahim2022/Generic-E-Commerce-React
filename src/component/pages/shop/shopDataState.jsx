import { Children, createContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase_Google_SignIn/firebase_Google_Signin";

export const ShopData = createContext();

export const ShopDataProvider = (props) => {
	const [shopData, setShopData] = useState([]);
	/////////////getting data form firebase database/////////////
	const getData = async () => {
		const docRef = doc(db, "Shopdata", "ShopData");
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			//////////////setting data to state//////////////////////////
			setShopData(docSnap.data().shopData);
		} else {
			// doc.data() will be undefined in this case
			console.log(`Big Fokup in firebase get document for shop item states`);
		}
	};
	getData();

	return (
		<ShopData.Provider value={[shopData, setShopData]}>
			{props.children}
		</ShopData.Provider>
	);
};
