// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // habilita a interface GraphiQL para testar as consultas
}));

app.listen(4000, () => {
    console.log('Servidor GraphQL rodando na porta 4000');
});
