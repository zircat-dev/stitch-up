import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid
} from '@chakra-ui/react';

// const RowName = ({ name }: { name: string }) => {
const getPath = (givenPath = '', original) => isString(givenPath) && path(givenPath.split('.'), original)

const Measurement = ({ name, item, onChange }) => {
  return (
    <NumberInput
      onChange={(valueStr, valueNumber) => onChange(name, valueNumber)}
      value={getPath(name, item)}
    />
  )
}

const RowHeader = () => {
  const [state, updateState] = React.useContext(MathContext);
  const makeOnChange = (id) => (path, value) => {
    updateState(`${id}.${path}`, value);
  }

  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {entries.map((item) => {
        const onChange = makeOnChange(item.id);
        return (
          <Entry id={item.size}>
            <RowName name="size" onChange={onChange} item={item}>Size</RowName>
            <MeasurementGroup kind="stitches">
              <Measurement name="stitches.chest" onChange={onChange} item={item}>Chest</Measurement>
              <Measurement name="stitches.wrist" onChange={onChange} item={item}>Wrist</Measurement>
              <Measurement name="stitches.armhole" onChange={onChange} item={item}>Armhole</Measurement>
            </MeasurementGroup>
            <MeasurementGroup kind="rows">
              <Measurement name="row.shoulderToHips">Shoulder to Hips</Measurement>
              <Measurement name="row.armpitToWrist">Armpit to Wrist</Measurement>
            </MeasurementGroup>
          </Entry>
        ))
      }}
    </SimpleGrid>
  )
}

export default RowHeader;