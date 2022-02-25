import React from 'react';
import './form.css';

const Form = (props) => (
	<form className="form">
		<div className="form__input">
			<input className="input" type="text" placeholder="Text top" name="topText" onChange={props.handleMemeData} />
			<input
				className="input"
				type="text"
				placeholder="Text bottom"
				name="bottomText"
				onChange={props.handleMemeData}
			/>
		</div>
		<input className="form__submit" type="submit" value="Generate meme" onClick={(e) => handleNewMeme(e)} />
	</form>
);

export default Form;
