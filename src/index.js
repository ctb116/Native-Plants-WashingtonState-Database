import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = (Component) => {
  ReactDOM.render(
        <Component/>,
    document.getElementById('root')
  );
};

render(App);

serviceWorker.unregister();
