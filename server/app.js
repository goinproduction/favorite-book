const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// LOAD SCHEMA/ RESOLVER
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const app = express();

server.applyMiddleware({
    app,
});

app.listen({ PORT: 4000 }, () =>
    console.log(
        `Server is starting at http://localhost:4000/${server.graphqlPath}`
    )
);
