import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <DrawerHeader />
      <Typography sx={{ color: "white", fontWeight: "bold", fontSize: "4rem" }}>
        We are here for you!
      </Typography>
      <div style={{ display: "flex" }}>
        <Button
          sx={{
            backgroundColor: "#caf0f8",
            marginBottom: 2,
            marginRight: 2,
            color: "black",
            "&:hover": {
              color: "#caf0f8",
            },
          }}
          size="large"
          onClick={() => {
              navigate("/medihelp"); 
          }}
        >
          Medi Help
        </Button>
        <Button
          sx={{
            backgroundColor: "#caf0f8",
            marginBottom: 2,
            color: "black",
            "&:hover": {
              color: "#caf0f8",
            },
          }}
          size="large"
          onClick={() => {
            navigate("/activity"); 
        }}
        >
          Activities
        </Button>
      </div>
    </Box>
  );
}

export default LandingPage;
