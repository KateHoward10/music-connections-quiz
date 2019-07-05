const initialState = {
  roundNumber: 0,
  score: 0,
  bonusPoints: 11
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increaseRoundNumber":
      return {
        ...state,
        roundNumber: state.roundNumber + 1
      };

    case "increaseScore":
      return {
        ...state,
        score: state.score + action.points
      };

    case "decreaseBonusPoints":
      return {
        ...state,
        bonusPoints: state.bonusPoints - 1
      };

    case "resetBonusPoints":
      return {
        ...state,
        bonusPoints: 11
      };

    case "resetGame":
    default:
      return initialState;
  }
};

export default reducer;
