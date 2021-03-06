import React from "react";
import { Box, Heading, HStack, Stack, Spacer, Button, ButtonGroup, Flex, MenuButton, IconButton} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FindModal } from "./FindModal";
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header(){
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return(
        <Box shadow='md' w='100%' p={4} bgGradient='linear(to-r, black.000, red.500, yellow.300)' color='white'>
            <HStack>
                <Flex w="100%">
                    <Heading pl={20}>Bike Project Tracker</Heading>

                    <Spacer></Spacer>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                    <ButtonGroup gap='.03' variant='ghost' size='sm' mt={2}  _hover={{ color:'black' }}>
                    
                        <Link to='/'>
                            <Button>
                                Homepage
                            </Button>
                        </Link>

                        <FindModal />

                        {Auth.loggedIn() ? (
                        <>
                        <Link to='/AdminProject'>
                            <Button>
                            Project Management
                            </Button>
                        </Link>
                            {/* wrapped logout button in link tags to make it space out evenly in the header */}
                            <Link to='/'> 
                            <Button className="btn btn-lg btn-light m-2" onClick={logout}>
                            Logout
                            </Button>
                            </Link>

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
                </Flex>
                
                <IconButton
                 aria-label='Open Menu'
                 size='md'
                 mr={2}
                 icon={<HamburgerIcon/>}
                 variant="ghost"
                 color='black'
                 display={['flex', 'flex', 'none','none']}>
                </IconButton> 

                <Box>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Box>

             </Flex>
            </HStack>
        </Box>
    )
}

export default Header