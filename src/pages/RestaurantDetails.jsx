import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import {
  Box,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function RestaurantDetails(props) {
  const [open, setOpen] = useState(false);
  // open menu func
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div>
      <Navbar toggleDrawer={toggleDrawer} />
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            width: "100%",
            height: "308px",
            backgroundImage: "url(/resDetailsImg.jpg)",
            backgroundSize: "cover",
            padding: "20px",
            margin: "20px",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ color: "white" }} variant="h4">
              Profile
            </Typography>
            <Box>
              <PhoneIcon sx={{ color: "white" }} />
            </Box>
          </Box>
          <Box
            sx={{
              width: "90%",
              background: "rgba(255, 255, 255, 0.67)",
              margin: "0 auto",
              marginTop: "195px",
              borderRadius: "12px",
              padding: "10px",
              backdropFilter: "blur(10px)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Box
                component={"img"}
                src="/public/simpleLogo.jpg"
                sx={{ borderRadius: "12px", width: "80px" }}
              ></Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  Simple Food
                </Typography>
                <Typography>Added Date: 06.01.2024</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: "yellow", width: "100%" }}>
            <Box
              sx={{
                width: "358px",
                background: "white",
                padding: "10px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography>Platform Settings </Typography>
              <Box>
                <Typography>ACCOUNT</Typography>
                <FormGroup>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="To'lov qilmagan bulsa Vaqtinchalik uzib qo'yish"
                  />
                </FormGroup>
              </Box>
            </Box>
            <Box></Box>
            <Box></Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RestaurantDetails;
