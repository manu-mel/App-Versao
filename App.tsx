import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles';
import { Routes } from './src/routes/routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
