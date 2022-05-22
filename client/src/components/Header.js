import React from "react";
import { Box, Heading, HStack, Spacer, Button, ButtonGroup, Flex} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header(){
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return(
        <Box bg='none' shadow='md' w='100%' p={4} >
            <HStack>
                <Flex w="100%">
                    <Heading>Bike Project Tracker</Heading>

                    <Spacer></Spacer>
                    
                    <ButtonGroup gap='.03' variant='ghost' size='sm' mt={2}>
                    
                        <Link to='/'>
                            <Button>
                                Homepage
                            </Button>
                        </Link>

                        {Auth.loggedIn() ? (
                        <>

                        <Link to='/AdminProject'>
                            <Button>
                            PROJECT MANAGEMENT
                            </Button>
                        </Link>

                            <Button className="btn btn-lg btn-light m-2" onClick={logout}>
                            Logout
                            </Button>

                            </>
                           ) :(
                            <Link to='/Login'>
                                <Button>
                                        Admin Login
                                </Button>
                           </Link>
                           )}

                        <Link to='/Inquiries'>
                            <Button>
                                Inquiries
                            </Button>
                        </Link>

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