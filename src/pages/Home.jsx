import React from 'react';
import { Container, Text } from '@chakra-ui/react';
export default function Home() {
  return (
    <Container
      maxW={'container.xxl'}
      display={'flex'}
      minH={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Text fontSize={'3xl'} fontWeight={500}>
        Base Setup 1.0
      </Text>
      {import.meta.env.VITE_TEST_API}
    </Container>
  );
}
