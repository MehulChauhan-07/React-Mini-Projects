import React from "react";
import Todo from "@components/TodoApp/Todo";

// todo list
const myTodos = [
  {
    id: 1,
    title: "Learn React",
  },
  {
    id: 2,
    title: "Learn TypeScript",
  },
  {
    id: 3,
    title: "Learn Node.js",
  },
  {
    id: 4,
    title: "Learn Express",
  },
  {
    id: 5,
    title: "Learn npm",
  },
  {
    id: 6,
    title: "Learn Yarn",
  },
];

const TodoList: React.FC = () => {
  return (
    <div className="default content">
      <Todo items={myTodos} />
      <br />
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};

export default TodoList;
