import React from "react";
import { Box, Image, Heading, Center, Stack, VStack, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';


function Feature({ title, desc, make, year, notes, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={8}>{make}</Text>
        <Text mt={8}>{year}</Text>
        <Text mt={8}>{notes}</Text>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }


function SingleProject(){
    const { ProjectId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        // pass URL parameter
        variables: { ProjectId: ProjectId },
      });

      const project = data?.project || {};
 
    return(

        <VStack w='100%'>
            <Center mt={8} mb={8} h='100px'>
                <Heading>{project.projectName}</Heading>
            </Center>

            <Wrap spacing='30px' align='center'>
                <WrapItem>
                    <Center align='center'>
                        <Image boxSize='200px' m={8}  shadow='md' src='picture.png' fallbackSrc='https://via.placeholder.com/150' />
                     </Center>
                </WrapItem>

                <WrapItem>
                    <Center >
                        <Image boxSize='200px' m={8} shadow='md' src='picture.png' fallbackSrc='https://via.placeholder.com/150' />
                    </Center>
                </WrapItem>
  
</Wrap>

            <Stack p={8} spacing={8} direction='row'>
                 <Feature
                    title='Bike Details'
                    make='Make:'
                    year='Year:'
                    notes='Notes:'
                    desc='The future can be even brighter but a goal without a plan is just a wish'
                    spacing = {15}
                />
            </Stack>

        </VStack>
    )

}

export default SingleProject