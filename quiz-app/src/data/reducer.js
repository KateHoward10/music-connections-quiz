const increaseRoundNumber = (state, action) => state.update("roundNumber", roundNumber => roundNumber+1);

const increaseScore = (state, action) => state.update("score", score => score+30);

const reducer = (state, action) => {
	switch (action.type) {
		case "increaseRoundNumber": return increaseRoundNumber(state, action);
		case "increaseScore": return increaseScore(state, action);
		default: return state;
	}
};

export default reducer;