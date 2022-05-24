import React from "react";
import { Heading, VStack, Text, Flex } from '@chakra-ui/react';
import { useQuery } from "@apollo/client";
import ProjectList from "../components/ProjectList";
import {
  QUERY_PROJECTS
} from '../utils/queries.js'

// import { graphql } from 'react-apollo'

  
const Homepage = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

    return (
      <VStack w='100%'>
        <Flex>
          <Heading m={8} fontSize='50px' fontWeight='bold'>Welcome!</Heading>
        </Flex>

        <Flex>
          <Text align='center' fontSize='3xl' fontWeight='bold'>The Bike Project Tracker will help you track the progress of your bike customizations.</Text>
        </Flex>

        <Flex>
          <Text align='center' fontSize='3xl' fontWeight='bold'>Check out the bikes we've customized below.</Text>
        </Flex>
      
        <ProjectList 
        projects={projects}
          />
      </VStack>
      
    )
  }
  export default Homepage;
  // export default graphql(QUERY_PROJECTS)(Homepage);