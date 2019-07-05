export const increaseRoundNumber = () => {
  return {
    type: "increaseRoundNumber"
  };
};

export const increaseScore = points => {
  return {
    type: "increaseScore",
    points: points
  };
};

export const decreaseBonusPoints = () => {
  return {
    type: "decreaseBonusPoints"
  };
};

export const resetBonusPoints = () => {
  return {
    type: "resetBonusPoints"
  };
};

export const resetGame = () => {
  return {
    type: "resetGame"
  };
};
