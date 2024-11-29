// ** Packages **
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// ** Redux **
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch: () => AppDispatchType = useDispatch;

export type RootStateType = ReturnType<typeof store.getState>;

export default store;
