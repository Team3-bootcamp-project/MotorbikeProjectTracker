import { Box, Heading, Text} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
function Feature({ title, make, year, model, id, work, ...rest }) {
    return (
      <Link to={`/SingleProject/${id}`}>
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading mb={10} fontSize='xl'>{title}</Heading>
        <Text fontSize='xl' mt={4}>{make}</Text>
        <Text fontSize='xl' mt={4}>{year}</Text>
        <Text fontSize='xl' mt={4}>{model}</Text>
      </Box>
      </Link>
    )
  }

export default Feature