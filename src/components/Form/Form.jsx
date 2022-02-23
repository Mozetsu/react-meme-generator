import React, { useEffect } from 'react';
import './form.css';
import memesData from '../../utils/data';

const Form = (props) => {
	useEffect(() => props.setURL(getRandomUrl()), []);

	const getRandomUrl = () => {
		const { memes } = memesData.data;
		const randomIndex = Math.floor(Math.random() * memes.length);
		const { url } = memes[randomIndex];
		return url;
	};

	const handleNewMeme = (e) => {
		e.preventDefault();
		props.setURL(getRandomUrl());
	};

	return (
		<form className="form">
			<div className="form__input">
				<input className="input" type="text" placeholder="Text top" />
				<input className="input" type="text" placeholder="Text bottom" />
			</div>
			<input className="form__submit" type="submit" value="Generate meme" onClick={(e) => handleNewMeme(e)} />
		</form>
	);
};

export default Form;
