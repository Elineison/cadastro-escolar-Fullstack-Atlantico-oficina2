document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "http://localhost:3000/api";
  const alunoForm = document.getElementById("aluno-form");
  const alunosTbody = document.getElementById("alunos-tbody");

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
        alert("Aluno cadastrado com sucesso!");
      } else {
        alert("Erro ao cadastrar aluno.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  });

  fetchAlunos();
});
