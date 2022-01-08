import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const TASK = {
  add: 'taskList/add',
  edit: 'taskList/edit',
  remove: 'taskList/remove',
};

// Actions
export const addTask = createAction<Omit<Task, 'id'>>(TASK.add);
export const editTask = createAction<{
  id: Task['id'];
  data: Omit<Task, 'id'>;
}>(TASK.edit);
export const removeTask = createAction<Task['id']>(TASK.remove);

// Reducers
const taskReducer = createReducer([], {
  [TASK.add]: (state: Task[], { payload }) => {
    const newTask = { ...payload };
    newTask.id = state.length + 1;
    state.push(newTask);
  },
  [TASK.edit]: (state: Task[], { payload }) => {
    const { id, data } = payload;
    const i = state.findIndex((task) => task.id === id);
    const newState = [...state];
    newState[i] = data;
    return newState;
  },
  [TASK.remove]: (state: Task[], { payload }) => {
    return state.filter((item) => item.id !== payload);
  },
});

export default taskReducer;
