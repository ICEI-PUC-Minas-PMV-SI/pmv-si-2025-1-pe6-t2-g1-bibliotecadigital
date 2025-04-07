# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]

## Objetivos da API

O primeiro passo é definir os objetivos da sua API. O que você espera alcançar com ela? Você quer que ela seja usada por clientes externos ou apenas por aplicações internas? Quais são os recursos que a API deve fornecer?

[Inclua os objetivos da sua api.]


## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]


## Tecnologias Utilizadas

Existem muitas tecnologias diferentes que podem ser usadas para desenvolver APIs Web. A tecnologia certa para o seu projeto dependerá dos seus objetivos, dos seus clientes e dos recursos que a API deve fornecer.

[Lista das tecnologias principais que serão utilizadas no projeto.]

## API Endpoints

Users: 
Endpoint 1
Método: POST
URL: /api/users
Parâmetros:
param1: {
 "name": "Pedro Henrique",
 "email": "pedro@gmail.com",
 "password": "123456789"
}
Resposta:
Sucesso (201 CREATED)
{
  "name": "Pedro Henrique",
  "email": "pedro@gmail.com",
  "role": "user",
  "_id": "67f2e4ca6d64a52245e1b95f",
  "createdAt": "2025-04-06T20:32:10.443Z",
  "updatedAt": "2025-04-06T20:32:10.443Z",
  "__v": 0
}

Endpoint 2
Método: GET
URL: /api/users
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f2e4ca6d64a52245e1b95f",
    "name": "Pedro Henrique",
    "email": "pedro@gmail.com",
    "role": "user",
    "createdAt": "2025-04-06T20:32:10.443Z",
    "updatedAt": "2025-04-06T20:32:10.443Z",
    "__v": 0
  }
]

Endpoint 3
Método: GET
URL: /api/users/{id}
Parâmetros:
path: id do usuário
Resposta:
Sucesso (200 OK)
{
  "_id": "67f2e4ca6d64a52245e1b95f",
  "name": "Pedro Henrique",
  "email": "pedro@gmail.com",
  "role": "user",
  "createdAt": "2025-04-06T20:32:10.443Z",
  "updatedAt": "2025-04-06T20:32:10.443Z",
  "__v": 0
}

Endpoint 4
Método: PATCH
URL: /api/users/{id}
Parâmetros:
path: id do usuário
params: {
  "name": "João Melo"
}

Resposta:
Sucesso (200 OK)
{
  "_id": "67f2e4ca6d64a52245e1b95f",
  "name": "João Melo",
  "email": "pedro@gmail.com",
  "role": "user",
  "createdAt": "2025-04-06T20:32:10.443Z",
  "updatedAt": "2025-04-06T20:32:10.443Z",
  "__v": 0
}

Endpoint 5
Método: PATCH
URL: /api/users/{id}/password
Parâmetros:
path: id do usuário
params: {
  "oldPassword": "senhaAntiga123",
  "newPassword": "novaSenhaSegura456"
}

Resposta:
Sucesso (200 OK)
{
  "_id": "67f2e4ca6d64a52245e1b95f",
  "name": "João Melo",
  "email": "pedro@gmail.com",
  "role": "user",
  "createdAt": "2025-04-06T20:32:10.443Z",
  "updatedAt": "2025-04-06T20:32:10.443Z",
  "__v": 0
}
Endpoint 6
Método: DELETE
URL: /api/users/{id}
Parâmetros:
path: id do usuário
Resposta:
Sucesso (200 OK)
{
  "_id": "67f2f7bd2e9b265919e66bb2",
  "name": "Giovanny",
  "email": "joao@email.com",
  "role": "user",
  "createdAt": "2025-04-06T21:53:01.355Z",
  "updatedAt": "2025-04-06T21:55:27.981Z",
  "__v": 0
}


Books:
Endpoint 7
Método: POST
URL: /api/books
Parâmetros:
param1: {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "coverUrl": "https://example.com/cover.jpg",
  "description": "A story about the American dream...",
  "edition": "1st Edition",
  "publishYear": 1925,
  "condition": "Novo",
  "owner": "67f2e4ca6d64a52245e1b95f"
}

