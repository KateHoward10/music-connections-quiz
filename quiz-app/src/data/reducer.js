
const increaseRoundNumber = (state, action) => state.update("roundNumber", roundNumber => roundNumber+1);

const increaseScore = (state, {points}) => state.update("score", score => score+points);

const decreaseBonusPoints = (state, action) => state.update("bonusPoints", bonusPoints => bonusPoints-1);

const reducer = (state, action) => {
	switch (action.type) {
		case "increaseRoundNumber": return increaseRoundNumber(state, action);
		case "increaseScore": return increaseScore(state, action);
		case "decreaseBonusPoints": return decreaseBonusPoints(state, action);
		default: return state;
	}
};

export default reducer;