import React from 'react';
import {
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Input,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { MathContext } from './MathematicalThingamajiggy';
import { getProp } from '@utils/ramda';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';



export const MeasurementValue = ({ value, update }) => {
  return (
    <NumberInput
      onChange={(valueStr, valueNumber) => update(valueNumber)}
      defaultValue={value}
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

const TextInput = ({ value, update }) => {
  return (
    <Input
      htmlSize={4}
      width="100px"
      value={value}
      onChange={(event) => update(event.target.value)}
    />
  );
}

const fieldTypeMap = {
  text: TextInput,
  number: MeasurementValue
}

const measurementFields = [
  {
    label: 'Size',
    type: 'text',
    path: 'size'
  },
  {
    label: 'Chest Circumference',
    type: 'number',
    path: 'stitches.chest',
  },
  {
    label: 'Shoulder to Hips',
    type: 'number',
    path: 'row.shoulderToHips',
  },
  {
    label: 'Armpit to Wrist',
    type: 'number',
    path: 'row.armpitToWrist',
  },
  {
    label: 'Wrist Circumference',
    type: 'number',
    path: 'stitches.wrist',
  },
  {
    label: 'Armhole Depth',
    type: 'number',
    path: 'stitches.armhole',
  },
]

const editableFields = (updater) => (field, rowItem) => {
  const Field = field?.component ?? fieldTypeMap[field.type];
  return (
    <Field value={getProp(field.path)(rowItem)} update={updater(rowItem.id, field.path)} />
  )
}

const TableDisplay = ({ fields, items, fieldCreator, onDelete }) => {
  return (
    <TableContainer flex="1">
      <Table variant="simple">
        <Thead>
          <Tr>
            {fields.map((field) => (
              <Th key={field.label}>{field.label}</Th>
            ))}
            <Th data-purpose="Space for row controls"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.values(items).map((rowItem) => {
            return (
              <React.Fragment>
                <Tr key={rowItem.id}>
                  {fields.map((field) => {
                    return (
                      <Td key={field.label}>
                        {fieldCreator(field, rowItem)}
                      </Td>
                    );
                  })}
                  <Td>
                    {onDelete && (
                      <IconButton colorScheme="red" variant="outline" icon={<DeleteIcon />} onClick={() => onDelete(rowItem.id)} />
                    )}
                  </Td>
                </Tr>
              </React.Fragment>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export const EditableMeasurements = () => {
  const { state, actions } = React.useContext(MathContext);
  const { items } = state;

  const updater = (id, path) => (newValue) => actions.updateItem({
    id,
    path,
    value: newValue
  })

  const fieldCreator = editableFields(updater);

  return (
    <Box>
      <TableDisplay fields={measurementFields} items={items} fieldCreator={fieldCreator} onDelete={actions.deleteItem} />
      <Button onClick={actions.createItem} leftIcon={<AddIcon />}><span>Create new item</span></Button>
    </Box>
  )
}

export const ResultsView = () => {
  const { results } = React.useContext(MathContext);

  const fieldCreator = (field, rowItem) => (
    <Text>{getProp(field.path)(rowItem)}</Text>
  )

  return (
    <TableDisplay fields={measurementFields} items={results} fieldCreator={fieldCreator} />
  )
}
