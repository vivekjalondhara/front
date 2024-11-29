// ** Packages **
import { combineReducers } from "@reduxjs/toolkit";

// ** Redux Slices **
import { reducer as authReducer } from "./slices/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
