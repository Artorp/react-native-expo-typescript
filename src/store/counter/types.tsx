import { Action } from "redux";

export interface CounterState {
  count: number
}

// actions:
// (any interface here could be augmented with more fields)

export interface IncrementAction extends Action {
  type: "INCREMENT";
}

export interface DecrementAction extends Action {
  type: "DECREMENT";
}

export interface ResetAction extends Action {
  type: "RESET";
}

export interface SetCountAction extends Action {
  type: "SET_TO";
  count: number;
}

export type CounterAction =
  | IncrementAction
  | DecrementAction
  | ResetAction
  | SetCountAction;

