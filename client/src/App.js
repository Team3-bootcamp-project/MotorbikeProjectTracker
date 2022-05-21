import React from 'react';
import {
  ChakraProvider,
  theme,
  Flex,
} from '@chakra-ui/react';
import Header from './components/Header';
import {Homepage,
        AdminProject,
        Inquiries,
        Profile,
        SingleProject
        } from './pages';
//import SingleProject from './SingleProject';
//import Profile from './Profile';
//import AdminProject from './AdminProject';
//import Inquiries from './Inquiries'



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>

      <Flex>
        <Homepage />
        <Profile />
        <SingleProject />
        {/* <AdminProject></AdminProject> */}
        {/* <Inquiries></Inquiries> */}
      </Flex>

    
      
    </ChakraProvider>
  );
}

export default App;
