import React from "react";
import { UseTodos } from "../store/TodosData";
import { useSearchParams } from "react-router-dom";

const ShowTodoList = () => {
  const { todos, toggleTodoAsComplete, handleDelete } = UseTodos();
  const [searchParams] = useSearchParams();
  const searchParamsData = searchParams.get("items");
  let filterData = todos;
  if (searchParamsData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (searchParamsData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className=" mb-5 main-task">
      {filterData.map((value) => {
        if (value.task !== "") {
          return (
            <li
              key={value.id}
              className="first:border-t-[1px] first:border-t-[#ccc] grid grid-cols-3 items-center min-h-24 border-b-[1px] border-b-[#cccccc] hover:bg-red-50"
            >
              <input
                type="checkbox"
                id={value.id}
                checked={value.completed}
                onChange={() => toggleTodoAsComplete(value.id)}
              />
              <label htmlFor={value.id}>{value.task}</label>
              {value.completed && (
                <button
                  type="button"
                  onClick={() => handleDelete(value.id)}
                  className=" w-16 px-2 sm:w-24 sm:py-2 sm:px-2 lg:w-24 lg:py-2 lg:px-3 bg-[#d14d72] text-[#fff9f9] border-none cursor-pointer"
                >
                  Delete
                </button>
              )}
            </li>
          );
        } else {
          return null;
        }
      })}
    </ul>
  );
};

export default ShowTodoList;
