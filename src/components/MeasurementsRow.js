import React, { useState } from 'react';
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Input,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';

const MeasurementValue = () => {
  const [measurement, setMeasurement] = useState(0);

  return (
    <NumberInput
      onChange={(valueStr, valueNumber) => setMeasurement(valueNumber)}
      defaultValue={measurement}
      precision={2}
      step={0.2}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

const MeasurementsRow = ({ size }) => {
  const [sizeValue, setSizeValue] = useState(size);

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box>
        <Input
          htmlSize={4}
          width="100px"
          value={sizeValue}
          onChange={(event) => setSizeValue(event.target.value)}
        />
      </Box>
      <Box>
        <MeasurementValue />
      </Box>
      <Box>
        <MeasurementValue />
      </Box>
      <Box>
        <MeasurementValue />
      </Box>
      <Box>
        <MeasurementValue />
      </Box>
      <Box>
        <MeasurementValue />
      </Box>
    </SimpleGrid>
  );
};

export default MeasurementsRow;
