const express = require('express');
// const { ApolloServer, gql } = require('apollo-server');
// const { typeDefs } = require('./typeDefs');
// const { resolvers } = require('./resolvers');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// models and types
const Movie = require('./models/Movie');
const User = require('./models/User');
// const { typeDefs } = require('./schema');
// const { resolvers } = require('./resolvers');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error());

// graphQL middleware

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));