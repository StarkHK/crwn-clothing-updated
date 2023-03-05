import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItemContext } from '../contexts/cart-items.context';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItem } = useContext(CartItemContext);
	console.log('cardItem', cartItem);

	const navigate = useNavigate();

	const goToRoute = () => {
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			{cartItem && (
				<div className='cart-items'>
					{cartItem.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>
			)}
			{cartItem.length > 0 && (
				<Button onClick={goToRoute}>GO TO CHECKOUT</Button>
			)}
			{/*<div className='empty-message'></div>
    <div className='cart-items'></div> */}
		</div>
	);
};

export default CartDropdown;
