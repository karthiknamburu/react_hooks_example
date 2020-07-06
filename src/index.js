import React from 'react';
import ReactDOM from 'react-dom';

const HEAD = <div>Social Media App</div>;
const rootNode = document.getElementById('root');

function App() {
	const [developer, setDeveloper] = React.useState({
		years: 0,
		isEmployed: false,
		language: 'ruby',
		name: 'Developer',
	});

	const handleTitleChange = (event) => {
		setDeveloper({
			...developer,
			name: event.target.value,
		});
	};

	React.useEffect(() => {
		document.title = developer.name;
		console.log('RUNS');
	}, [developer.name]);

	return (
		<div>
			<h1>Employment Status</h1>
			<ul>
				<li>
					<input type='text' placeholder='Title' onChange={handleTitleChange} />
				</li>
				<li>No of Years of experience is {developer.years}</li>
				<li>
					<input
						type='number'
						onChange={(event) =>
							setDeveloper({
								...developer,
								years: event.target.value,
							})
						}
					/>
				</li>
				<li>
					<button
						onClick={() =>
							setDeveloper({
								...developer,
								isEmployed: !developer.isEmployed,
							})
						}>
						Toggle Employment
					</button>
				</li>
				<li>{developer.isEmployed ? 'Employed' : 'UnEmployed'}</li>
				{/* <li>
					<button onClick={handleTitleChange}>Change Title</button>
				</li> */}
			</ul>
		</div>
	);
}

ReactDOM.render(<App />, rootNode);
