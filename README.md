# Nodeithil

Uma API REST de criação de usuario

## Stack utilizada


**Back-end:** Node, Express, Typescript,Mongoose

## Funcionalidades

- Building ....


## Rodar projeto 

Para fazer o projeto rodar

```bash
  yarn dev
```
Up mongo

```bash
 sudo service mongod restart
 ou 
 sudo service mongod start

```


## Comandos do mongodb

- show collections

 - use nomeDoBancoDeDados
  Conecte-se ao banco de dados

// Acesse a coleção
let colecao = db.nomeDaColecao

// Visualize todos os registros na coleção
colecao.find()

// Visualize um registro específico na coleção
users.findOne({ email: 'teste3@gmail.com' })