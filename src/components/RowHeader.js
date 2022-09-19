import React from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';

const RowHeader = () => {
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Heading size="md">Size</Heading>
      <Heading size="md">Chest Circumference</Heading>
      <Heading size="md">Shoulder to Hips</Heading>
      <Heading size="md">Armpit to Wrist</Heading>
      <Heading size="md">Wrist Circumference</Heading>
      <Heading size="md">Armhole Depth</Heading>
    </SimpleGrid>
  );
};

export default RowHeader;
