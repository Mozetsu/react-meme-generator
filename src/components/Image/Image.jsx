import React from 'react';
import './image.css';

const Image = (props) => (
	<section className="meme-container">
		<img src={props.meme.url} alt="" className="image" />
		<h2 className="meme-text top">{props.meme.topText}</h2>
		<h2 className="meme-text bottom">{props.meme.bottomText}</h2>
	</section>
);

export default Image;
