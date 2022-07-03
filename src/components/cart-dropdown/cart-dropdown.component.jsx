import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items' />
			<Button>GO TO CHECKOUT</Button>
			{/*<div className='empty-message'></div>
    <div className='cart-items'></div> */}
		</div>
	);
};

export default CartDropdown;
