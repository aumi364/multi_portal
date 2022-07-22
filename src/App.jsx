import './App.css';
import React from 'react';
import RoutesCollection from './routes/router';
import './style/less/App.less';
import { ThemeProvider, Global } from '@emotion/react';
import { theme } from './theme/theme';
import { globalStyle } from './theme/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Global styles={globalStyle} />
        <RoutesCollection />
      </div>
    </ThemeProvider>
  );
}

export default App;

//TODO: "Install prettier"
//TODO: "Install react router and config it"
//
