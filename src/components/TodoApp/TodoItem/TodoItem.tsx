import React from "react";
import "./TodoItems.css";

// create a new prop called text
interface TodoItemProps {
  id: number;
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  return <li  className="TodoItems">{props.title}</li>;
};

export default TodoItem;
