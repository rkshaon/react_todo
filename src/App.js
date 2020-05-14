import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

let id = 0;

const Todo = props => (
  <li className="list-group-item">
    <input type="checkbox" checked={props.todo.checked} onChange={props.onToggle} className="m-3" />
    <button onClick={props.onDelete} className="p-auto btn btn-danger m-3" >Delete</button>
  <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo(){
    const text = prompt("TODO please!")
    this.setState({
      todos: [...this.state.todos, {id: id++, text: text, checked: false}], 
    });
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter(todo => todo.id!==id),
    });
  }

  toggleTodo(id){
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id!==id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render(){
    return(
      <div className="container">        
        <div className="row mt-5">
          <h1 className="m-auto">TODO App</h1>
        </div>
        <div className="row mt-3">
          <div className="col-sm-3"></div>
          <div className="col-sm-3 text-center" >TODO Count: {this.state.todos.length}</div>
          <div className="col-sm-3 text-center" >Unchecked TODO Count: {this.state.todos.filter(todo => !todo.checked).length}</div>
          <div className="col-sm-3"></div>
        </div>
        <div className="row mt-3">
          <button className="btn btn-primary text-light m-auto" onClick={() => this.addTodo()}>Add TODO</button>
        </div>
        <div className="row mt-5">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <ul className="list-group">
              {this.state.todos.map( todo => (
                <Todo
                  onToggle = {() => this.toggleTodo(todo.id)}
                  onDelete = {() => this.removeTodo(todo.id)} 
                  todo = {todo} 
                /> 
              ))}
            </ul>           
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    )
  }
}

export default App;