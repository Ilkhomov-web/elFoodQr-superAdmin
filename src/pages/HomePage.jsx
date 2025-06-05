import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function HomePage() {
  const [open, setOpen] = React.useState(false);
  // open menu func
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <Dashboard toggleDrawer={toggleDrawer} open={open} />
      <Navbar toggleDrawer={toggleDrawer} />
    </div>
  );
}

export default HomePage;
