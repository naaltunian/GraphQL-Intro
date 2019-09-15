const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

type User {
    _id: ID
    name: String!
    email: String!
    age: Int!
    favoriteBooks: [Book]
}

type Book {
    name: String!
    author: String!
    description: String
    category: String!
    pageCount: Int
    dateAddedToLibrary: String
}

input AddBookInput {
    name: String!
    author: String!
    description: String
    category: String!
    pageCount: Int
}

type Query {
    getBook(_id: ID!): Book
    getAllBooks: [Book]
}

type Mutation {
    addBook(book: AddBookInput!): Book
    deleteBook(_id: ID!): Book
}

`