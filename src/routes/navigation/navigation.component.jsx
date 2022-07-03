import { React, Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.component';
import { CartItemContext } from '../../components/contexts/cart-items.context';
import { UserContext } from '../../components/contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.util';
import './navigation.style.scss';

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartItemContext);
	const handleSignOutUser = async () => {
		const res = await signOutUser();
		// setCurrentUser(null);
	};

	// const toggleCartOpen = () => {
	// 	setIsCartOpen(!isCartOpen);
	// };

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
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
