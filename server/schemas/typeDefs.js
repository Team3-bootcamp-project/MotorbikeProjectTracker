const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID
    clientName: String
    email: String
    password: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    projectName: String
    associatedClient: [Client]
    startedAt: String
    bikeSpecs: [String]
    workToBeDone: String
  }


  type Auth {
    token: ID!
    user: Client
  }

  type Query {
    clients: [Client]
    client(email: String!): Client
    projects: [Project]
    project(projectId: ID!): Project
    me: Client
  }

  type Mutation {
    addClient(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
