import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBNRfJC5NgxybkkQvZ3K8yvB7zoQx4e_lM',
	authDomain: 'crwn-clothing-db-bd632.firebaseapp.com',
	projectId: 'crwn-clothing-db-bd632',
	storageBucket: 'crwn-clothing-db-bd632.appspot.com',
	messagingSenderId: '573994197291',
	appId: '1:573994197291:web:5745da603ccec74e6ca56e',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	promt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
	signInWithGoogleRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	console.debug('userDocRef', userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log('userSnapshot', userSnapshot);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (err) {
			console.log(err);
		}
	}
};
export default firebaseApp;
