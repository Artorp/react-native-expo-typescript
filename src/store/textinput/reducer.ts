import { TextInputAction, TextInputState } from "./types";
import { Reducer } from "redux";

const initialState: TextInputState = {
  text: "Default value"
};

export const textInputReducer: Reducer<TextInputState, TextInputAction> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      };
    case "RESET_TEXT":
      return {
        ...state,
        text: initialState.text
      };
  }
  return state;
};

