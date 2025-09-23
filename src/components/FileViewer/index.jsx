import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function FileViewer({ files }) {
  if (!files) {
    return (
      <Typography variant="body1" sx={{ mt: 2 }}>
        No file loaded yet.
      </Typography>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6">Loaded File Details</Typography>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body2">Name: {files[0].name}</Typography>
        <Typography variant="body2">Type: {files[0].type}</Typography>
        <Typography variant="body2">Size: {files[0].size} bytes</Typography>
      </Box>
    </Paper>
  );
}
