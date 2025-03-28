import React, { useState, useEffect } from "react";
import axios from "axios";
interface TodoItems {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Fetch: React.FC = () => {
  const [todos, setTodos] = useState<TodoItems[]>([]);

  useEffect(() => {
    axios
      .get<TodoItems[]>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="default content">
      <h1>Fetch Data</h1>
      <p>Fetch data from an API and display it in the browser</p>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })}
    </div>
  );
};

export default Fetch;
