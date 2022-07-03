import { useContext, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../components/contexts/products.context';

import './shop.style.scss';
const Shop = () => {
	const { shopData } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{shopData.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
