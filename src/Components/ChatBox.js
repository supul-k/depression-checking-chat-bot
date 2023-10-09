import React, { useState } from "react";
import { Box, TextField, Button, Paper } from "@mui/material";

const ChatBox = ({ open }) => {
  const [inputMessage, setInputMessage] = useState(""); 
  const [chatMessages, setChatMessages] = useState([]);

  const viewportWidthInPx = window.innerWidth;

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setChatMessages([...chatMessages, { text: inputMessage, user: true }]);
      setInputMessage("");

      setTimeout(() => {
        const chatbotResponse = "This is a chatbot response.";
        setChatMessages([
          ...chatMessages,
          { text: chatbotResponse, user: false },
        ]);
      }, 1000);
    }
  };
  console.log("1:", chatMessages);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: 'space-between',
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
            maxHeight: "calc(100% - 120px)",
            marginTop: '100px'
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
            sx={{marginBottom: '20px'}}
            color="primary"
            label="Type a message"
            variant="outlined"
            value={inputMessage}
            inputProps={{ 
              style: { 
                color: 'white',
                borderColor: 'white',
              },
              placeholder: 'Enter your message',  
          }}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{ flex: 1,  }}
            focused
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            style={{
              marginLeft: "10px",
              backgroundColor: "#5bc0de", 
              borderRadius: "20px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "none",
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
