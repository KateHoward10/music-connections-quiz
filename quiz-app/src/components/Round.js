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
		const { roundNumber, answers, bonusPoints } = this.props;
		const { guess } = this.state;
		const connection = answers[roundNumber][10][0];
		if (roundNumber===3 || roundNumber===10 || roundNumber===11) {
			if (guess.indexOf(connection[0]) > -1 || guess.indexOf(connection[1]) > -1) {
				this.props.increaseScore(bonusPoints);
				this.setState ({ correct: true });
			}
		} else if (roundNumber===6 || roundNumber===7 || roundNumber===14) {
			if (guess.indexOf(connection[0]) > -1 && (guess.indexOf(connection[1]) > -1 || guess.indexOf(connection[2]) > -1)) {
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
		const { roundNumber, score, bonusPoints, answers, increaseScore, decreaseBonusPoints } = this.props;
		const { guess, connectionButton, correct, marked } = this.state;
		return (
			<div>
				{ roundNumber===16 ?
					<div className="end">
						<p>Congratulations, you have reached the end of the quiz!</p>
						<p style={{fontWeight: 'bold'}}>Final score: {score} / 480</p>
						<p>Sadly, there is no share funcationality (yet), but feel free to send me a screenshot.</p>
					</div>
				:
					<div>
						<p className="total">Total so far: {score} / 480</p>
						<h2>Round {roundNumber+1}</h2>
							{ marked ? <span>Connection: <em>{answers[roundNumber][10][1]}</em> ... {guess} {correct ? "✔" : "✗"} </span>
							: <div className="question">
								<span>Connection: </span>
								<input type="text" onChange={this.update}/>
								{ connectionButton ? <button onClick={this.check}>Submit for a possible {bonusPoints} points</button> : <span>Thanks for guessing!</span> }
							</div>
							}
						{ songNumbers.map((songNumber, index) =>
							<div className="question" key={index}>
								<Audio roundNumber={roundNumber} songNumber={songNumber} decreaseBonusPoints={decreaseBonusPoints}/>
								{ marked ? <div className="songAnswer">{answers[roundNumber][songNumber][0].length===2 ? answers[roundNumber][songNumber][0][0] : answers[roundNumber][songNumber][0] } — {answers[roundNumber][songNumber][1].length===2 ? answers[roundNumber][songNumber][1][0] : answers[roundNumber][songNumber][1] } ... </div> : null }
								<Input placeholder="Song" which="0" roundNumber={roundNumber} songNumber={songNumber} answers={answers} increaseScore={increaseScore} marked={marked}/>
								<Input placeholder="Artist" which="1" roundNumber={roundNumber} songNumber={songNumber} answers={answers} increaseScore={increaseScore} marked={marked}/>
							</div>
						)}
						{ marked ? <button className="continue" onClick={this.continue}>Continue ></button> : <button className="continue" onClick={this.mark}>Mark Answers</button> }
					</div>
					}
			</div>
		)
	}
}

export default Round;