import UUID from "uuid-js";

import {
  TapActions,
  TapState
} from "./types";
import { ThunkAction } from "redux-thunk";

// helpful generic thunk type, see https://github.com/reduxjs/redux-thunk/blob/master/test/typescript.ts
type ThunkResult<R> = ThunkAction<R, TapState, undefined, TapActions>;

// thunk function - could create functions instead of actions

export function startTap(waitTime: number): ThunkResult<Promise<void>> {
  return async function(dispatch) {
    const id = UUID.create(4).toString();
    dispatch({type: "TAP_BEGIN", id});
    setTimeout(() => dispatch({type: "TAP_END", id}),
      waitTime);
  }
}
