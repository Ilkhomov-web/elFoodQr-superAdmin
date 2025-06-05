import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import Switch from "@mui/material/Switch";

function SignInPage() {
  const [checked, setChecked] = React.useState(true);

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
              <TextField label="Email" variant="standard" />
              <TextField label="Password" variant="standard" />
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Switch checked={checked} onChange={handleChange} />
                <Typography>Remember me</Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#21D4FD",
                background:
                  "linear-gradient(157deg, rgba(33, 212, 253, 1) 0%, rgba(33, 82, 255, 1) 100%)",
                color: "white",
              }}
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
