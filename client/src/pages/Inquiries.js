import React, {useState} from "react";
import { Box, Heading, VStack, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';


function Inquiries(){
    const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

    return(
        <VStack w='100%'>
            
            <Box m={5}>
                <Heading fontSize='50px'>Contact Us</Heading>
            </Box>

            
          <Box align='center' w='75%' bg='#652226' borderColor='black' border='4px' m={10}>
            <FormControl isRequired p={10}>
                <FormLabel htmlFor='first-name' mb={5} fontSize='20px' fontWeight='bold' color='white'>Name</FormLabel>
                <Input id='first-name' placeholder='Name'  borderColor='white' color='white' onChange={handleInputChange}/>
            </FormControl>
            
          
            <FormControl isRequired={isError} p={10}>
      <FormLabel htmlFor='email' mb={5} fontSize='20px' fontWeight='bold' color='white'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        placeholder='Email@email.com'
        borderColor='white'
        color='white'
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
    </Box>
        </VStack>
    )
}

export default Inquiries