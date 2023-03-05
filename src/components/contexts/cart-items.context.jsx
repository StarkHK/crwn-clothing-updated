import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItem, productToAdd) => {
	const existingCardItem = cartItem.find(
		(product) => product.id === productToAdd.id
	);

	if (existingCardItem) {
		return cartItem.map((product) =>
			product.id === productToAdd.id
				? { ...product, quantity: product.quantity + 1 }
				: product
		);
	}

	return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartItemContext = createContext({
	isCartOpen: false,
	setCartItem: () => null,
	cartItem: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartItemProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItem, setCartItem] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const addItemToCart = (productToAdd) => {
		setCartItem(addCartItem(cartItem, productToAdd));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItem,
		addItemToCart,
		cartCount,
	};

	useEffect(() => {
		const newCartCount = cartItem.reduce((acc, val) => {
			return acc + val.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItem]);
	return (
		<CartItemContext.Provider value={value}>
			{children}
		</CartItemContext.Provider>
	);
};
