import { gql } from '@apollo/client';

//query for logging in
export const LOGIN_CLIENT = gql`
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
//This should only be called by the Admin user when creating a client for a project?
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
//Creating a project
export const ADD_PROJECT = gql`
  mutation addProject($projectName: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      projectName
      associatedClient
      startedAt
      workToBeDone {
    ##This should be an array of objects##                
      }
    }
  }
`;
 //This one is for adding events to the timeline
 //called by admin user when recording the work that was done. Not sure how to do it

export const ADD_EVENT = gql`
  mutation addEvent($projectId: ID!, $description: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
