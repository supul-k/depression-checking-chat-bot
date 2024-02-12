import React, { useState, useEffect } from "react";
import { ChatActivityMessageApi } from "../api/Axios";
import { Box, Paper, InputBase, Divider, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ActivityChat = ({ open }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [botResponseMessage, setBotResponseMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isChatbotResponding, setIsChatbotResponding] = useState(false);

  const viewportWidthInPx = window.innerWidth;

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const sentMessage = { text: inputMessage, user: true };
      setChatMessages((prevMessages) => [...prevMessages, sentMessage]);

      const user_id = localStorage.getItem("user_id");
      const sentData = {
        user_id: user_id,
        message_text: inputMessage,
      };
      setIsChatbotResponding(true);
      ChatActivityMessageApi(sentData)
        .then((response) => {
          setInputMessage("");
          console.log("response", response.data.message);
          console.log("status", response.data.status);
          if (response.data.status === true) {
            if (response.data.message === "") {
              setBotResponseMessage("I couldn't understand that");
            } else {
              setBotResponseMessage(response.data.message);
            }
            // chatBotMessage();
            setIsChatbotResponding(false);
          } else {
            setBotResponseMessage("Response failed");
            setIsChatbotResponding(false);
            // chatBotMessage();
          }
        })
        .catch((error) => {
          console.log("error", error.response.data.message);
          setBotResponseMessage(
            "An error occurred while processing the request."
          );
          // chatBotMessage();
        })
        .finally(() => {
          setIsChatbotResponding(false);
        });
    }
  };

  const userMessages = chatMessages
    .filter((message) => message.user === true)
    .map((message) => message.text);

  const chatBotMessage = () => {
    setTimeout(() => {
      // const chatbotResponse = botResponseMessage;
      const responseMessage = { text: botResponseMessage, user: false };
      setChatMessages((prevMessages) => [...prevMessages, responseMessage]);
      console.log(chatMessages.filter((message) => message.user === true));
    }, 1000);
  };

  useEffect(() => {
    if (botResponseMessage !== "") {
      chatBotMessage();
    }
  }, [botResponseMessage]);

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: `calc(100vh - 50px)`,
            width: "100vw",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              maxWidth: "80%",
              minWidth: "60%",
              height: `calc(100vh - 10px)`,
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              overflowY: "auto",
              marginTop: "100px",
            }}
          >
            {chatMessages.map((message, index) => (
              <div
                key={index}
                style={{
                  textAlign: message.user ? "right" : "left",
                  margin: message.user
                    ? "8px 8px 8px 200px"
                    : "8px 200px 8px 8px",
                  padding: "10px",
                  maxWidth: "80%",
                  borderRadius: "8px",
                  background: message.user ? "#5bc0de" : "#e0e0e0",
                  color: message.user ? "white" : "black",
                  alignSelf: message.user ? "flex-end" : "flex-start",
                }}
              >
                {message.text}
              </div>
            ))}
          </Paper>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "80%",
              minWidth: "60%",
              backgroundColor: "transparent",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, maxWidth: "100%", width: "100%" }}
                maxWidth
                placeholder="Enter your message"
                inputProps={{ "aria-label": "Enter your message" }}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                color="#0C0404"
                sx={{
                  p: "10px",
                }}
                aria-label="directions"
                onClick={handleSendMessage}
                disabled={isChatbotResponding}
              >
                <SendIcon />
              </IconButton>
            </Paper>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default ActivityChat;
