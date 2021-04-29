import React from 'react';
import Todo from './Todo.js';
import '../css/TodoList.css'

function TodoList(){
	return(
		<div className="list-wraper">
			<Todo />
			<Todo />
			<Todo />
		</div>
	)
};

export default TodoList;