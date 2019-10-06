import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

// Now our TodosContainer is mapping over the todos it received from Redux, passing the value of each todo into a child component, Todo.
renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div>{this.renderTodos()}</div>
    );
  }
};

// Now, we aren't worried about dispatching actions here, only getting state from Redux, so we'll need to write out a mapStateToProps() function and include it as an argument for connect():
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
