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
    // 👉 logoFile ni FormData orqali Supabase yoki backendga yuborish mumkin
  };
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
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CreateRestaurantForm;
