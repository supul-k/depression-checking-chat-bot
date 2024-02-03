import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
    <AppBar open={open} sx={{ backgroundColor: "#fff" }}>
      <Toolbar>
        <div style={{width:'100%', display:'flex', alignItems:'center'}}>
          <div style={{float:'left'}}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon sx={{ color: "#0C0404" }} />
            </IconButton>
          </div>
          <div style={{margin:'0 auto'}}>
            <Typography
              sx={{ fontWeight: "bold", color: "#0C0404" }}
              variant="h6"
              noWrap
              component="div"
            >
              Empower Your Mental Well-Being
            </Typography>
          </div>
          <div style={{float:'right'}}>
            {loggedIn ? (
              <div style={{display:'flex'}}>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="0C0404"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>{userEmail}</MenuItem>
                  </Menu>
                </div>
                <Button sx={{color: '#0C0404'}} color="inherit" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button sx={{color: '#0C0404'}} color="inherit" onClick={() => setOpenLoginModal(true)}>
                Login
              </Button>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
