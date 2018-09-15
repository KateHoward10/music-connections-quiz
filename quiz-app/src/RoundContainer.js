import { connect } from 'react-redux';
import Round from './components/Round';
import { increaseRoundNumber, increaseScore  } from './data/actions';

const mapStateToProps = state => {
	return {
		roundNumber: state.roundNumber,
		score: state.score,
		questions: state.questions,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseRoundNumber: () => dispatch(increaseRoundNumber()),
		increaseScore: () => dispatch(increaseScore()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);