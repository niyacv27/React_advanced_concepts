import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 200;

export default function Sidebar() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      
      <Toolbar />

      <List>
        {[
          { text: "Dashboard", path: "/" },
          { text: "Users", path: "/users" },
          { text: "Settings", path: "/settings" },
        ].map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "rgba(25, 118, 210, 0.15)",
              },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 700,   
                fontSize: "16px",
                color: "text.primary", 
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
