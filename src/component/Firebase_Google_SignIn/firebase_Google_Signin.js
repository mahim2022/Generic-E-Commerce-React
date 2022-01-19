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
	apiKey: "AIzaSyDFUQBxU6XZGM4f2rCyvOavZ8OJROF54FM",
	authDomain: "generic-ecommerce-df4ad.firebaseapp.com",
	projectId: "generic-ecommerce-df4ad",
	storageBucket: "generic-ecommerce-df4ad.appspot.com",
	messagingSenderId: "1061463245160",
	appId: "1:1061463245160:web:0488e2382f7f31c8f396dd",
	measurementId: "G-8MN0608DL3",
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
