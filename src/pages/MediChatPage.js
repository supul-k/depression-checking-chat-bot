import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ChatBox from "../Components/ChatBox";

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
          height: "100vh",          
        }}
      >
        <ChatBox open={open} />
      </Box>
    </div>
  );
}

export default MediChatPage;
