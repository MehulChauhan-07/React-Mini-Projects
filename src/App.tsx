import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@components/Layout/Layout";
import Loader from "@components/ui/Loader";

// Lazy load pages for better performance
import HomePage from "@/pages/Home/HomePage";
import CounterPage from "@pages/Counter_App/CounterPage";
import TodoPage from "@pages/TodoApp/TodoPage";
import TicTacToePage from "@pages/TicTacToe/TicTacToePage";

// const NotFoundPage = lazy(() => import("@pages/NotFound/NotFoundPage"));

function App() {
  console.log("App component rendered");
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {" "}
          {/* Added Layout route */}
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="tictactoe" element={<TicTacToePage />} />
          {/* <Route path="404" element={<NotFoundPage />} /> */}
          <Route path="*" element={<Navigate replace to="404" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
