/**
 * Actions and reducers grouped by context.
 *
 * See https://medium.com/@resir014/redux-4-typescript-2-9-a-type-safe-approach-7f073917b803
 */

import {combineReducers} from "redux";
import { counterReducer } from "./counter/reducer";
import { CounterState } from "./counter/types";

// the top-level state object
export interface MyReduxState {
  counter: CounterState
}

export const rootReducer = combineReducers<MyReduxState>({
  counter: counterReducer
});
