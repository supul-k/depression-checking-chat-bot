import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import MainDrawer from "./Components/MainDrawer";
import MediChatPage from "./pages/MediChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Box } from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <div className="App">
      <Router>
        <div >
          <Box sx={{ display: "flex", width: '100vw', height:'100vh'}}>
            <MainDrawer open={open} setOpen={setOpen}/>
            <Routes>
              <Route path="/" element={<HomePage open={open}/>} />
              <Route path="/medihelp" element={<MediChatPage open={open} setOpenLoginModal={setOpenLoginModal}/>} />
              <Route path="/activity" element={<ActivityPage open={open} setOpenLoginModal={setOpenLoginModal}/>} />
              <Route path="/login" element={<LoginPage openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/>} />
              <Route path="/register" element={<RegisterPage openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal}/>} />
            </Routes>
          </Box>
          {/* < Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
