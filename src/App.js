import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainDrawer from "./Components/MainDrawer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Box sx={{ display: "flex" }}>
            <MainDrawer />
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/other" component={OtherPage} /> */}
            </Routes>
          </Box>
        </div>
      </Router>
    </div>
  );
}

export default App;
