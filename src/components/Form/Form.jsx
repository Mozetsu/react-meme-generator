import React, { useEffect } from 'react';
import './form.css';

const Form = (props) => {
	useEffect(() => {
		const randomUrl = props.getRandomUrl();
		props.setMemeUrl(randomUrl);
	}, []);

	return (
		<form className="form">
			<div className="form__input">
				<input className="input" type="text" placeholder="Text top" name="topText" onChange={props.handleData} />
				<input className="input" type="text" placeholder="Text bottom" name="bottomText" onChange={props.handleData} />
			</div>
			<input className="form__submit" type="submit" value="Generate meme" onClick={(e) => handleNewMeme(e)} />
		</form>
	);
};

export default Form;
