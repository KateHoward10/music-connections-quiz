import React, {Component} from 'react';

class Audio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			played: this.props.marked,
		}
		this.play = this.play.bind(this);
	}

	play() {
		const played = this.state.played;
		if (!played) {
			this.props.decreaseBonusPoints();
			this.setState ({ played: true });
		};
	}

	render() {
		const { roundNumber, songNumber } = this.props;
		const song = require(`../music/${roundNumber}/${songNumber}.mp3`);
		return (
			<div>
				<p>{this.state.played}</p>
				<audio onPlay={this.play} controls="controls" src={song}></audio>
			</div>
		)
	}

};

export default Audio;
						