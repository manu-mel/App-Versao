import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes/routes';
import theme from './src/styles';
import { AuthProvider } from './src/providers/AuthProvider';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
