import React, { useState } from "react";
import { Box, Image, Heading, Center, Stack, VStack, Text, Wrap, WrapItem, Button, ButtonGroup, Input} from '@chakra-ui/react';
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_PROJECT } from "../utils/mutations"
import { QUERY_PROJECTS } from "../utils/queries"





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
        _id: '',
        estimatedCost: '',
      });

      

      const [updateProject, {error}] = useMutation(UPDATE_PROJECT)
       

        const handleFormSubmit = async (event) => {
            event.preventDefault();
        
            try {
              const { data } = await updateProject({
                variables: { ...formState},
              });

              setFormState({
                  _id: '',
                  estimatedCost: ''
              })
             
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
                <Center mt={4} mb={4}>
                    <Heading>Update by ID</Heading>
                </Center>
                <Center>
                    <Input type="text" placeholder="ID Here" name="_id" value={formState._id} onChange={handleChange}/>
                </Center>

                {/* <Center mt={4} mb={4}>
                    <Heading>Change Project Name</Heading>
                </Center>
                <Center>
                    <Input type="text" placeholder="Change Name" value={formState.projectName} onChange={handeChange}/>
                </Center> */}
            
                <Center mt={1} mb={1} h='100px'>
                    <Heading>Change Estimated Cost</Heading>
                </Center>
                <Center>
                    <Input type="text" placeholder="Change Cost" name="estimatedCost" value={formState.estimatedCost} onChange={handleChange}/>
                </Center>
                {error && (
                    <div>Something went wrong...</div>
                )}

                <Center>
                    <Button type="submit">Update!</Button>
                </Center>
                <Stack p={8} spacing={8} direction='row' m>
                    <Feature
                        title='Bike Details'
                        make='Make:'
                        year='Year:'
                        notes='Notes:'
                        desc='The future can be even brighter but a goal without a plan is just a wish'
                        spacing = {15}
                    />
                </Stack>

            

            
                <ButtonGroup gap='40' variant='outline' size='lg' p={10}>
                        <Button shadow='md'>
                            Preview Timeline
                        </Button>
                        
                        <Button shadow='md'>
                            Messege Mechanic
                        </Button>
                        
                </ButtonGroup>
             </form>
           
           
            

        </VStack>
       
    )

}

export default AdminProject