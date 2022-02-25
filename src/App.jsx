import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import './app.css';
import memesData from './utils/data';

export default function App() {
	const [memeData, setMemeData] = useState({
		topText: '',
		bottomText: '',
		url: '',
	});

	useEffect(() => {
		setMemeUrl(getRandomMemeUrl());
	}, []);

	const getRandomMemeUrl = () => {
		const { memes } = memesData.data;
		const randomIndex = Math.floor(Math.random() * memes.length);
		const { url } = memes[randomIndex];
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

	const handleNewMeme = (e) => {
		e.preventDefault();
		setMemeUrl(getRandomMemeUrl());
	};

	const formProps = {
		updateMemeData,
		handleNewMeme,
	};

	return (
		<section className="app">
			<Header />
			<Form {...formProps} />
			<Image meme={memeData} />
		</section>
	);
}
