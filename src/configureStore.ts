import { rootReducer } from "./store";
import { createStore } from "redux";

export function configureStore() {
  return createStore(rootReducer);
}
