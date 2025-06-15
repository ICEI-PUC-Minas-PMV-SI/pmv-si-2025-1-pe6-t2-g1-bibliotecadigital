# Front-end Móvel

[Inclua uma breve descrição do projeto e seus objetivos.]

## Projeto da Interface
[Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

### Wireframes

[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual

[Descreva o estilo visual da interface, incluindo paleta de cores, tipografia, ícones e outros elementos gráficos.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

## Tecnologias Utilizadas

[Lista das tecnologias principais que serão utilizadas no projeto.]

## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação
Claro. Aqui está a versão limpa e direta, sem emojis, pronta para inclusão em repositório GitHub ou documentação técnica:

---

## 7.5 Implantação

A aplicação SAVEBOOK foi implantada seguindo práticas modernas de desenvolvimento distribuído, utilizando ferramentas gratuitas, escaláveis e integradas ao fluxo de desenvolvimento.

### Requisitos de Hardware e Software

* Node.js versão 18 ou superior
* Git
* Conta no Vercel
* Conta no MongoDB Atlas
* Firebase Authentication e Firebase Cloud Messaging
* CPU: mínimo 2 vCPUs
* Memória RAM: 4 GB
* Armazenamento: SSD de 40 GB
* Conectividade: no mínimo 100 Mbps

### Plataforma de Hospedagem

* Frontend: Vercel (React)
* Backend: Vercel (Node.js + Express, serverless)
* Banco de dados: MongoDB Atlas (NoSQL, em nuvem)
* Autenticação: Firebase Authentication
* Notificações: Firebase Cloud Messaging

### Configuração do Ambiente

* Repositórios frontend e backend criados no GitHub
* Instalação das dependências com `npm install`
* Scripts definidos no `package.json`:

  * "start": "node index.js"
  * "build": "vite build"
* Variáveis de ambiente configuradas no painel do Vercel:

  * MONGO\_URI
  * JWT\_SECRET
  * FIREBASE\_API\_KEY
* Integração contínua com GitHub, ativando deploy automático a cada commit na branch main

### Processo de Deploy

O deploy foi realizado via integração entre GitHub e Vercel. A cada push na branch main, o Vercel executa a build automaticamente e publica a nova versão. O banco de dados é acessado via URI segura do MongoDB Atlas. Firebase é utilizado para autenticação de usuários e envio de notificações.

### Validação Pós-Deploy

* Testes de autenticação com Firebase (login via Google e Facebook)
* CRUD completo de usuários e livros validado com Swagger
* Verificação de responsividade da interface web em dispositivos desktop e mobile
* Testes de envio e recebimento de notificações via Firebase Cloud Messaging
* Testes de leitura e escrita no MongoDB Atlas

A aplicação apresentou funcionamento estável e desempenho satisfatório em ambiente de produção.



## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

