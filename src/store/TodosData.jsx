import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos((prev) => {
      return [...prev, {id:Math.random().toString(), task:task, completed:false}]; // Adding the new task, not 'todos'
    });
    console.log(todos);
  };

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

//consumer

export const UseTodos = () =>{
    const todosConsumer = useContext(TodoContext)
    if(!todosConsumer){
        throw new Error("UseTodos used outside of Provider")
    }
    return todosConsumer;
}
