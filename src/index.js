import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles';
import store from './utils/store';
import { Provider } from 'react-redux';

render(<><GlobalStyles/><Provider store={store}><App/></Provider></> , document.getElementById('root')
);
