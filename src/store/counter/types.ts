export enum CounterActionTypes {
  RESET="RESET",
  INCREMENT="INCREMENT",
  DECREMENT="DECREMENT"
}

export interface CounterState {
  count: number
}
