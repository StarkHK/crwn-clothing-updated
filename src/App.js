import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import ComponentA from './components/componentA/ComponentA';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='auth' element={<Authentication />} />
					<Route path='componentA' element={<ComponentA />} />
					<Route path='checkout' element={<Checkout />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
