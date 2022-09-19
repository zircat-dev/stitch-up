import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from '@common/Theme';
import MeasurementsRow from '@components/MeasurementsRow';
import RowHeader from '@components/RowHeader';
import GaugeRow from '@components/GaugeRow';
import Ease from '@components/Ease';
import Math from '@components/MathematicalThingamajiggy';

const App = () => (
  <ThemeProvider>
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
  </ThemeProvider>
);

export default App;
