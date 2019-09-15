const { gql } = require('apollo-server-express');

exports.typeDefs = gql`

# types
type Query {
    getBook(_id: ID!): Book
    getAllBooks: [Book]
}

type Mutation {
    addBook(book: AddBookInput!): Book
    deleteBook(_id: ID!): Book
}
type User {
    _id: ID
    name: String!
    email: String!
    age: Int!
    favoriteBooks: [Book]
}

type Book {
    _id: ID
    name: String!
    author: String!
    description: String
    category: String!
    pageCount: Int
    dateAddedToLibrary: String
}

# inputs
input AddBookInput {
    name: String!
    author: String!
    description: String
    category: CategoryEnum=UNKNOWN
    pageCount: Int
}

# enums
enum CategoryEnum {
    ADVENTURE
    SCIFI
    FANTASY
    ROMANCE
    GOTHIC
    TRAVEL
    UNKNOWN
}

`