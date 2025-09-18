const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lista todos os professores
const listarProfessores = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível listar os professores." });
  }
};

// Cadastra um novo professor
const cadastrarProfessor = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const novoProfessor = await prisma.professor.create({
      data: {
        nome,
        email,
        idade: parseInt(idade),
      },
    });
    res.status(201).json(novoProfessor);
  } catch (error) {
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ error: "O e-mail informado já está em uso." });
    }
    res.status(500).json({ error: "Falha ao cadastrar o professor." });
  }
};

// Atualiza um professor
const atualizarProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const professorAtualizado = await prisma.professor.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.status(200).json(professorAtualizado);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Professor não encontrado." });
    }
    res.status(500).json({ error: "Não foi possível atualizar o professor." });
  }
};

// Deleta um professor
const deletarProfessor = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.professor.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Professor não encontrado." });
    }
    res.status(500).json({ error: "Falha ao deletar o professor." });
  }
};

module.exports = {
  listarProfessores,
  cadastrarProfessor,
  atualizarProfessor,
  deletarProfessor,
};
