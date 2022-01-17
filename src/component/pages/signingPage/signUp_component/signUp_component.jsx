import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./signUp_component.scss";
import {
	createUserCollectionDocument,
	CreateUserWithEmailAndPassword,
	auth,
} from "../../../Firebase_Google_SignIn/firebase_Google_Signin";
import { createUserWithEmailAndPassword } from "firebase/auth";

export class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { username, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword)
			<Alert variant="danger">Passwords do not match</Alert>;

		///////calling create username funtion firebase
		createUserWithEmailAndPassword({ auth, email, password })
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;

				console.log(`user data from signup${user}`);

				// await createUserCollectionDocument(user);

				/////////clearing state
				this.setState({
					username: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(`Erron on createUserNameWithEmailAndPassword`);
				// ..
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-up">
				<h2>New to Generic Store</h2>
				<span>Sign-up with your email and password</span>

				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control
							name="username"
							type="username"
							placeholder="Enter Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
						<Form.Text className="text-muted">
							We'll never share your username with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							name="email"
							type="email"
							placeholder="Enter email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							name="password"
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							name="confirmPassword"
							type="password"
							placeholder="Password"
							value={this.state.confirmPassword}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<Button variant="primary" type="submit" onClick={this.handleSubmit}>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}
