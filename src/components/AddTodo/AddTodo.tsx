import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todos/todos.slice';
import styles from './AddTodo.module.css';

function AddTodo() {
	const dispatch = useDispatch();
	const [input, setInput] = useState('');
	const handleEnter = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter') {
			dispatch(addTodo({ id: new Date().getTime(), title: input, completed: false }));
			setInput('')
		}

	};
	return (
		<div>
			<input
				className={styles.input}
				type='text'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder='Add Task'
				onKeyDown={handleEnter}
			/>
		</div>
	);
}

export default AddTodo;
