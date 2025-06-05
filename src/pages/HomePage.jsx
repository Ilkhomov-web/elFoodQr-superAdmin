import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { Container, Typography } from "@mui/material";
import DashboardInfoCard from "../components/DashboardInfoCard";

function HomePage() {
  const [open, setOpen] = React.useState(false);
  // open menu func
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
          </>
        ) : (
          <Typography variant="h1">Error</Typography>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
