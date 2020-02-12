import { connect } from 'react-redux';
import Round from './components/Round';
import { increaseRoundNumber, increaseScore, decreaseBonusPoints, resetBonusPoints, resetGame } from './data/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    roundNumber: state.roundNumber,
    score: state.score,
    bonusPoints: state.bonusPoints,
    scrolled: ownProps.scrolled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseRoundNumber: () => dispatch(increaseRoundNumber()),
    increaseScore: points => dispatch(increaseScore(points)),
    decreaseBonusPoints: () => dispatch(decreaseBonusPoints()),
    resetBonusPoints: () => dispatch(resetBonusPoints()),
    resetGame: () => dispatch(resetGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
