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

<img width="1438" height="895" alt="Captura de tela 2026-04-13 111336" src="https://github.com/user-attachments/assets/a25a3858-91a3-4c53-84eb-2c8b668d2f9a" />

### GET /api/jogos/5

<img width="1439" height="455" alt="Captura de tela 2026-04-13 111528" src="https://github.com/user-attachments/assets/7717aaac-ddab-4791-a3cb-39213e5d6a7a" />

### GET /api/jogos/20 (ID inexistente)

<img width="1439" height="368" alt="Captura de tela 2026-04-13 111623" src="https://github.com/user-attachments/assets/dc51d0b4-bcd0-4605-a660-25d924a1e77d" />

### POST /api/jogos

<img width="1437" height="595" alt="Captura de tela 2026-04-13 111728" src="https://github.com/user-attachments/assets/54042a6c-44e4-48dd-b461-5aa716d922e3" />

### POST /api/jogos (campos faltando)

<img width="1439" height="485" alt="Captura de tela 2026-04-13 111820" src="https://github.com/user-attachments/assets/a96ab997-319d-4f3c-a6ea-c5c33ff91f19" />

### POST /api/jogos (preço inválido)

<img width="1438" height="523" alt="Captura de tela 2026-04-13 111900" src="https://github.com/user-attachments/assets/d1ce5b4f-7c1a-4626-a359-0a2c427e3eda" />

### POST /api/jogos (categoria inválida)

<img width="1438" height="553" alt="Captura de tela 2026-04-13 111935" src="https://github.com/user-attachments/assets/0e767c70-2a51-4990-ab71-17fee6afa750" />

### POST /api/jogos (nome vazio)

<img width="1437" height="547" alt="Captura de tela 2026-04-13 112024" src="https://github.com/user-attachments/assets/a98ec60e-79fe-4ca8-aede-471a910af441" />

### POST /api/jogos (ano inválido)

<img width="1438" height="528" alt="Captura de tela 2026-04-13 112109" src="https://github.com/user-attachments/assets/28ceff06-0cbf-4755-867b-34dbb60e1055" />

### PUT /api/jogos/7

<img width="1438" height="636" alt="Captura de tela 2026-04-13 112148" src="https://github.com/user-attachments/assets/a4b4cf70-c1dd-401f-bc85-30f28c1c298a" />

### PUT /api/jogos/20 (ID errado)

<img width="1437" height="563" alt="Captura de tela 2026-04-13 112238" src="https://github.com/user-attachments/assets/ff80fc44-2844-4318-8955-be794b64fc3f" />

### PUT /api/jogos/1 (categorias inválidas)

<img width="1436" height="542" alt="Captura de tela 2026-04-13 112325" src="https://github.com/user-attachments/assets/a832af89-3d6f-433e-9f3e-3a1edebd0548" />

### DELETE /api/jogos/11

<img width="1438" height="282" alt="Captura de tela 2026-04-13 112409" src="https://github.com/user-attachments/assets/fccbffc5-660e-4e1c-91e0-cba0ec691527" />

### DELETE /api/jogos/15 (ID errado)

<img width="1438" height="332" alt="Captura de tela 2026-04-13 112433" src="https://github.com/user-attachments/assets/1f6b7529-37f3-4032-a2fc-f941d7a9e487" />
