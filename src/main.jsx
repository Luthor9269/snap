import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Simple Page Navigation with Browser Router
import { BrowserRouter } from "react-router-dom";
// Passes down theme to all children components for styling
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
