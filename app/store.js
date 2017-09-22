// import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger'
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {localStorageMiddleware } from './middleware';
// import rootReducer from './reducers';
//
// const getMiddleware = () => {
//     if (process.env.NODE_ENV === 'production') {
//         return applyMiddleware(promiseMiddleware, localStorageMiddleware);
//     } else {
//         // Enable additional logging in non-production environments.
//         return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger());
//     }
// };
//
// const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));
//
// export default store;
import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import rootReducer from "./reducers"

const middleware = applyMiddleware(promise(), thunk, createLogger(), localStorageMiddleware);

export default createStore(rootReducer, middleware)