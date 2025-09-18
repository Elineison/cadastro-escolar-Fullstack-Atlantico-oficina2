const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Lista todos os alunos
const listarAlunos = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: "Não foi possível listar os alunos." });
  }
};

// Cadastra um novo aluno
const cadastrarAluno = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const novoAluno = await prisma.aluno.create({
      data: {
        nome,
        email,
        idade: parseInt(idade),
      },
    });
    res.status(201).json(novoAluno);
  } catch (error) {
    if (error.code === "P2002") {
      return res
        .status(400)
        .json({ error: "O e-mail informado já está em uso." });
    }
    res.status(500).json({ error: "Falha ao cadastrar o aluno." });
  }
};

// Atualiza um aluno
const atualizarAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const alunoAtualizado = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.status(200).json(alunoAtualizado);
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Aluno não encontrado." });
    }
    res.status(500).json({ error: "Não foi possível atualizar o aluno." });
  }
};

// Deleta um aluno
const deletarAluno = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.aluno.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send(); // 204 No Content
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Aluno não encontrado." });
    }
    res.status(500).json({ error: "Falha ao deletar o aluno." });
  }
};

module.exports = {
  listarAlunos,
  cadastrarAluno,
  atualizarAluno,
  deletarAluno,
};
