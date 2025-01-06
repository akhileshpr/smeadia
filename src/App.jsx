import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Register from "src/components/register/register";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Login from "./components/login/login";
import UserWidget from "./components/widgets/userWidget";
import HomePage from "./pages/Homepage/home";
import MyPostWidget from "./components/widgets/myPostWidget";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state)=>state.token));
 
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={isAuth?<HomePage/> :<Login/>}/> */}
        </Routes>
          <HomePage/>

      </ThemeProvider>
    </>
  );
}

export default App;
