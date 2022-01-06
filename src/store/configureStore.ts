import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modal';
import taskReducer from './taskList';

export const store = configureStore({
  reducer: {
    taskList: taskReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
