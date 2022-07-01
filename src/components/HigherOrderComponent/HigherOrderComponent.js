import React, { useState } from 'react';

const HigherOrderComponent = (Component, incrementalValue) => {
	const HOCFunc = () => {
		const [value, setValue] = useState(0);
		const incrementalFunc = () => {
			setValue(value + incrementalValue);
		};

		return <Component value={value} incrementalFunc={incrementalFunc} />;
	};

	return HOCFunc;
};

export default HigherOrderComponent;
