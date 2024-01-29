import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginUserApi } from "../api/Axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Login({ openLoginModal, setOpenLoginModal, setOpenRegisterModal }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    handleLogin(loginData);
  };

  const handleLogin = async (loginData) => {
    LoginUserApi(loginData)
      .then((response) => {
        console.log("response", response);
        if (response.data.status === true) {
          alert("login success");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("user_id", response.data.user_id);
          window.location.reload();
          navigate("/");
          setOpenLoginModal(false);       
         
        } else {
          alert("login failed");
        }
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
      });
  };

  const handleGoToHomePage = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      <Modal
        sx={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        keepMounted
        open={openLoginModal}
        // onClose={handleClose}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
      >
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Typography component="h1" variant="h5" sx={{ marginTop: "50px" }}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, m: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Button onClick={handleGoToHomePage}>Close</Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setOpenLoginModal(false);
                    setOpenRegisterModal(true);                    
                  }}
                >
                  Don't have an account? Sign Up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
