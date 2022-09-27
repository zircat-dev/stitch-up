import React, { useState } from 'react';
import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { MathContext } from './MathematicalThingamajiggy';
import { setProp } from '@utils/ramda';

const Ease = () => {
  const { state, actions } = React.useContext(MathContext);

  const sliderValue = state.ease;

  return (
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
  );
};

export default Ease;
