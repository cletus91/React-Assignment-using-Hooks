import React from 'react';

const UserOutput = ({ sampleName, sampleAge }) => {
	return (
		<div className='user-output'>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facilis?</p>
			<p style={{ fontSize: '1.5rem', fontWeight: '300' }}>{sampleName}</p>
		</div>
	);
};

export default UserOutput;
