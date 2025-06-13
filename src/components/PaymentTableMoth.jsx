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

function PaymentTableMoth(props) {
  const { RestaurantList } = props;

  return (
    <Box sx={{ marginBottom: "30px" }}>
      {RestaurantList.map((item) => (
        <Box key={item.id} sx={{ marginBottom: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            {item.resName} - To'lov holati (12 oy)
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Oy</TableCell>
                  <TableCell>To'lov Holati</TableCell>
                  <TableCell align="center">Admin</TableCell>
                  <TableCell align="center">Admin Raqami</TableCell>
                  <TableCell align="center">Qo'shilgan sana</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {item.payments.map((p, index) => (
                  <TableRow key={index}>
                    <TableCell>{p.month}</TableCell>
                    <TableCell
                      sx={{
                        backgroundColor: p.paid ? "green" : "red",
                        color: "white",
                        borderRadius: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {p.paid ? "To'langan" : "To'lanmagan"}
                    </TableCell>
                    <TableCell align="center">{item.resAdm}</TableCell>
                    <TableCell align="center">{item.resAdmNum}</TableCell>
                    <TableCell align="center">
                      {p.paidAt ? p.paidAt : "Kiritilmagan"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
}

export default PaymentTableMoth;
