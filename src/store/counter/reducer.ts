import { CounterAction } from "./actions";
import { CounterState, CounterActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: CounterState = {
  count: 0
};

export const counterReducer: Reducer<CounterState, CounterAction> = (state = initialState, action) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case CounterActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

