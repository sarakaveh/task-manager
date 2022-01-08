import { configureStore } from '@reduxjs/toolkit';
import modalNewTaskReducer from './modalNewTask';
import modalViewTaskReducer from './modalViewTask';
import taskReducer from './taskList';

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
    modalNewTask: modalNewTaskReducer,
    modalViewTask: modalViewTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
