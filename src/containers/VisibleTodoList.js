import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { deleteTodo } from '../actions';

const mapStateToProps = state => ({
	todos: state.todos
});

const mapDispatchToProps = dispatch => ({
	deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
