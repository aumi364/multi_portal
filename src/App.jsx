import './App.css';
import React, { useState } from 'react';
import RoutesCollection from './routes/router';
import '../src/theme/style/App.less';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RoutesCollection />
      </div>
    </ThemeProvider>
  );
}

export default App;

//TODO: "Install prettier"
//TODO: "Install react router and config it"
//
