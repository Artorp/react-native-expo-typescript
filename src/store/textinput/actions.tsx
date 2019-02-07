import { ResetTextAction, SetTextAction } from "./types";

// any custom payload could be defined here

export const setText = (text: string): SetTextAction => ({
  type: "SET_TEXT",
  text
});

export const resetText = (): ResetTextAction => ({
  type: "RESET_TEXT"
});

