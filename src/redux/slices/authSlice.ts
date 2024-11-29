import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "../store";

type AuthUserType = {
  id: number | null;
  namw: string | null;
  email: string | null;
};

type AuthSliceType = {
  user?: Partial<AuthUserType | null>;
  isAuthenticated?: boolean;
  isAuthInitialized?: boolean;
};

const initialState: AuthSliceType = {
  user: null,
  isAuthenticated: false,
  isAuthInitialized: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser(state: AuthSliceType, action: PayloadAction<AuthSliceType>) {
      state.user = action.payload.user;
    },
    setAuthenticated(
      state: AuthSliceType,
      action: PayloadAction<AuthSliceType>
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    setAuthInitialized(state: AuthSliceType) {
      state.isAuthInitialized = true;
    },
  },
});
export const { reducer } = auth;
export const { setCurrentUser, setAuthenticated, setAuthInitialized } =
  auth.actions;

export const getAuth = (state: RootStateType) => state.auth;

export const getIsAuthenticated = (state: RootStateType) =>
  state.auth.isAuthenticated;
