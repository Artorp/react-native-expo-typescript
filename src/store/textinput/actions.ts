import { TextInputActionTypes } from "./types";
import { Action } from "redux";

// any custom payload could be defined here
export interface TextInputAction extends Action<TextInputActionTypes> {
  payload?: string
}

export const setText = (text: string): TextInputAction => ({
  type: TextInputActionTypes.SET_TEXT,
  payload: text
});

export const resetText = (): TextInputAction => ({
  type: TextInputActionTypes.RESET_TEXT
});

