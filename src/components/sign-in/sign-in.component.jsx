import React, { useState } from 'react';
import {
	signInWithGooglePopup,
	createUserDocFromAuth,
	signInAuthWithEmailAndPassword,
} from '../../utils/firebase/firebase.util';
import FormInput from '../forms-input/form-input.component';
import Button from '../button/button.component';

import './sign-in.style.scss';

const SignIn = () => {
	const defaultFormFields = {
		email: '',
		password: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();

		// if (password !== confirmPass) {
		// 	alert('Passwords does not match, Try Again');
		// 	return;
		// }

		try {
			const signedIn = await signInAuthWithEmailAndPassword(email, password);
			console.log('DASDASDAS', signedIn);
			resetForm();
		} catch (err) {
			switch (err.code) {
				case 'auth/wrong-password': {
					alert(
						`You have entered wrong password for ${email}! Please try again`
					);
					break;
				}
				case 'auth/user-not-found': {
					alert(`No user exist with ${email}! Please try again`);
					break;
				}
				default: {
					console.log('error', err);
				}
			}
		}
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocFromAuth(user);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-in-container'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label={'Email'}
					required
					type='email'
					name='email'
					onChange={handleChange}
					value={email}
				/>

				<FormInput
					label={'Password'}
					required
					type='password'
					name='password'
					onChange={handleChange}
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={'google'}
						onClick={signInWithGoogle}
					>
						Sign In With Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
