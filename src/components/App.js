import React, { Component } from 'react';
import Header from './Header';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: 'Comprar leche' },
			{ id: 2, content: 'Ir al taller' }
		]
	};

	deleteTodo = id => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id;
		});
		this.setState({ todos });
	};

	addTodo = newTodo => {
		newTodo.id = Math.random();
		let newTodos = [...this.state.todos, newTodo];
		console.log(newTodos);
		this.setState({
			todos: newTodos
		});
	};

	render() {
		return (
			<div className='todo-app container'>
				<Header />
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;
