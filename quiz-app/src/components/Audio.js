import React, {Component} from 'react';

class Audio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			plays: 0,
		}
		this.play = this.play.bind(this);
	}


	play() {
		const plays = this.state.plays;
		if (plays < 1) {
			this.props.decreaseBonusPoints();
		};
		this.setState ({
			plays: plays+1,
		});
	}

	render() {
		const { roundNumber, songNumber } = this.props;
		const song = require(`../music/${roundNumber}/${songNumber}.mp3`);
		return (
			<audio onPlay={this.play} controls="controls" src={song}></audio>
		)
	}

};

export default Audio;
						