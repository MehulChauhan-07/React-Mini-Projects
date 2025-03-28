// import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import CounterApp from "../pages/Counter_App/CounterApp";
import TicTacToeApp from "../pages/TicTacToe/TicTacToeApp";
import TodoApp from "../pages/Todo_List/TodoList";
import API_parser from "../pages/API_caller/API-parser";

const AppRoutes: React.FC = () => {
  const projects = [
    { name: "Todo List", path: "/todo-app", component: TodoApp },
    { name: "Counter App", path: "/counter-app", component: CounterApp },
    {
      name: "Tic-Tac-Toe App",
      path: "/tic-tac-toe-app",
      component: TicTacToeApp,
    },
    { name: "API-parser App", path: "/API_parser", component: API_parser },
  ];
  return (
    <Routes>
      <Route path="/" element={<Home projects={projects} />} />
      {projects.map((project) => (
        <Route
          key={project.name}
          path={project.path}
          element={<project.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;
