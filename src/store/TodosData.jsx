import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (task) => {
    setTodos((prev) => {
      const newtodos = [
        { id: Math.random().toString(), task: task, completed: false },...prev
      ];
      return newtodos;
    })
  };

  const toggleTodoAsComplete = (id)=>{
    setTodos((prev)=>{
        const newTodos = prev.map((value)=>{
            if(value.id === id){
                return{...value, completed:!value.completed}
            }
            return value;
        })
        return newTodos
    })
}

// delete list item
const handleDelete = (id) =>{
  setTodos((prev)=>{
    const newTodos = prev.filter((value)=> value.id !=id);
    return newTodos;
  })
}

  return (
    <TodoContext.Provider value={{ todos, handleAddTodo, toggleTodoAsComplete, handleDelete}}>
      {children}
    </TodoContext.Provider>
  );
};


//consumer section
export const UseTodos = () => {
  const todosConsumer = useContext(TodoContext);
  if (!todosConsumer) {
    throw new Error("UseTodos used outside of Provider");
  }
  return todosConsumer;
};
