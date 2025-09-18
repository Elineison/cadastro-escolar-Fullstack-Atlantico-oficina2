// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3000/api";
  const alunoForm = document.getElementById("aluno-form");
  const alunosTbody = document.getElementById("alunos-tbody");

  // Função para buscar os alunos na API e exibir na tabela
  async function fetchAlunos() {
    try {
      const response = await fetch(`${apiUrl}/alunos`);
      const alunos = await response.json();

      // Limpa a tabela antes de preencher
      alunosTbody.innerHTML = "";

      // Adiciona cada aluno como uma nova linha na tabela
      alunos.forEach((aluno) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${aluno.id}</td>
                    <td>${aluno.nome}</td>
                    <td>${aluno.email}</td>
                    <td>${aluno.idade}</td>
                `;
        alunosTbody.appendChild(tr);
      });
    } catch (error) {
      console.error("Falha ao buscar alunos:", error);
    }
  }

  // Adiciona um evento para quando o formulário for enviado
  alunoForm.addEventListener("submit", async (event) => {
    // Impede o comportamento padrão do formulário (que recarrega a página)
    event.preventDefault();

    // Pega os dados do formulário
    const formData = new FormData(alunoForm);
    const data = new URLSearchParams(formData);

    try {
      // Envia os dados para a API
      const response = await fetch(`${apiUrl}/alunos`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        // Se o cadastro foi bem-sucedido, limpa o formulário e atualiza a lista
        alunoForm.reset();
        fetchAlunos();
        alert("Aluno cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar aluno.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  });

  // Chama a função para buscar os alunos assim que a página carrega
  fetchAlunos();
});
