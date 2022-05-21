import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
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
// import Profile from './Profile';
//import AdminProject from './pages/AdminProject';
//import Inquiries from './Inquiries'



function App() {
  return (
    <Router>
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>

      <Flex>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SingleProject" element={<SingleProject />} />{/* <SingleProject /> */}
        <Route path="/Inquiries" element={<Inquiries />} />
        <Route path="/AdminProject" element={<AdminProject />} />
        </Routes>
      </Flex>

    
      
    </ChakraProvider>
    </Router>
  );
}

export default App;