Resposta:
Sucesso (201 CREATED)
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "edition": "1st Edition",
  "publishYear": 1925,
  "condition": "Novo",
  "owner": "67f2e4ca6d64a52245e1b95f",
  "interestedUsers": [],
  "reviews": [],
  "_id": "67f307ec2f6bb9ae23af9259",
  "createdAt": "2025-04-06T23:02:04.057Z",
  "updatedAt": "2025-04-06T23:02:04.057Z",
  "__v": 0
}

Endpoint 8
Método: GET
URL: /api/books
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f307ec2f6bb9ae23af9259",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "edition": "1st Edition",
    "publishYear": 1925,
    "condition": "Novo",
    "owner": "67f2e4ca6d64a52245e1b95f",
    "interestedUsers": [],
    "reviews": [],
    "createdAt": "2025-04-06T23:02:04.057Z",
    "updatedAt": "2025-04-06T23:02:04.057Z",
    "__v": 0
  }
]

Endpoint 9
Método: GET
URL: /api/books/{id}
Parâmetros:
path: id do livro
Resposta:
Sucesso (200 OK)
{
  "_id": "67f307ec2f6bb9ae23af9259",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "edition": "1st Edition",
  "publishYear": 1925,
  "condition": "Novo",
  "owner": "67f2e4ca6d64a52245e1b95f",
  "interestedUsers": [],
  "reviews": [],
  "createdAt": "2025-04-06T23:02:04.057Z",
  "updatedAt": "2025-04-06T23:02:04.057Z",
  "__v": 0
}

Endpoint 10
Método: PUT
URL: /api/books/{id}
Parâmetros:
path: id do livro
params: {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "coverUrl": "https://example.com/cover.jpg",
  "description": "A story about the American dream...",
  "edition": "1st Edition",
  "publishYear": 1925
}

Resposta:
Sucesso (200 OK)
{
  "_id": "67f2e4ca6d64a52245e1b95f",
  "name": "João Melo",
  "email": "pedro@gmail.com",
  "role": "user",
  "createdAt": "2025-04-06T20:32:10.443Z",
  "updatedAt": "2025-04-06T20:32:10.443Z",
  "__v": 0
}

Endpoint 11
Método: GET
URL: /api/books/owner/{ownerId}
Parâmetros:
path: id do usuario dono do livro
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f307ec2f6bb9ae23af9259",
    "title": "Alice no País das Maravilhas",
    "author": "Lewis Carrol",
    "edition": "1st Edition",
    "publishYear": 1925,
    "condition": "Novo",
    "owner": "67f2e4ca6d64a52245e1b95f",
    "interestedUsers": [],
    "reviews": [],
    "createdAt": "2025-04-06T23:02:04.057Z",
    "updatedAt": "2025-04-06T23:11:23.058Z",
    "__v": 0
  }
]

Endpoint 12
Método: DELETE
URL: /api/books/{id}
Parâmetros:
path: id do livro
Resposta:
Sucesso (200 OK)
{
  "_id": "67f307ec2f6bb9ae23af9259",
  "title": "Alice no País das Maravilhas",
  "author": "Lewis Carrol",
  "edition": "1st Edition",
  "publishYear": 1925,
  "condition": "Novo",
  "owner": "67f2e4ca6d64a52245e1b95f",
  "interestedUsers": [],
  "reviews": [],
  "createdAt": "2025-04-06T23:02:04.057Z",
  "updatedAt": "2025-04-06T23:11:23.058Z",
  "__v": 0
}
Reviews:
Endpoint 13
Método: POST
URL: /api/reviews
Parâmetros:
param1: {
  "rating": 5,
  "comment": "Esse livro é perfeito!!!",
  "user": "67f2e4ca6d64a52245e1b95f4",
  "book": "67f30b981ca2e46a2a8f4c2d"
}

Resposta:
Sucesso (201 CREATED)
{
  "rating": 5,
  "comment": "Esse livro é perfeito!!!",
  "user": "67f2e4ca6d64a52245e1b95f4",
  "book": "67f30b981ca2e46a2a8f4c2d",
  "_id": "67f30c0c1ca2e46a2a8f4c34",
  "__v": 0
}


Endpoint 14
Método: GET
URL: /api/reviews/book/{bookId}
Parâmetros:
path: id do livro
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f30c0c1ca2e46a2a8f4c34",
    "rating": 5,
    "comment": "Esse livro é perfeito!!!",
    "user": "67f2e4ca6d64a52245e1b95f4",
    "book": "67f30b981ca2e46a2a8f4c2d",
    "__v": 0
  }
]


