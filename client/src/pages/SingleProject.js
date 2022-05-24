import React from "react";
import { Box, Image, Heading, Center, Stack, VStack, Text, Wrap, WrapItem} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';
import ErrorPage from './ErrorPage';

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


const  SingleProject = () => {
    const { projectId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        // pass URL parameter
        variables: { projectId: projectId },
    });

    const project = data?.project;
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (!project) {
        return (<ErrorPage />)
    }

    const Make = `Make: ${project.bikeSpecs[0].bikeMake}`
    const Year = `Year: ${project.bikeSpecs[0].bikeYear}`

    
    return(
        <VStack w='100%' h='100%'>
            <Center mt={8} mb={8} h='100px'>
                <Heading fontSize='50px' fontWeight='bold'>{project.projectName}</Heading>
            </Center>

            <Wrap spacing='30px' align='center'>
                <WrapItem>
                    <Center align='center'>
                        <Image boxSize='300px' m={8}  shadow='md' borderStyle='solid' borderColor='black' border='4px' src={`${project.photos[0].link}`} fallbackSrc='https://via.placeholder.com/150' />
                    </Center>
                </WrapItem>

                <WrapItem>
                    <Center >
                        <Image boxSize='300px' m={8} shadow='md' borderStyle='solid' borderColor='black' border='4px' src={`${project.photos[0].linkb}`} fallbackSrc='https://via.placeholder.com/150' />
                    </Center>
                </WrapItem>

            </Wrap>

            <Stack p={8}  spacing={8} direction='row' bg='#652226' borderColor='black' border='4px'>
                <Feature
                    title='Bike Details'
                    make={Make}
                    year={Year}
                    id= 'ss'
                    desc='The future can be even brighter but a goal without a plan is just a wish'
                    spacing = {15}
                    color='white'
                />
            </Stack>

        </VStack>
    )
    
}

export default SingleProject