import React from 'react';
import './App.css';
import coverVideo from './media/coverVideo.mp4';
import HomeHeader from './components/headers/homeheader';

function App() {
	const user = localStorage.getItem('user_id')
	if (user === null){
		window.location.replace('/login')
	}
	return (
		<div className="App">
			<HomeHeader />
			<h1 className="covertitle">Córdoba FQ</h1>
			<video src={coverVideo} autoPlay loop muted className="vid"/>
		</div>
	);
}

export default App;