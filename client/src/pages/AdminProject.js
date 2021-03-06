import React, {useState} from "react";
import { Box, Heading, Center, Stack, VStack, Text, Button, ButtonGroup, Input} from '@chakra-ui/react';
import { useMutation } from "@apollo/client";
import {UPDATE_PROJECT} from "../utils/mutations"
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

function AdminProject(){
    const [formState, setFormState] = useState({
        projectId: '',
        projectName: '',
        estimatedCost: 0,
      });
    
    const [updateProject, {error, data}] = useMutation(UPDATE_PROJECT)
       
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            
            const { data } = await updateProject({
                variables: {
                    projectId: formState.projectId,
                    projectName: formState.projectName,
                    estimatedCost: parseInt(formState.estimatedCost)
                },
            });
            

            // setFormState({
            //     projectId: '',
            //     estimatedCost:'',
            // })

            
            
        } catch (err) {
            console.error(err);
        }
    };
        
    const handleChange = (event) => {
        const { name , value } = event.target;

        setFormState({...formState, [name]: value})
    }



    return(

        <VStack w='100%'>
            <form onSubmit={handleFormSubmit}>
                <Center mt={2} mb={2} h='80px'>
                    <Heading fontSize='50px' fontWeight='bold'>Project ID</Heading>
                </Center>
                <Center>
                    <Input placeholder="ID" name="projectId" value={formState.projectId} onChange={handleChange}/>
                </Center>
                <Center mt={2} mb={2} h='80px'>
                    <Heading fontSize='50px' fontWeight='bold'>Change Project Name</Heading>
                </Center>
                <Center>
                    <Input placeholder="Project Name" name="projectName" value={formState.projectName} onChange={handleChange}/>
                </Center>

                <Center mt={2} mb={2} h='100px'>
                    <Heading fontSize='50px' fontWeight='bold'>Change Estimated Cost</Heading>
                </Center>
                <Center>
                    <Input placeholder="Estimated Cost" type="number" name="estimatedCost" value={formState.estimatedCost} onChange={handleChange}/>
                </Center>

                <Center mt={2} mb={2}>
                    <Button type="submit">Update</Button>
                </Center>
                {error && <div>Something went wrong...</div>}
                

                {data
                ?<Stack p={8} spacing={8} direction='row' bg='#652226' borderColor='black' border='4px'>
                    
                    <Feature
                        title={`ID: ${data.updateProject._id}`}
                        make={`New Project Name: ${data.updateProject.projectName}`}
                        year={`New Cost: $${data.updateProject.estimatedCost}`}
                        notes=""
                        desc='The future can be even brighter but a goal without a plan is just a wish'
                        spacing = {15}
                        color='white'
                    />
                </Stack>
                :<Stack p={8} spacing={8} direction='row' bg='#652226' borderColor='black' border='4px'>
                    <Heading>No data yet!</Heading>
                </Stack>
                    
                
            }

                

            
                <ButtonGroup gap='40' variant='outline' size='lg' p={10}>
                        <Button shadow='md' bg='#652226' color='white' _hover={{ bgColor:'black' }}>
                            Preview Timeline
                        </Button>
                </ButtonGroup>
            </form>
           
           
            

        </VStack>
    )

}

export default AdminProject