import React from "react";
import { UseTodos } from "../store/TodosData";

const ShowTodoList = () => {
    const {todos, toggleTodoAsComplete, handleDelete} = UseTodos();
    let filterData = todos;

  return (
    <ul className="main-task">
        {filterData.map((value)=>{
            return (
            <li key={value.id} className=" first:border-t-[1px] first:border-t-[#ccc] grid grid-cols-3 items-center justify-center min-h-24 border-b-[1px] border-b-[#cccccc]">
                <input type="checkbox" id={value.id} checked={value.completed} onChange={() => toggleTodoAsComplete(value.id)}/>
                <label htmlFor={value.id}>
                {value.task}
                </label>
                {value.completed && (<button type="button" onClick={()=>handleDelete(value.id)} className=" w-24 py-2 px-3 bg-[#d14d72] text-[#fff9f9] border-none cursor-pointer">Delete</button>)}
            </li>
            )
        })}
      
    </ul>
  );
};

export default ShowTodoList;
