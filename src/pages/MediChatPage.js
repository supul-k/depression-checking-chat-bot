import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ChatBox from "../Components/ChatBox";
import backgroundImage from "../Assets/Images/background.webp"

function MediChatPage({ open, setOpenLoginModal }) {

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

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
          height: "100vw",
          // width: open
          //   ? `calc(${viewportWidthInPx}px - 240px)`
          //   : `calc(${viewportWidthInPx}px - 65px)`,
        }}
      >
        <ChatBox open={open} />
      </Box>
    </div>
  );
}

export default MediChatPage;
