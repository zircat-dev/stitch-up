import React from "react";
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
  Heading
} from "@chakra-ui/react";

const MeasurementValue = () => {
  const [measurement, setMeasurement] = React.useState(0);

  return (
    <NumberInput
      onChange={(valueStr, valueNumber) => setMeasurement(valueNumber)}
      defaultValue={measurement}
      precision={1}
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

const GaugeRow = () => {

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box>
        <Heading size="md">Gauge</Heading>
      </Box>
      <Box>
        <Heading size="md">Rows</Heading>
        <MeasurementValue />
      </Box>
      <Box>
        <Heading size="md">&</Heading>
      </Box>
      <Box>
        <Heading size="md">Stitches</Heading>
        <MeasurementValue />
      </Box>
    </SimpleGrid>
  );
};

export default GaugeRow;
