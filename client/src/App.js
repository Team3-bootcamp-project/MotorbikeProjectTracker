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

import {
ApolloClient,
InMemoryCache,
ApolloProvider,
createHttpLink,
} from '@apollo/client';   
import { setContext } from '@apollo/client/link/context';

//import SingleProject from './SingleProject';
// import Profile from './Profile';
//import AdminProject from './pages/AdminProject';
//import Inquiries from './Inquiries'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


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
        <Route path="/pages/Profile" element={<Profile />} />
        <Route path="/pages/SingleProject" element={<SingleProject />} />
        <Route path="/pages/Inquiries" element={<Inquiries />} />
        <Route path="/pages/AdminProject" element={<AdminProject />} />
        </Routes>
      </Flex>

    
      
    </ChakraProvider>
    </Router>
  );
}

export default App;
