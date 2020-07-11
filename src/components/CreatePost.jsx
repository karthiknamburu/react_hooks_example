import React, { useState, useRef } from 'react';

const CreatePost = ({ user, posts, setPosts }) => {
	const [content, setContent] = useState('');
	const [Image, setImage] = useState(null);
	const imageInputRef = useRef('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!content) {
			return;
		}
		const post = {
			content,
			Image,
			user,
		};
		setPosts([...posts, post]);
		setContent('');
		imageInputRef.current.value = '';
	};

	return (
		<>
			<p>CreatePost</p>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='post'
					onChange={(event) => setContent(event.target.value)}
					value={content}
				/>
				<input
					type='file'
					placeholder='choose file'
					onChange={(event) => setImage(event.target.files[0])}
					ref={imageInputRef}
				/>
				<button type='submit'>Create Post</button>
			</form>
		</>
	);
};

export default CreatePost;
