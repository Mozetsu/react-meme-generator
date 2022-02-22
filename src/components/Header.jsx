import React from 'react';
import './header.css';
import troll from './svg/troll.svg';

export default function Header() {
	return (
		<section className="header-container">
			<img src={troll} alt="" />
			<p>React course - Project 3</p>
		</section>
	);
}
