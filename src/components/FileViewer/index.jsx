import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function FileViewer({ file }) {
  if (!file) {
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
        <Typography variant="body2">Name: {file.name}</Typography>
        <Typography variant="body2">Type: {file.type}</Typography>
        <Typography variant="body2">Size: {file.size} bytes</Typography>
      </Box>
    </Paper>
  );
}
