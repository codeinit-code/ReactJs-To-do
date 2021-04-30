import React from 'react';
import Todo from './Todo.js';
import '../css/TodoList.css'

function TodoList(){
	return(
		<div className="list-wrapper">
			<Todo done/>
			<Todo />
			<Todo done/>
			<Todo />
			<Todo done/>
			<Todo />
			<Todo done/>
			<Todo />
		</div>
	)
};

export default TodoList;