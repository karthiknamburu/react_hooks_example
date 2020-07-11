import React from 'react';

function Header({ user, setUser }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				background: 'red',
			}}>
			<h1>Social Media App</h1>
			{user ? (
				<>
					<p>Welcome {user}</p>
					<button onClick={() => setUser('')}>Logout</button>
				</>
			) : (
				''
			)}
		</div>
	);
}

export default Header;
