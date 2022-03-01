import React, { useState, useEffect } from 'react';
import * as htmlToImage from 'html-to-image';

// components
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import Download from './components/Download/Download';
import './app.css';

export default function App() {
	const [memesArray, setMemesArray] = useState([]);
	const [memeData, setMemeData] = useState({
		topText: '',
		bottomText: '',
		url: 'https://i.imgflip.com/1ihzfe.jpg',
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

	const downloadMeme = async () => {
		const node = document.querySelector('.meme-container');
		const renderedMeme = await htmlToImage.toCanvas(node);
		const randomString = Math.random()
			.toString(36)
			.replace(/[^0-9]+/g, '')
			.substring(0, 5);

		const link = document.createElement('a');
		link.download = `${randomString}.png`;
		link.href = renderedMeme.toDataURL();
		link.click();
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
			<Download downloadMeme={downloadMeme} />
		</section>
	);
}
