import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF9994",
    },
    secondary: {
      main: "#A4CBB4",
    },
    error: {
      main: '#DC2728'
    },
    warning: {
      main: '#DB7707'
    },
    info: {
      main: "#2463EB",
    },
    success: {
      main: "#14A249",
    },
    // custom
    accent: {
      main: "#EBDA99",
    },
    neutral: {
      main: "#EBDA99",
    },
    base: {
      main: "#E3D8B4",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
