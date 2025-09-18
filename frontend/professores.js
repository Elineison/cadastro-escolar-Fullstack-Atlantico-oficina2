document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3000/api";
  const professorForm = document.getElementById("professor-form");
  const professoresTbody = document.getElementById("professores-tbody");
  const notification = document.getElementById("notification");

  // Função para mostrar notificação
  function showNotification(message, type) {
    notification.textContent = message;
    notification.className = type;
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // Função para buscar os professores na API e exibir na tabela
  async function fetchProfessores() {
    try {
      const response = await fetch(`${apiUrl}/professores`);
      const professores = await response.json();
      professoresTbody.innerHTML = "";
      professores.forEach((professor) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${professor.id}</td>
                    <td>${professor.nome}</td>
                    <td>${professor.email}</td>
                    <td>${professor.idade}</td>
                `;
        professoresTbody.appendChild(tr);
      });
    } catch (error) {
      console.error("Falha ao buscar professores:", error);
    }
  }

  // Adiciona um evento para quando o formulário for enviado
  professorForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(professorForm);
    const data = new URLSearchParams(formData);

    try {
      const response = await fetch(`${apiUrl}/professores`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        professorForm.reset();
        fetchProfessores();
        showNotification("Professor cadastrado com sucesso!", "success");
      } else {
        const errorData = await response.json();
        showNotification(`Erro: ${errorData.error}`, "error");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      showNotification("Erro de conexão com a API.", "error");
    }
  });

  fetchProfessores();
});
