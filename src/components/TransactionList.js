import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  if (transactions.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        No transactions yet.
      </Typography>
    );
  }

  return (
    <List sx={{ maxWidth: 500, margin: "20px auto" }}>
      {transactions.map((t) => (
        <React.Fragment key={t.id}>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                color="error"
                onClick={() => deleteTransaction(t.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${t.category} - ₹${Math.abs(t.amount)}`}
              secondary={t.amount > 0 ? "Income" : "Expense"}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TransactionList;
