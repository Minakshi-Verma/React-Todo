import React from 'react'

const Todo = props => {
    return(
        <div onClick ={() => props.toggleTask(props.item.id)}
            className = {props.item.completed ? "completed" : null}>
            <p classname ="tasks"> {props.item.task}</p>
        </div>
    )
}

export default Todo;