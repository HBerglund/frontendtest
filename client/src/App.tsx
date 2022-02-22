import React from 'react';
import './App.css';
import Router from './Navigation/Router';
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#2D3142',
      },
      secondary: {
        main: '#B0D7FF',
      },
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
