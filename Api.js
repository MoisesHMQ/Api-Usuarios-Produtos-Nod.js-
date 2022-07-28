const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const usuarios = [];

   
app.post('/login', (request, response) => {
    console.log(request.body);

    if (request.body.email == "moises"){ 
        if (request.body.senha == "1234"){ 
            return response.send("Logado, seja bem vindo")
        } else{
            return response.send("Senha incorreta!");
        }
    } else  {
        return response.send("erro: usuario não existe")
    }
})

app.post('/cadastro', (request, response) => {
    for (var usuario in usuarios) {
        if(usuario.email == request.body.email){
             return response.send("Usuario ja cadastrado")
        }
    }
        usuarios.push({
        id: uuid.v4(),
        email: request.body.email,
        senha: request.body.senha
    })
    return response.send(request.body)
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

app.post('/cadastro/produto', (request, response) => {
    for (var produto in produtos) {
        if(produto.camisa == request.body.camisa){
             return response.send("Status: Produto Já cadastrado")
        }
    }
        produtos.push({
        id: uuid.v4(),
        camisa: request.body.camisa
    })
    return response.send(request.body)
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