Endpoint 15
Método: PUT
URL: /api/reviews/{id}
Parâmetros:
{
  "rating": 2,
  "comment": "Não gostei muito do livro"
}

path: id do review
Resposta:
Sucesso (200 OK)
{
  "_id": "67f30c0c1ca2e46a2a8f4c34",
  "rating": 2,
  "comment": "Não gostei muito do livro",
  "user": "67f2e4ca6d64a52245e1b95f4",
  "book": "67f30b981ca2e46a2a8f4c2d",
  "__v": 0
}


Endpoint 16
Método: DELETE
URL: /api/reviews/{id}
Parâmetros:
path: id do review
Resposta:
Sucesso (200 OK)

Bookshelf/Estante Virtual:
Endpoint 17
Método: POST
URL: /api/bookshelves
Parâmetros:
param1: {
  "userId": "67f2e4ca6d64a52245e1b95f",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Lido"
}

Resposta:
Sucesso (201 CREATED)
{
  "userId": "67f2e4ca6d64a52245e1b95f",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Lido",
  "_id": "67f3112018de293121ad3ff9",
  "createdAt": "2025-04-06T23:41:20.334Z",
  "updatedAt": "2025-04-06T23:41:20.334Z",
  "__v": 0
}


Endpoint 18
Método: GET
URL: /api/bookshelves
Parâmetros:
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f3112018de293121ad3ff9",
    "userId": {
      "_id": "67f2e4ca6d64a52245e1b95f",
      "name": "João Melo",
      "email": "pedro@gmail.com",
      "role": "user",
      "createdAt": "2025-04-06T20:32:10.443Z",
      "updatedAt": "2025-04-06T21:44:21.245Z",
      "__v": 0
    },
    "bookId": {
      "_id": "67f30b981ca2e46a2a8f4c2d",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "edition": "1st Edition",
      "publishYear": 1925,
      "condition": "Novo",
      "owner": "67f2e4ca6d64a52245e1b95f",
      "interestedUsers": [],
      "reviews": [],
      "createdAt": "2025-04-06T23:17:44.873Z",
      "updatedAt": "2025-04-06T23:17:44.873Z",
      "__v": 0
    },
    "status": "Lido",
    "createdAt": "2025-04-06T23:41:20.334Z",
    "updatedAt": "2025-04-06T23:41:20.334Z",
    "__v": 0
  }
]




Endpoint 19
Método: GET
URL: /api/bookshelves/user/{userId}
Parâmetros:
path: id do usuario
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f3112018de293121ad3ff9",
    "userId": {
      "_id": "67f2e4ca6d64a52245e1b95f",
      "name": "João Melo",
      "email": "pedro@gmail.com",
      "role": "user",
      "createdAt": "2025-04-06T20:32:10.443Z",
      "updatedAt": "2025-04-06T21:44:21.245Z",
      "__v": 0
    },
    "bookId": {
      "_id": "67f30b981ca2e46a2a8f4c2d",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "edition": "1st Edition",
      "publishYear": 1925,
      "condition": "Novo",
      "owner": "67f2e4ca6d64a52245e1b95f",
      "interestedUsers": [],
      "reviews": [],
      "createdAt": "2025-04-06T23:17:44.873Z",
      "updatedAt": "2025-04-06T23:17:44.873Z",
      "__v": 0
    },
    "status": "Lido",
    "createdAt": "2025-04-06T23:41:20.334Z",
    "updatedAt": "2025-04-06T23:41:20.334Z",
    "__v": 0
  }
]

Endpoint 20
Método: PUT
URL: /api/bookshelves/{id}
Parâmetros:
{
  "status": "Desejado"
}

path: id do registro da estante virtual
Resposta:
Sucesso (200 OK)
{
  "_id": "67f3112018de293121ad3ff9",
  "userId": "67f2e4ca6d64a52245e1b95f",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Desejado",
  "createdAt": "2025-04-06T23:41:20.334Z",
  "updatedAt": "2025-04-06T23:50:29.151Z",
  "__v": 0
}



Endpoint 21
Método: DELETE
URL: /api/bookshelves/{id}
Parâmetros:
path: id do registro da estante virtual
Resposta:
Sucesso (200 OK):
{
  "_id": "67f3112018de293121ad3ff9",
  "userId": "67f2e4ca6d64a52245e1b95f",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Desejado",
  "createdAt": "2025-04-06T23:41:20.334Z",
  "updatedAt": "2025-04-06T23:50:29.151Z",
  "__v": 0
}

