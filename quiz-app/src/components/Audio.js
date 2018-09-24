import React, {Component} from 'react';

class Audio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			played: false,
		}
		this.play = this.play.bind(this);
		this.reload = this.reload.bind(this);
	}

	play() {
		if (!this.state.played) {
			this.props.decreaseBonusPoints();
			this.setState ({ played: true });
		};
	}

	reload() {
		this.setState ({ played: false });
	}

	render() {
		const { roundNumber, songNumber } = this.props;
		const song = require(`../music/${roundNumber}/${songNumber}.mp3`);
		console.log(this.state.played);
		return (
			<div>
				<audio onPlay={this.play} onLoadedData={this.reload} controls="controls" src={song}></audio>
			</div>
		)
	}

};

export default Audio;
						