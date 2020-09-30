import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "reducers";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: process.env.REACT_APP_NAME || "incasso",
  storage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger())
);

export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);
