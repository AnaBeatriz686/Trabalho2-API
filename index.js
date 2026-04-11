const express = require('express');
const app = express();

app.use(express.json());

let filmes = [
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

app.listen(3000, () => {
    console.log('API CRUD completa na porta 3000');
});