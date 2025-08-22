import React from "react";
import { Typography, Box } from "@mui/material";

function Header() {
  return (
    <Box textAlign="center" mb={4}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Expense Tracker
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Track your income and expenses efficiently
      </Typography>
    </Box>
  );
}

export default Header;
