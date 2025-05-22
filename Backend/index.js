const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Expense = require("./model.js");
const expenseRoutes = require("./expenseRoutes.js");
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
