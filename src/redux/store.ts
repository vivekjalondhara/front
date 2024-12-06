// ** Packages **
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// ** Redux **
import rootReducer from "./rootReducer";
import { reducer } from "./slices/authSlice";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
  whitelist: ["task"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export type RootStateType = ReturnType<typeof store.getState>;
const persiststore = persistStore(store);
export { store, persiststore };
