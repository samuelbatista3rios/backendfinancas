require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expenseRoutes = require("./routes/expenseRoutes");



const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/expenses", expenseRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

// Definir porta e iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
