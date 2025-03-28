import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./Todo.css";

interface TodoList {
  id: number;
  title: string;
}

interface TodoProps {
  items: TodoList[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return (
    <div className="todo-container">
      <ol>
        {props.items.map((items) => (
          <TodoItem key={items.id} id={items.id} title={items.title} />
        ))}
      </ol>
    </div>
  );
};

// const Todo = () => {
//   return <div >Todo List Component</div>;
// };

export default Todo;
