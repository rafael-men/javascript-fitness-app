# Fitness Javascript App

A **Fitness Club** é uma aplicação frontend que permite aos usuários explorar uma vasta lista de exercícios físicos com detalhes sobre músculos trabalhados, equipamentos utilizados e vídeos demonstrativos. A aplicação consome dados da [ExerciseDB](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) para fornecer informações sobre os exercícios.

## Funcionalidades

- 🔍 Busca de exercícios: Pesquise exercícios por nome, grupo muscular ou tipo de equipamento.
- 💪 Detalhes dos exercícios: Veja detalhes como os músculos envolvidos e os equipamentos necessários.
- 🎥 Vídeos demonstrativos: Acompanhe vídeos para aprender a forma correta de execução.
- 💡 Recomendações de exercícios: Sugestões de exercícios relacionados.

## Tecnologias Utilizadas

- React: Framework JavaScript para a construção de interfaces de usuário.
- JavaScript
- CSS
- ExerciseDB API: API que fornece dados sobre milhares de exercícios físicos.
- Axios: Biblioteca para realizar requisições HTTP.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como rodar o projeto


# 1. Clone o repositório do projeto
git clone https://github.com/rafael-men/nome-do-repo

# 2. Acesse o diretório do projeto
cd main-project

# 3. Instale as dependências necessárias
npm install
# ou use
yarn install

# 4. Crie o arquivo .env e adicione a chave da API do ExerciseDB
echo "REACT_APP_EXERCISEDB_API_KEY=your_api_key" > .env

# 5. Inicie o projeto
npm start
# ou use
yarn start

