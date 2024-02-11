import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("items"));
    if(storedTodos){
      setTodos(storedTodos);
    }
  },[]);
 

  //add items section
  const handleAddTodo = (task) => {
    setTodos((prev) => {
      const newItems = [
        { id: Math.random().toString(), task: task, completed: false},...prev
      ];
      localStorage.setItem("items", JSON.stringify(newItems))
      return newItems;
    })
  };

  // delete button toggle click on mark
  const toggleTodoAsComplete = (id)=>{
    setTodos((prev)=>{
        const newItems = prev.map((value)=>{
            if(value.id === id){
                return{...value, completed:!value.completed}
            }
            return value;
        })
        localStorage.setItem("items", JSON.stringify(newItems))
        return newItems
    })
}

// delete list item
const handleDelete = (id) =>{
  setTodos((prev)=>{
    const newItems = prev.filter((value)=> value.id !=id);
    localStorage.setItem("items", JSON.stringify(newItems))
    return newItems;
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
