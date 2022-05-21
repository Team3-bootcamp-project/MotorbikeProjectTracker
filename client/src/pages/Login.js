import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Box, Flex, Button, Heading, VStack, Center, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    
    <main className="">

      <Box p={5}>
        <Heading fontSize='50px'>Admin Login</Heading>
      </Box>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <FormControl isRequired onSubmit={handleFormSubmit}>
                <FormLabel>Email</FormLabel>
                <Input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <FormLabel>Password</FormLabel>
                <Input
                  className="form-input"
                  placeholder="********"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Login
                </Button>
              </FormControl>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
         
    </main>
  );
};

export default Login;
