import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');

function App() {
	const GITHUB_URL = 'https://api.github.com/users/karthiknamburu';
	const [userProfile, setUserProfile] = useState(null);
	
	async function getUser() {
		const response = await fetch(GITHUB_URL);
		const data = await response.json();
		setUserProfile(data);
	}

	useEffect(() => {
		getUser();
	}, []);

	return userProfile ? (
		<div>
			<h1>Github Profile</h1>
			<input type='text' />
			{/* <button onClick={}>Search</button> */}
			<button>Clear</button>
			<ul>
				<li>{userProfile.login}</li>
			</ul>
			<img src={userProfile.avatar_url} alt='avatar' style={{ height: 150 }} />
		</div>
	) : (
		<div>Loading ...</div>
	);
}

ReactDOM.render(<App />, rootNode);
