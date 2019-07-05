import { connect } from "react-redux";
import Round from "./components/Round";
import {
  increaseRoundNumber,
  increaseScore,
  decreaseBonusPoints,
  resetBonusPoints
} from "./data/actions";

const mapStateToProps = state => {
  return {
    roundNumber: state.roundNumber,
    score: state.score,
    bonusPoints: state.bonusPoints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseRoundNumber: () => dispatch(increaseRoundNumber()),
    increaseScore: points => dispatch(increaseScore(points)),
    decreaseBonusPoints: () => dispatch(decreaseBonusPoints()),
    resetBonusPoints: () => dispatch(resetBonusPoints())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
