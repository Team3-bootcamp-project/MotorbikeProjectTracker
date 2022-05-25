import React, {useState} from "react";
import { Box, Heading, VStack, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button} from '@chakra-ui/react';


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
            <Heading>Email Us for Inquiries!</Heading>
            <a href="mailto:bikeshop@email.com">
              <Button>Email</Button>
            </a>
        
           
          </Box>
        </VStack>
    )
}

export default Inquiries