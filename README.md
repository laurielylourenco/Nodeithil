# Nodeithil

Este repositório contém uma API REST básica desenvolvida com Node.js, Express, TypeScript, MongoDB e Zod para validação de entrada. Serve como ponto de partida para a construção de APIs escaláveis e de fácil manutenção. Sinta-se à vontade para usar e personalizar de acordo com seus projetos.

## Stack utilizada
**Back-end:** Node, Express, Typescript, MongoDB, Docker

## Rodando localmente

Clone o projeto

```bash
git clone https://github.com/laurielylourenco/Nodeithil.git
```

Entre no diretório do projeto

```bash
cd my-project
```
Cria o network

```bash
sudo docker network create one-net
```

Start o docker

```bash
sudo docker-compose up -d --build
```

[Para acessar documentação da API](http://localhost:1337/docs/)



Para desfazer os volumes 

```bash
sudo docker-compose down -v
```



## Screenshots

![Imagem Screenshot](2.png)
