import React from 'react';
import {
  SimpleGrid,
  Box,
  Heading,
  Center,
  FormLabel,
} from '@chakra-ui/react';

import { MeasurementValue } from './MeasurementsRow';
import { MathContext } from './MathematicalThingamajiggy';

const GaugeRow = () => {
  const { state, actions } = React.useContext(MathContext);

  const updateGauge = (propName) => (value) => actions.updateGauge({ type: propName, value })

  return (
    <Box flex="1">
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Center>
          <Heading size="md">Gauge</Heading>
        </Center>
        <Box>
          {/* <Heading size="md">Rows</Heading> */}
          <FormLabel>
            Rows
            <MeasurementValue value={state.gauge.rows} update={updateGauge('rows')} />
          </FormLabel>
        </Box>
        <Center>
          <Heading size="md">&</Heading>
        </Center>
        <Box>
          <FormLabel>
            Stitches
            <MeasurementValue value={state.gauge.stitches} update={updateGauge('stitches')} />
          </FormLabel>
        </Box>
      </SimpleGrid>
    </Box>
    
  );
};

export default GaugeRow;
