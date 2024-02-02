import React from "react";
import LandingPage from "../Components/Home/LandingPage";
import { Box } from "@mui/material";
import backgroundImage from "../Assets/Images/background1.webp"

function HomePage() {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <LandingPage />
      </Box>
    </div>
  );
}

export default HomePage;
