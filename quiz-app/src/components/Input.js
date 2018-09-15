import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
			correct: false,
		}
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState ({ answer: e.target.value });
	}

	render() {
		const { which, number, questions } = this.props;
		const answer = this.state.answer.toLowerCase();
		const correct = (which==="song" && answer===questions[number][1].toLowerCase()) || (which==="artist" && answer===questions[number][2].toLowerCase());
		return (
			<form>
			    <input type="text" onChange={this.update}/>
				<span>{ correct ? "✔" : "" }</span>
			</form>
		)
	}

};

export default Input;
