import { DecrementAction, IncrementAction, ResetAction, SetCountAction } from "./types";

// functions that produce actions

export const counterIncrement = (): IncrementAction => ({
  type: "INCREMENT"
});

export const counterDecrement = (): DecrementAction => ({
  type: "DECREMENT"
});

export const counterReset = (): ResetAction => ({
  type: "RESET"
});

export const setCountTo = (newCount: number): SetCountAction => ({
  type: "SET_TO",
  count: newCount
});

