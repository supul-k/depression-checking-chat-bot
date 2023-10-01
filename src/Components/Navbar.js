import React from "react";
import { styled } from '@mui/material/styles';
import MuiAppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material/Toolbar";
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

function Navbar({ open, setOpen }) {

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open} sx={{ backgroundColor:"#0077b6"}}>
      <Toolbar>
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
          <MenuIcon sx={{color: '#caf0f8'}}/>
        </IconButton>
        <Typography sx={{fontWeight: 'bold', color: '#caf0f8'}} variant="h6" noWrap component="div">
          MediHelp v3.5
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
