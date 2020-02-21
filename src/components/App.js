import React from 'react';
import Header from './Header';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
	<div className='todo-app container'>
		<Header />
		<VisibleTodoList />
		<AddTodo />
	</div>
);
export default App;
