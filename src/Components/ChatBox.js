import React, { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const ChatBox = ({ open }) => {
  const [inputMessage, setInputMessage] = useState(""); // State to store user input
  const [chatMessages, setChatMessages] = useState([]); // State to store chat messages

  const viewportWidthInPx = window.innerWidth;

  // Function to handle user input submission
  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Add the user message to the chat
      setChatMessages([...chatMessages, { text: inputMessage, user: true }]);
      setInputMessage("");

      // Simulate a chatbot response (replace this with actual chatbot logic)
      setTimeout(() => {
        const chatbotResponse = "This is a chatbot response.";
        setChatMessages([
          ...chatMessages,
          { text: chatbotResponse, user: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f4f4",
          height: "100vh",
          width: open
            ? `calc(${viewportWidthInPx}px - 240px)`
            : `calc(${viewportWidthInPx}px - 65px)`,
        }}
      >
        {/* Chat messages container */}
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "80%",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            overflowY: "auto",
            maxHeight: "calc(100% - 120px)",
          }}
        >
          {chatMessages.map((message, index) => (
            <div
              key={index}
              style={{
                textAlign: message.user ? "right" : "left",
                margin: "8px",
                padding: "10px",
                borderRadius: "8px",
                background: message.user ? "#5bc0de" : "#e0e0e0",
                color: message.user ? "white" : "black",
              }}
            >
              {message.text}
            </div>
          ))}
        </Paper>

        {/* User input field */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "20px",
          }}
        >
          <TextField
            label="Type a message"
            variant="outlined"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{ flex: 1 }}
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            style={{
              marginLeft: "10px",
              backgroundColor: "#5bc0de", // Background color similar to GPT-3
              borderRadius: "20px", // Increased border radius for a rounded appearance
              color: "white", // Text color
              fontWeight: "bold", // Bold text
              boxShadow: "none", // Remove the button shadow
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBox;
