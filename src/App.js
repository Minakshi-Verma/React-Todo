import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import "./components/TodoComponents/Todo.css"

const myTasks = [
  {
  task: 'Go for shopping',
  id: 1,
  completed: true 
},
{
  task: 'Get the groceries',
  id: 2,
  completed: false  
},
{
  task: 'Make the dinner',
  id: 3,
  completed: false  
},
{
  task: 'Prepare for next-day class',
  id: 4,
  completed: false  
}
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super()
    this.state = {
      todoList: myTasks
    }
  }

  //toggletask function to crossout the completed tasks
  toggleTask = clickedId => {
    //for every task create a new one (...spread operator or array method)
    const newTodoList = this.state.todoList.map(todo =>{
      if (todo.id ===clickedId){
        //toggle completed
        return{
          ...todo,
          completed:!todo.completed  // use  if you want to crossout completed task.
        };
      } else {
        return todo;
      }
    });

    //update state with the new array
    this.setState({
      todoList: newTodoList
    }) 
  }


  addNewItem = newText =>{
    console.log(newText)
    const newItem = {
      task: newText,    
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  }
  
  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(item =>
        !item.completed
      )
    })
  }
  
  render() {
    return (
      <div className ="app">
        <h2>Welcome to my Todo App!</h2>
        <TodoList myTasks ={this.state.todoList}
        toggleTask = {this.toggleTask}
        clearCompleted = {this.clearCompleted}/>
        <TodoForm addNewItem= {this.addNewItem}/>
      </div>
    );
  }
}

export default App;
