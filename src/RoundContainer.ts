import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State, ActionType } from './data/types';
import { increaseRoundNumber, increaseScore, decreaseBonusPoints, resetBonusPoints, resetGame } from './data/actions';
import Round from './components/Round';

interface OwnProps {
  scrolled: boolean
}

interface DispatchProps {
  increaseRoundNumber: () => void,
  increaseScore: (points: number) => void,
  decreaseBonusPoints: () => void,
  resetBonusPoints: () => void,
  resetGame: () => void
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    roundNumber: state.roundNumber,
    score: state.score,
    bonusPoints: state.bonusPoints,
    scrolled: ownProps.scrolled
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): DispatchProps => {
  return {
    increaseRoundNumber: () => dispatch(increaseRoundNumber()),
    increaseScore: (points: number) => dispatch(increaseScore(points)),
    decreaseBonusPoints: () => dispatch(decreaseBonusPoints()),
    resetBonusPoints: () => dispatch(resetBonusPoints()),
    resetGame: () => dispatch(resetGame())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
