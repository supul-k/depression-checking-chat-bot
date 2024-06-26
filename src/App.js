import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ActivityPage from "./pages/ActivityPage";
import ActivityChatPage from "./Components/ActivityChat";
import MainDrawer from "./Components/MainDrawer";
import MediChatPage from "./pages/MediChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Layout from "./Layout/Layout";
import SubActivityPage from "./pages/SubActivityPage"

function App() {
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  return (
    <div className="App">
      <Router>
        <div>
          <MainDrawer
            open={open}
            setOpen={setOpen}
            setOpenRegisterModal={setOpenRegisterModal}
            setOpenLoginModal={setOpenLoginModal}
          />
          <Layout open={open}>
            <Routes>
              <Route path="/" element={<HomePage open={open} />} />
              <Route path="/subactivity/:index" element={<SubActivityPage/>} />
              <Route
                path="/medihelp"
                element={
                  <MediChatPage
                    open={open}
                    setOpenLoginModal={setOpenLoginModal}
                  />
                }
              />
              <Route
                path="/activity"
                element={
                  <ActivityPage
                    open={open}
                    setOpenLoginModal={setOpenLoginModal}
                  />
                }
              />
              <Route path="/activitychat" element={<ActivityChatPage />} />
            </Routes>
          </Layout>
        </div>
        {openLoginModal && (
          <LoginPage
            openLoginModal={openLoginModal}
            setOpenLoginModal={setOpenLoginModal}
            setOpenRegisterModal={setOpenRegisterModal}
          />
        )}

        {openRegisterModal && (
          <RegisterPage
            openRegisterModal={openRegisterModal}
            setOpenRegisterModal={setOpenRegisterModal}
            setOpenLoginModal={setOpenLoginModal}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
