const express = require("express");
const router = express.Router();
const Expense = require("../models/expense");

// Criar uma despesa
router.post("/", async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todas as despesas
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
    try {
      await Expense.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Despesa removida com sucesso" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar a despesa" });
    }
  });
  
module.exports = router;
