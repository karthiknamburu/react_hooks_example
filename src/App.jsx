import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App() {
	const [user, setUser] = useState('test');
	const [Posts, setPosts] = useState([]);

	useEffect(() => {
		document.title = user ? `${user}'s Feed` : 'Please Login';
	}, [user]);

	return (
		<>
			<Header user={user} setUser={setUser} />
			{user ? (
				<div>
					<CreatePost posts={Posts} setPosts={setPosts} user={user} />
				</div>
			) : (
				<Login setUser={setUser} />
			)}
			<PostList posts={Posts} />
		</>
	);
}

export default App;
