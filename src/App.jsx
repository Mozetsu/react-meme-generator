import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import './app.css';

export default function App() {
	const [url, setUrl] = useState('');

	const setURL = (url) => setUrl(url);

	return (
		<section className="app">
			<Header />
			<Form setURL={setURL} />
			<Image url={url} />
		</section>
	);
}
