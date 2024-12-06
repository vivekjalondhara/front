import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "redux/store";
type taskType = {
  id?: string;
  title: string;
  description: string;
  status: string;
  modifiedTask?: boolean;
};
type initialStepType = {
  task: taskType[];
};
const initialState: initialStepType = {
  task: [],
};

const task = createSlice({
  name: "task",
  initialState,
  reducers: {
    setModifiedTask(state: initialStepType, action: PayloadAction<taskType[]>) {
      state.task = action.payload;
    },
  },
});

export const { reducer } = task;
export const { setModifiedTask } = task.actions;
export const getModifiedTask = (state: RootStateType) => state.task;
