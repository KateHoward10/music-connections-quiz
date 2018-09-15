import React, {Component} from 'react';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: "",
		}
		this.update = this.update.bind(this);
	}

	update(e) {
		this.setState ({ answer: e.target.value })
	}

	render() {
		const questions = [
			[	
				"one",
				"Heart of Glass",
				"Blondie"
			],
			[
				"two",
				"Killer Queen",
				"Queen"
			],
			[
				"three",
				"Sweet Caroline",
				"Neil Diamond"
			],
			[
				"four",
				"All That She Wants",
				"Ace of Base"
			],
			[
				"five",
				"God Save The Queen",
				"Sex Pistols"
			],
			[
				"six",
				"Better Together",
				"Jack Johnson"
			],
			[
				"seven",
				"Karma Chameleon",
				"Culture Club"
			],
			[
				"eight",
				"King of the Mountain",
				"Kate Bush"
			],
			[
				"nine",
				"Happy Jack",
				"The Who"
			],
			[
				"ten",
				"Ace of Spades",
				"Motorhead"
			]
		];
		const { which, number } = this.props;
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
