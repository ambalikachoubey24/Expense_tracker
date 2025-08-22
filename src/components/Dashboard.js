import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import Header from "./Header";
import Balance from "./Balance";
import SummaryCards from "./SummaryCards";
import AddTransactionForm from "./AddTransactionForm";
import TransactionList from "./TransactionList";
import ExpensesChart from "./ExpensesChart";

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      <Grid container spacing={3}>
        {/* Balance Section */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{ p: 3, borderRadius: 3, textAlign: "center" }}
            elevation={3}
          >
            <Balance />
          </Paper>
        </Grid>

        {/* Income & Expense Cards */}
        <Grid item xs={12} md={8}>
          <SummaryCards />
        </Grid>

        {/* Add Transaction Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3 }} elevation={3}>
            <AddTransactionForm />
          </Paper>
        </Grid>

        {/* Transaction List */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{ p: 3, borderRadius: 3, maxHeight: 400, overflowY: "auto" }}
            elevation={3}
          >
            <TransactionList />
          </Paper>
        </Grid>

        {/* Charts Section */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 3, width: "150%" }} elevation={3}>
            <ExpensesChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
