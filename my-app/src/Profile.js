import React from "react";
import { Box, Heading, Stack, VStack, Text, Image} from '@chakra-ui/react';

//Once logged in, hamburger menu needs to have "My Projects" button

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
  //Users Projects
  function Profile() {
    return (
      <VStack>
      <Stack p={8} mt={8} spacing={8} direction='row'>
        <Image boxSize='190px' shadow='md' src='picture.png' fallbackSrc='https://via.placeholder.com/150' />
        <Feature
          title='Bike Name'
          desc='Bike Project Details'
        />
      </Stack>

      <Stack p={8} spacing={8} direction='row'>
        <Image boxSize='190px' shadow='md' src='picture.png' fallbackSrc='https://via.placeholder.com/150' />
        <Feature
          title='Bike Name'
          desc='Bike Project Details'
        />
      </Stack>

      </VStack>
      
    )
  }
  
  export default Profile;