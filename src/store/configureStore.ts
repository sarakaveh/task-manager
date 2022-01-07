import { configureStore } from '@reduxjs/toolkit';
import modalNewTaskReducer from './modalNewTask';
import taskReducer from './taskList';

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
    modalNewTask: modalNewTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
