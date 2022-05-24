import React from "react";
import { Box, Image, Heading, Center, Stack, VStack, Text, Wrap, WrapItem, Button, ButtonGroup} from '@chakra-ui/react';

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
    return(

        <VStack w='100%'>
            <Center mt={8} mb={8} h='100px'>
                <Heading fontSize='50px' fontWeight='bold'>Project Name</Heading>
            </Center>

            <Wrap spacing='30px' align='center'>
                <WrapItem>
                    <Center>
                        <Image shadow='md' boxSize='300px' m={8} borderStyle='solid' borderColor='black' border='4px' src='https://cdn.visordown.com/12651_0.jpg' fallbackSrc='https://via.placeholder.com/150' />
                     </Center>
                </WrapItem>

                <WrapItem>
                    <Center >
                        <Image shadow='md' boxSize='300px' m={8} borderStyle='solid' borderColor='black' border='4px' src='https://www.motorcyclespecs.co.za/Gallery%20B/Ducati%20GT1000%2006%20%201.jpg' fallbackSrc='https://via.placeholder.com/150' />
                    </Center>
                </WrapItem>
  
</Wrap>

            <Stack p={8} spacing={8} direction='row' bg='#652226' borderColor='black' border='4px'>
                 <Feature
                    title='Bike Details'
                    make='Make:'
                    year='Year:'
                    notes='Notes:'
                    desc='The future can be even brighter but a goal without a plan is just a wish'
                    spacing = {15}
                    color='white'
                />
            </Stack>

           
            <ButtonGroup gap='40' variant='outline' size='lg' p={10}>
                    <Button shadow='md' bg='#652226' color='white' _hover={{ bgColor:'black' }}>
                        Preview Timeline
                    </Button>
                    
                    <Button shadow='md' bg='#652226' color='white' _hover={{ bgColor:'black' }}>
                        Messege Mechanic
                    </Button>
                    
            </ButtonGroup>
           
            

        </VStack>
    )

}

export default AdminProject