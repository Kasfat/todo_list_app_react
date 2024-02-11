import React, { useState } from "react";
import { UseTodos } from "../store/TodosData";

const AddTodoList = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo} = UseTodos();
  const handleFormSumit = (e) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleFormSumit} className=" flex gap-3 py-10 px-2 md:px-7 lg:px10 ">
      <input
        type="text"
        placeholder=" Add a items"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        className=" border-[1px] border-[#cccccc] w-full font-medium text-[16px] px-3 py-1 rounded-md"
      />
      <button
        type="submit"
        className=" rounded py-3 px-10 font-medium text-[#fff] bg-[#68b984] cursor-pointer"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoList;
