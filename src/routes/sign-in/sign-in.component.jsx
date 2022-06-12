import React from 'react';
import {
	signInWithGooglePopup,
	createUserDocFromAuth,
} from '../../utils/firebase/firebase.util';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocFromAuth(user);

		console.log('res', user);
	};
	return (
		<div>
			<h1>Sign in</h1>
			<button onClick={logGoogleUser}>Sign In With Google</button>
		</div>
	);
};

export default SignIn;
