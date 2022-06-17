import React, { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
	createUserDocFromAuth,
	auth,
} from '../../utils/firebase/firebase.util';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in.component';

import './authentication.style.scss';

const Authentication = () => {
	useEffect(() => {
		async function fetchData() {
			const response = await getRedirectResult(auth);

			if (response) {
				await createUserDocFromAuth(response.user);
			}
		}
		fetchData();
	});

	return (
		<div className='authentication-container'>
			<SignIn />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
