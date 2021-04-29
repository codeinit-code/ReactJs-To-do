//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './Header.js';
import Form from './Form.js';
import TodoList from './TodoList.js';

function App() {
  return (
    <div className="wrapper">
        <div className="card frame">
	        <Header/>
	        <Form/>
	        <TodoList/>
        </div>
    </div>
  );
}

export default App;
