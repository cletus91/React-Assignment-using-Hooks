import React from 'react';
import '../App.css';
const UserInput = ({ change }) => {
	return (
		<div className='user-input'>
			<input
				type='text'
				onChange={change}
				placeholder='Type something...'
				maxLength='25'
				style={{ width: '50%' }}
			/>
		</div>
	);
};

export default UserInput;
