import { TextInputAction } from "./actions";
import { TextInputActionTypes, TextInputState } from "./types";
import { Reducer } from "redux";

const initialState: TextInputState = {
  text: "Default value"
};

export const textInputReducer: Reducer<TextInputState, TextInputAction> = (state = initialState, action) => {
  switch (action.type) {
    case TextInputActionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload!
      };
    case TextInputActionTypes.RESET_TEXT:
      return {
        ...state,
        text: initialState.text
      };
    default:
      return state;
  }
};

