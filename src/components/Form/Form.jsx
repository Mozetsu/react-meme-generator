import React from 'react';
import './form.css';

export default function Header() {
	return (
		<form className="form">
			<div className="form__input">
				<input className="input" type="text" placeholder="Text top" />
				<input className="input" type="text" placeholder="Text bottom" />
			</div>
			<input className="form__submit" type="submit" value="Generate meme" />
		</form>
	);
}
