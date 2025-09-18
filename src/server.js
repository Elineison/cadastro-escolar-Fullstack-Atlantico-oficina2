// src/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors"); // <-- 1. IMPORTE O PACOTE CORS

const alunoRoutes = require("./routes/alunoRoutes.js");
const professorRoutes = require("./routes/professorRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// ====================================================================
// A SOLUÇÃO ESTÁ AQUI
// Use o middleware do CORS ANTES de definir suas rotas.
// Isso adiciona os cabeçalhos necessários para permitir a comunicação.
app.use(cors()); // <-- 2. HABILITE O CORS
// ====================================================================

// Middleware para interpretar JSON
app.use(express.json());
// Middleware para interpretar dados de formulário (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Usando as rotas
app.use("/api", alunoRoutes);
app.use("/api", professorRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
