import { gql } from '@apollo/client';

//query for logging in
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
//This should only be called by the Admin user when creating a client for a project?asd
export const ADD_CLIENT = gql`
  mutation addClient($email: String!, $password: String!) {
    addClient(email: $email, password: $password) {
      token
      user {
        _id
        }
    }
  }
`;
//Creating a project
export const CREATE_PROJECT = gql`
  mutation createProject($projectName: String!) {
    createProject(projectName: $projectName) {
      _id
      projectName
      associatedClient
      startedAt
      workToBeDone 
    }
  }
`;
 //This one is for adding events to the timeline
 //called by admin user when recording the work that was done. Not sure how to do it

export const CREATE_EVENT = gql`
  mutation createEvent($projectId: String!, $title: String!, $description: String!) {
    createEvent(title: $title){
      _id
      title
      description
    }
    }
  
`;

export const UPDATE_PROJECT = gql`
mutation updateProject($projectId: ID!, $estimatedCost: Float) {
  updateProject(projectId: $projectId, estimatedCost: $estimatedCost) {
    _id
    estimatedCost
  }
}
`;