import React, { useState } from 'react';

function Login({ setUser }) {
	const [userName, setUserName] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(userName);
	};
	return (
		<div>
			<p>Login</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='UserName'
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}

export default Login;
