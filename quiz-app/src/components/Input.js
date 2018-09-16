import React, {Component} from 'react';

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
		// const answer = this.state.answer;
		this.setState ({
			answer: e.target.value.toLowerCase(),
		});
	}

	check(e) {
		e.preventDefault();
		const { which, number, questions } = this.props;
		const { answer } = this.state;
		const question = questions.get(0)[number][which].toLowerCase();
		if (answer===question) {
			this.setState ({
				correct: true,
				showButton: false,
			})
			this.props.increaseScore(1);
		}
	}

	render() {
		const { which, number, questions } = this.props;
		const { correct, showButton } = this.state;
		return (
			<form>
			    <input value={ correct ? questions.get(0)[number][which] : null } type="text" onChange={this.update} placeholder={which==="1" ? "Song" : which==="Artist" ? "2" : null}/>
				<span>{ correct ? "✔" : "" }</span>
			    { showButton ? <button onClick={this.check}>Check</button> : null }
			</form>
		)
	}

};

export default Input;
