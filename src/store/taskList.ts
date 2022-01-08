import { createReducer, createAction } from '@reduxjs/toolkit';
import { Task } from '../pages/home/Home.types';

const TASK = {
  add: 'taskList/add',
  edit: 'taskList/edit',
  remove: 'taskList/remove',
  done: 'taskList/done',
};

interface EditTaskAction {
  id: Task['id'];
  data: Omit<Task, 'id'>;
}

// Actions
export const addTask = createAction<Omit<Task, 'id'>>(TASK.add);
export const editTask = createAction<EditTaskAction>(TASK.edit);
export const removeTask = createAction<Task['id']>(TASK.remove);
export const doneTask = createAction<Task['id']>(TASK.done);

// Reducers
const taskListReducer = createReducer([], {
  [TASK.add]: (state: Task[], { payload }) => {
    const newTask = { ...payload };
    newTask.id = state.length + 1;
    state.push(newTask);
  },
  [TASK.edit]: (state: Task[], { payload }) => {
    const { id, data } = payload;
    const i = state.findIndex((task) => task.id === id);
    state[i] = data;
  },
  [TASK.remove]: (state: Task[], { payload: id }) => {
    return state.filter((item) => item.id !== id);
  },
  [TASK.done]: (state: Task[], { payload: id }) => {
    const i = state.findIndex((task) => task.id === id);
    state[i].done = true;
  },
});

export default taskListReducer;
