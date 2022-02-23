import React from 'react';
import './image.css';

const Image = (props) => {
	return <img src={props.url} alt="" className="image" />;
};

export default Image;
