import { Trash2 } from 'lucide-react';
import { useAppDispatch } from '../../store/store.ts';
import {
	TodoItemType,
	removeTodo,
	toggleTodo
} from '../../store/todos/todos.slice.ts';
import CheckBox from '../CheckBox/CheckBox.tsx';
import styles from './TodoItem.module.css';
export default function TodoItem({ id, title, completed }: TodoItemType) {
	const dispath = useAppDispatch();

	return (
		<div className={styles.todoContainer}>
			<button className={styles.todo} onClick={() => dispath(toggleTodo(id))}>
				<CheckBox completed={completed} />
				<h2>{title}</h2>
			</button>
			<button onClick={() => dispath(removeTodo(id))}>
				<Trash2 />
			</button>
		</div>
	);
}
