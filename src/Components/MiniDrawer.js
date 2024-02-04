import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SpaIcon from '@mui/icons-material/Spa';
import PeopleIcon from '@mui/icons-material/People';
import ArticleIcon from '@mui/icons-material/Article';
import logo from "../Assets/Images/logo-no-background.png";

const drawerWidth = 240;
const drawerIcons = ["Home", "Depression Prediction", "Mental Health Activities", "My Community", "My Diary"];

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: "#fff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#fff",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  width: "65px",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ open, setOpen, setOpenRegisterModal }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  // const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setLoggedIn(true);
    } else {
      console.log("User is not logged in.");
    }
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#0C0404" }}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
            display : !open ? "none" : "flex"
          }}         
        >
          <img style={{width: '100px', marginBottom: '20px'}} src={logo} />
        </ListItemIcon>
        <Divider />
        <List>
          {drawerIcons.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "#0C0404",
                }}
                onClick={() => {
                  if (index === 0) {
                    navigate("/");
                  } else if (index === 1) {
                    if (loggedIn) {
                      navigate("/medihelp");
                    } else {
                      setOpenRegisterModal(true);
                    }
                  } else {
                    if (loggedIn) {
                      navigate("/activity");
                    } else {
                      setOpenRegisterModal(true);
                    }
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 1 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index === 0 ? (
                    <HomeIcon sx={{ color: "#0C0404" }} />
                  ) : index === 1 ? (
                    <ChatBubbleIcon sx={{ color: "#0C0404" }} />
                  ) : index === 2 ?  (
                    <SpaIcon sx={{ color: "#0C0404" }} />
                  ) : index === 3 ? (
                    <PeopleIcon sx={{ color: "#0C0404" }} />
                  ) : (
                    <ArticleIcon sx={{ color: "#0C0404" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
