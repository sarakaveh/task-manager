import { configureStore } from '@reduxjs/toolkit';
import modalDoneTaskReducer from './modalDoneTask';
import modalNewTaskReducer from './modalNewTask';
import modalViewTaskReducer from './modalViewTask';
import taskListReducer from './taskList';

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
    modalNewTask: modalNewTaskReducer,
    modalViewTask: modalViewTaskReducer,
    modalDoneTask: modalDoneTaskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
