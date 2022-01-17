import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

///FIREBASE CONFIG
const config = {
	apiKey: "AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",
	authDomain: "crwn-db.firebaseapp.com",
	databaseURL: "https://crwn-db.firebaseio.com",
	projectId: "crwn-db",
	storageBucket: "crwn-db.appspot.com",
	messagingSenderId: "850995411664",
	appId: "1:850995411664:web:7ddc01d597846f65",
};

const app = initializeApp(config);

export const provider = new GoogleAuthProvider(app);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const uploadData = async (data) => {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			Data: data,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

export const SignInWithGoogle = () => {
	// const auth = getAuth();
	signInWithPopup(auth, provider)
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;

			// ...
			const { email, displayName } = user;
			uploadData({ email, displayName });
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			const credential = GoogleAuthProvider.credentialFromError(error);
			// ...
		});
};

export const CreateNewUserWithEmailAndPassword = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			// ...
			// console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
			console.log(`createUserWithEmailAndPassword Error`);
		});
};
