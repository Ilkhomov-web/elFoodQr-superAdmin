import React from "react";

const InfoData = [
  {
    id: 1,
    title: "Today’s Money",
    value: "",
    percentage: "+55%",
    icon: <AttachMoneyIcon style={{ color: "#4caf50" }} />,
  },
  {
    id: 2,
    title: "Today’s Users",
    value: "",
    percentage: "+20%",
    icon: <PeopleIcon style={{ color: "#2196f3" }} />,
  },
  {
    id: 3,
    title: "New Clients",
    value: "",
    percentage: "-2%",
    icon: <PersonAddIcon style={{ color: "#f44336" }} />,
  },
  {
    id: 4,
    title: "Sales",
    value: "",
    percentage: "+5%",
    icon: <ShoppingCartIcon style={{ color: "#ff9800" }} />,
  },
];

function DashboardInfoCard() {
  return (
    <div>
      <Box></Box>
    </div>
  );
}

export default DashboardInfoCard;
