const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI).then(console.log("Connected"));

const expenseSchema = mongoose.Schema({
  description: { type: String, required: false },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
