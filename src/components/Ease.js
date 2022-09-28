import React from 'react';
import {
  Box,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { MathContext } from './MathematicalThingamajiggy';

const Ease = () => {
  const { state, actions } = React.useContext(MathContext);

  const sliderValue = state.ease;

  return (
    <React.Fragment>
      <Box>
        <Heading size="md">Ease</Heading>
      </Box>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        step={1}
        onChange={actions.updateEase}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}cm
        </SliderMark>
        <SliderTrack bg="red.100">
          <Box position="relative" right={10} />
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </React.Fragment>
  );
};

export default Ease;
