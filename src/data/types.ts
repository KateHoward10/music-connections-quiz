export interface State {
  roundNumber: number,
  score: number,
  bonusPoints: number
}

export interface Action {
  type: "increaseRoundNumber" | "decreaseBonusPoints" | "resetBonusPoints" | "resetGame"
}

export interface IncreaseScoreAction {
  type: "increaseScore",
  points: number
}

export type ActionType = Action | IncreaseScoreAction;
