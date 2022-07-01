import { useContext } from 'react';
import { UserContext } from '../contexts/user.context';
import HigherOrderComponent from '../HigherOrderComponent/HigherOrderComponent';

const ComponentA = ({ value, incrementalFunc }) => {
	const { curentUser } = useContext(UserContext);
	return (
		<div>
			<button onClick={incrementalFunc}> Inc by 5</button>
			<h1>{value}</h1>

			{curentUser}
		</div>
	);
};

export default HigherOrderComponent(ComponentA, 5);
