const { ApolloServer } = require('apollo-server');

let _id = 0;
const people = [];

const typeDefs = `
    type Query {
        totalPeople: Int!
        allPeople: [Person!]!
    }

    type Mutation {
        addPerson(name: String! description: String, age: Int, email: String): Person!
    }

    type Person {
        id: ID!
        name: String!
        description: String
        age: Int
        email: String
    }
`
const resolvers = {
    Query: {
        totalPeople: () => people.length,
        allPeople: () => people
    },

    Mutation: {
        addPerson(parent, { name, description, age, email }) {
            const newPerson = {
                id: _id++,
                name,
                description,
                age,
                email
            }
            people.push(newPerson);
            return newPerson;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url}) => console.log(url));