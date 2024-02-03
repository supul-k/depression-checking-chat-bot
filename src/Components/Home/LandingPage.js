import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "4rem",
          textAlign: "center",
          marginTop: 2,
          width: "auto"
        }}
      >
        We are here for you!
      </Typography>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#0C0404",
            marginBottom: 2,
            marginRight: 2,
            color: "white",
            "&:hover": {
              color: "#0C0404",
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
            backgroundColor: "#0C0404",
            marginBottom: 2,
            color: "white",
            "&:hover": {
              color: "#0C0404",
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
