import React, { useState, useEffect } from "react";

interface TodoItems {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Fetch: React.FC = () => {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response)
      .then((e) => e.json())
      .then((e) => setTodos(e as TodoItems[]));
  }, []);

  return (
    <div className="default content">
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default Fetch;
