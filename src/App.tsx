import React from 'react';
import logo from './logo.svg';
import './App.css';
import MeasurementsRow from './components/MeasurementsRow';
import { ChakraProvider } from "@chakra-ui/react";
import RowHeader from './components/RowHeader';
import GaugeRow from './components/GaugeRow';
import Ease from './components/Ease';
import Math from './components/MathematicalThingamajiggy';

function App() {
  return (
    <ChakraProvider>
      <Math.Provider>
        <div className="App">
          <RowHeader />
          <MeasurementsRow size="small" />
          <GaugeRow />
          <Ease />
        </div>
      </Math.Provider>
    </ChakraProvider>
  );
}

export default App;
