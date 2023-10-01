import LandingPage from "../Components/Home/LandingPage";
import { Box } from "@mui/material";

function HomePage() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <LandingPage/>
      </Box>
    </div>
  );
}

export default HomePage;