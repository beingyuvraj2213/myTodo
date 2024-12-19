import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ShowTodo = ({id,data,checked,handleCheck,handleDelete}) => {

  return (
    <li>
      <span className={checked ? "check-list" : "not-check-list"}>
        {data}
      </span>
      <div className="buttons">
        <button className="check-btn" onClick={() => handleCheck(data)}>
          <FaCheckCircle />
        </button>
        <button
          className="delete-btn"
          onClick={() => handleDelete(data)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
};

export default ShowTodo;
