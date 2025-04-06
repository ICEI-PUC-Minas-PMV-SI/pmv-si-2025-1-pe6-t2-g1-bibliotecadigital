# APIs e Web Services

O projeto SAVEBOOK tem como objetivo principal criar uma comunidade online para leitores, permitindo a troca e doação de livros, avaliações de obras, sugestões personalizadas e interação entre usuários. Para isso, será desenvolvida uma API RESTful que servirá de ponte entre o frontend (web/mobile) e o backend, oferecendo os serviços essenciais para o funcionamento da plataforma.

## Objetivos da API

A API do SAVEBOOK tem como principal objetivo permitir que usuários se cadastrem, publiquem livros para doação ou troca, interajam entre si, avaliem livros e organizem suas leituras. A API será usada por clientes externos, como o frontend web em React e o aplicativo mobile em React Native. Entre os principais recursos oferecidos estão:

Cadastro e login de usuários (incluindo autenticação via Google e Facebook);

Registro e visualização de livros disponíveis;

Envio de notificações sobre interesse em livros;

Avaliação e recomendação de livros;

Criação de eventos de troca e feed de interação entre leitores.


## Modelagem da Aplicação

A modelagem da aplicação inclui as principais entidades do sistema:

Usuário: nome, e-mail, senha, foto de perfil, preferências literárias.

Livro: título, autor, edição, estado de conservação, foto, status (disponível ou não).

Interesse: vínculo entre usuários interessados e donos de livros.

Avaliação: nota de 1 a 5, comentário e referência ao livro e ao usuário.

Evento: data, local (presencial ou virtual), regras e participantes.

Notificações: geradas via Firebase Messaging.

Os dados serão armazenados em um banco MongoDB, com uso do Mongoose para modelagem dos schemas.


## Tecnologias Utilizadas

As principais tecnologias adotadas para a API são:

Node.js com Express para desenvolvimento da API;

MongoDB com Mongoose para gerenciamento do banco de dados;

Firebase Authentication para login e autenticação de usuários;

Firebase Cloud Messaging para envio de notificações;

Vercel para deploy do frontend;

Azure para hospedagem do banco de dados;

Git e GitHub para versionamento;

Tailwind CSS no frontend para estilização responsiva.

## API Endpoints

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```

## Considerações de Segurança

As principais estratégias de segurança adotadas incluem:

- Autenticação e Autorização: Utilização do Firebase Authentication para autenticação segura via e-mail/senha e redes sociais (Google e Facebook), com tokens de acesso gerenciados por JWT (JSON Web Token) para autorizar as requisições dos usuários.
- Proteção de Dados Sensíveis: Senhas dos usuários são armazenadas com criptografia (utilizando hashing seguro como bcrypt), evitando exposição de credenciais mesmo em caso de vazamento de dados.
- Validação de Requisições: Implementação de middleware para validação de entradas nos endpoints da API, prevenindo ataques como SQL Injection, NoSQL Injection e XSS.
- Controle de Acesso: Diferenciação de permissões para usuários comuns e administradores, garantindo que apenas usuários autorizados possam executar determinadas ações, como moderação ou exclusão de conteúdo.
- Proteção contra ataques comuns: Uso de CORS configurado para controlar domínios permitidos, limitação de requisições (rate limiting) para evitar ataques de força bruta e medidas básicas contra CSRF (Cross-Site Request Forgery), especialmente em endpoints sensíveis.
- Backup e Recuperação: Realização de backups periódicos dos dados armazenados, garantindo a integridade das informações e permitindo a restauração em caso de falhas.

## Implantação

A aplicação foi implantada utilizando a plataforma Vercel, aproveitando sua integração contínua com o GitHub e suporte para aplicações baseadas em React, garantindo uma experiência fluida de deploy.

Etapas de implantação:

- Requisitos de Software:
  - Node.js ≥ 18
  - Git
  - Conta no Vercel (ou Heroku, para o backend)
  - MongoDB Atlas (ou instância Mongo hospedada na Azure)

- Configuração do Ambiente:
  - Criação de repositórios no GitHub com as versões do frontend (React) e backend (Node.js + Express).
  - Definição de variáveis de ambiente no painel do Vercel, como URIs do banco de dados, chaves de autenticação e tokens secretos.
  - Instalação de dependências com `npm install` em ambos os projetos.
  - Configuração de `build` e `start` scripts no `package.json`.

- Deploy:
  - O frontend foi implantado diretamente via Vercel, com cada push para a branch principal acionando automaticamente um novo deploy.
  - O backend, responsável pelos endpoints da API, pode ser hospedado no Heroku ou outra plataforma que suporte Node.js com variáveis de ambiente configuráveis.
  - Banco de dados MongoDB hospedado na Azure, conectado ao backend por URI segura.

- Testes de Produção:
  - Após o deploy, foram realizados testes para verificar o funcionamento dos endpoints e da interface web.
  - Verificações incluíram autenticação, CRUD de usuários e livros, testes de responsividade e envio de notificações.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
