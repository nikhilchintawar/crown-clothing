import {createStore, applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middelewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development"){
    middelewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middelewares));

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export {store, persistor};