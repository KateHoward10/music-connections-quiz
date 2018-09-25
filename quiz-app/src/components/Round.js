import React, { Component } from 'react';
import Input from './Input.js';
import Audio from './Audio.js';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guess: "",
			connectionButton: true,
			correct: false,
			marked: false,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
		this.mark = this.mark.bind(this);
		this.continue = this.continue.bind(this);
	}

	update(e) {
		if (this.state.connectionButton) {
			this.setState ({ guess: e.target.value.toLowerCase() });
		}
	}

	check() {
		const { roundNumber, questions, bonusPoints } = this.props;
		const { guess } = this.state;
		const connection = ((questions.get(roundNumber)).get(10)).get(0);
		if (connection.length === 2) {
			if (guess.indexOf(connection[0]) > -1 || guess.indexOf(connection[1]) > -1) {
				this.props.increaseScore(bonusPoints);
				this.setState ({ correct: true });
			}
		} else if (guess.indexOf(connection) > -1) {
			this.props.increaseScore(bonusPoints);
			this.setState ({ correct: true });
		}
		this.setState ({ connectionButton: false });
	}

	mark() {
		this.setState ({ marked: true });
	}

	continue() {
		this.setState ({ guess: "", connectionButton: true, correct: false, marked: false });
		this.props.increaseRoundNumber();
		this.props.resetBonusPoints();
	}

	render() {
		const songNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		const { roundNumber, score, bonusPoints, questions, increaseScore, decreaseBonusPoints } = this.props;
		const { guess, connectionButton, correct, marked } = this.state;
		return (
			<div>
				<div>
					<p className="total">Total so far: {score} / 480</p>
					<h2>Round {roundNumber+1}</h2>
						{ marked ? <span>Connection: {((questions.get(roundNumber)).get(10)).get(1)} ... {guess} {correct ? "✔" : "✗"} </span>
						: <div className="question">
							<span>Connection: </span>
							<input type="text" onChange={this.update}/>
							{ connectionButton ? <button onClick={this.check}>Submit for a possible {bonusPoints} points</button> : <span>Thanks for guessing!</span> }
						</div>
						}
					{ songNumbers.map((songNumber, index) =>
						<div className="question" key={index}>
							<Audio roundNumber={roundNumber} songNumber={songNumber} decreaseBonusPoints={decreaseBonusPoints}/>
							{ marked ? <div className="songAnswer">{((questions.get(roundNumber)).get(songNumber)).get(0)} — {((questions.get(roundNumber)).get(songNumber)).get(1)} ... </div> : null }
							<Input placeholder="Song" which="0" roundNumber={roundNumber} songNumber={songNumber} questions={questions} increaseScore={increaseScore} marked={marked}/>
							<Input placeholder="Artist" which="1" roundNumber={roundNumber} songNumber={songNumber} questions={questions} increaseScore={increaseScore} marked={marked}/>
						</div>
					)}
					{ marked ? <button className="continue" onClick={this.continue}>Continue ></button> : <button className="continue" onClick={this.mark}>Mark Answers</button> }
				</div>
			</div>
		)
	}
}

export default Round;