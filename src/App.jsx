import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Image from './components/Image/Image';
import './app.css';
import '../index.css';

export default function App() {
	return (
		<section className="app">
			<Header />
			<Form />
			<Image />
		</section>
	);
}
