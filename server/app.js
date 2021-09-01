require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load SCHEMA/ RESOLVER
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// Load mongo data methods
const mongoDataMethods = require('./data/db');

// Connect to database
const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ocnkw.mongodb.net/book-manager?retryWrites=true&w=majority`,
            (err) => { 
                if (err) throw err;
                console.log('connected to MongoDB');
            }
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectToDatabase();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }),
});

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(
        `Server is starting at http://localhost:4000${server.graphqlPath}`
    )
);
