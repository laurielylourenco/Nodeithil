# Nodeithil

Este repositório contém uma API REST básica desenvolvida com Node.js, Express, TypeScript, MongoDB e Zod para validação de entrada. Serve como ponto de partida para a construção de APIs escaláveis e de fácil manutenção. Sinta-se à vontade para usar e personalizar de acordo com seus projetos.

## Stack utilizada


**Back-end:** Node, Express, Typescript,Mongoose

## Funcionalidades


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
