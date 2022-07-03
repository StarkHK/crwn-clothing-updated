import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../components/contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import './navigation.style.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	console.log('current User', currentUser);

	const handleSignOutUser = async () => {
		const res = await signOutUser();
		// setCurrentUser(null);
	};
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<CrwnLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>

					{currentUser ? (
						<span className='nav-link' onClick={handleSignOutUser}>
							Sign Out
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							Signin
						</Link>
					)}
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
