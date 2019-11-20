import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
import freeze from "redux-freeze";
import { reducers } from "./../reducers";
import rootSaga from './../../sagas';
/**
 *  This defines base configuration for setting up redux with react.
 *  All the middlewares are defined here and base store is created for provider.
 */

let middlewares = [];
// // apply middlewares
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

//smart console logging of actions
middlewares.push(logger);

// add freeze dev middleware
// this prevents state from being mutated anywhere in the app during dev
if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
}

// // apply middlewares
// let middleware = applyMiddleware(...middlewares);

// // create store
// const store = createStore(reducers, middleware);

//for async operations, network calls. Implement saga here.

const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export { store };