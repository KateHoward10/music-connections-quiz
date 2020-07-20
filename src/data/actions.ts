import { ActionType } from './types';

export const increaseRoundNumber = (): ActionType => {
  return {
    type: "increaseRoundNumber"
  };
};

export const increaseScore = (points: number): ActionType => {
  return {
    type: "increaseScore",
    points: points
  };
};

export const decreaseBonusPoints = (): ActionType => {
  return {
    type: "decreaseBonusPoints"
  };
};

export const resetBonusPoints = (): ActionType => {
  return {
    type: "resetBonusPoints"
  };
};

export const resetGame = (): ActionType => {
  return {
    type: "resetGame"
  };
};
