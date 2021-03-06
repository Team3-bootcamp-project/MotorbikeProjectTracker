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
        SingleProject,
        Login,
        ErrorPage
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

// breakpoints for flex display on hamburger menu in navbar when screen size is small
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}


function App() {
  return (
  <ApolloProvider client={client}>
     <Router>
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>

      <Flex>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/Login' element={<Login />}/>
        <Route path="/SingleProject/:projectId" element={<SingleProject />} />
        <Route path='/SingleProject/undefined' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />}/>
        <Route path="/Inquiries" element={<Inquiries />} />
        <Route path="/AdminProject" element={<AdminProject />} />
        </Routes>
      </Flex>

    
      
    </ChakraProvider>
    </Router>
  </ApolloProvider>
   
  );
}

export default App;
