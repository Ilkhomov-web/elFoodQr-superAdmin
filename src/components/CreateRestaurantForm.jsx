import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "./FileUpload";

function CreateRestaurantForm() {
  const [restaurantName, setRestaurantName] = useState("");
  const [logoFile, setLogoFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restoran:", restaurantName);
    console.log("Yuklangan fayl:", logoFile);
  };

  const handlePhoneNum = () => {};

  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "100%",
            background: "white",
            margin: "20px 0px",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Create New Restaurant
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ p: 3, display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <FileUpload onImageSelect={setLogoFile} />
            {/* name */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography color="rgb(200, 16, 158)">Restoran Name</Typography>
              <TextField
                sx={{ width: "85%" }}
                id="outlined-basic"
                label="Restoran Name"
                variant="outlined"
              />
            </Box>
            {/* id */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography color="rgb(200, 16, 158)">Restoran ID</Typography>
              <TextField
                sx={{ width: "85%" }}
                id="outlined-basic"
                label="Restoran ID"
                variant="outlined"
              />
            </Box>
            {/* restoran admin name */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography color="rgb(200, 16, 158)">
                Restoran Admin Name
              </Typography>
              <TextField
                sx={{ width: "80%" }}
                id="outlined-basic"
                label="Restoran Admin Name"
                variant="outlined"
              />
            </Box>
            {/* restoran admin Number */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Typography color="rgb(200, 16, 158)">
                Restoran Admin Phone
              </Typography>
              <TextField
                sx={{ width: "80%" }}
                id="outlined-basic"
                label="Restoran Admin Phone"
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CreateRestaurantForm;
