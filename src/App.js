import React, { useState } from 'react';
import UserInput from '../src/components/UserInput';
import UserOutput from '../src/components/UserOutput';
import './App.css';

const App = () => {
	const [state, setState] = useState({
		people: [{ username: 'Cletus' }, { username: 'Trent' }, { username: 'Robbo' }],
	});

	const onChangeHandler = (event) => {
		setState({
			...state,
			people: [
				{ username: 'Cletus' },
				{ username: event.target.value },
				{ username: 'Robbo' },
			],
		});
	};

	return (
		<div className='App'>
			<UserInput change={onChangeHandler} />
			<UserOutput sampleName={state.people[0].username} />
			<UserOutput sampleName={state.people[1].username} />
			<UserOutput sampleName={state.people[2].username} />
		</div>
	);
};

export default App;
