// src/components/Balance.js
import React, { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { TransactionContext } from "../context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Card sx={{ mb: 3, bgcolor: "#1976d2", color: "white" }}>
      <CardContent>
        <Typography variant="h6">Your Balance</Typography>
        <Typography variant="h4">₹{total}</Typography>
      </CardContent>
    </Card>
  );
};

export default Balance;
