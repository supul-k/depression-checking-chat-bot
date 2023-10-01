import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Components/Footer";
import MainDrawer from "./Components/MainDrawer";
import { Box } from "@mui/material";
import MediChatPage from "./pages/MediChatPage";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <div >
          <Box sx={{ display: "flex", width: '100vw', height:'100vh'}}>
            <MainDrawer open={open} setOpen={setOpen}/>
            <Routes>
              <Route path="/" element={<HomePage open={open}/>} />
              <Route path="/medihelp" element={<MediChatPage open={open}/>} />
            </Routes>
          </Box>
          {/* < Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
