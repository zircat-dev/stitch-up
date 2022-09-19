import React from 'react';

const initialState = {
  werrtrte: {
    id: 'werrtrte',
    size: '',
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
  girmoeimgr: {
    ...initialState.werrtrte
  }
  ease: 0,
};
const MathContext = React.createContext({});

const MathProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useReducer(initialState);
  const updateState = (path, value) => {

  }

  return (
    <MathContext.Provider value={{ state, setState }}>
      {children}
    </MathContext.Provider>
  );
};

const Provider = MathProvider;
const Consumer = MathContext.Consumer;

export default { Provider, Consumer };