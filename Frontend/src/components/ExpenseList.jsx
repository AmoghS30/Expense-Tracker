import React from "react";

function ExpenseList({ expenses, deleteExpense, editExpense, balance }) {
  console.log(expenses);

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense._id}>
            {expense.description} - {expense.amount} - {expense.category} -
            {expense.type}{" "}
            <button onClick={() => deleteExpense(expense._id)}>Delete</button>
            <button onClick={() => editExpense(expense._id)}>Edit</button>
          </li>
        ))}
      </ul>

      <h3>Total balance = {balance}</h3>
    </div>
  );
}

export default ExpenseList;
