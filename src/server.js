require("dotenv").config();
const express = require("express");
const cors = require("cors");

const alunoRoutes = require("./routes/alunoRoutes.js");
const professorRoutes = require("./routes/professorRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
// ====================================================================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", alunoRoutes);
app.use("/api", professorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
