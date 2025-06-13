import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Switch,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import PaymentTableMoth from "../components/PaymentTableMoth";
import RestaurantList from "../data/RestaurantList";

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
              <PhoneIcon
                sx={{
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
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
          <Box
            sx={{
              width: "100%",
              margin: "30px 0px",
              display: "flex",
              justifyContent: "left",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: "358px",
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography>Profile Settings </Typography>
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
            <Box
              sx={{
                width: "100%",
                background: "white",
                padding: "20px",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <Box>
                <Typography>QR Scan Settings </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    height={"200px"}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Typography>
                      Current QR Code:{" "}
                      <Link style={{ color: "gray" }} to={""}>
                        https://elka-food/menu=simple.food-menu
                      </Link>{" "}
                    </Typography>
                    <Button
                      sx={{
                        width: "100%",
                        background: "#FF0080",
                        background:
                          "linear-gradient(165deg,rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 1) 100%)",
                        color: "white",
                      }}
                    >
                      New Generate Qr code
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                component={"img"}
                src="/public/qrCode.svg"
                sx={{
                  width: "200px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "5px 5px 10px 0px black",
                }}
              ></Box>
            </Box>
          </Box>
          <Box>
            <Box>
              <PaymentTableMoth RestaurantList={RestaurantList} />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RestaurantDetails;
