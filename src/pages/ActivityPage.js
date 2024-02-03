import React from "react";
import ActivityComponent from "../Components/ActivityComponent";
import { Box } from "@mui/material";

function ActivityPage({ open, setOpenLoginModal }) {

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <ActivityComponent open={open} />
      </Box>
    </div>
  );
}

export default ActivityPage;