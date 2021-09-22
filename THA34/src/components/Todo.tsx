import React from "react";
import Todoclass from "../models/todo";
import TodoItem from "./Todo-item";

const Todo: React.FC<{ items: Todoclass[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todo;
