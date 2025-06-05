import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Switch from "@mui/material/Switch";
import { AuthContext } from "../context/AuthContext";

function SignInPage(props) {
  const { email, setEmail, password, setPassword, handleLogin } =
    useContext(AuthContext);

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "250px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                background:
                  "linear-gradient(157deg, rgba(33, 212, 253, 1) 0%, rgba(33, 82, 255, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sign In
            </Typography>
            <Typography sx={{ color: "#8392AB" }}>
              Enter your email and password to sign in
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <TextField
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
              />
              <TextField
                label="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Switch checked={checked} onChange={handleChange} />
                <Typography>Remember me</Typography>
              </Box>
            </Box>
            <Button
              type="submit"
              sx={{
                background: "#21D4FD",
                background:
                  "linear-gradient(157deg, rgba(33, 212, 253, 1) 0%, rgba(33, 82, 255, 1) 100%)",
                color: "white",
              }}
              onClick={handleLogin}
            >
              SIGN IN
            </Button>
            <Typography>Don’t have an account? Sign Up</Typography>
          </Box>
          <Box
            component={"img"}
            sx={{
              width: "900px",
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
            src="/public/loginBg.png"
          ></Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignInPage;
