import "./signingPage.scss";
import { SignIn } from "./signInComponent/signInComponent";
import { SignUp } from "./signUp_component/signUp_component";

export const SigningPage = () => {
	return (
		<div className="signing_page">
			<SignIn />
			<SignUp></SignUp>
		</div>
	);
};
