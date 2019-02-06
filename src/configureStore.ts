import { rootReducer } from "./store";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

export function configureStore(loggingEnabled: boolean) {

  const middlewares = [];

  middlewares.push(thunkMiddleware);

  if (loggingEnabled) {
    middlewares.push(createLogger());
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );
}
