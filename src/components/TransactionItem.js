import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

function TransactionItem({ transaction, index }) {
  const { deleteTransaction } = useContext(TransactionContext);

  return (
    <li
      style={{
        border: "1px solid #ccc",
        margin: "5px 0",
        padding: "10px",
        borderLeft:
          transaction.amount > 0 ? "5px solid green" : "5px solid red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>
        {transaction.date} - {transaction.category}
      </span>
      <span>
        {transaction.amount > 0
          ? `+₹${transaction.amount}`
          : `-₹${Math.abs(transaction.amount)}`}
      </span>
      <button
        onClick={() => deleteTransaction(index)}
        style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
      >
        X
      </button>
    </li>
  );
}

export default TransactionItem;
