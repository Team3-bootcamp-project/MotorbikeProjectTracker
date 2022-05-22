import React from "react";
import { Box, Heading, Image, Stack, VStack, Text} from '@chakra-ui/react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import ProjectList from "../components/ProjectList";
import {
  QUERY_PROJECTS
} from '../utils/queries.js'

// import { graphql } from 'react-apollo'




  
  function Homepage() {

    return (
        <ProjectList />
      
    )
  }
  export default Homepage;
  // export default graphql(QUERY_PROJECTS)(Homepage);