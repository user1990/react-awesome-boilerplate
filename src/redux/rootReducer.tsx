import { combineReducers } from '@reduxjs/toolkit';

import { counterSlice, selectedTodoSlice, todoSlice } from '../features/todo/todoSlice';

const rootReducer = combineReducers({
  todo: todoSlice.reducer,
  selectedTodo: selectedTodoSlice.reducer,
  counter: counterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
