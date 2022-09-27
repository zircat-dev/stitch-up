import { uuid } from '@utils/id';
import { modifyProp, setProp } from '@utils/ramda';
import { identity, omit } from 'ramda';
import React, { useState,createContext, useReducer } from 'react';

// const schema = {
//   size: {
//     type: 'text'
//   },
//   ease: {
//     type: 'range',
//     min
// }

export const doTheCalculamation = (ease, gauge, measurements) => {
  const { rows, stitches } = gauge;

  const stitchesPerCm = stitches / 10;
  const rowsPerCm = rows / 10;

  const chest = stitchesPerCm * (measurements.stitches.chest + ease);
  const wrist = stitchesPerCm * (measurements.stitches.wrist + ease);
  const armhole = stitchesPerCm * (measurements.stitches.armhole + ease);

  const shoulderToHips = rowsPerCm * (measurements.row.shoulderToHips + ease);
  const armpitToWrist = rowsPerCm * (measurements.row.armpitToWrist + ease);

  return {
    size: measurements.size,
    stitches: {
      chest,
      wrist,
      armhole
    },
    row: {
      shoulderToHips,
      armpitToWrist
    }
  }
}

const createItem = (size = 'small') => ({
  id: uuid(),
  size,
  stitches: {
    chest: 100,
    wrist: 20,
    armhole: 30,
  },
  row: {
    shoulderToHips: 55,
    armpitToWrist: 55,
  },
})

const firstItem = createItem('small');

const initialState = {
  items: {
    [firstItem.id]: firstItem,
  },
  
  ease: 0,
  gauge: {
    rows: 10,
    stitches: 16
  }
};

const createReducer = (handlers) => {
  const bindActions = (dispatcher) => Object.keys(handlers).reduce((acc, key) => {
    return {
      ...acc,
      [key]: (payload) => dispatcher({ type: key, payload })
    }
  }, {});

  const reducer = (state, action) => {
    const actionHandler = handlers[action.type] ?? identity;
    return actionHandler(state, action?.payload);
  }

  return {
    reducer,
    bindActions
  }
}

export const MathContext = createContext(initialState);

const { reducer, bindActions } = createReducer({
  createItem: (state) => {
    const newItem = createItem();
    const newId = newItem.id;

    return setProp(`items.${newId}`, newItem)(state);
  },
  deleteItem: (state, id) => {
    return modifyProp('items', omit([id]))(state);
  },

  updateItem: (state, { id, path, value }) => {
    return setProp(`items.${id}.${path}`, value)(state);
  },
  updateEase: (state, ease) => {
    return setProp('ease', ease)(state);
  },
  updateGauge: (state, { type, value }) => {
    return setProp(`gauge.${type}`, value)(state);
  }
})

const MathProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = bindActions(dispatch);

  const { ease, gauge, items } = state;

  const results = React.useMemo(() => {
    return Object.values(items).reduce((acc, rowItem) => {
      return {
        ...acc,
        [rowItem.id]: {
          id: rowItem.id,
          ...doTheCalculamation(ease, gauge, rowItem)
        }
      }
    }, {});
  }, [ease, gauge, items]);

  return (
    <MathContext.Provider value={{ state, results, dispatch, actions }}>
      {children}
    </MathContext.Provider>
  );
};

const Provider = MathProvider;
const Consumer = MathContext.Consumer;

export default { Provider, Consumer };