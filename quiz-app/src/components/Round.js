import React, { Component } from 'react';
import Input from './Input.js';
import Audio from './Audio.js';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guess: "",
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
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
		const { roundNumber, questions, bonusPoints } = this.props;
		const { guess } = this.state;
		const round = questions.get(roundNumber);
		const connection= round.get(10);
		console.log(connection);
		if (guess==connection) {
			this.props.increaseScore(bonusPoints);
		}
	}

	render() {
		const songNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const { roundNumber, score, bonusPoints, questions, increaseRoundNumber, increaseScore, decreaseBonusPoints } = this.props;
		return (
			<div>
				<p className="total">Total so far: {score} / 510</p>
				<h2>Round {roundNumber+1}</h2>
				<div className="question">
					<span>Connection: </span>
					<input type="text" onChange={this.update}/>
					<button onClick={this.check}>Submit for a possible {bonusPoints} points</button>
				</div>
				{ songNumbers.map((songNumber, index) =>
					<div className="question" key={index}>
						<Audio roundNumber={roundNumber} songNumber={songNumber} decreaseBonusPoints={decreaseBonusPoints}/>
						<Input placeholder="Song" which="0" roundNumber={roundNumber} songNumber={songNumber} questions={questions} increaseScore={increaseScore}/>
						<Input placeholder="Artist" which="1" roundNumber={roundNumber} songNumber={songNumber} questions={questions} increaseScore={increaseScore}/>
					</div>
				)}
				<button className="continue" onClick={increaseRoundNumber}>Continue ></button>
			</div>
		)
	}
}

export default Round;