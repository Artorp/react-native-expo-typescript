import { Action } from "redux";

export interface TextInputState {
  text: string
}

export interface SetTextAction extends Action {
  type: "SET_TEXT";
  text: string;
}

export interface ResetTextAction extends Action {
  type: "RESET_TEXT";
}

export type TextInputAction =
  | SetTextAction
  | ResetTextAction;

