const express = require("express");
const Expense = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Get all");
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  const { description, amount, category, type } = req.body;
  console.log(req.body);

  try {
    console.log("Post");
    const newExpense = new Expense({ description, amount, category, type });
    await newExpense.save();
    res.json(newExpense);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log("DLT");
    await Expense.findByIdAndDelete(req.params.id);
    res.send("Expense deleted");
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

//Tried to implement edit feature

// router.put("/:id"),
//   async (req, res) => {
//     const { description, amount, category, type } = req.body;
//     const id = req.params.id;
//     try {
//       await Expense.findByIdAndUpdate(id, {
//         description,
//         amount,
//         category,
//         type,
//       });
//       res.send("Expense updated");
//     } catch (err) {
//       res.status(500).send("Server Error");
//     }
//   };

module.exports = router;
