import React, { useState } from "react";
import toast from "react-hot-toast";
import ShowTodo from "./ShowTodo";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import ClearAll from "./ClearAll";

const todosKey = "MyTodo";

const getLocalStorageData = () => {
  const systemTodo = localStorage.getItem(todosKey);

  if (!systemTodo || systemTodo === "undefined") {
    return []; // Return an empty array if the value is "undefined" or doesn't exist
  }

  try {
    return JSON.parse(systemTodo); // Parse the valid JSON string
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
    return []; // Return empty array in case of an error
  }
};

const Todo = () => {
  const [todo, setTodo] = useState(() => getLocalStorageData());

  const handleFormSubmit = (value) => {
    const { id, content, checked } = value;

    if (!content) return;

    const contentMatched = todo.find(
      (currTask) => currTask.content === content
    );

    if (contentMatched) return toast.error("Same todo already present");

    setTodo((prev) => {
      return [...prev, { id, content, checked }];
    });
  };

  localStorage.setItem(todosKey, JSON.stringify(todo));

  const handleClearAll = () => {
    setTodo([]);
  };

  const handleCheck = (currTodo) => {
    const updatedTask = todo.map((currTask) => {
      if (currTask.content === currTodo) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    toast.success('Well Done !')
    setTodo(updatedTask);
  };

  const handleDelete = (currTodo) => {
    console.log(currTodo);
    setTodo(todo.filter((item) => currTodo !== item.content));
  };

  return (
    <>
      <section className="todo-container">
        <TodoHeader />

        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="show-todo">
          <ul className="todo-list">
            {todo.map((currTodo) => {
              return (
                <ShowTodo
                  key={currTodo.id}
                  id={currTodo.id}
                  data={currTodo.content}
                  checked={currTodo.checked}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
                />
              );
            })}
          </ul>
        </section>
        <ClearAll todo={todo} handleClearAll={handleClearAll} />
      </section>
    </>
  );
};

export default Todo;
