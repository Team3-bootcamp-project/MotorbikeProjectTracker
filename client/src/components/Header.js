import React from "react";
import { Box, Heading, HStack, Spacer, Button, ButtonGroup, Flex} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Header(){
    return(
        <Box bg='none' shadow='md' w='100%' p={4} >
            <HStack>
                <Flex w="100%">
                    <Heading>Bike Project Tracker</Heading>

                    <Spacer></Spacer>
                    <ButtonGroup gap='.03' variant='ghost' size='sm' mt={2}>
                    <Button>
                        Homepage
                    </Button>

                    <Button>
                        Login
                    </Button>

                    <Button>
                        Gallery
                    </Button>

                    <Button>
                        Inquiries
                    </Button>

                </ButtonGroup>

                <Box>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>

                </Flex>
            </HStack>
        </Box>
    )
}

export default Header