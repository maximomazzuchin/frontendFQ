import React from 'react';
import './App.css';
import coverVideo from './media/coverVideo.mp4';

function App() {
	return (
		<div className="App">
			<h1 className="covertitle">Córdoba FQ</h1>
			<video src={coverVideo} autoPlay loop muted className="vid"/>
		</div>
	);
}
export default App;