import React from 'react';
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react';

const Ease = () => {
  const [sliderValue, setSliderValue] = React.useState(0);

  return (
    <Slider
      defaultValue={0}
      min={-10}
      max={10}
      step={1}
      onChange={setSliderValue}
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
        {sliderValue}%
      </SliderMark>
      <SliderTrack bg="red.100">
        <Box position="relative" right={10} />
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
}

export default Ease;