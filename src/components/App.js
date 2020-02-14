import React, { Component } from 'react';
import Header from './Header';
import Todos from './Todos';

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

	render() {
		return (
			<div className='todo-app container'>
				<Header />
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
			</div>
		);
	}
}

export default App;
