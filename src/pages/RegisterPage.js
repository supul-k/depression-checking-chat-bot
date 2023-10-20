import React from "react";
import { RegisterUserUserApi } from "../api/Axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function RegisterPage({ openRegisterModal, setOpenLoginModal, setOpenRegisterModal }) {
//   const handleOpen = () => setOpenRegisterModal(true);
  const handleClose = () => setOpenRegisterModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const RegisterData = {
      email: data.get("email"),
      username: data.get("username"),
      password: data.get("password"),
    };
    console.log("RegisterData", RegisterData);
    handleRegister(RegisterData);
  };

  const handleRegister = async (RegisterData) => {
    RegisterUserUserApi(RegisterData)
      .then((response) => {
        console.log("response", response);
        if (response.data.status === true) {
          alert("registration success");
          setOpenRegisterModal(false);
          setOpenLoginModal(true);
        } else {
          alert("Registration failed!");
        }
      })
      .catch((error) => {
        console.log("error", error.response.data.message);
      });
  };

  return (
    <div>
      {/* <Button
        sx={{ marginTop: "300px", marginLeft: "300px" }}
        onClick={handleOpen}
      >
        Open modal
      </Button> */}
      <Modal
        sx={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        keepMounted
        open={openRegisterModal}
        onClose={handleClose}
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
            Sign Up
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
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
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
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
