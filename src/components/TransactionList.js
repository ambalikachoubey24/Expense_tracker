import Paper from "@mui/material/Paper";
import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
function createExpense(date, category, amount) {
  return { date, category, amount };
}

const Expenses = [
  createExpense("10-12-2025", "Food", 250),
  createExpense("02-12-2025", "Transport", 100),
  createExpense("20-08-2025", "Shopping", 500),
  createExpense("25-08-2024", "Entertainment", 300),
];

export default function TransactionList() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: "120px",
        maxheight: 200,
        maxWidth: 350,
        border: "2px solid black",
      }}
    >
      <Table sx={{}} aria-label="simple table">
        <TableHead sx={{ "& th": { fontWeight: "bold" } }}>
          <TableRow sx={{ backgroundColor: "#A0A0A0" }}>
            <TableCell align="center">DATE</TableCell>
            <TableCell align="center">CATEGORY</TableCell>
            <TableCell align="center">AMOUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {Expenses.map((expense) => (
            <TableRow key={Expenses.date} sx={{backgroundColor:'lightpink'}}>
              <TableCell align="center" component="th" scope="expense" >
                {expense.date}
              </TableCell>
              <TableCell align="center" >{expense.category}</TableCell>
              <TableCell align="center">{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
