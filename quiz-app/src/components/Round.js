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
			guess: "",
			connectionPoints: 10,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
		this.play = this.play.bind(this);
	}

	update(e) {
		const guess = this.state.guess;
		this.setState ({
			guess: e.target.value.toLowerCase(),
		});
		console.log(guess);
	}

	check(e) {
		e.preventDefault();
		const { questions } = this.props;
		const { guess, connectionPoints } = this.state;
		const connection = questions.get(0)[10];
		console.log(connection);
		if (guess==connection) {
			this.props.increaseScore(connectionPoints);
		}
	}

	play() {
		const connectionPoints = this.state.connectionPoints;
		this.setState ({
			connectionPoints: connectionPoints-1,
		})
	}

	render() {
		const questionNumbers = [one, two, three, four, five, six, seven, eight, nine, ten];
		const { roundNumber, score, questions, increaseRoundNumber, increaseScore } = this.props;
		const {connectionPoints} = this.state;
		return (
			<div>
				<p className="total">Total so far: {score} / 510</p>
				<h2>Round {roundNumber}</h2>
				<div className="question">
					<span>Connection: </span>
					<input type="text" onChange={this.update}/>
					<button onClick={this.check}>Submit for a possible {connectionPoints} points</button>
				</div>
				{ questionNumbers.map((questionNumber, index) =>
					<div className="question" key={index}>
						<audio onPlay={this.play} controls="controls">
							<source src={questionNumber}/>
						</audio>
						<Input placeholder="Song" which="1" number={index} questions={questions} increaseScore={increaseScore} increaseRoundNumber={increaseRoundNumber}/>
						<Input placeholder="Artist" which="2" number={index} questions={questions} increaseScore={increaseScore} increaseRoundNumber={increaseRoundNumber}/>
					</div>
				)}
			</div>
		)
	}
}

export default Round;