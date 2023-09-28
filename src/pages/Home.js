import MainDrawer from "../Components/MainDrawer";
import LandingContent from "../Components/LandingContent";
import { Box } from "@mui/material";

function Home() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <MainDrawer />
        <LandingContent/>
      </Box>
    </div>
  );
}

export default Home;