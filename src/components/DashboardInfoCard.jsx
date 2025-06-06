import { Box, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";

const InfoData = [
  {
    id: 1,
    title: "Today’s Money",
    percentage: "+55%",
    icon: <AttachMoneyIcon style={{ color: "#ffffff" }} />,
    numValue: "$53,000",
  },
  {
    id: 2,
    title: "Today’s Users",
    percentage: "+20%",
    icon: <PeopleIcon style={{ color: "#ffffff" }} />,
    numValue: "2,300",
  },
  {
    id: 3,
    title: "New Clients",
    percentage: "-2%",
    icon: <PersonAddIcon style={{ color: "#ffffff" }} />,
    numValue: "+3,462",
  },
  {
    id: 4,
    title: "Sales",
    percentage: "+5%",
    icon: <ShoppingCartIcon style={{ color: "#ffffff" }} />,
    numValue: "$103,430",
  },
];

function DashboardInfoCard() {
  return (
    <div>
      <Box sx={{ marginBottom: "30px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "30px 0px",
          }}
        >
          {InfoData.map((item) => {
            return (
              <Box
                key={item.id}
                display="flex"
                alignItems="center"
                sx={{
                  background: "white",
                  width: "250px",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "5px 0px 10px 1px gray",
                  transition: "0.6s",
                  "&:hover": {
                    cursor: "pointer",
                    transition: "0.6s",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "165px" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#67748E", fontSize: "20px" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.numValue}{" "}
                      <Typography
                        component="span"
                        sx={{
                          color: item.percentage.startsWith("+")
                            ? "#82D616"
                            : "#f44336",
                        }}
                      >
                        {item.percentage}
                      </Typography>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: "#FF0080",
                      background:
                        "linear-gradient(165deg,rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 1) 100%)",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  >
                    {item.icon}
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "55%",
              height: "253px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "5px 0px 10px 1px gray",
              transition: "0.6s",
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ color: "#67748E", fontSize: "18px" }}>
                  Built by developers
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Soft UI Dashboard
                </Typography>
                <Typography sx={{ color: "#67748E", fontSize: "17px" }}>
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </Typography>
              </Box>
              <Link style={{ textDecoration: "none", color: "#67748E" }}>
                <Typography>Read more {"> "} </Typography>
              </Link>
            </Box>
            <Box
              component={"img"}
              src="/public/rocket.png"
              sx={{
                width: "40%",
                padding: "10px",
                borderRadius: "12px",
                background: "#FF0080",
                background:
                  "linear-gradient(165deg,rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 1) 100%)",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: "42%",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "5px 0px 10px 1px gray",
              background: "#FF0080",
              background:
                "linear-gradient(165deg,rgba(255, 0, 128, 1) 0%, rgba(121, 40, 202, 1) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ color: "white" }}>
                Work with the rockets{" "}
              </Typography>
              <Typography sx={{ color: "white" }}>
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </Typography>
            </Box>
            <Link style={{ textDecoration: "none", color: "white" }}>
              <Typography>Read more {"> "} </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default DashboardInfoCard;
