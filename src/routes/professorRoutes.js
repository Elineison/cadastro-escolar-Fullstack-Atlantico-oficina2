const express = require("express");
const router = express.Router();
const professorController = require("../controllers/professorController");

router.get("/professores", professorController.listarProfessores);
router.post("/professores", professorController.cadastrarProfessor);
router.put("/professores/:id", professorController.atualizarProfessor);
router.delete("/professores/:id", professorController.deletarProfessor);

module.exports = router;
