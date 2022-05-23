import { Box, Heading, Image, Stack, VStack, Text} from '@chakra-ui/react';

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>

    )
  }

export default Feature