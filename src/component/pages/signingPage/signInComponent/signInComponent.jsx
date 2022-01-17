import React from "react";
import "./signInComponent.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { SignInWithGoogle } from "../../../Firebase_Google_SignIn/firebase_Google_Signin";
export class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		this.setState({ email: "", password: "" });
	};
	handleChange = (event) => {
		const { value, type } = event.target;
		this.setState({ [type]: value });
	};

	render() {
		return (
			<div className="form">
				<h2>Already have an Account?</h2>
				<span>Signin with your email and password</span>

				<Form onSubmit={this.handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label className="label">Email address</Form.Label>
						<Form.Control
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
						<Form.Label className="label">Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</Form.Group>

					<div className="buttons">
						<Button
							variant="primary"
							type="submit"
							className="button"
							onClick={this.handleSubmit}
						>
							Submit
						</Button>
						<Button
							variant="primary"
							type="submit"
							className="button google"
							onClick={SignInWithGoogle}
						>
							Sign in with Google
						</Button>
					</div>
				</Form>
			</div>
		);
	}
}
