
import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

export const getTodos = state => state.todos

const todosSlice = createSlice({
  name: 'todos',
  initialState,
    reducers: {
        addTodo:(state, action) => {
        
      state.todos = [...state.todos, action.payload];
    },
    deletTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
   
  },
});

export const { addTodo, deletTodo } = todosSlice.actions;
export default todosSlice.reducer;