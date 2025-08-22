import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Grid, Card, CardContent, Typography } from "@mui/material";

function SummaryCards() {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card sx={{ bgcolor: "#e8f5e9" }}>
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary">
              Income
            </Typography>
            <Typography variant="h6" color="green">
              ₹{income.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ bgcolor: "#ffebee" }}>
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary">
              Expense
            </Typography>
            <Typography variant="h6" color="red">
              ₹{Math.abs(expense).toFixed(2)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SummaryCards;
