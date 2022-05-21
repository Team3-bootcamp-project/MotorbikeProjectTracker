import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      projectName
    }
  }
`;
//Call from main page upon clicking card?
export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectName
      associatedClient
      statedAt
      bikeSpecs {
        bikeYear
        bikeMake
        bikeModel
      }
      workToBeDone {
        cosmetic
        engineWork
        brakes
        electric
        suspension
      }
    }
  }
`;
//my project 
export const QUERY_ME = gql`
  query me {
    me {
      _id
      projectName
      associatedClient
      statedAt
      bikeSpecs {
        bikeYear
        bikeMake
        bikeModel
      }
      workToBeDone {
        cosmetic
        engineWork
        brakes
        electric
        suspension
      }
    }
  }
`;
