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
    clientName: [Client]
    startedAt: String
  }


  type Auth {
    token: ID!
    user: Client
  }

  type Query {
    clients: [Client]
    client(email: String!): Client
    projects(email: String): [Project]
    project(projectId: ID!): Project
    me: Client
  }

  type Mutation {
    addClient(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addThought(thoughtText: String!): Project
    # addComment(thoughtId: ID!, commentText: String!): Project
    # removeThought(thoughtId: ID!): Project
    # removeComment(thoughtId: ID!, commentId: ID!): Project
  }
`;

module.exports = typeDefs;
