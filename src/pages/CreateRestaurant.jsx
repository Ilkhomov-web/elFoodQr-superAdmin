import { Box, Container } from "@mui/material";
import React from "react";
import CreateRestaurantForm from "../components/CreateRestaurantForm";

function CreateRestaurant() {
  return (
    <Box>
      <Container maxWidth="lg">
        <CreateRestaurantForm />
      </Container>
    </Box>
  );
}

export default CreateRestaurant;
