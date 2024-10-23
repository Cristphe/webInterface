const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const criarConexao = () => {
    return new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'api',
        password: '1234',
        port: 5432,
    });
};

app.post('/usuarios', async (req, res) => {
    const { name, email, dob, age } = req.body;
    const query = `
        INSERT INTO usuarios (nome, email, data_nascimento, idade)
        VALUES ($1, $2, $3, $4)
        RETURNING *
    `;
    const values = [name, email, dob, age];

    const cliente = criarConexao();

    try {
        await cliente.connect();
        const result = await cliente.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao adicionar usuário:', error);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    } finally {
        await cliente.end();
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
