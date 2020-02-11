import React, { Component } from 'react';


class TodoForm extends Component {
    //constructor with state
    constructor(){
     super()
    this.state ={
        newItem: ''
    }   
    }

    //handleChanges function
 handleChanges = e => {
     //update state with each keystroke
     this.setState({
         newItem: e.target.value
     });
 };

    //handleSubmit function(class property to submit form)
    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem)
        this.setState({newItem:''})
    }


    render(){
        return(

<form className = "form" onSubmit = {this.handleSubmit}>
    <input className ="input"
    type ="text"
    name = "newTask"
    value = {this.state.newItem}
    onChange = {this.handleChanges}
     />
     <button>Add todo</button>
     {/* <button>clear Completed</button> */}
</form>
        )
    }
  }

  export default TodoForm