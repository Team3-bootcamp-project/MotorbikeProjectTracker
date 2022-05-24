import React from "react";
import { Image, Stack, VStack } from '@chakra-ui/react';

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
          
        <VStack>
        
          <Stack p={8} mt={10} spacing={30} direction='row' bg='#652226' borderStyle='solid' border='4px' borderColor='black'>
            <Image boxSize='300px' shadow='md' src={`${project.photos[0].link}`} fallbackSrc='https://via.placeholder.com/150' />
            <Feature
              title= {project.projectName}
              make= {project.bikeSpecs[0].bikeMake}
              year= {project.bikeSpecs[0].bikeYear}
              id = {project._id}
              model = {project.bikeSpecs[0].bikeModel}
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