Notification:
Endpoint 22
Método: POST
URL: /api/notifications
Parâmetros:
param1: {
  "senderId": "67f2e4ca6d64a52245e1b95f",
  "receiverId": "67f3149c710d2ea5a243af08",
  "type": "Solicitação de troca",
  "message": "Você recebeu uma nova solicitação de troca.",
  "bookId": "67f30bb21ca2e46a2a8f4c2f"
}

Resposta:
Sucesso (201 CREATED)
{
  "senderId": "67f2e4ca6d64a52245e1b95f",
  "receiverId": "67f3149c710d2ea5a243af08",
  "type": "Solicitação de troca",
  "message": "Você recebeu uma nova solicitação de troca.",
  "bookId": "67f30bb21ca2e46a2a8f4c2f",
  "isRead": false,
  "_id": "67f314cc710d2ea5a243af0a",
  "createdAt": "2025-04-06T23:57:00.736Z",
  "updatedAt": "2025-04-06T23:57:00.736Z",
  "__v": 0
}



Endpoint 23
Método: GET
URL: /api/notifications/receiver/{userId}
Parâmetros:
path: id do usuário
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f314cc710d2ea5a243af0a",
    "senderId": {
      "_id": "67f2e4ca6d64a52245e1b95f",
      "name": "João Melo",
      "email": "pedro@gmail.com",
      "role": "user",
      "createdAt": "2025-04-06T20:32:10.443Z",
      "updatedAt": "2025-04-06T21:44:21.245Z",
      "__v": 0
    },
    "receiverId": "67f3149c710d2ea5a243af08",
    "type": "Solicitação de troca",
    "message": "Você recebeu uma nova solicitação de troca.",
    "bookId": "67f30bb21ca2e46a2a8f4c2f",
    "isRead": false,
    "createdAt": "2025-04-06T23:57:00.736Z",
    "updatedAt": "2025-04-06T23:57:00.736Z",
    "__v": 0
  }
]



Endpoint 24
Método: PUT
URL: /api/notifications/{id}
Parâmetros:
path: id da notification
Resposta:
Sucesso (200 OK)
{
  "_id": "67f314cc710d2ea5a243af0a",
  "senderId": "67f2e4ca6d64a52245e1b95f",
  "receiverId": "67f3149c710d2ea5a243af08",
  "type": "Solicitação de troca",
  "message": "Você recebeu uma nova solicitação de troca.",
  "bookId": "67f30bb21ca2e46a2a8f4c2f",
  "isRead": true,
  "createdAt": "2025-04-06T23:57:00.736Z",
  "updatedAt": "2025-04-07T00:04:30.712Z",
  "__v": 0
}

Endpoint 25
Método: DELETE
URL: /api/notifications/{id}
Parâmetros:
path: id da notification
Resposta:
Sucesso (200 OK):
{
  "_id": "67f314cc710d2ea5a243af0a",
  "senderId": "67f2e4ca6d64a52245e1b95f",
  "receiverId": "67f3149c710d2ea5a243af08",
  "type": "Solicitação de troca",
  "message": "Você recebeu uma nova solicitação de troca.",
  "bookId": "67f30bb21ca2e46a2a8f4c2f",
  "isRead": true,
  "createdAt": "2025-04-06T23:57:00.736Z",
  "updatedAt": "2025-04-07T00:04:30.712Z",
  "__v": 0
}

Exchange Request/Pedido de Troca:
Endpoint 26
Método: POST
URL: /api/exchange-requests
Parâmetros:
param1: {
  "requesterId": "67f2e4ca6d64a52245e1b95f",
  "ownerId": "67f3149c710d2ea5a243af08",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Pendente",
  "message": "Eu gostaria de trocar esse livro com você"
}

Resposta:
Sucesso (201 CREATED)
{
  "requesterId": "67f2e4ca6d64a52245e1b95f",
  "ownerId": "67f3149c710d2ea5a243af08",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Pendente",
  "message": "Eu gostaria de trocar esse livro com você",
  "_id": "67f3187f2d9e2fe3639febb0",
  "createdAt": "2025-04-07T00:12:47.373Z",
  "updatedAt": "2025-04-07T00:12:47.373Z",
  "__v": 0
}


