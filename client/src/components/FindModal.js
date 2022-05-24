import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    FormControl
  } from '@chakra-ui/react'
import { QUERY_SINGLE_PROJECT } from '../utils/queries';



  export const FindModal = props => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [id, setId]  = useState('');
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  const project = data?.project;
    


    const link = `/SingleProject/${id}`

    return (
      <FormControl>
        <Button onClick={onOpen}>Find Project</Button>
  
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          
              <ModalContent>
                

                <ModalHeader>Insert Project ID</ModalHeader>
            <ModalCloseButton />
                <ModalBody>
                    
                        <Input
                    type="text"
                    placeholder='Insert Project ID'
                    onChange={event => setId(event.target.value)}
                    />

                </ModalBody>
  
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                </Button>
                
                <Link to={link}>
                  <Button variant='ghost' type='submit' onClick={onClose} >Search</Button>
                </Link>
                
                </ModalFooter>
                 
            
          </ModalContent>
          
          
        </Modal>

      </FormControl>
    )
  }