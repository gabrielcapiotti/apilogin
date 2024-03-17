// Importando express e axios
import express from 'express';
import axios from 'axios';

// Importando cors
import cors from 'cors';

// Definindo a porta do servidor
const PORT = 8080;

// Inicializando o array de produtos
let listaProdutos = [];

// Criando uma instância do express
const app = express();

// Habilitando o uso do CORS
app.use(cors());

// Habilitando o uso de JSON no corpo das requisições
app.use(express.json());

// Rota para login
app.post('/login', async (req, res) => {
    try {
        // Lógica para autenticação do usuário
        // Aqui você pode fazer a validação do email e senha e retornar um token de autenticação
        // Exemplo:
        const { email, senha } = req.body;
        // Lógica de autenticação...
        res.status(200).send({ message: 'Usuário autenticado com sucesso!', token: 'seu_token_jwt' });
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no servidor.' });
    }
});

// Rota para paginação de produtos
app.get('/produtos/paginados', async (req, res) => {
    try {
        // Lógica para paginação de produtos
        // Aqui você pode recuperar os produtos paginados do banco de dados ou de outra fonte
        // Exemplo:
        const { page, limit } = req.query;
        // Lógica para recuperar os produtos paginados...
        const produtosPaginados = listaProdutos.slice((page - 1) * limit, page * limit);
        res.status(200).send({ message: 'Produtos retornados com sucesso!', data: produtosPaginados });
    } catch (error) {
        res.status(500).send({ message: 'Erro interno no servidor.' });
    }
});

// Iniciando o servidor na porta especificada
app.listen(PORT, () =>
    console.log(`Servidor iniciado na porta ${PORT}`)
);
