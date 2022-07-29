const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const usuarios = [];

   
app.post('/login', (request, response) => {
    const login = usuarios.find((user) => user.email == request.body.email && user.senha == request.body.senha)
        if(login){
            return response.send("Status: Logado, seja bem vindo")

        }else{
            return response.send("Erro: Email ou Senha incorretos.");
        }
    })

app.post('/cadastro', (request, response) => {
    const validarEmail = usuarios.find((user) => user.email == request.body.email)
        if (validarEmail){
            return response.send("Status: Usuario Já Cadastrado.")}
        
        usuarios.push({
        id: uuid.v4(),
        email: request.body.email,
        senha: request.body.senha
    })
    return response.send("Usuario criado com sucesso.")
})


app.delete('/excluir', (request,response) => {
    const id = usuarios.indexOf('id');
    const delete_id = usuarios.splice(id,1)
        
    return response.send(delete_id)
})

app.get('/listar/usuarios', (request, response) => {
    console.log(request.body);
    return response.json(usuarios)
})

const produtos = [];

app.post('/cadastro/produtos', (request, response) => {
    const validarProdutos = usuarios.find((user) => user.produto == request.body.produto)
        if (validarProdutos){
            return response.send("Status: Produto Já Cadastrado.")}
        
        usuarios.push({
        id: uuid.v4(),
        produto: request.body.produto    
    })
    return response.send("Produto cadastrado.")
})

app.get('/listar/produtos', (request, response) => {
    console.log(request.body);
    return response.json(produtos)
})

app.post('/excluir/produtos', (request,response) => {
    const id = produtos.indexOf('id');
    const delete_id = usuarios.splice(id,1)
        console.log("Produto excluido...")
    return response.send(delete_id)
})


app.listen(3000, () => {
    console.log('servidor esta funcionando...')
})