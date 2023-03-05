import { useContext } from 'react';
import { CartItemContext } from '../../components/contexts/cart-items.context';

const Checkout = () => {
	const { cartItem } = useContext(CartItemContext);

	return (
		<div>
			{cartItem.map((item) => (
				<div>
					<h1>{item.name}</h1>
					<span>{item.quantity}</span>
				</div>
			))}
		</div>
	);
};

export default Checkout;
