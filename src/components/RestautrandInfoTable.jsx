import {
  Box,
  Button,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

function RestautrandInfoTable(props) {
  const { RestaurantList } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
                  <TableCell
                    aria-describedby={id}
                    onClick={handleClick}
                    align="center"
                    sx={{
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      "&:hover": {
                        background: "rgba(233, 233, 233, 0.87)",
                        borderRadius: "12px",
                      },
                    }}
                  >
                    {item.resAdm} <ThumbUpAltIcon color="primary" />
                  </TableCell>
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
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box sx={{ padding: "10px" }}>
            <Button>
              <ThumbUpAltIcon />
              <Typography>Zo'r</Typography>
            </Button>
            <Button>
              <MoneyOffIcon />
              <Typography>To'lov</Typography>
            </Button>
            <Button>
              <PhoneCallbackIcon />
              <Typography>Aloqa</Typography>
            </Button>
          </Box>
        </Popover>
      </Box>
    </div>
  );
}

export default RestautrandInfoTable;
