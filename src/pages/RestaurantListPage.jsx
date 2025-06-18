import { Box, Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import RestautrandInfoTable from "../components/RestautrandInfoTable";
import RestaurantList from "../data/RestaurantList";

function RestaurantListPage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg">
        <RestautrandInfoTable RestaurantList={RestaurantList} />
      </Container>
    </Box>
  );
}

export default RestaurantListPage;
