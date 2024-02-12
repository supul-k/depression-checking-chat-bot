import React from "react";
import LandingPage from "../Components/Home/LandingPage";
import { Box } from "@mui/material";

function HomePage() {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "space-around"
        }}
      >
        <LandingPage />
      </Box>
    </div>
  );
}

export default HomePage;
