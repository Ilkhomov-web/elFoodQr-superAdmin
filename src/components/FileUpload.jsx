import React, { useState } from "react";
import { Box, Button, Typography, Avatar } from "@mui/material";

function FileUpload({ onImageSelect }) {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      onImageSelect(file);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="subtitle1" mb={1} color="rgb(200, 16, 158)">
        Restoran rasmi / logosi
      </Typography>

      {preview && (
        <Avatar
          src={preview}
          alt="preview"
          sx={{
            width: 150,
            height: 150,
            mb: 2,
            border: "2px solid rgb(200, 16, 158)",
          }}
        />
      )}

      <Button
        variant="contained"
        sx={{
          width: "50%",
          background: "white",
          color: "gray",
          display: "flex",
          gap: "30px",
          padding: "20px 20px",
        }}
        // onClick={handleFileChange}
        component="label"
      >
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileChange}
        />
        <Box component={"img"} src="/public/uploadImg.png"></Box>
        <Typography>
          Drag image here or{" "}
          <span style={{ color: "rgb(200, 16, 158)" }}>Browse image</span>
        </Typography>
      </Button>
    </Box>
  );
}

export default FileUpload;
