import React from "react";
import MiniDrawer from "./MiniDrawer";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

function MainDrawer({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Navbar open={open} setOpen={setOpen} />
        <MiniDrawer open={open} setOpen={setOpen} />
      </Box>
    </div>
  );
}

export default MainDrawer;
