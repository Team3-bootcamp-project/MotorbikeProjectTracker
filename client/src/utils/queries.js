import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      }
  }
`;
//GETS ALL PROJECTS TO POPULATE MAIN PAGE
export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
    projectName
    associatedCustomer
    startedAt
    bikeSpecs {
      bikeYear
      bikeMake
      bikeModel
    }
    estimatedCost
    workToBeDone {
      cosmetic
      engineWork
      brakes
      electric
      suspension
    }
    timeline {
      title
      description
      date
    }
  }
}
`;



//USED TO POPULATE SINGLE PROJECT PAGE

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
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
//not implemented

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       projectName
//       associatedClient
//       statedAt
//       bikeSpecs {
//         bikeYear
//         bikeMake
//         bikeModel
//       }
//       workToBeDone {
//         cosmetic
//         engineWork
//         brakes
//         electric
//         suspension
//       }
//     }
//   }
// `;
