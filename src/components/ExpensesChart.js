import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Typography } from "@mui/material";

const COLORS = ["#4caf50", "#f44336", "#2196f3", "#ff9800", "#9c27b0"];

function ExpensesChart() {
  const { transactions } = useContext(TransactionContext);

  // Group expenses by category
  const data = transactions.reduce((acc, t) => {
    const existing = acc.find((item) => item.name === t.category);
    if (existing) {
      existing.value += Math.abs(t.amount);
    } else {
      acc.push({ name: t.category, value: Math.abs(t.amount) });
    }
    return acc;
  }, []);

  if (data.length === 0) {
    return <Typography color="text.secondary">No transactions to show chart.</Typography>;
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Expense Breakdown
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default ExpensesChart;
