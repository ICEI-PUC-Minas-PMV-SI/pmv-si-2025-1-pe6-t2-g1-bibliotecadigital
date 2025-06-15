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

* React Native: Biblioteca JavaScript para criar interfaces de usuário (UI), utilizando componentes reutilizáveis e buscando interatividade.

* TypeScript: Superset do JavaScript que adiciona tipagem estática ao código, ajudando a evitar erros e facilitando a manutenção de projetos.

* Android Studio: IDE para desenvolvimento mobile.


## Considerações de Segurança

As principais considerações de segurança no front-end da aplicação SaveBook incluem:

* Proteção de Dados em Trânsito: Todo o tráfego entre cliente e servidor é protegido via HTTPS, garantindo a criptografia dos dados trocados e prevenindo ataques de interceptação (como o man-in-the-middle).

* Gerenciamento Seguro de Tokens: Os tokens de autenticação (JWT) são armazenados em memória volátil ou cookies com atributos de segurança (HttpOnly, Secure, SameSite) para reduzir o risco de vazamento por XSS ou CSRF.

* Prevenção contra XSS (Cross-Site Scripting): Dados exibidos na interface passam por processos de sanitização e escape para evitar a injeção de scripts maliciosos que comprometam a segurança do usuário.

* Segurança na Comunicação com APIs: O front-end realiza chamadas apenas para APIs autorizadas e confiáveis, sempre enviando os tokens de autenticação e validando respostas, reduzindo riscos de falsificação ou redirecionamento.

* Atualizações e Dependências Seguras: As bibliotecas e frameworks (como React, Vite, Tailwind) são mantidos atualizados, e ferramentas como dependabot são utilizadas para detectar vulnerabilidades conhecidas.

Essas práticas garantem que a experiência do usuário no front-end seja segura, protegendo dados e prevenindo interações maliciosas com a aplicação.

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

A estratégia de testes foi baseada nos requisitos funcionais definidos na Etapa 2 e aplicou diferentes métodos para garantir o correto funcionamento da aplicação, tanto em nível de código quanto em sua integração com o ambiente de produção.


RF-002
Cadastro de livros com título, autor, edição, estado de conservação e imagem
https://streamable.com/4h4y82
RF-003
Manifestar interesse em livros cadastrados para troca
https://streamable.com/plyylz
RF-004
Estante virtual: registrar livros lidos, em leitura e desejados
https://streamable.com/u8rro4
RF-005
Avaliação de livros com notas e comentários
https://streamable.com/3p072e
RF-009
Publicação de resenhas no feed, com curtidas e comentários
https://streamable.com/87swu5

Resultados Obtidos
Todos os requisitos do tipo "Must Have" foram testados com sucesso


Tempo médio de resposta dos endpoints: inferior a 1.5 segundos


Nenhum erro crítico identificado nos testes de integração


Autenticação e notificações funcionaram conforme esperado


Os testes foram documentados em vídeo para facilitar a validação pelo professor


A aplicação SAVEBOOK demonstrou estabilidade e confiabilidade nos fluxos essenciais.





# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

