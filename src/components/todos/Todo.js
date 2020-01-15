import React from 'react';

const Todo = props => {
    console.log(props);
    
    return (
        <li>{props.text}</li>
    )
}

export default Todo;