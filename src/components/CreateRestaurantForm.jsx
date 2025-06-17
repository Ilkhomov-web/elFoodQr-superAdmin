import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "./FileUpload";

function CreateRestaurantForm() {
  const [restaurantName, setRestaurantName] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [adminPhone, setAdminPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restoran:", restaurantName);
    console.log("Yuklangan fayl:", logoFile);
    console.log("Telefon:", adminPhone);
  };

  const handlePhoneNum = (e) => {
    const value = e.target.value;

    // Agar foydalanuvchi orqaga o‘chirib yuborsa, doim +998 ( qoldir
    if (!value.startsWith("+998 ")) {
      setAdminPhone("+998 ");
      return;
    }

    // Agar umumiy uzunligi 20 dan oshsa (yaxshi format nazorati uchun)
    if (value.length > 20) return;

    setAdminPhone(value);
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
                label="Restoran Name"
                variant="outlined"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
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
                value={adminPhone}
                onChange={handlePhoneNum}
                sx={{ width: "80%" }}
                label="Restoran Admin Phone"
                variant="outlined"
                placeholder="+998 (90) 1234567"
              />
            </Box>
            {/* restoran admin Parol */}
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
                label="Restoran Name"
                variant="outlined"
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default CreateRestaurantForm;
