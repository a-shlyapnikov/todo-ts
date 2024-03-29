import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export type TodoItemType = {
	id: number;
	title: string;
	completed: boolean;
};

interface TodoSlice {
	todos: TodoItemType[];
}

const initialState: TodoSlice = {
	todos: [
		{ id: 1, title: 'Сделать todoapp + ts', completed: false },
		{ id: 2, title: 'React/RTQ Query', completed: false },
		{ id: 3, title: 'Nest.js', completed: false }
	]
};
const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<TodoItemType>) {
			state.todos.push(action.payload);
		},
		removeTodo(state, action: PayloadAction<number>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		toggleTodo(state, action: PayloadAction<number>) {
			const todo = state.todos.find((t) => t.id === action.payload);
			if (todo) {
				todo.completed = !todo?.completed;
			}
		}
	}
});

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todoSlice.reducer;
