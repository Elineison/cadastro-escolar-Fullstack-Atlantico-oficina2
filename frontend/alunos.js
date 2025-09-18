document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3000/api";
  const alunoForm = document.getElementById("aluno-form");
  const alunosTbody = document.getElementById("alunos-tbody");
  const notification = document.getElementById("notification");

  // Função para mostrar notificação
  function showNotification(message, type) {
    notification.textContent = message;
    notification.className = type; // success ou error
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000); // Esconde a notificação após 3 segundos
  }

  // Função para buscar os alunos na API e exibir na tabela
  async function fetchAlunos() {
    try {
      const response = await fetch(`${apiUrl}/alunos`);
      const alunos = await response.json();
      alunosTbody.innerHTML = "";
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
    event.preventDefault();
    const formData = new FormData(alunoForm);
    const data = new URLSearchParams(formData);

    try {
      const response = await fetch(`${apiUrl}/alunos`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alunoForm.reset();
        fetchAlunos();
        showNotification("Aluno cadastrado com sucesso!", "success");
      } else {
        const errorData = await response.json();
        showNotification(`Erro: ${errorData.error}`, "error");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      showNotification("Erro de conexão com a API.", "error");
    }
  });

  fetchAlunos();
});
