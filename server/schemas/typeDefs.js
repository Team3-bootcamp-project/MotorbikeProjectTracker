const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID
    clientName: String
    email: String
    password: String
    phone: String
    projects: [Project]!
  }

  type Project {
    _id: ID
    projectName: String
    associatedClient: [Client]
    startedAt: String
    bikeSpecs: [String]
    workToBeDone: [workToBeDone]
    timeline: [timeline]
  }

  type BikeSpecs {
    bikeYear: Int
    bikeMake: String
    bikeModel: String
  }

  type workToBeDone {
    cosmetic: String
    engineWork: String
    brakes: String
    electric: String
    suspension: String
  }
  type timeline {
    title: String
    Description: String
    Date: String
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
    ## All these need to be modified, not sure what args they need
    createProject: String
    updateProject: String
    createEvent: String
    createProject: String
  }
`;

module.exports = typeDefs;
