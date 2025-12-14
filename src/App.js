import React, { useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Users = React.lazy(() => import("./pages/Users"));
const Settings = React.lazy(() => import("./pages/Settings"));

export default function App() {
  const [mode, setMode] = useState("light");

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Navbar mode={mode} setMode={setMode} />
      <Sidebar />
      <Suspense fallback={<p style={{ margin: 20 }}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
