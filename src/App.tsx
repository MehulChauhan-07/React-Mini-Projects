import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Layout from "@components/Layout/Layout";
// import Loader from "@components/UI/Loader";

// Lazy load pages for better performance
const HomePage = lazy(() => import("@pages/Home/HomePage"));
const CounterPage = lazy(() => import("@pages/Counter_App/CounterPage"));
const TodoPage = lazy(() => import("@pages/TodoApp/TodoPage"));
const TicTacToePage = lazy(() => import("@pages/TicTacToe/TicTacToePage"));

// const NotFoundPage = lazy(() => import("@pages/NotFound/NotFoundPage"));

function App() {
  return (
    // <Suspense fallback={<Loader />}>
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<HomePage projects={[]} />} />
      <Route path="counter" element={<CounterPage />} />
      <Route path="todo" element={<TodoPage />} />
      <Route path="tictactoe" element={<TicTacToePage />} />
      {/* <Route path="404" element={<NotFoundPage />} /> */}
      <Route path="*" element={<Navigate replace to="404" />} />
      {/* </Route> */}
    </Routes>
    // </Suspense>
  );
}

export default App;
