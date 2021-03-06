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
      _id
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
    photos {
      link
      linkb
    }
  }
}
`;



//USED TO POPULATE SINGLE PROJECT PAGE

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      projectName
      associatedCustomer
      startedAt
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
      photos {
      link
      linkb
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