Endpoint 27
Método: GET
URL: /api/exchange-requests
Parâmetros:
Resposta:
Sucesso (200 OK)
[
  {
    "_id": "67f3187f2d9e2fe3639febb0",
    "requesterId": {
      "_id": "67f2e4ca6d64a52245e1b95f",
      "name": "João Melo",
      "email": "pedro@gmail.com",
      "role": "user",
      "createdAt": "2025-04-06T20:32:10.443Z",
      "updatedAt": "2025-04-06T21:44:21.245Z",
      "__v": 0
    },
    "ownerId": {
      "_id": "67f3149c710d2ea5a243af08",
      "name": "João Silva",
      "email": "joao@email.com",
      "role": "user",
      "createdAt": "2025-04-06T23:56:12.747Z",
      "updatedAt": "2025-04-06T23:56:12.747Z",
      "__v": 0
    },
    "bookId": {
      "_id": "67f30b981ca2e46a2a8f4c2d",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "edition": "1st Edition",
      "publishYear": 1925,
      "condition": "Novo",
      "owner": "67f2e4ca6d64a52245e1b95f",
      "interestedUsers": [],
      "reviews": [],
      "createdAt": "2025-04-06T23:17:44.873Z",
      "updatedAt": "2025-04-06T23:17:44.873Z",
      "__v": 0
    },
    "status": "Pendente",
    "message": "Eu gostaria de trocar esse livro com você",
    "createdAt": "2025-04-07T00:12:47.373Z",
    "updatedAt": "2025-04-07T00:12:47.373Z",
    "__v": 0
  }
]

Endpoint 28
Método: GET
URL: /api/exchange-requests/{id}
Parâmetros:
path: id do registro de pedido de troca
Resposta:
Sucesso (200 OK)
{
  "_id": "67f3187f2d9e2fe3639febb0",
  "requesterId": {
    "_id": "67f2e4ca6d64a52245e1b95f",
    "name": "João Melo",
    "email": "pedro@gmail.com",
    "role": "user",
    "createdAt": "2025-04-06T20:32:10.443Z",
    "updatedAt": "2025-04-06T21:44:21.245Z",
    "__v": 0
  },
  "ownerId": {
    "_id": "67f3149c710d2ea5a243af08",
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "user",
    "createdAt": "2025-04-06T23:56:12.747Z",
    "updatedAt": "2025-04-06T23:56:12.747Z",
    "__v": 0
  },
  "bookId": {
    "_id": "67f30b981ca2e46a2a8f4c2d",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "edition": "1st Edition",
    "publishYear": 1925,
    "condition": "Novo",
    "owner": "67f2e4ca6d64a52245e1b95f",
    "interestedUsers": [],
    "reviews": [],
    "createdAt": "2025-04-06T23:17:44.873Z",
    "updatedAt": "2025-04-06T23:17:44.873Z",
    "__v": 0
  },
  "status": "Pendente",
  "message": "Eu gostaria de trocar esse livro com você",
  "createdAt": "2025-04-07T00:12:47.373Z",
  "updatedAt": "2025-04-07T00:12:47.373Z",
  "__v": 0
}


Endpoint 29
Método: PUT
URL: /api/exchange-requests/{id}
Parâmetros:
{
  "requesterId": "67f2e4ca6d64a52245e1b95f",
  "ownerId": "67f3149c710d2ea5a243af08",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Cancelada",
  "message": "Eu gostaria de trocar esse livro com você"
}

path: id do registro de pedido de troca
Resposta:
Sucesso (200 OK)
{
  "_id": "67f3187f2d9e2fe3639febb0",
  "requesterId": "67f2e4ca6d64a52245e1b95f",
  "ownerId": "67f3149c710d2ea5a243af08",
  "bookId": "67f30b981ca2e46a2a8f4c2d",
  "status": "Cancelada",
  "message": "Eu gostaria de trocar esse livro com você",
  "createdAt": "2025-04-07T00:12:47.373Z",
  "updatedAt": "2025-04-07T00:19:18.416Z",
  "__v": 0
}

Endpoint 30
Método: DELETE
URL: /api/exchange-requests/{id}
Parâmetros:
path: id do registro de pedido de troca
Resposta:
Sucesso (200 OK)


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
