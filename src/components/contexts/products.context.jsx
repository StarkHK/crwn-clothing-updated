import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from '../../shop-data.json';

export const ProductsContext = createContext({
	shopData: [],
	setShopData: () => null,
});

export const ProductsContextProvider = ({ children }) => {
	const [shopData, setShopData] = useState(SHOP_DATA);
	const value = { shopData, setShopData };

	// useEffect(() => {
	// 	console.log('sjop', shopData);
	// }, []);
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
