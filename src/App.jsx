import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import './app.css';

export default function App() {
	const [memesArray, setMemesArray] = useState([]);
	const [memeData, setMemeData] = useState({
		topText: '',
		bottomText: '',
		url: 'https://i.imgflip.com/26am.jpg',
	});

	// fetch memes on app first render
	useEffect(() => {
		(async () => {
			const response = await fetch('https://api.imgflip.com/get_memes');
			const { data } = await response.json();
			setMemesArray([...data.memes]);
		})();
	}, []);

	const getRandomMemeUrl = () => {
		const randomIndex = Math.floor(Math.random() * memesArray.length);
		const { url } = memesArray[randomIndex];
		return url;
	};

	const setMemeUrl = (url) => {
		setMemeData((prevMemeData) => ({
			...prevMemeData,
			url,
		}));
	};

	const updateMemeData = (event) => {
		const { value, name } = event.target;

		setMemeData((prevMemeData) => ({
			...prevMemeData,
			[name]: value,
		}));
	};

	const handleNewImage = () => {
		setMemeUrl(getRandomMemeUrl());
	};

	const formProps = {
		memeData,
		updateMemeData,
		handleNewImage,
	};

	return (
		<section className="app">
			<Header />
			<Form {...formProps} />
			<Image meme={memeData} />
		</section>
	);
}
