import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Register from "src/components/register/register";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
