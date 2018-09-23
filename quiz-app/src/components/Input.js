import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			correct: this.props.marked,
			guessed: false,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
	}

	update(e) {
		if (!this.state.guessed) {
			this.setState ({ answer: e.target.value.toLowerCase().replace(/[.,!?'`’&()]/g,"") });
		}
	}

	check(e) {
		e.preventDefault();
		const { which, questions, songNumber, roundNumber } = this.props;
		const { answer, correct } = this.state;
		const rightAnswer = ((questions.get(roundNumber)).get(songNumber)).get(which).toLowerCase().replace(/[.,!?'`’&()]/g,"");
		if (!correct && answer===rightAnswer) {
			this.setState ({ correct: true })
			this.props.increaseScore(1);
		}
	}

	render() {
		const { which, marked } = this.props;
		const { answer, correct } = this.state;
		return (
			<div>
				{ marked ? <span>{answer} { correct ? "✔  " : "✗  " }</span>
				: <input type="text" onChange={this.update} onBlur={this.check} placeholder={which==="0" ? "Song" : which==="1" ? "Artist" : "" }/>
				}
			</div>
		)
	}
};

export default Input;
