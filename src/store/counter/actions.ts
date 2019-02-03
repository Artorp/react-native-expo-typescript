import { CounterActionTypes } from "./types";
import { Action } from "redux";

// any custom payload could be defined here
export interface CounterAction extends Action<CounterActionTypes> {
}

export const counterIncrement = () => ({
  type: CounterActionTypes.INCREMENT
});

export const counterDecrement = () => ({
  type: CounterActionTypes.DECREMENT
});

export const counterReset = () => ({
  type: CounterActionTypes.RESET
});

