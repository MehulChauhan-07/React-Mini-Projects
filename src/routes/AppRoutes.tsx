// import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/HomePage_old";
import CounterApp from "@/pages/Counter_App/CounterPage";
import TicTacToeApp from "@/pages/TicTacToe/TicTacToePage";
import TodoList from "@/pages/TodoApp/TodoPage";
import API_parser from "@/pages/Api-explorer/Api_parser";

const AppRoutes: React.FC = () => {
  const projects = [
    { name: "Todo List", path: "/todo", component: TodoList },
    { name: "Counter App", path: "/counter", component: CounterApp },
    {
      name: "Tic-Tac-Toe App",
      path: "/tictactoe",
      component: TicTacToeApp,
    },
    { name: "API-parser App", path: "/api_explorer", component: API_parser },
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
