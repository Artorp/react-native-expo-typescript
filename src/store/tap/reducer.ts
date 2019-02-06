import { TapActions, TapState } from "./types";
import { Reducer } from "redux";

const initialState: TapState = {
  status: "INITIAL",
  lastId: ""
};

export const tapReducer: Reducer<TapState, TapActions> = (state = initialState, action) => {
  switch (action.type) {
    case "TAP_BEGIN":
      return {
        ...state,
        lastId: action.id,
        status: "WAITING"
      };
    case "TAP_END":
      if (state.lastId === action.id) {
        return {
          ...state,
          status: "DONE"
        }
      }
  }
  return state;
};

