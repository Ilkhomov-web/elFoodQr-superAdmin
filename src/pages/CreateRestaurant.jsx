import { Box, Container } from "@mui/material";
import React from "react";
import CreateRestaurantForm from "../components/CreateRestaurantForm";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function CreateRestaurant() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />

      <Container maxWidth="lg">
        <CreateRestaurantForm />
      </Container>
    </Box>
  );
}

export default CreateRestaurant;
