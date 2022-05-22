import React from "react";
import { Box, Heading, Image, Stack, VStack, Text} from '@chakra-ui/react';
import { HStack, Spacer, Button, ButtonGroup, Flex} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Auth from '../utils/auth';


function ProjectList() {

    function Feature({ title, desc, ...rest }) {
        return (
          <Box p={5} shadow='md' borderWidth='1px' {...rest}>
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
          </Box>
    
        )
      }
    
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
  export default ProjectList;