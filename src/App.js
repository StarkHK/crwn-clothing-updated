import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

const Shop = () => {
	return (
		<div>
			<h1>This is a shop component</h1>
		</div>
	);
};

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path='shop' element={<Shop />} />
					<Route path='signIn' element={<SignIn />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
