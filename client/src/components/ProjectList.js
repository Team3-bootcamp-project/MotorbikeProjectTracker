import React from "react";
import { Box, Heading, Image, Stack, VStack, Text, Center} from '@chakra-ui/react';
import { HStack, Spacer, Button, ButtonGroup, Flex} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Feature from './Feature'

const ProjectList = ({
  projects,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    return <h3>No projects Yet</h3>;
  }

  return (
    <div>
      
      {showTitle && <h3>{title}</h3>}
      {projects &&
        projects.map((project) => ( 
     
        <VStack>{  console.log(project)}
          <Stack p={8} mt={10} spacing={30} direction='row' bg='#652226' borderStyle='solid' border='4px' borderColor='black'>
            <Image boxSize='300px' shadow='md' src='https://cdn.visordown.com/12651_0.jpg' fallbackSrc='https://via.placeholder.com/150' />
            <Feature
              title= {project.projectName}
              desc= {project.bikeSpecs[0].bikeMake}
              year= {project.bikeSpecs[0].bikeYear}
              id = {project._id}
              color='white'
              boxSize='300px'
            />
          </Stack>
        
          </VStack>
  ))}
  </div>
);
};
export default ProjectList;
