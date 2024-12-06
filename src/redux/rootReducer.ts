// ** Packages **
import { combineReducers } from "@reduxjs/toolkit";

// ** Redux Slices **
import { reducer as authReducer } from "./slices/authSlice";
import { reducer as taskReducer } from "./slices/taskSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
});

export default rootReducer;
