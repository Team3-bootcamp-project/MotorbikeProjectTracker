import { Box, Heading, Image, Stack, VStack, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
function Feature({ title, desc, year, id, ...rest }) {
  console.log()
    return (
      <Link to={`/SingleProject/${id}`}>
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
        <Text mt={4}>{year}</Text>
        <Text mt={4}>{id}</Text>
      </Box>
      </Link>
    )
  }

export default Feature