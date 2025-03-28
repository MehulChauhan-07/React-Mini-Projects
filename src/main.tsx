import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@styles/globals.css";
// import "tailwindcss/tailwind.css";

import App from "@/App";
import { ThemeProvider } from "./context/ThemeContext";
// import AppRoutes from "@routes/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        {/* <AppRoutes /> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// Path: src/App.tsx generally we not use that file in this project cuz we have multiple pages so we can directly use the pages in the routes

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   </React.StrictMode>
// );
