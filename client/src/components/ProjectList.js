import React from "react";
import { Box, Heading, Image, Stack, VStack, Text} from '@chakra-ui/react';
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
          <Stack p={8} mt={8} spacing={8} direction='row'>
            <Image boxSize='190px' shadow='md' src='picture.png' fallbackSrc='https://via.placeholder.com/150' />
            <Feature
              title= {project.projectName}
              desc= {project.bikeSpecs[0].bikeMake}
              year= {project.bikeSpecs[0].bikeYear}
              id = {project._id}
            />
          </Stack>
        
          </VStack>
  ))}
  </div>
);
};
export default ProjectList;
