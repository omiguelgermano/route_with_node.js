// https://programandosolucoes.dev.br/2021/01/26/rotas-express-nodejs/

const express = require('express')
const app = express()
const port = 3000

/*
app.get('/', (req, res) => {
    res.send('Sucesso!')
})

app.listen(port, () => [
    console.log(`Testante ${port}`)
])
*/

// METODO DE REQUISICAO

app.get('/user', function (req, res) {
    res.send('Lista de usuários');
});

app.post('/user', function (req, res) {
    res.send('Inserir um usuário');
});

app.put('/user/:id', function (req, res) {
    res.send(`Editar um usuário com o id ${req.params.id}`);
});

app.delete('/user/:id', function (req, res) {
    res.send(`Exluir um usuário com o id ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Exemplo de app no node rodando no endereço http://localhost:${port}`);
});