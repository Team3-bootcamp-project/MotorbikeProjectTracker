const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID
    username: String
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
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects(username: String): [Project]
    project(projectId: ID!): Project
    me: Client
  }

  type Mutation {
    addClient(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    # addThought(thoughtText: String!): Project
    # addComment(thoughtId: ID!, commentText: String!): Project
    # removeThought(thoughtId: ID!): Project
    # removeComment(thoughtId: ID!, commentId: ID!): Project
  }
`;

module.exports = typeDefs;
