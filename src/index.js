import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';
import Root from './Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <Root />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
