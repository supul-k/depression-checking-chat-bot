import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function LandingPage() {
  return (
    <Box component="main" sx={{  p: 3, backgroundColor: "white", borderRadius: "50%" }}>
      <DrawerHeader />
      hello
    </Box>
  );
}

export default LandingPage;
