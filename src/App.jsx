import React, { useState } from 'react';
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

	const getRandomUrl = () => {
		const { memes } = memesData.data;
		const randomIndex = Math.floor(Math.random() * memes.length);
		const { url } = memes[randomIndex];
		return url;
	};

	const setImageUrl = (url) => {
		setMemeData((prevMemeData) => ({
			...prevMemeData,
			url,
		}));
	};

	const handleData = (event) => {
		const { value, name } = event.target;

		setMemeData((prevMemeData) => ({
			...prevMemeData,
			[name]: value,
		}));
	};

	const handleNewMeme = (e) => {
		e.preventDefault();
		setImageUrl(getRandomUrl());
	};

	const formProps = {
		setImageUrl,
		handleData,
		getRandomUrl,
		handleNewMeme,
	};

	return (
		<section className="app">
			<Header />
			<Form {...formProps} />
			<Image url={memeData.url} />
		</section>
	);
}
