import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
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
	signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo) => {
	if (!userAuth) return;
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
				...additionalInfo,
			});
		} catch (err) {
			console.log(err);
		}
	}
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
export const createAuthUserWithEmailPassword = async (email, password) => {
	if (!email || !password) return;
	return await createUserWithEmailAndPassword(auth, email, password);
};
export default firebaseApp;
