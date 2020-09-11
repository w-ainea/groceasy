import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [thunk, logger];

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);
export { persistor, store };

export default store;
