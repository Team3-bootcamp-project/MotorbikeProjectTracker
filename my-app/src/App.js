import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './Header';
import Homepage from './Homepage';
//import SingleProject from './SingleProject';
//import Profile from './Profile';
//import AdminProject from './AdminProject';
//import Inquiries from './Inquiries'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header></Header>
      </Flex>

      <Flex>
        <Homepage></Homepage>
        {/* <Profile></Profile> */}
        {/* <SingleProject></SingleProject> */}
        {/* <AdminProject></AdminProject> */}
        {/* <Inquiries></Inquiries> */}
      </Flex>

    
      
    </ChakraProvider>
  );
}

export default App;
