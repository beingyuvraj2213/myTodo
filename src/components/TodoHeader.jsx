import React from "react";
import DateAndTime from "./DateAndTime";

const TodoHeader = () => {
  return (
    <header>
      <h1>Todo List</h1>
      <h2 className="date">
        <DateAndTime />
      </h2>
    </header>
  );
};

export default TodoHeader;
