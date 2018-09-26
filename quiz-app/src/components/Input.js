import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			right: false,
		}
		this.update = this.update.bind(this);
		this.check = this.check.bind(this);
	}

	update(e) {
		this.setState ({ answer: e.target.value.toLowerCase().replace(/[.,!?/'`’&()]|the |and |& /gi,"") });
	}

	check() {
		const { which, answers, songNumber, roundNumber } = this.props;
		const { answer, right } = this.state;
		const rightAnswer = answers[roundNumber][songNumber][which];
		if (!right) {
			if (rightAnswer.length===2) {
				if (answer===rightAnswer[0].toLowerCase().replace(/[.,!?/'`’&()]|the|and|&/gi,"") || answer===rightAnswer[1].toLowerCase().replace(/[.,!?'`’&()]|the|and|&/gi,"")) {
					this.setState ({ right: true })
					this.props.increaseScore(1);
				}
			} else {
				if (answer===rightAnswer.toLowerCase().replace(/[.,!?/'`’&()]|the|and|&/gi,"")) {
					this.setState ({ right: true })
					this.props.increaseScore(1);
				}
			}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.roundNumber!==prevProps.roundNumber) {
			this.setState ({ answer: "", right: false });
		}
	}

	render() {
		const { which, marked } = this.props;
		const { answer, right } = this.state;
		return (
			<div>
				{ marked ? <span>{answer} { right ? "✔  " : "✗  " }</span>
				: <input type="text" onChange={this.update} onBlur={this.check} placeholder={which==="0" ? "Song" : which==="1" ? "Artist" : "" }/>
				}
			</div>
		)
	}
};

export default Input;
