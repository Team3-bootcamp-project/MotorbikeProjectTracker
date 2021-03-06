const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type photos {
    link: String
    linkb: String
  }
  type Project {
    _id: ID
    projectName: String
    associatedCustomer: String
    startedAt: String
    bikeSpecs: [BikeSpecs] 
    estimatedCost: Float
    workToBeDone: [workToBeDone]
    timeline: [Event]
    photos: [photos]
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
    eventPhoto: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    projects: [Project]
    project(projectId: ID!): Project
    me: Project
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    ## All these need to be modified, not sure what args they need
    createProject(projectName: String!, estimatedCost: Float!): Project
    updateProject(projectId: ID!, estimatedCost: Float, projectName: String): Project
    createEvent(title: String!, description: String!, projectId: ID!, Date: String, eventPhoto: String): Project
  }
`;

module.exports = typeDefs;
