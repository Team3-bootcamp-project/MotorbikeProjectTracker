import React from "react";
import { Box, Heading, HStack, Spacer, Button, ButtonGroup, Flex} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';

function Header(){
    return(
        <Box bg='none' shadow='md' w='100%' p={4} >
            <HStack>
                <Flex w="100%">
                    <Heading>Bike Project Tracker</Heading>

                    <Spacer></Spacer>
                    <ButtonGroup gap='.03' variant='ghost' size='sm' mt={2}>
                    <Router>
                    <Link to='../pages/Homepage'>
                    <Button>
                        Homepage
                    </Button>
                    </Link>
                    <Link to='../pages/Login'>
                    <Button>
                        Login
                    </Button>
                    </Link>
                    <Button>
                        Gallery
                    </Button>
                    <Link to='../pages/Inquiries'>
                    <Button>
                        Inquiries
                    </Button>
                    </Link>
                    </Router>
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