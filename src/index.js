import React from 'react';
import ReactDOM from 'react-dom';

import Route from './routes';
import { Provider } from './context';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider>
    <Route />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
