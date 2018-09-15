import React from 'react';
import one from './music/one/0.mp3';
import two from './music/one/1.mp3';
import three from './music/one/2.mp3';
import four from './music/one/3.mp3';
import five from './music/one/4.mp3';
import six from './music/one/5.mp3';
import seven from './music/one/6.mp3';
import eight from './music/one/7.mp3';
import nine from './music/one/8.mp3';
import ten from './music/one/9.mp3';

const questions = [one, two, three, four, five, six, seven, eight, nine, ten];

const Round = ({roundNumber}) => (
	<div>
		<h2>Round {roundNumber}</h2>
		{ questions.map((i, index) =>
			<div className="question" key={index}>
				<audio controls="controls">
					<source src={i}/>
				</audio>
				<input type="text"></input>
				<span className="songMark"></span>
				<input type="text"></input>
				<span className="artistMark"></span>
			</div>
		)}
	</div>
)

export default Round;