import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { Typography } from "@mui/material";

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

      {userLoginSucces && <Typography variant="h1">Login</Typography>}
      {!userLoginSucces && <Typography variant="h1">Error</Typography>}
    </div>
  );
}

export default HomePage;
