import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskList';

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
