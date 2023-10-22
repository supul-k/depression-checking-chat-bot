import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ChatBox from "../Components/ChatBox";

function MediChatPage({ open, setOpenLoginModal }) {
  const [viewportWidthInPx, setViewportWidthInPx] = useState(window.innerWidth);

  useEffect(() => {
    if (
      localStorage.getItem("email") === null &&
      localStorage.getItem("token") === null
    ) {
      localStorage.clear();
      setOpenLoginModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidthInPx(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // background: "linear-gradient(45deg, #03045e 30%, #0077b6 90%)",
          height: "100%",
          width: open
            ? `calc(${viewportWidthInPx}px - 240px)`
            : `calc(${viewportWidthInPx}px - 65px)`,
        }}
      >
        <ChatBox open={open} />
      </Box>
    </div>
  );
}

export default MediChatPage;
