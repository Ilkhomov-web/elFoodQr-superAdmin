import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

function PaymentResCard() {
  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        borderRadius: "12px",
        margin: "20px 0px",
        padding: "20px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          width: "300px",
          background: "#FF0080",
          background:
            "linear-gradient(165deg,rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 1) 100%)",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "5px 5px 10px 0px rgba(255, 0, 128, 0.45)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar src="/public/simpleLogo.jpg" />
          <Typography color="white" variant="h5">
            Simple Food
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="white" variant="h6">
            Current Moth
          </Typography>
          <DoneOutlineIcon sx={{ color: "white" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="p" color="white">
            Admin
          </Typography>
          <Typography variant="p" color="white">
            Yusuf aka
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentResCard;
