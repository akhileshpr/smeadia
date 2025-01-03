import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Register from "src/components/register/register";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Login from "./components/login/login";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Login/> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
