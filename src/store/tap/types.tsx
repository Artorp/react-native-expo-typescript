import { Action } from "redux";

export type TapStates = "INITIAL" | "WAITING" | "DONE";

export interface TapState {
  status: TapStates;
  lastId: string;
}

export interface TapActionBegin extends Action {
  type: "TAP_BEGIN";
  id: string;
}
export interface TapActionEnd extends Action {
  type: "TAP_END";
  id: string;
}


export type TapActions =
  | TapActionBegin
  | TapActionEnd;

