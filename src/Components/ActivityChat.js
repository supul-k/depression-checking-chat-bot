import React, { useState, useEffect } from "react";
import { ChatActivityMessageApi } from "../api/Axios";
import {
  Box,
  TextField,
  Button,
  Paper
} from "@mui/material";

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
          justifyContent: "space-between",
          background: "linear-gradient(45deg, #03045e 30%, #0077b6 90%)",
          height: "100vh",
          width: open
            ? `calc(${viewportWidthInPx}px - 240px)`
            : `calc(${viewportWidthInPx}px - 65px)`,
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
            minHeight: "70%",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            overflowY: "auto",
            maxHeight: "calc(100vh - 120px)",
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
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            maxWidth: "80%",
            minWidth: "60%",
          }}
        >
          <TextField
            sx={{ marginBottom: "20px" }}
            color="primary"
            label="Type a message"
            variant="outlined"
            value={inputMessage}
            inputProps={{
              style: {
                color: "white",
                borderColor: "white",
              },
              placeholder: "Enter your message",
            }}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{ flex: 1 }}
            focused
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            style={{
              marginLeft: "10px",
              backgroundColor: isChatbotResponding ? "#5bc0de" : "#0088cc",
              borderRadius: "20px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "none",
            }}
            disabled={isChatbotResponding}
          >
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ActivityChat;
