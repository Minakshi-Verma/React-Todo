import React, { Component } from 'react';


class TodoForm extends Component {
    //constructor with state
    constructor(){
     super()
    this.state ={
        newTask: ''
    }   
    }

    //handleChanges function
 handleChanges = e => {
     //update state with each keystroke
     this.setState({
         newTask: e.target.value
     });
 };

    //handleSubmit function(class property to submit form)
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTasK(this.state.newTask)
    }


    render(){
        return(

<form>
    <input
    type ="text"
    name = "newTask"
    value = {this.state.newTask}
    onChange = {this.handleChanges}
     />
     <button>Add todo</button>
     <button>clear Completed</button>
</form>
        )
    }
  }

  export default TodoForm