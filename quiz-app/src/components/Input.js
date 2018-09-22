import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			correct: !(this.props.marked),
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
	}

	update(e) {
		this.setState ({
			answer: e.target.value.toLowerCase().replace(/[.,!?'`’&()]/g,""),
		});
	}

	check(e) {
		const { which, questions, songNumber, roundNumber } = this.props;
		const { answer, guessed } = this.state;
		const rightAnswer = ((questions.get(roundNumber)).get(songNumber)).get(which).toLowerCase().replace(/[.,!?'`’&()]/g,"");
		if (!guessed && answer===rightAnswer) {
			this.setState ({
				correct: true,
			})
			this.props.increaseScore(1);
		}
	}

	render() {
		const { which, number, questions, songNumber, roundNumber, marked } = this.props;
		const { correct, showButton } = this.state;
		const song = (questions.get(roundNumber)).get(songNumber);
		return (
			<form>
			    <input type="text" onInput={this.update} onBlur={this.check} placeholder={which==="0" ? "Song" : which==="1" ? "Artist" : "" }/>
			</form>
		)
	}

};

export default Input;
