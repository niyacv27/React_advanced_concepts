import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

const drawerWidth = 200;

export default function Navbar({ mode, setMode }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        ml: `${drawerWidth}px`,   
        width: `calc(100% - ${drawerWidth}px)`,
        background: "linear-gradient(90deg, #1976d2, #1565c0)",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: 1,
          }}
        >
          React Dashboard
        </Typography>

        <Box>
          <Switch
            checked={mode === "dark"}
            onChange={() => setMode(mode === "light" ? "dark" : "light")}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
