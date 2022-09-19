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
} from "@chakra-ui/react";

const MeasurementValue = () => {
  const [measurement, setMeasurement] = React.useState(0);

  return (
    <NumberInput onChange={(valueStr, valueNumber) => setMeasurement(valueNumber)} defaultValue={measurement} precision={2} step={0.2}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}

const MeasurementsRow = ({ size }: { size: string }) => {
  const [sizeValue, setSizeValue] = React.useState(size);

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
}

export default MeasurementsRow;