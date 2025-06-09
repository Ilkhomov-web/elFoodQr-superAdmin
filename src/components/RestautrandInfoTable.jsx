import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function RestautrandInfoTable(props) {
  const { RestaurantList } = props;

  return (
    <div>
      <Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Restaurand List
        </Typography>
        <TableContainer
          component={Paper}
          sx={{ marginBottom: "30px", padding: "20px" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>
                  Restaurant Name
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Restaurant Admin
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Admin Number
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Current Month Payment
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: "bold" }}>
                  Add Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RestaurantList.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/restaurant-details`} //${item.resLink}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {item.resName}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{item.resAdm}</TableCell>
                  <TableCell align="center">{item.resAdmNum}</TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      background:
                        item.resPay.toString() === "true" ? "green" : "red",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    {item.resPay.toString()}
                  </TableCell>
                  <TableCell align="center">{item.resAddDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default RestautrandInfoTable;
