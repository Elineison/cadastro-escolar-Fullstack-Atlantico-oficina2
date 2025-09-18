# Sistema de Gestão Escolar (SGA)

Este projeto é uma aplicação web **Fullstack** desenvolvida como avaliação para a **Oficina 2** do curso Fullstack Capacita Brasil C-Jovem, uma parceria entre Avanti e o Instituto Atlântico. O sistema implementa uma **API RESTful** para gerenciar alunos e professores, conectada a uma interface de usuário interativa.

---

## 🖥️ Demonstração Visual

A seguir, uma breve apresentação das principais telas da aplicação.

<p align="center">
<em>Página de Gerenciamento de Alunos</em><br>
<img src="" width="700">
</p>

<p align="center">
<em>Página de Gerenciamento de Professores</em><br>
<img src="" width="700">
</p>

<p align="center">
<em>Exemplo de Notificação de Feedback</em><br>
<img src="" width="400">
</p>

---

## ✨ Funcionalidades

- **Navegação Multi-página:** Interface organizada com seções distintas para Início, Alunos e Professores.
- **Gerenciamento de Alunos:** Funcionalidades completas de CRUD (Criar, Ler, Atualizar, Deletar) para a entidade de alunos.
- **Gerenciamento de Professores:** Funcionalidades completas de CRUD para a entidade de professores.
- **Interface Reativa:** As listas são atualizadas em tempo real após o cadastro de um novo registro, sem a necessidade de recarregar a página.
- **Feedback Visual:** Notificações de sucesso e erro são exibidas para o usuário após as operações de cadastro, melhorando a experiência de uso.
- **API RESTful:** Backend robusto servindo os dados através de endpoints bem definidos.

---

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express.js:** Framework para construção da API e gerenciamento de rotas.
- **Prisma:** ORM (Object-Relational Mapper) para a comunicação com o banco de dados.
- **CORS:** Middleware para habilitar o compartilhamento de recursos entre frontend e backend.

### Frontend

- **HTML5:** Estrutura das páginas.
- **CSS3:** Estilização e design da interface.
- **JavaScript (ES6+):** Lógica do cliente, manipulação do DOM e comunicação com a API via Fetch.

### Banco de Dados & Ferramentas

- **PostgreSQL:** Banco de dados relacional para persistência dos dados.
- **Nodemon:** Reinício automático do servidor durante o desenvolvimento.
- **Git & GitHub:** Controle de versão do código.

---

## 📁 Estrutura do Projeto

```
.
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── alunos.html
│   ├── professores.html
│   ├── style.css
│   ├── alunos.js
│   └── professores.js
│
└── README.md
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18.18 ou superior)
- PostgreSQL
- Git

### Passos para Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/Elineison/cadastro-escolar-Fullstack-Atlantico-oficina2.git
cd cadastro-escolar-Fullstack-Atlantico-oficina2
```

2. **Configure o Backend:**

```bash
cd backend
npm install
```

3. **Configure as Variáveis de Ambiente:**

- Na pasta `backend`, crie um arquivo `.env`.
- Adicione a linha abaixo, substituindo `SUA_SENHA` pela senha do PostgreSQL:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/gestao_escolar?schema=public"
```

4. **Crie e Migre o Banco de Dados:**

- Certifique-se de que o PostgreSQL está rodando.

```bash
npx prisma migrate dev
```

5. **Inicie o Servidor Backend:**

```bash
npm run dev
```

- O terminal exibirá: `Servidor rodando na porta: 3000`.

6. **Inicie o Frontend:**

- Abra o projeto no VS Code.
- Clique com o botão direito no arquivo `frontend/index.html` e selecione **Open with Live Server**.
- O navegador abrirá a aplicação.

---

## 📋 Documentação da API

- A API aceita requisições no formato `x-www-form-urlencoded` para **POST** e **PUT**.

### Endpoints de Alunos

| Método HTTP | Endpoint        | Descrição                |
| ----------- | --------------- | ------------------------ |
| GET         | /api/alunos     | Lista todos os alunos    |
| POST        | /api/alunos     | Cadastra um novo aluno   |
| PUT         | /api/alunos/:id | Atualiza um aluno por ID |
| DELETE      | /api/alunos/:id | Exclui um aluno por ID   |

### Endpoints de Professores

| Método HTTP | Endpoint             | Descrição                    |
| ----------- | -------------------- | ---------------------------- |
| GET         | /api/professores     | Lista todos os professores   |
| POST        | /api/professores     | Cadastra um novo professor   |
| PUT         | /api/professores/:id | Atualiza um professor por ID |
| DELETE      | /api/professores/:id | Exclui um professor por ID   |

---

## 👨‍💻 Autor

Desenvolvido por **Elineison Inacio**
