import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

import allReducer from "./src/redux/reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  root: persistReducer(persistConfig, allReducer),
});

export let store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export let persistor = persistStore(store);
