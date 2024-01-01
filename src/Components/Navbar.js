import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function Navbar({ open, setOpen, setOpenLoginModal }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // If the token exists, fetch the email and update state
      const email = localStorage.getItem("email");
      setUserEmail(email);
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      console.log("User is not logged in.");
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and perform logout actions
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setLoggedIn(false);
  };

  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor: "#0077b6" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <IconButton
            color="rgba(0, 0, 0, 0.54)"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon sx={{ color: "#caf0f8" }} />
          </IconButton>
          <Typography
            sx={{ fontWeight: "bold", color: "#caf0f8", flex: 1 }}
            variant="h6"
            noWrap
            component="div"
          >
            MediHelp v3.5
          </Typography>
        </div>
        {loggedIn ? (
          // <Typography>{userEmail}</Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography>{userEmail}</Typography>
            <Button
              sx={{ backgroundColor: "white", color: "black", marginLeft: 2 }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            sx={{ backgroundColor: "white", color: "black" }}
            onClick={() => setOpenLoginModal(true)}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
