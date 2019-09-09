const { ApolloServer } = require('apollo-server');

let _id = 0;
const people = [];

const typeDefs = `
    type Query {
        totalPeople: Int!
        allPeople: [Person!]!
    }

    type Mutation {
        addPerson(input: AddPersonInput!): Person!
    }

    type Person {
        id: ID!
        name: String!
        description: String
        age: Int
        email: String
        occupation: String
        occupationField: OccupationField
    }

    input AddPersonInput {
        name: String!
        description: String
        age: Int
        email: String
        occupation: String
        occupationField: OccupationField=OTHER

    }

    enum OccupationField {
        TECHNOLOGY
        EDUCATION
        FINANCE
        CONSTRUCTION
        DESIGN
        OTHER
        UNKNOWN
    }
`

const resolvers = {
    Query: {
        totalPeople: () => people.length,
        allPeople: () => people
    },

    Mutation: {
        addPerson(parent, { input }) {
            const newPerson = {
                id: _id++,
                name: input.name,
                description: input.description,
                age: input.age,
                email: input.email,
                occupation: input.occupation,
                occupationField: input.occupationField
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