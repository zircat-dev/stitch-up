import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Input,
  SimpleGrid,
  Box,
  Heading,
} from '@chakra-ui/react';

import { MeasurementValue } from './MeasurementsRow';
import { MathContext } from './MathematicalThingamajiggy';
import { setProp } from '@utils/ramda';

const GaugeRow = () => {
  const { state, actions } = React.useContext(MathContext);

  const updateGauge = (propName) => (value) => actions.updateGauge({ type: propName, value })

  return (
    <Box flex="1">
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box>
          <Heading size="md">Gauge</Heading>
        </Box>
        <Box>
          <Heading size="md">Rows</Heading>
          <MeasurementValue value={state.gauge.rows} update={updateGauge('rows')} />
        </Box>
        <Box>
          <Heading size="md">&</Heading>
        </Box>
        <Box>
          <Heading size="md">Stitches</Heading>
          <MeasurementValue value={state.gauge.stitches} update={updateGauge('stitches')} />
        </Box>
      </SimpleGrid>
    </Box>
    
  );
};

export default GaugeRow;
