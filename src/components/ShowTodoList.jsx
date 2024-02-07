import React from "react";
import { UseTodos } from "../store/TodosData";

const ShowTodoList = () => {
    const {todos} = UseTodos();
    let filterData = todos;
    console.log(filterData);
  return (
    <ul>
        {filterData.map((value)=>{
            return (
            <li key={value.id}>
                <input type="checkbox" id={value.id} checked={value.completed} onChange={() => toggleTodoAsComplete(value.id)}/>
                <label>
                {value.task}
                </label>
            </li>
            )
        })}
      
    </ul>
  );
};

export default ShowTodoList;
