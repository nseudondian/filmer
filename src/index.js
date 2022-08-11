import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';

// import ToggleColorMode from './utils/ToggleColorMode';
import ToggleColorModeProvider from './utils/ToggleColorMode'

import App from './components/App';
import store from './app/store';
import './index.css'

const theme = createTheme({})

ReactDOM.render(
 <Provider store = {store}>
   <ToggleColorModeProvider>  
    <BrowserRouter>
    <App />
   </BrowserRouter>
  </ToggleColorModeProvider>
 </Provider>,
  document.getElementById('root'),
);

