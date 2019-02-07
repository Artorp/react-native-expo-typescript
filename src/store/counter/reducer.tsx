import { CounterState, CounterAction } from "./types";
import { Reducer } from "redux";

const initialState: CounterState = {
  count: 0
};

export const counterReducer: Reducer<CounterState, CounterAction> = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "SET_TO":
      return {
        ...state,
        count: action.count
      };
    case "RESET":
      return initialState;
  }
  return state;
};
