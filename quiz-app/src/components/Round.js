import React, { Component } from 'react';
import Input from './Input.js';
import Audio from './Audio.js';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guess: "",
			connectionButton: true,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
	}

	update(e) {
		const guess = this.state.guess;
		this.setState ({
			guess: e.target.value.toLowerCase(),
		});
	}

	check(e) {
		e.preventDefault();
		const { roundNumber, questions, bonusPoints } = this.props;
		const { guess, connectionButton } = this.state;
		const round = questions.get(roundNumber);
		const connection = round.get(10);
		if (guess.indexOf(connection) > -1) {
			this.props.increaseScore(bonusPoints);
			this.setState ({
				connectionButton: false,
			});
		}
	}

	render() {
		const songNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const { roundNumber, score, bonusPoints, questions, increaseRoundNumber, increaseScore, decreaseBonusPoints } = this.props;
		const connectionButton = this.state.connectionButton;
		return (
			<div>
				<div>
					<p className="total">Total so far: {score} / 480</p>
					<h2>Round {roundNumber+1}</h2>
					<div className="question">
						<span>Connection: </span>
						<input type="text" onChange={this.update}/>
						{ connectionButton ? <button onClick={this.check}>Submit for a possible {bonusPoints} points</button> : <span>Thanks for guessing!</span> }
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
			</div>
		)
	}
}

export default Round;