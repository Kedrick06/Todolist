import React from "react";
import Todo from './Todo'


const Todolist = ({todos, setTodos, filteredTodos}) => {


return(
    <div className="todo-container">
    <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo
            setTodos={setTodos}
            key={todo.id}
            text={todo.text} 
            id={todo.id}
            todo={todo}
            todos={todos}
            />
        ))
        }  
        </ul>
    </div>
);

};

export default Todolist;