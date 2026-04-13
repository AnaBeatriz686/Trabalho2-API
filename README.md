# API REST de Jogos
- API REST desenvolvida com Node.js e Express para gerenciamento de jogos utilizando operações CRUD (Create, Read, Update e Delete).

## Sobre o projeto:
- Permite criar, listar, atualizar e remover jogos.
- Os dados são armazenados em memória, simulando um banco de dados.

## Tecnologias utilizadas:
- Node.js.
- Express.
- JavaScript.
- Visual Studio Code.
- Postman (para testes).

## Executando o projeto:
    1. Clonar o repositório (git clone <repositório>).
    2. Acessar a pasta (cd <projeto>).
    3. Instalar as dependências (npm install).
    4. Executar o servidor (node index.js).
    5. A API estará disponível em http://localhost:3000.

## Endpoints da API:

### GET /api/jogos
    - Lista todos os jogos.
    URL: http://localhost:3000/api/jogos/
    Resposta: 
    [
        {
            "id": 1,
            "nome": "Resident Evil: Requiem",
            "preco": 160,
            "categoria": "Terror",
            "ano": 2026
        },
        {
            "id": 2,
            "nome": "Hades",
            "preco": 74,
            "categoria": "RPG",
            "ano": 2020
        },
        {
            "id": 3,
            "nome": "The Last of Us Part I",
            "preco": 250,
            "categoria": "Ação",
            "ano": 2023
        },
        {
            "id": 4,
            "nome": "Marvel's Spider-Man Remastered",
            "preco": 250,
            "categoria": "Ação",
            "ano": 2022
        },
        {
            "id": 5,
            "nome": "God of War Ragnarök",
            "preco": 250,
            "categoria": "Ação",
            "ano": 2024
        },
        {
            "id": 6,
            "nome": "Elden Ring",
            "preco": 270,
            "categoria": "RPG",
            "ano": 2022
        },
        {
            "id": 7,
            "nome": "Hollow Knight",
            "preco": 60,
            "categoria": "Ação",
            "ano": 2017
        },
        {
            "id": 8,
            "nome": "Cyberpunk 2077",
            "preco": 200,
            "categoria": "RPG",
            "ano": 2020
        },
        {
            "id": 9,
            "nome": "Red Dead Redemption 2",
            "preco": 300,
            "categoria": "Ação",
            "ano": 2019
        },
        {
            "id": 10,
            "nome": "The Farmer Was Replaced",
            "preco": 30,
            "categoria": "Simulação",
            "ano": 2025
        }
    ]

### GET /api/jogos/:id
    - Busca jogo por ID.
    URL: http://localhost:3000/api/jogos/1
    Resposta:
    {
        "id": 1,
        "nome": "Resident Evil: Requiem",
        "preco": 160,
        "categoria": "Terror",
        "ano": 2026
    }

    200 OK se o jogo for encontrado.
    404 Not Found se o jogo não for encontrado.

### POST /api/jogos
    - Cria novo jogo.
    URL: http://localhost:3000/api/jogos/
    Body:
    {
        "nome": "Elden Ring",
        "preco": 270,
        "categoria": "RPG",
        "ano": 2022
    }
    Resposta:
    {
        "id": 11,
        "nome": "Elden Ring",
        "preco": 270,
        "categoria": "RPG",
        "ano": 2022
    }

    201 Created se o jogo for criado.
    400 Bad Request se der erro de validação.

### PUT /api/jogos/:id 
    - Atualiza jogo.
    URL: http://localhost:3000/api/jogos/1
    Body:
    {
        "nome": "God of War",
        "preco": 200,
        "categoria": "Ação",
        "ano": 2022
    }
    Resposta:
    {
        "id": 1,
        "nome": "God of War",
        "preco": 200,
        "categoria": "Ação",
        "ano": 2022
    }

    200 OK se o jogo for atualizado com sucesso.
    400 Bad Request se der erro de validação.
    404 Not Found se o jogo não for encontrado.

### DELETE /api/jogos/:id
    - Deleta jogo.
    URL: http://localhost:3000/api/jogos/6
    Resposta:
    204 No Content se o jogo foi removido com sucesso.
    404 Not Found se o jogo não foi encontrado.

## Regras de Validação:
    - Todos os campos são obrigatórios.
    - Nome deve ser texto válido.
    - Preço deve ser número positivo.
    - Ano deve ser válido (1950 até o ano atual).
    - Categoria deve ser uma das opções: Ação, RPG, Terror ou Simulação.

## Status Codes utilizados:
    - 200 -> Requisição bem sucedida.
    - 201 -> Recurso criado.
    - 400 -> Erro de validação.
    - 404 -> Recurso não encontrado.
    - 204 -> Recurso deletado.

## Testes Postman:

### GET /api/jogos

### GET /api/jogos/5

### GET /api/jogos/20 (ID inexistente)

### POST /api/jogos

### POST /api/jogos (campos faltando)

### POST /api/jogos (preço inválido)

### POST /api/jogos (categoria inválida)

### POST /api/jogos (nome vazio)

### POST /api/jogos (ano inválido)

### PUT /api/jogos/7

### PUT /api/jogos/20 (ID errado)

### PUT /api/jogos/1 (categorias inválidas)

### DELETE /api/jogos/11

### DELETE /api/jogos/15 (ID errado)