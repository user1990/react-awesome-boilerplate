import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 as uuid } from 'uuid';

import { Todo } from '../../common/models/todo.interface';


// Initial state
const todoInitialState: Todo[] = [
  {
    id: uuid(),
    desc: 'Learn React',
    isComplete: true,
  },
  {
    id: uuid(),
    desc: 'Learn Redux',
    isComplete: true,
  },
  {
    id: uuid(),
    desc: 'Learn Redux-ToolKit',
    isComplete: false,
  },
];

// Slices/reducers
export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<Todo>) => {
        state.push(payload);
      },
      prepare: ({ desc }: { desc: string }) => ({
        payload: {
          id: uuid(),
          desc,
          isComplete: false,
        },
      }),
    },
    edit: (state, { payload }: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state[index].desc = payload.desc;
      }
    },
    toggle: (state, { payload }: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state[index].isComplete = payload.isComplete;
      }
    },
    remove: (state, { payload }: PayloadAction<Todo>) => {
      const index = state.findIndex(todo => todo.id === payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState: null as string | null,
  reducers: {
    select: (state, { payload }: PayloadAction<{ id: string }>) => payload.id,
  },
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: {
    [todoSlice.actions.create.type]: state => state + 1,
    [todoSlice.actions.edit.type]: state => state + 1,
    [todoSlice.actions.toggle.type]: state => state + 1,
    [todoSlice.actions.remove.type]: state => state + 1,
  },
});


// Actions creators
export const {
  create: createTodoActionCreator,
  edit: editTodoActionCreator,
  toggle: toggleTodoActionCreator,
  remove: deleteTodoActionCreator,
} = todoSlice.actions;
export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;
