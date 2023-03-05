import { useContext } from 'react';
import Button from '../button/button.component';
import { CartItemContext } from '../contexts/cart-items.context';
import './product-card.style.scss';

const ProductCard = ({ product }) => {
	const { addItemToCart } = useContext(CartItemContext);
	const { name, imageUrl, price } = product;

	const addProductToCart = () => {
		addItemToCart(product);
	};
	
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<Button buttonType={'inverted'} onClick={addProductToCart}>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;
