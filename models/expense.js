const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
    {
      name: String,
      amount: Number,
      category: String,
    },
    { timestamps: true }
  );

module.exports = mongoose.model("Expense", ExpenseSchema);
