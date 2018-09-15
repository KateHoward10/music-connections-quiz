import React, { Component } from 'react';
import Input from './Input.js';
import one from '../music/one/0.mp3';
import two from '../music/one/1.mp3';
import three from '../music/one/2.mp3';
import four from '../music/one/3.mp3';
import five from '../music/one/4.mp3';
import six from '../music/one/5.mp3';
import seven from '../music/one/6.mp3';
import eight from '../music/one/7.mp3';
import nine from '../music/one/8.mp3';
import ten from '../music/one/9.mp3';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		const questionNumbers = [one, two, three, four, five, six, seven, eight, nine, ten];
		const { roundNumber, score, questions } = this.props;
		console.log(questions);
		return (
			<div>
				<h2>Round {roundNumber}</h2>
				<p>Total so far: {score} / 317</p>
				{ questionNumbers.map((questionNumber, index) =>
					<div className="question" key={index}>
						<audio controls="controls">
							<source src={questionNumber}/>
						</audio>
						<Input placeholder="Song" which="song" number={index} questions={questions}/>
						<Input placeholder="Artist" which="artist" number={index} questions={questions}/>
					</div>
				)}
			</div>
		)
	}
}

export default Round;