import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');

function App() {
	const GITHUB_URL = 'https://api.github.com/users/';
	const [userProfile, setUserProfile] = useState(null);
	const [search, setSearch] = useState('karthiknamburu');

	async function getUser() {
		const response = await fetch(`${GITHUB_URL}${search}`);
		const data = await response.json();
		setUserProfile(data);
	}

	useEffect(() => {
		getUser();
	}, [search]);

	return userProfile ? (
		<div>
			<h1>Github Profile</h1>
			<input type='text' onChange={(event) => setSearch(event.target.value)} />
			<button onClick={getUser}>Search</button>
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
