import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { ChatResponseApi, ChatEvaluateApi } from "../api/Axios";
import {
  Box,
  Button,
  Paper,
  Modal,
  Typography,
  CircularProgress,
  IconButton,
  InputBase,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatBox = ({ open }) => {
  const [inputMessage, setInputMessage] = useState("");
  const [botResponseMessage, setBotResponseMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [isChatbotResponding, setIsChatbotResponding] = useState(false);
  const [evaluateResponseMessage, setEvaluateResponseMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    const decodeToken = (token) => {
      if (token) {
        try {
          const decoded = jwtDecode(token);
          console.log("decoded", decoded);
          setUserName(decoded.username);
        } catch (error) {
          console.error("Error decoding JWT token:", error);
        }
      } else {
        console.error("Token not found in localStorage.");
      }
    };
    decodeToken(token);
  }, []);

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
      ChatResponseApi(sentData)
        .then((response) => {
          setInputMessage("");
          if (response.data.status === true) {
            if (response.data.message === "") {
              setBotResponseMessage("I couldn't understand that");
            } else {
              let message = response.data.message.replace(/User/g, userName);
              setBotResponseMessage(message);
            }
            setIsChatbotResponding(false);
          } else {
            setBotResponseMessage("Response failed");
            setIsChatbotResponding(false);
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

  const handleEvaluate = () => {
    if (userMessages.length !== 0) {
      setEvaluateResponseMessage("");
      const evaluateData = userMessages;
      setIsChatbotResponding(true);
      ChatEvaluateApi(evaluateData)
        .then((response) => {
          console.log("response", response.data.message);
          console.log("status", response.data.status);
          if (response.data.status === true) {
            if (response.data.message === "") {
              setEvaluateResponseMessage("Evaluation failed");
            } else {
              const originalNumber = response.data.message;
              const formattedNumber = parseFloat(originalNumber).toFixed(2);
              const messageWithPercentage = `${formattedNumber}%`;
              setEvaluateResponseMessage(messageWithPercentage);
              handleOpen();
            }
            setIsChatbotResponding(false);
          } else {
            setEvaluateResponseMessage("Response failed");
            setIsChatbotResponding(false);
          }
        })
        .catch((error) => {
          console.log("error", error.response.data.message);
          setEvaluateResponseMessage(
            "An error occurred while processing the request."
          );
        });
    }
  };

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
          height: `calc(100vh - 64px)`,
          width: `calc(100vw - 240px)`,
          marginTop: "64px",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // justifyContent: "flex-end",
            maxWidth: "61%",
            minWidth: "60%",
            height: `calc(100vh - 10px)`,
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            overflowY: "auto",
            margin: "1%",
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
            maxWidth: "61%",
            minWidth: "60%",
            backgroundColor: "transparent",
            margin: "1%",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "90%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, maxWidth: "100%", width: "100%" }}
              placeholder="Enter your message"
              inputProps={{ "aria-label": "Enter your message" }}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (isChatbotResponding) {
                  return;
                }
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
          <Button
            variant="contained"
            onClick={handleEvaluate}
            style={{
              width: "10%",
              backgroundColor: "#0C0404",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              boxShadow: "none",
              marginLeft: "10px",
              p: "2px 4px",
            }}
            disabled={userMessages.length === 0 || isChatbotResponding}
          >
            Evaluate
          </Button>
        </Paper>
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "#5bc0de", // Set your background color here
              borderRadius: "10px", // Set your border radius here
              padding: "20px", // Set your padding here
            }}
          >
            {evaluateResponseMessage !== "" ? (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Calculated Depression Level
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {evaluateResponseMessage}
                </Typography>
              </>
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default ChatBox;
