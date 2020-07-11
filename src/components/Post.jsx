import React from 'react';

function Post({ content, Image, user }) {
	return (
		<>
			{Image && (
				<img
					style={{ height: 300, width: 250, objectFit: 'cover' }}
					src={URL.createObjectURL(Image)}
					alt='avatar'
				/>
			)}
			<p>{content}</p>
			<div>{user}</div>
		</>
	);
}

export default Post;
