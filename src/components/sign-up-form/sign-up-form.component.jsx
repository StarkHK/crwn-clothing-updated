import React, { useState } from 'react';
import {
	createAuthUserWithEmailPassword,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase.util';
import FormInput from '../forms-input/form-input.component';

const SignUpForm = () => {
	const defaultFormFields = {
		displayName: '',
		email: '',
		password: '',
		confirmPass: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPass } = formFields;

	const resetForm = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('evenr', event);

		if (password !== confirmPass) {
			alert('Passwords does not match, Try Again');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailPassword(email, password);
			// const response = await createAuthUserWithEmailPassword(email, password);
			const userDoc = await createUserDocFromAuth(user, { displayName });
			console.log('userDoc', userDoc);
			resetForm();
		} catch (err) {
			console.log(err);

			if (err.code === 'auth/email-already-in-use') {
				alert('Email already in use, Try with different Email');
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign Up with your email password</h1>

			<form onSubmit={handleSubmit}>
				<FormInput
					label={'Display Name'}
					required
					type='text'
					name='displayName'
					onChange={handleChange}
					value={displayName}
				/>

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

				<FormInput
					label={'Confirm password'}
					required
					type='password'
					name='confirmPass'
					onChange={handleChange}
					value={confirmPass}
				/>

				<button type='submit'>Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
