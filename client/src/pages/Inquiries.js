import React, {useState} from "react";
import { Box, Flex,  Heading, VStack, Center, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';


function Inquiries(){
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

    return(
        <VStack>
            
            <Box p={5}>
                <Heading fontSize='50px'>Contact Us</Heading>
            </Box>
          
            <FormControl isRequired align='center'>
                <FormLabel htmlFor='first-name'>Name</FormLabel>
                <Input id='first-name' placeholder='Name' />
            </FormControl>

            <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
        </VStack>
    )
}

export default Inquiries