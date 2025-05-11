# Front-end Web

[Inclua uma breve descrição do projeto e seus objetivos.]

## Projeto da Interface Web

[Descreva o projeto da interface Web da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

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

A aplicação foi implantada utilizando a plataforma Vercel, aproveitando sua integração contínua com o GitHub e suporte para aplicações baseadas em React, garantindo uma experiência fluida de deploy.

Etapas de implantação:

- Requisitos de Software:
  - Node.js ≥ 18
  - Git
  - Conta no Vercel

- Configuração do Ambiente:
  - Criação de repositórios no GitHub com as versões do frontend (React) e backend (Node.js + Express).
  - Definição de variáveis de ambiente no painel do Vercel, como URIs do banco de dados, chaves de autenticação e tokens secretos.
  - Instalação de dependências com `npm install` em ambos os projetos.
  - Configuração de `build` e `start` scripts no `package.json`.

- Deploy:
  - O frontend foi implantado diretamente via Vercel, com cada push para a branch principal acionando automaticamente um novo deploy.

- Testes de Produção:
  - Após o deploy, foram realizados testes para verificar o funcionamento dos endpoints e da interface web.
  - Verificações incluíram autenticação, CRUD de usuários e livros, testes de responsividade e envio de notificações.

## Testes
1. Casos de Teste para Requisitos Funcionais e Não Funcionais
Foram criados testes funcionais com base nos requisitos RF-001 a RF-008, cobrindo cadastro de usuário, avaliação, ranking e acesso à biblioteca. As evidências foram registradas em vídeo. Aspectos não funcionais como usabilidade e navegação fluida foram demonstrados no vídeo geral da aplicação.

2. Testes Unitários
Não foram utilizados frameworks como Jest, mas testes manuais foram realizados em funções isoladas da interface, como validação de formulários e filtros. Esses testes simulam o comportamento esperado de testes unitários.

3. Testes de Integração
As funcionalidades foram testadas em conjunto: o front-end interagiu com a API corretamente em cadastros, avaliações e buscas. Os testes foram feitos manualmente e comprovados por vídeo.

4. Testes de Carga
Foram feitas simulações manuais em diferentes abas e navegadores para avaliar estabilidade e tempo de resposta da aplicação. Não foram usados scripts automatizados.

5. Ferramentas Utilizadas
Streamable – Gravação e compartilhamento das evidências de teste.

Navegadores (Chrome/Edge) – Execução dos testes manuais.

DevTools – Verificação de respostas da API.

Deseja que eu coloque esse texto em um Word final?

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.

