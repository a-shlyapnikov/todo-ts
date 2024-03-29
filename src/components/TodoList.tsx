import { useSelector } from 'react-redux';
import { selectTodos } from '../store/todos/todos.slice.ts';
import AddTodo from './AddTodo/AddTodo.tsx';
import TodoItem from './TodoItem/TodoItem.tsx';

function TodoList() {
	const { todos } = useSelector(selectTodos);
	return (
		<div>
			{todos.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
			<AddTodo />
		</div>
	);
}

export default TodoList;
