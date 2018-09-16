import { connect } from 'react-redux';
import Round from './components/Round';
import { increaseRoundNumber, increaseScore, decreaseBonusPoints } from './data/actions';

const mapStateToProps = state => {
	return {
		roundNumber: state.get("roundNumber"),
		score: state.get("score"),
		bonusPoints: state.get("bonusPoints"),
		questions: state.get("questions"),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseRoundNumber: () => dispatch(increaseRoundNumber()),
		increaseScore: (points) => dispatch(increaseScore(points)),
		decreaseBonusPoints: () => dispatch(decreaseBonusPoints()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);