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
    estimatedCost: Float
    workToBeDone: [workToBeDone]
    timeline: [Event]
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
  type Event {
    title: String
    description: String
    date: String
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
    me: Project
  }

  type Mutation {
    addClient(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    ## All these need to be modified, not sure what args they need
    createProject(projectName: String!, estimatedCost: Float!): Project
    updateProject(projectName: String!): Project
    createEvent(title: String!, description: String!, projectId: String!, Date: String): Project
  }
`;

module.exports = typeDefs;
