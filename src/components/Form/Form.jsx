import React from 'react';
import './form.css';

const Form = (props) => (
	<form className="form">
		<div className="form__input">
			<input
				className="input"
				type="text"
				placeholder="Text top"
				name="topText"
				onChange={props.updateMemeData}
				value={props.memeData.topText}
			/>
			<input
				className="input"
				type="text"
				placeholder="Text bottom"
				name="bottomText"
				onChange={props.updateMemeData}
				value={props.memeData.bottomText}
			/>
		</div>
		<input className="form__submit" type="button" value="New Image" onClick={props.handleNewImage} />
	</form>
);

export default Form;
