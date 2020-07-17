import {createStore, applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";


import rootReducer from "./rootReducer";

const middelewares = [];

if(process.env.NODE_ENV === "development"){
    middelewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middelewares));

const persistor = persistStore(store);

export {store, persistor};