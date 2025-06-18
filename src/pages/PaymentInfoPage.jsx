import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import PaymentResCard from "../components/PaymentResCard";

function PaymentInfoPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg">
        <Typography color="black" variant="h4" sx={{ margin: "20px 0px" }}>
          Payment Info
        </Typography>
        <PaymentResCard />
      </Container>
    </Box>
  );
}

export default PaymentInfoPage;
