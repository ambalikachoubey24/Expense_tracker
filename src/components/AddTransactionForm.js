import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Box, TextField, Button } from "@mui/material";

function AddTransactionForm() {
  const { addTransaction } = useContext(TransactionContext);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !category || !amount) return;

    addTransaction({ date, category, amount: +amount });
    setDate("");
    setCategory("");
    setAmount("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
    >
      <TextField
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        sx={{ flex: 1 }}
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        sx={{ flex: 1 }}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        sx={{ flex: 1 }}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ flex: 1 }}>
        Add
      </Button>
    </Box>
  );
}

export default AddTransactionForm;
