import { styled } from "@mui/material/styles";
import backgroundImage from "../Assets/Images/background.webp"

const drawerWidth = 240;

const Layout = (styled("main", { shouldForwardProp: (prop) => prop !== "open" }))(
    ({ theme, open }) => ({
      flexGrow: 1,
      // padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      height: `-${drawerWidth}px`,
      // marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
      background: `url(${backgroundImage}) no-repeat center center fixed`,
      backgroundSize: "cover"
    })
  );

export default Layout