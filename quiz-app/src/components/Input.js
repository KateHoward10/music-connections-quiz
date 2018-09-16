import React, {Component} from 'react';
import { Map, List } from "immutable";

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			correct: false,
			showButton: true,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
	}

	update(e) {
		const answer = this.state.answer;
		this.setState ({
			answer: e.target.value.toLowerCase(),
		});
	}

	check(e) {
		e.preventDefault();
		const { which, questions, songNumber, roundNumber } = this.props;
		const { answer, correct, showButton } = this.state;
		const round = questions.get(roundNumber);
		const song = round.get(songNumber);
		const rightAnswer = song.get(which).toLowerCase();
		if (answer===rightAnswer) {
			this.setState ({
				correct: true,
				showButton: false,
			})
			this.props.increaseScore(1);
		}
	}

	render() {
		const { which, number, questions, songNumber, roundNumber } = this.props;
		const { correct, showButton } = this.state;
		return (
			<form>
			    <input type="text" onChange={this.update} placeholder={which==="0" ? "Song" : which==="1" ? "Artist" : "" }/>
				<span>{ correct ? "✔" : "" }</span>
			    { showButton ? <button onClick={this.check}>Check</button> : null }
			</form>
		)
	}

};

export default Input;
