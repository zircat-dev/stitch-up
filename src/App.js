import React from 'react';
import { ChakraProvider, ColorModeScript, Container, Flex, Heading } from '@chakra-ui/react';
import { EditableMeasurements, ResultsView } from '@components/MeasurementsRow';
import GaugeRow from '@components/GaugeRow';
import Ease from '@components/Ease';
import * as Math from '@components/MathematicalThingamajiggy';

import theme from './theme';

const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="dark" />
    <Math.Provider>
      <div className="App">
        <Container width="container.xl" maxW="full" marginTop="100">
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>Stitchy Fit</Heading>
          <Flex direction="column" gap="8">
            <EditableMeasurements />
            <GaugeRow />
            <Ease />
            <ResultsView />
          </Flex>
        </Container>
      </div>
    </Math.Provider>
  </ChakraProvider>
);

export default App;
