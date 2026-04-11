const express = require('express');
const app = express();

app.use(express.json());

let jogos = [
    { id: 1, nome: "Resident Evil: Requiem", preco: 160, categoria: "Terror", ano: 2026},
    { id: 2, nome: "Hades", preco: 74, categoria: "RPG", ano: 2020},
    { id: 3, nome: "The Last of Us Part I", preco: 250, categoria: "Ação", ano: 2023},
    { id: 4, nome: "Marvel's Spider-Man Remastered", preco: 250, categoria: "Ação", ano: 2022},
    { id: 5, nome: "God of War Ragnarök", preco: 250, categoria: "Ação", ano: 2024},
    { id: 6, nome: "Elden Ring", preco: 270, categoria: "RPG", ano: 2022},
    { id: 7, nome: "Hollow Knight", preco: 60, categoria: "Ação", ano: 2017},
    { id: 8, nome: "Cyberpunk 2077", preco: 200, categoria: "RPG", ano: 2020},
    { id: 9, nome: "Red Dead Redemption 2", preco: 300, categoria: "Ação", ano: 2019},
    { id: 10, nome: "The Farmer Was Replaced", preco: 30, categoria: "Simulação", ano: 2025}
];
let proximoId = 11;

app.get('/api/jogos', (req, res) => {
    res.json(jogos);
});

app.get('/api/jogos/:id', (req, res) => {
    const jogo = jogos.find(p => p.id === parseInt(req.params.id));
    if (!jogo) return res.status(404).json({ erro: "Não encontrado" });
    res.json(jogo);
});

app.post('/api/jogos', (req, res) => {
    const { nome, preco, categoria, ano } = req.body;
    
    if (!nome || !preco || !categoria || !ano) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    if (typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({ erro: "Nome deve ser um texto" });
    }

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ erro: "Preço deve ser um número positivo" });
    }

    if (typeof ano !== 'number' || ano < 1950 || ano > new Date().getFullYear()) {
        return res.status(400).json({ erro: "Ano inválido" });
    }

    const categoriasValidas = ["Ação", "RPG", "Terror", "Simulação"];
    if (!categoriasValidas.includes(categoria)) {
        return res.status(400).json({ erro: "Categoria inválida" });
    }
    
    const novoJogo = { id: proximoId++, nome, preco, categoria, ano };
    jogos.push(novoJogo);
    res.status(201).json(novoJogo);
});

app.put('/api/jogos/:id', (req, res) => {
    const jogo = jogos.find(p => p.id === parseInt(req.params.id));
    if (!jogo) return res.status(404).json({ erro: "Não encontrado" });
    
    const { nome, preco, categoria, ano } = req.body;
    if (!nome || preco === undefined || !categoria || !ano) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" });
    }

    if (typeof nome !== 'string' || nome.trim() === '') {
        return res.status(400).json({ erro: "Nome deve ser um texto" });
    }

    if (typeof preco !== 'number' || preco <= 0) {
        return res.status(400).json({ erro: "Preço deve ser um número positivo" });
    }

    if (typeof ano !== 'number' || ano < 1950 || ano > new Date().getFullYear()) {
        return res.status(400).json({ erro: "Ano inválido" });
    }

    const categoriasValidas = ["Ação", "RPG", "Terror", "Simulação"];
    if (!categoriasValidas.includes(categoria)) {
        return res.status(400).json({ erro: "Categoria inválida" });
    }

    jogo.nome = nome;
    jogo.preco = preco;
    jogo.categoria = categoria;
    jogo.ano = ano;
    res.json(jogo);
});

app.delete('/api/jogos/:id', (req, res) => {
    const index = jogos.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ erro: "Não encontrado" });
    
    jogos.splice(index, 1);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('API CRUD completa na porta 3000');
});