import { useContext } from 'react';
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { CartItemContext } from '../contexts/cart-items.context';
import './cart-icon.styles.scss';

export const CartIcon = ({}) => {
	const { isCartOpen, setIsCartOpen } = useContext(CartItemContext);

	const toggleCartOpen = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<div
			onClick={toggleCartOpen}
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			className='cart-icon-container'
		>
			<ShopIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};
