import { useContext } from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartItemContext } from '../contexts/cart-items.context';
import './cart-icon.styles.scss';

export const CartIcon = ({}) => {
	const { isCartOpen, setIsCartOpen, cartCount, cartItem } =
		useContext(CartItemContext);

	const toggleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div onClick={toggleCartOpen} className='cart-icon-container'>
			<ShopIcon className='shopping-icon' />
			<span className='item-count'>{cartCount}</span>
		</div>
	);
};
