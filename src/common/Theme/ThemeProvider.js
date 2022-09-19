import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const theme = {
  font: {
    primary: `'IBM Plex Sans', sans-serif`,
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  border: {
    defaultRadius: '7px',
    basic: '1px solid #dbdbdb',
  },
  button: {
    weight: 600,
    defaultSize: 'xlarge',
  },
  mq: {
    sm: 376,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  shadow: {
    primary: '0px 2px 2px 0px rgba(28, 17, 44, .15)',
    secondary: '0px 4px 14px 0px rgba(28, 17, 44, .10)',
  },
  colors: {
    orange: '#EF6C4D',
    grapefruit: '#EB3D2B',
    blueberry: '#5186EC',
    passionfruit: '#6C20CC',
    grape: '#BE8BFF',
    charcoal: '#1B1A29',
    ocean: '#1D2A43',
    greyXXXDark: '#5d646f',
    greyXXDark: '#8B8E94',
    greyXDark: '#B3B6BC',
    grey: '#BEC2CF',
    greyLight: '#D7DAE4',
    greyXLight: '#EDEEEF',
    greyXXLight: '#F6F5FC',
  },
  zIndex: {
    xs: 100,
    sm: 200,
    md: 300,
    lg: 400,
    xl: 500,
    xxl: 999,
  },
};

const GlobalTheme = createGlobalStyle`
  html {
  box-sizing: border-box;
  }
  iframe { display: none; }
  * {
    box-sizing: inherit;
    &:before {
      box-sizing: inherit;
    }
    &:after {
      box-sizing: inherit;
    }
  }
  body {
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
    /* background: #242227; */
    background: white;

  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
        background: #f2f2f2;
        border: none;
        box-shadow: none;
    }
  ::-webkit-scrollbar-thumb {
        background: #dfdfe7;
        border: none;
        box-shadow: none;
    }
  * {
    font-family: 'IBM Plex Sans', sans-serif;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'IBM Plex Sans', sans-serif;
  }
`;

const ThemeProvider = ({ children }) => {
  return (
    <>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <GlobalTheme />
    </>
  );
};

export { ThemeProvider };
