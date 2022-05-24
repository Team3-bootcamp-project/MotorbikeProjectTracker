import React from "react";
import { Box, Image, Heading, Center, Stack, VStack, Text, Wrap, WrapItem} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';
import ErrorPage from './ErrorPage';

function Feature({ title, desc, make, year, model, w1, w2, w3, w4, w5, ...rest }) {
    return (
    <Box>
      <Box p={3} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{make}</Text>
        <Text mt={4}>{year}</Text>
        <Text mt={4}>{model}</Text>
        <Text mt={4}>{desc}</Text>
      </Box>
      <Box p={3} shadow='md' borderWidth='1px' {...rest}>
      <Heading mb={4}fontSize='lg'>Work Done</Heading>
        <Text>Cosmetic:</Text>
        <Text mb={3} >{w1}</Text>
        <Text >Engine/Power:</Text>
        <Text mb={3} >{w2}</Text>
        <Text>Electrical/Accessories:</Text>
        <Text mb={3}>{w3}</Text>
        <Text>Suspension:</Text>
        <Text mb={3}>{w5}</Text>
        <Text>Brakes:</Text>
        <Text mb={3}>{w4}</Text>        
      </Box>
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
    const photo1 = project.photos[0].link
    const projectName = project.projectName
    const Make = `Make: ${project.bikeSpecs[0].bikeMake}`
    const Year = `Year: ${project.bikeSpecs[0].bikeYear}`
    const Model = `Model: ${project.bikeSpecs[0].bikeModel}`
    const work0 = project.workToBeDone[0].cosmetic
    const work1 = project.workToBeDone[0].engineWork
    const work2 = project.workToBeDone[0].electric
    const work3 = project.workToBeDone[0].brakes
    const work4 = project.workToBeDone[0].suspension
 
 
    
    return(
        <VStack w='100%' h='100%'>
            <Center mt={8} mb={8} h='100px'>
                <Heading fontSize='50px' fontWeight='bold'>{project.projectName}</Heading>
            </Center>

            <Wrap spacing='30px' align='center'>
                <WrapItem>
                    <Center align='center'><a href={`${project.photos[0].link}`}  target="_blank" rel="noreferrer">
                        <Image boxSize='300px' m={8}  shadow='md' borderStyle='solid' borderColor='black' border='4px' src={`${project.photos[0].link}`} fallbackSrc='https://via.placeholder.com/150' />
                        </a>
                    </Center>
                </WrapItem>

                <WrapItem>
                   
                    <Center ><a href={`${project.photos[0].linkb}`}  target="_blank" rel="noreferrer">
                        <Image boxSize='300px' m={8} shadow='md' borderStyle='solid' borderColor='black' border='4px' src={`${project.photos[0].linkb}`} fallbackSrc='https://via.placeholder.com/150' />
                        </a>
                    </Center>

                </WrapItem>

            </Wrap>

            <Stack p={8}  spacing={8} direction='row' bg='#652226' borderColor='black' border='4px'>
                <Feature
                    title= {projectName}
                    make={Make}
                    year={Year}
                    model={Model}
                    w= {work0}
                    w1= {work0}
                    w2= {work1}
                    w3= {work2}
                    w4= {work3}
                    w5= {work4}
                    spacing = {15}
                    color='white'
                />
            </Stack>

        </VStack>
    )
    
}

export default SingleProject