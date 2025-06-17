import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color="#67748E">© 2025, made with </Typography>
            <Typography color="#67748E">By Ilkhomov-web</Typography>
          </Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ListItem>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "#67748E" }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "#67748E" }}
              >
                Create
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "#67748E" }}
              >
                Payment
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={""}
                style={{ textDecoration: "none", color: "#67748E" }}
              >
                Developer
              </Link>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
