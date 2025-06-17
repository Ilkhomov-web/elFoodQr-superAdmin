import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { Container, Typography } from "@mui/material";
import DashboardInfoCard from "../components/DashboardInfoCard";
import Chart from "../components/Chart";
import RestautrandInfoTable from "../components/RestautrandInfoTable";
import RestaurantList from "../data/RestaurantList";
import Footer from "../components/Footer";

function HomePage() {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const userLoginSucces = localStorage.getItem("login");
  console.log(userLoginSucces);

  return (
    <div>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />

      <Container maxWidth={"lg"}>
        {userLoginSucces ? (
          <>
            <DashboardInfoCard />
            <Chart />
            <RestautrandInfoTable RestaurantList={RestaurantList} />
          </>
        ) : (
          <Typography variant="h1">Error</Typography>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
