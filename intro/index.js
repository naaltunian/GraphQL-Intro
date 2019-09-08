const { ApolloServer } = require('apollo-server');

let _id = 0;
const photos = [];

const typeDefs = `
    type Query {
        totalPhotos: Int!
        allPhotos: [Photo!]!
    }

    type Mutation {
        postPhoto(name: String! description: String): Photo!
    }

    type Photo {
        id: ID!
        url: String!
        name: String!
        description: String
    }
`
const resolvers = {
    Query: {
        totalPhotos: () => photos.length,
        allPhotos: () => photos
    },

    Mutation: {
        postPhoto(parent, args) {
            const newPhoto = {
                id: _id++,
                ...args
            }
            photos.push(newPhoto);
            return newPhoto;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(url));