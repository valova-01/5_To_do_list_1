import React, { useState, useEffect } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [showTodos, setShowTodos] = useState(false);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Не удалось загрузить данные');
				}
				return response.json();
			})
			.then((data) => setTodos(data));
	}, []);

	const handleShowTodos = () => {
		setShowTodos(true);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.title}>Список Задач</h1>
			{!showTodos && (
				<button className={styles.showButton} onClick={handleShowTodos}>
					Показать Задачи
				</button>
			)}
			{showTodos && (
				<div className={styles['todo-list']}>
					<ol>
						{todos.map((todo) => (
							<li key={todo.id}>{todo.title}</li>
						))}
					</ol>
				</div>
			)}
		</div>
	);
};
