import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
	signInWithGooglePopup,
	createUserDocFromAuth,
	signInWithGoogleRedirect,
	auth,
} from '../../utils/firebase/firebase.util';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
	useEffect(() => {
		async function fetchData() {
			const response = await getRedirectResult(auth);

			if (response) {
				const userDocRef = await createUserDocFromAuth(response.user);
			}
		}
		fetchData();
	});

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);

		console.log('res', user);
	};
	return (
		<div>
			<h1>Sign in</h1>
			<button onClick={logGoogleUser}>Sign In With Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
