import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const func = function () {
      axios
        .get("http://localhost:3000/api/expenses/")
        .then((res) => {
          setExpenses(res.data);
        })
        .catch((err) => console.log(err));
    };
    func();
  }, [expenses]);

  function calculateBalance() {
    let balance = 0;

    expenses.map((expense) => {
      if (expense.type === "Debit") balance -= expense.amount;
      else balance += expense.amount;
    });
    return balance;
  }

  const addExpense = (expense) => {
    axios
      .post("http://localhost:3000/api/expenses/", expense)
      .then((res) => setExpenses(...expenses, res.data))
      .catch((err) => console.log(err));
  };

  const deleteExpense = (id) => {
    axios
      .delete(`http://localhost:3000/api/expenses/${id}`)
      .then(() => setExpenses(expenses.filter((exp) => exp._id !== id)))
      .catch((err) => console.log(err));
  };

  const editExpense = (id) => {
    axios
      .delete(`http://localhost:3000/api/expenses/${id}`)
      .then(() => setExpenses(expenses.filter((exp) => exp._id !== id)))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseList
        expenses={expenses}
        deleteExpense={deleteExpense}
        addExpense={addExpense}
        balance={calculateBalance()}
      />
      <ExpenseForm addExpense={addExpense} />
    </>
  );
}

export default App;
