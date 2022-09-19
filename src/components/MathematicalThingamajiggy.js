import React, { useState,createContext } from 'react';

const initialState = {
  small: {
    stitches: {
      chest: 0,
      wrist: 0,
      armhole: 0,
    },
    row: {
      shoulderToHips: 0,
      armpitToWrist: 0,
    },
  },
  ease: 0,
};
const MathContext = createContext({});

const MathProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <MathContext.Provider value={{ state, setState }}>
      {children}
    </MathContext.Provider>
  );
};

const Provider = MathProvider;
const Consumer = MathContext.Consumer;

export default { Provider, Consumer };